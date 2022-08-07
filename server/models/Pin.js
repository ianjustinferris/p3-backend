const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    // id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     autoIncrement: true,
    //     primaryKey: true
    // },

    username: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        require: true,
        min: 3
    },

    //use regex to restrict file types?
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
    //use regex to restrict file types?
    filename: {
        type: String,
        required: true
    },


},
    { timestamps: true }
)

module.exports = mongoose.model("Pin", PinSchema)