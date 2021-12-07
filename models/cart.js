const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    quantity: {
        type: Number,
        default: 1
    },
    cakeId: String,
    dessertId: String,
    baseName: String,
    frostingName: String,
    addonName: String,
    designName: String,
    price: Number
});

const cartSchema = new Schema({
    email: {
        type: String,
        required: true, 
        unique: true  
    },
    items: {
        type: [itemSchema],
        default: []
    }
}, {timestamps: true});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;