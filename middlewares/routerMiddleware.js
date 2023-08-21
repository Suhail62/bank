// module.exports=jwtMiddleWare
const jwt=require('jsonwebtoken')

//middleware 
//  a function with 3 arguments  - req, res, next

 const jwtMiddleware=(req,res,next)=>{

try{
    //access token from request header
    const token=req.headers["access_token"] //incase can't access token  - runtime error (unexpected error-situation based)  - try catch
    
    //validate token - jwt - verify()
    jwt.verify(token,"secretkey123")  // true/false
   
    //if token is verified continue the request
    next()
}
catch{

    res.status(404).json("please login")
}
}
 module.exports=jwtMiddleware