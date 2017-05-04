var Restaurant = require('../models/restaurant');

findRestaurant = (req,res) => {
  Restaurant.find().then((restaurants)=>{
    res.send(restaurants);
  })
}

findOneRestaurant = (req,res) => {
  Restaurant.findById(req.params.id).then((restaurant)=>{
    res.send(restaurant);
  })
}

addRestaurant = (req,res) => {
  var restaurant = new Restaurant({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_status: req.body.open_status
  })
  restaurant.save((err, restaurant)=>{
    if (err) res.send(err)
    res.send(restaurant)
  })
}

deleteRestaurant = (req,res) => {
  Restaurant.remove({_id:req.params.id}, function(err, restaurant){
    if(err)res.send(err)
    res.send(restaurant)
  })
}

updateRestaurant = (req,res) => {
  Restaurant.findById(req.params.id, function(err,restaurant){
    if (err) res.send(err)
    restaurant.name= req.body.name || restaurant.name;
    restaurant.owner= req.body.owner || restaurant.owner;
    restaurant.address= req.body.address || restaurant.address;
    restaurant.open_status= req.body.open_status || restaurant.open_status;
    restaurant.save((err, restaurant)=>{
      if (err) res.send(err)
      res.send(restaurant)
    })
  })
}

module.exports = {findRestaurant,findOneRestaurant,addRestaurant,deleteRestaurant,updateRestaurant};