const { Router } = require('express');
const optionsRouter = require('./optionsRoutes');
const unconfirmedOptionsRouter = require('./unconfirmedOptionsRoutes');
const userRouter = require('./userRoutes');

const router = Router();

router.use('/options', optionsRouter)
router.use('/unconfirmedOptions', unconfirmedOptionsRouter)
router.use('/users', userRouter)

module.exports = router;