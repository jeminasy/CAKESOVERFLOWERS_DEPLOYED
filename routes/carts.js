const express = require('express');
const Cart = require('../models/cart');
const { Dessert, Cake } = require('../models/product');
const { ViewCart } = require('../models/order');

const { protect } = require('../middleware/auth');
const router = express.Router();

router.put('/addcake', protect, async (req, res) => {
    let cart = await Cart.findOne({"email": req.user.email});

    for (let x=0; x < cart.items.length; x++) {
        if(cart.items[x].cakeId == req.body.cakeId) {
            const qty = parseInt(req.body.quantity);
            cart.items[x].quantity += qty;

            cart.save();
            return res.send(cart);
        }
    }

    const newItem = req.body;
    cart.items.push(newItem);
    cart.save();

    res.send(cart);
});

router.put('/add-dessert', protect, async (req, res) => {
    let cart = await Cart.findOne({"email": req.user.email});

    for (let x=0; x < cart.items.length; x++) {
        if(cart.items[x].dessertId == req.body.dessertId) {
            const qty = parseInt(req.body.quantity);
            cart.items[x].quantity += qty;

            cart.save();
            return res.send(cart);
        }
    }

    const newItem = req.body;
    cart.items.push(newItem);
    cart.save();

    res.send(cart);
});

router.put('/addcustom', protect, async (req, res) => {
    let cart = await Cart.findOne({"email": req.user.email});

    const newItem = req.body;
    cart.items.push(newItem);
    cart.save();

    res.send(cart);
});

router.get('/view', protect, async (req, res) => {
    let cart = await Cart.findOne({"email": req.user.email});
    if (!cart) {
        cart = await Cart.create({ "email": req.user.email });
    }

    const oldCart = await ViewCart.findOneAndDelete({"email": req.user.email});

    let newCart = new ViewCart({email: req.user.email});

    if (cart.items.length > 0){
        for (let x=0; x < cart.items.length; x++){
            if(cart.items[x].cakeId){
                console.log("Cake");
                let cake = await Cake.findOne({"_id": cart.items[x].cakeId}).select("-_id");
                console.log(cake);
                newCart.items.push(cake);
                newCart.items[x].quantity = parseInt(cart.items[x].quantity);
                newCart.items[x].productName = cake.name;
                newCart.items[x].price = parseInt(cake.price);
                newCart.items[x].img = cake.img;
                newCart.items[x].amount = newCart.items[x].quantity * newCart.items[x].price;
                newCart.items[x]._id = cart.items[x]._id;
            } else if(cart.items[x].dessertId){
                console.log("Dessert");
                let dessert = await Dessert.findOne({"_id": cart.items[x].dessertId}).select("-_id");
                console.log(dessert);
                newCart.items.push(dessert);
                newCart.items[x].quantity = parseInt(cart.items[x].quantity);
                newCart.items[x].productName = dessert.name;
                newCart.items[x].price = parseInt(dessert.price);
                newCart.items[x].img = dessert.img;
                newCart.items[x].amount = newCart.items[x].quantity * newCart.items[x].price;
                newCart.items[x]._id = cart.items[x]._id;
            } else {
                console.log("Custom Cake");
                console.log(cart.items[x]);
                newCart.items.push(cart.items[x]);
                const qty = parseInt(newCart.items[x].quantity);
                const price = parseInt(newCart.items[x].price);
                newCart.items[x].amount = qty * price;
                newCart.items[x].img = "https://res.cloudinary.com/jemina/image/upload/v1638448540/CakesOverFlowers/random/Untitled_design_ks5kca.png";
                newCart.items[x]._id = cart.items[x]._id;
            }
        }
        newCart.save();
        console.log(newCart.items);
        return res.send(newCart.items);
    } 
    res.send(newCart.items);
});

router.put('/incByOne', protect, async (req, res) => {
    const cart = await Cart.findOne({"email": req.user.email});

    for (let x=0; x<cart.items.length; x++) {
        if(cart.items[x]._id == req.body.item){
            cart.items[x].quantity++;
            cart.save();
            return res.send(cart);
        }
    }
});

router.put('/decByOne', protect, async (req, res) => {
    const cart = await Cart.findOne({"email": req.user.email});

    for (let x=0; x<cart.items.length; x++) {
        if(cart.items[x]._id == req.body.item){
            cart.items[x].quantity--;
            if (cart.items[x].quantity == 0){
                cart.items.splice(x, 1);
            }
            cart.save();
            return res.send(cart);
        }
    }
});

module.exports = router;