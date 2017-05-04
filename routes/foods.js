var express = require('express');
var router = express.Router();
var controller = require('../controllers/foodController')

router.get('/',controller.findFood);
router.get('/:id',controller.findOneFood);
router.post('/',controller.addFood);
router.delete('/:id',controller.deleteFood);
router.put('/:id',controller.updateFood);

module.exports = router;