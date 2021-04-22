const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const {Temperament}=require('../db')

var array=[]
try{
router.get('/', async(req,res)=>{
  var resp=await Temperament.findAll()
  for (let i = 0; i < resp.length; i++) {
    array.push(resp[i].name)
  }
      res.json(array)
})}catch{
  res.send('err')
}


module.exports = router;