const router = require('express').Router();
const habitsController = require('../../controllers/habitsController');

router.route('/')
    .get(habitsController.findAll)
    .post(habitsController.create);


router
    .route('/:id')
    .get(habitsController.findById)
    .put(habitsController.update)
    .delete(habitsController.remove);

module.exports = router;