var express = require('express');
var router = express.Router();
var controller = require('../controllers/restaurantController')

router.get('/',controller.findRestaurant);
router.get('/:id',controller.findOneRestaurant);
router.post('/',controller.addRestaurant);
router.delete('/:id',controller.deleteRestaurant);
router.put('/:id',controller.updateRestaurant);

module.exports = router;