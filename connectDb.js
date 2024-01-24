const mongoose = require('mongoose');
require('dotenv').config();

const dbConn = process.env.mongo;
const connectToDatabase = async function () {
    console.log(dbConn)
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.y22q1ja.mongodb.net/data');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase