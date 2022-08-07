const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        require: true,
        min: 3
    },

    description: {
        type: String,
        require: true
    },

    lat: {
        type: Number,
        required: true
    },

    lon: {
        type: Number,
        required: true
    },

    URL: {
        type: Number,
        required: true
    },

    filename: {
        type: Number,
        required: true
    },


},
    { timestamps: true }
)

module.exports = mongoose.model("Pin", PinSchema)