const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
        
    },
    {
        email: String,
        required: true,
        unique: true,
        // validate: validator function goes here 
    }
);
const User = model('user', userSchema);
module.exports = User;