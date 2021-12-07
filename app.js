require('dotenv').config({path: "./config.env"});
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const errorHandler = require('./middleware/error');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

connectDB();

const auth = require('./routes/auth');
const custom = require('./routes/customs');
const product = require('./routes/products');
const profile = require('./routes/profile');
const cart = require('./routes/carts');
const order = require('./routes/orders');

app.use('/auth', auth);
app.use('/custom', custom);
app.use('/product', product);
app.use('/me', profile);
app.use('/cart', cart);
app.use('/order', order);

app.use(errorHandler);

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else{
    app.get('/', (req, res) => {
        res.send("Api running");
    });
}

const port = process.env.PORT || 5000;

const server = app.listen(port, (err) => {
    if(!err){
        console.log(`Application is running port ${port}...`);
    }else {
        console.log('Failed to run application :c');
    }
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
});