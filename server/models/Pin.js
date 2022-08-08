const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        require: true
    },

    //use regex
    thumbnail: {
        type: String,
    },

    description: {
        type: String,
    },

    lat: {
        type: String,
        required: true
    },

    lon: {
        type: String,
        required: true
    },
    //use regex 
    URL: {
        type: String,
        required: true
    },
    //use regex 
    filename: {
        type: String,
        required: true
    },


},
    { timestamps: true }
)

module.exports = mongoose.model("Pin", PinSchema)