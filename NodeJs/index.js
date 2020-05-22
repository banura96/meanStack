const express = require('express');
const bodyParser=require('body-parser');
const cors =require('cors');

const {mongoose} = require('./db.js');

var employeeContoller = require('../NodeJs/controllers/employeeController');

var app = express();

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.get('/',(req,res)=>{
    res.send('we are on home');
});

app.listen(3000,()=>console.log('sucessfully connected'));



app.use('/employees',employeeContoller);