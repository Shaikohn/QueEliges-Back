const express = require('express')
const { getUnconfirmedOptions, postUnconfirmedOptions, removeUnconfirmedOptions } = require('../controllers/unconfirmedOptionsControllers')


const router = express.Router()

router.get('/all', getUnconfirmedOptions)
router.post('/postUnconfirmed', postUnconfirmedOptions)
router.delete('/deleteUnconfirmed', removeUnconfirmedOptions)

module.exports = router 