// const jwt=require('jsonwebtoken')

// //import model

// const users = require("../models/modelcollection")



// //logic for register

// const register=(req,res)=>{       //body={acno:123,uname='anu,psw:"abc123"}
  
//     //access data from body
//      const acno=req.body.acno
//      const uname=req.body.uname
//      const psw=req.body.psw

//     //check acno is present in users collection
//      users.findOne({acno}).then(user=>{
//         if(user){
//             res.status(400).send("user already exist")
//         }
//         else{
//             //register user - create a new object for user
//          var newUser = new users({
//             acno,
//             uname,
//             psw,
//             balance:0,
//             transaction: []
//          })

//          //save the object in  collection
//          newUser.save()

//          //response send //json() - convert data into json type and send
//          res.status(200).json(newUser)
//         }
//      })

// }
//  //logic for login
//  const login=(req,res)=>{  //body ={acno:1000,psw:"abc123"}
//     const {acno,psw}=req.body
//     users.findOne({acno,psw}).then(user=>{
//         if(user){
//             //generate token
//             var token=jwt.sign({acno},"secretkey123")
//             // user["token"]=token
//             res.status(200).json({
//                 acno:user.acno,
//                 uname:user.uname,
//                 token
//             })

            
//         }
//         else{
//             res.status(401).json("Incorrect acno or password")
//         }
//     })

//  }
//  //logic to get profile datas
// const getProfile=(req,res)=>{
//     //acess acno param from url req
//     const {acno}=req.params
//     users.findOne({acno}).then(user=>{
//         if(user){
//             res.status(200).json({
//                 acno:user.acno,
//                 uname:user.uname
//             })

//         }
//         else{
//             res.status(401).json("user not exist")
//         }
//     })

// }

// const getBalance=(req,res)=>{
//     const{acno}=req.params
//     users.findOne({acno}).then(user=>{
//         if(user){
//             res.status(200).json({uname:user.uname,balance:user.balance})
//         }
//         else{
//             res.status(401).json("user not exist")
//         }
//     }
//         )
// }

// const moneyTransfer=(req,res)=>{
//     //acess all data from body
//     const {fromAcno,toAcno,psw,amount,date}=req.body
//     // convert amount to number
//     var amnt=parseInt(amount)


//     //check from user in db
//     users.findOne({acno:fromAcno,psw}).then(fromUser=>{
//         if(fromUser){
//             //check for user
//             users.findOne({acno:toAcno}).then(toUser=>{
//                 //from balance check
//                 if(toUser){
//                     if (amnt<=fromUser.balance){
//                         fromUser.balance-=amnt
//                         fromUser.transaction.push({type:"DEBIT",amount:amnt,date,user:toUser.uname})
//                         fromUser.save()

//                         toUser.balance+=amnt
//                         toUser.transaction.push({type:"CREDIT",amount:amnt,date,user:fromUser.uname})
//                         toUser.save()

//                         res.status(200).json({message:"transaction sucess"})

//                     }
//                     else{
//                         res.status(401).json({message:"insuffiect balance"})
//                     }

//                 }

//                 else{
//                     res.status(401).json({message:"invalid credit credentials"})
//                 }
//             })

//         }
//         else{
//             res.status(401).json({message:"invalid debit credentials"})
//         }
//     })

// }

// //logic for transaction history
// const history=(req,res)=>{
//     const{acno}=req.params
//     users.findOne({acno}).then(user=>{
//         if(user){
//             res.status(200).json(user.transaction
//                 )

//         }
//         else{
//             res.status(401).json("user not exist")
        
//         }
//     })

// }
//  //logic to delete ac
//  const deleteAC=(req,res)=>{
//     const {acno}=req.params
//     users.deleteOne({acno}).then(users=>{          //deleteCount=0
//         if(users){
//             res.status(200).json("Account Deleted Sucessfully")

//         }
//         else{
//             res.status(401).json("user not exist")
//         }

//     })
//  }

// module.exports={
//     register,login,getProfile,getBalance,moneyTransfer,history,deleteAC
// }


















//import jwt
const jwt=require('jsonwebtoken')

//import model
const users = require("../models/modelcollection")


//logic for register

const register=(req,res)=>{       //body={acno:123,uname='anu,psw:"abc123"}
  
    //access data from body
     const acno=req.body.acno
     const uname=req.body.uname
     const psw=req.body.psw

    //check acno is present in users collection
     users.findOne({acno}).then(user=>{
        if(user){
            res.status(401).send("user already exist")
        }
        else{
            //register user - create a new object for user
         var newUser = new users({
            acno,
            uname,
            psw,
            balance:0,
            transaction: []
         })

         //save the object in  collection
         newUser.save()

         //response send //json() - convert data into json type and send
         res.status(200).json(newUser)
        }
     })

}
// module.exports={
//     register
// }




//logic for login

const login=(req,res)=>{ //body={acno:1000,psw:"abc123"}
    const {acno,psw}=req.body
    users.findOne({acno,psw}).then(user=>{
        if(user){
            //generate token
            var token=jwt.sign({acno},"secretkey123")
            //user["token"]=token

            res.status(200).json({
             acno:user.acno,
             uname:user.uname,
             token
            })
            
            
        }
        else{
            res.status(401).json("incorrect acno or password")
        }
    })    
    }

  // logic to get profile datas

  const getProfile=(req,res)=>{
    //access acno param from url req
    const {acno}=req.params
    users.findOne({acno}).then(user=>{
        if(user){
        res.status(200).json({
            acno:user.acno,
            uname:user.uname
        })
        }
        else{
           res.status(401).json("user not exist")
        }
    })


}

  const  getBalance=(req,res)=>{
    const {acno}=req.params
    users.findOne({acno}).then(user=>{
        if(user){
            res.status(200).json({uname:user.uname,balance:user.balance})
        }
       
        else{
            res.status(401).json("user not exist")
        }
    })
  }

  const moneyTransfer=(req,res)=>{

    //access all datas from body
    const{fromAcno,toAcno,psw,amount,date}=req.body

    //convert amount to number
    var amnt=parseInt(amount)

    //check from user in db
    users.findOne({acno:fromAcno,psw}).then(fromUser=>{
        if(fromUser){
         //check for toUser
         users.findOne({acno:toAcno}).then(toUser=>{
            if(toUser){
               //from balance check
               if(amnt<=fromUser.balance){
                  fromUser.balance-=amnt
                  fromUser.transaction.push({type:"DEBIT",amount:amnt,date,user:toUser.uname})
                  fromUser.save()
                  
                  toUser.balance+=amnt
                  toUser.transaction.push({type:"CREDIT",amount:amnt,date,user:fromUser.uname})
                  toUser.save()
                  res.status(200).json({message:"transaction success"})
               }
               else{
                res.status(401).json({message:"insufficent balance"})
               }
            }
            else{
                res.status(401).json({message:"invalid credit credentials"})
            }
         })
        }
        else{
            res.status(401).json({message:"invalid debit credentials"})
        }
    })
  }

  //logic for transaction history

  const history=(req,res)=>{
    const {acno}=req.params
    users.findOne({acno}).then(user=>{
        if (user){
         res.status(200).json(user.transaction)
        }
        else{
            res.status(401).json("user not exist")
        }
    })
  }

  //logic for delete ac
  const deleteAC=(req,res)=>{
    const {acno}=req.params
    users.deleteOne({acno}).then(user=>{   //delete count=0
     if(user){
     res.status(200).json("Account Deleted Successfully")
     }
     else{
        res.status(401).json("user not exist")
     }
    })
  }
  module.exports = {
    register,login,getProfile,getBalance,moneyTransfer,history,deleteAC
}