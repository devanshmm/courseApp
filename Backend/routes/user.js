const {Router} = require('express');
const { Auth } = require('../middlewares/auth');

const userRouter = Router();
userRouter.post('/signup',(req , res )=>{
    res.json({
        message: "User signed up successfully"
    })
} )

userRouter.post('/signin', (req,res)=>{
    res.json({
        message:'signin Endpoint '
    })
})
userRouter.get('/purchases' ,Auth ,  (req,res )=>{
    res.json({
        message:'these are ypur courses  '
    })
})

module.exports={
    userRouter : userRouter
}

