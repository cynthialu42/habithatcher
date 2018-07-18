const router = require('express').Router();
const habitRoutes = require('./habits');

router.use('/habits', habitRoutes);

module.exports = router;