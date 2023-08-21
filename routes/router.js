// const express=require('express')
// const logic=require('../controllers/logic')
// const jwtMiddleware = require('../middlewares/routerMiddleware')


// // create an object for Router class express
// const router=new express.Router()

// //

// //register

// router.post('/bankuser/userRegister',logic.register)

// // login
// router.post('/bankuser/user-login',logic.login)

// //user-profile
// router.get('/bankuser/user-profile/:acno',jwtMiddleware,logic.getProfile)

// //user-balance
// router.get('/bankuser/user-balance/:acno',jwtMiddleware,logic.getBalance)

// //money transfer
// router.post('/bankuser/money-transfer',jwtMiddleware,logic.moneyTransfer)

// //transaction history
// router.get('/bankuser/user-history/:acno',jwtMiddleware,logic.history)

// // delete ac
// router.delete('/bankuser/user-delete/:acno',jwtMiddleware,logic.deleteAC)

// // export router
// module.exports=router






const express=require('express')
const logic=require('../controllers/logic')
const jwtMiddleware = require('../middlewares/routerMiddleware')
const { JsonWebTokenError } = require('jsonwebtoken')


//create and object for Router class in express
 
const router=new express.Router()


//register
router.post('/bankuser/userRegister',logic.register)

//login
router.post('/bankuser/user-login',logic.login)

//user-profile
router.get('/bankuser/user-profile/:acno',jwtMiddleware,logic.getProfile)

//user-balance
router.get('/bankuser/user-balance/:acno',jwtMiddleware,logic.getBalance)

//money transfer
router.post('/bankuser/money-transfer',jwtMiddleware,logic.moneyTransfer)

//transaction history
router.get('/bankuser/user-history/:acno',jwtMiddleware,logic.history)

//delete ac
router.delete('/bankuser/user-delete/:acno',jwtMiddleware,logic.deleteAC)

//export router
module.exports=router
