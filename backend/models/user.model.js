const mongoose = require('mongoose');

// Initiate Mongoose schemas
const Schema = mongoose.Schema;

// user schema, single field - username with validation
const userSchema = new Schema({
    username: {
        type: String,
        require: true, 
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;