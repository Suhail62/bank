const mongoose=require('mongoose')

// create model for collection
//schema feilds and values of collection



//users
const users=new mongoose.model("users",{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transaction:[]

})
module.exports=users