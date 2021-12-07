const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//cookies and pastries schema
const dessertSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    img: String
}, {versionKey: false});

const cakeSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    img: String
}, {versionKey: false});

const Dessert = mongoose.model('dessert', dessertSchema);
const Cake = mongoose.model('cake', cakeSchema);

exports.Dessert = Dessert;
exports.Cake = Cake;