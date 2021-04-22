const { Router } = require('express');

var dog = require('./dogs.js')
var temperament= require('./temperament.js')

const router = Router();

 router.use('/temperament', temperament)
 router.use('/dogs', dog)
 

module.exports = router;
