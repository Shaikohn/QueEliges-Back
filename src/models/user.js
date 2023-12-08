const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    admin: { type: Boolean, default: false },
    options: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Options',
        }
    ],
})
module.exports = mongoose.model('User', userSchema)