var Food = require('../models/food');

findFood = (req, res) => {
  Food.find().then((foods)=>{
    res.send(foods);
  })
}

findOneFood = (req, res) => {
  Food.findById(req.params.id).then((food)=>{
    res.send(food);
  })
}

addFood = (req, res) => {
  var food = new Food({
    name: req.body.name,
    price: req.body.price,
    expired_date: new Date(req.body.expired_date)
  })
  food.save((err, food)=>{
    if (err) res.send(err)
    res.send(food)
  })
}

deleteFood = (req, res) => {
  Food.remove({_id:req.params.id}, function(err, food){
    if(err)res.send(err)
    res.send(food)
  })
}

updateFood = (req, res) => {
  Food.findById(req.params.id, function(err,food){
    if (err) res.send(err)
    food.name= req.body.name || food.name;
    food.price= req.body.price || food.price;
    food.expired_date= new Date(req.body.expired_date) || Date(food.expired_date);
    food.save((err, food)=>{
      if (err) res.send(err)
      res.send(food)
    })
  })
}

module.exports = {findFood,findOneFood,addFood,deleteFood,updateFood};