const mongoose = require('mongoose');
require('dotenv').config();


function connectDB() {

    //Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;



    connection.once('open', () => {
        console.log('database connected.....');
    }).on('error', (err) => {
        console.log('database error.....');
    })
}

module.exports = connectDB;