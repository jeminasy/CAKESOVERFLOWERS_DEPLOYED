const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.MONGODB_URI, connectionParams);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        console.log("Failed to connect to MongoDB");
    }
};

module.exports = connectDB;