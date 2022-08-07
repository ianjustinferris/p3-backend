const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

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
        unique: true
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