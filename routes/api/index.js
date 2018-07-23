const router = require("express").Router();
const habitRoutes = require('./habits');
const eggRoutes = require('./eggs');

// NYT routes

router.use('/habits', habitRoutes);
router.use('/eggs', eggRoutes);

module.exports = router;
