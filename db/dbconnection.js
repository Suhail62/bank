// db server integration
const mongoose=require('mongoose')

// connect with mongodb atlas
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("____mongodb Atlas Connect.....");
}).catch(()=>{
    console.log(".....mongodb connection error..");
})

