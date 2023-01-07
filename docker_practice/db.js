const mongoose = require('mongoose')
const {db} = require('./configuration')
const {mongo} = require("mongoose");

module.exports.connectDb = () => {
    mongoose.connect(db, {useNewUrlParser: true})

    return mongoose.connection;
};
