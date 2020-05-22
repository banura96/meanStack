const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{
    name:String,
    position:String,
    office:String,
    salary:Number
});

module.exports={Employee};