const { Router } = require('express');
const optionsRouter = require('./optionsRoutes');
const unconfirmedOptionsRouter = require('./unconfirmedOptionsRoutes');

const router = Router();

router.use('/options', optionsRouter)
router.use('/unconfirmedOptions', unconfirmedOptionsRouter)

module.exports = router;