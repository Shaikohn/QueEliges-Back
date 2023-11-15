const mongoose = require('mongoose')

const optionsSchema = mongoose.Schema({
    firstOption: { 
        timesSelected: {type: Number},
        text: {type: String}
    },
    secondOption: { 
        timesSelected: {type: Number},
        text: {type: String}
    },
    type: { type: String },
})
module.exports = mongoose.model('Options', optionsSchema)