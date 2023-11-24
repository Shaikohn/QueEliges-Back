const express = require('express')
const { getAllOptions, getExistenciales, getAbsurdas, getMas18 } = require('../controllers/optionsControllers')

const router = express.Router()

router.get('/all', getAllOptions)
router.get('/existenciales', getExistenciales)
router.get('/absurdas', getAbsurdas)
router.get('/mas18', getMas18)

module.exports = router 