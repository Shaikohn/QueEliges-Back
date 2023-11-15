const mongoose = require('mongoose')

const unconfirmedOptionsSchema = mongoose.Schema({
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
module.exports = mongoose.model('UnconfirmedOptions', unconfirmedOptionsSchema)