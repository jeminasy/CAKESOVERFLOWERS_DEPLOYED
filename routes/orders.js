const express = require('express');
const { Order, ViewCart } = require('../models/order');
const Cart = require('../models/cart');
const { protect } = require('../middleware/auth');
const sendEmail = require('../utils/sendEmail');
const ErrorResponse = require('../utils/errorResponse');

const router = express.Router();

router.get('/', protect, async (req, res) => {
    console.log('Getting orders');
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch(error) {
        console.log(error);
    }
});

router.get('/:id', protect, async (req, res) => {
    try {
        const order = await Order.findOne({"_id": req.params.id});
        res.send(order);
    } catch(error){
        console.log(error);
    }
});

router.post('/', protect, async (req, res) => {
    try {
        const viewCart = await ViewCart.findOne({"email": req.user.email});
        if (!viewCart){
            return new ErrorResponse(
                "Your session has expired, please try again", 404
            );
        }
        if (viewCart.items.length === 0){
            return new ErrorResponse(
                "Your cart is empty. Failed to place an order", 404
            );
        }

        let details = viewCart.items;
        let subtotal=0;
        for (let x=0; x<viewCart.items.length; x++){
            subtotal += viewCart.items[x].amount;
        }

        const fullName = req.user.firstName + " " + req.user.lastName;

        let order = new Order({
            customerId: req.user._id,
            email: req.user.email,
            orderDetails: details,
            total: subtotal,
            dedication: req.body.dedication,
            designDesc: req.body.designDesc,
            remarks: req.body.remarks,
            phoneNumber: req.body.phoneNumber,
            deliverMethod: req.body.deliverMethod,
            street: req.body.street,
            barangay: req.body.barangay,
            city: req.body.city,
            region: req.body.region,
            zipCode: req.body.zipCode,
            downpayment: req.body.downpayment
        });
        order = await order.save();

        var date = new Date;

        const message = `
            <div>
                <table cellpadding="5" cellspacing="2">
                    <tr>
                        <td colspan="4">
                            <table>
                                <tr>
                                    <td>
                                        Created: ${date}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                    <tr>
                        <td>
                            Qty
                        </td>
                        <td>
                            Product
                        </td>
                        <td>
                            Price
                        </td>
                        <td>
                            Amount
                        </td>
                    </tr>
                    ${getItems(order.orderDetails)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <br />
                        <td>
                            Total: ₱ ${order.total}
                        </td>
                    </tr>
                </table>
                <br />
                <p><i>1. Customer Information</i></p>
                <p><b>Full Name: </b> ${fullName}</p>
                <p><b>Phone Number: </b> ${order.phoneNumber}</p>
                <p><b>Email: </b> ${order.email}</p>
                <br />
                <p><i>2. Cake Details</i></p>
                <p><b>Dedication: </b> ${order.dedication}</p>
                <p><b>Design Description: </b> ${order.designDesc}</p>
                <p><b>Remarks: </b> ${order.remarks}</p>
                <p><b>Delivery Method: </b> ${order.deliverMethod}</p>
                <br />
                <p><i>3. Delivery Address</i></p>
                <p><b>Street: </b> ${order.street}</p>
                <p><b>Barangay: </b> ${order.barangay}</p>
                <p><b>City: </b> ${order.city}</p>
                <p><b>Region: </b> ${order.region}</p>
                <p><b>Zip Code: </b> ${order.zipCode}</p>
            </div>
        `;

        try {
            await sendEmail({
                to: process.env.EMAIL_TO,
                subject: "New Order",
                text: message,
            });

            res.status(200).json({success: true, data: "Order sent"});
        } catch(error){
            console.log(error);
            return new ErrorResponse(
                "Failed to place order", 500
            )
        }

        let cart = await Cart.findOne({"email": req.user.email});
        cart.items = [];
        cart.save();

        res.send(order);
    } catch(error){
        console.log(error);
    }
});

function getItems(items){
    let displayItems = ``;
    for (let x=0; x<items.length; x++){
        if (items[x].productName){
            displayItems += `
            <tr>
                <td>
                    ${items[x].quantity}
                </td>
                <td>
                    ${items[x].productName}
                </td>
                <td>
                    ₱ ${items[x].price}
                </td>
                <td>
                    ₱ ${items[x].amount}
                </td>
            </tr>
        `
        } else{
            displayItems += `
            <tr>
                <td>
                    ${items[x].quantity}<br /><br /><br />
                </td>
                <td>
                    ${items[x].baseName}<br />
                    ${items[x].frostingName}<br />
                    ${items[x].addonName}<br />
                    ${items[x].designName}<br />
                </td>
                <td>
                    ₱ ${items[x].price}<br /><br /><br />
                </td>
                <td>
                    ₱ ${items[x].amount}<br /><br /><br />
                </td>
            </tr>
        `
        }
    }
    return displayItems;
}

module.exports = router;