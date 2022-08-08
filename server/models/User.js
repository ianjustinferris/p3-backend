const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
        validate: [validateEmail, 'Please put in a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please put in a valid email address']
    },

    password: {
        type: String,
        require: true,
        min: 8
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)