const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB',{useNewUrlParser: true}, (err)=>{
    if(!err)
    console.log("Mongodb connection scceed");
    else
    console.log('connect error :'+ JSON.stringify(err,undefined,2));
});

module.exports=mongoose;