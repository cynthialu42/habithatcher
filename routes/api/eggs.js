const router = require('express').Router();
const eggsController = require('../../controllers/eggsController');

router.route('/')
    .get(eggsController.findAll);

router.route('/:id')
    .get(eggsController.findOne);


module.exports = router;