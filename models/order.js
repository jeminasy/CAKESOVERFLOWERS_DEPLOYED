const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let itemSchema = new Schema({
    quantity: Number,
    productName: String,
    baseName: String,
    frostingName: String,
    addonName: String,
    designName: String,
    price: Number,
    img: String,
    amount: Number
});

const cartSchema = new Schema({
    email: String,
    items: {
        type: [itemSchema],
        default: []
    },
    createdAt: { type: Date, expires: '30m', default: Date.now }
});

const orderSchema = new Schema({
    customerId: String,
    email: String,
    orderDetails: [itemSchema],
    total: Number,
    dedication: String,
    designDesc: String,
    designSample: {
        data: Buffer,
        contentType: String
    },
    remarks: String,
    phoneNumber: String,
    deliverMethod: String,
    street: String,
    barangay: String,
    city: String,
    region: String,
    zipCode: String,
    downpayment: {
        data: Buffer,
        contentType: String
    }
});

const ViewCart = mongoose.model('viewcart', cartSchema);
const Order = mongoose.model('order', orderSchema);

exports.ViewCart = ViewCart;
exports.Order = Order;