const {Router} = require('express');
const { Auth } = require('../middlewares/auth');
const zod = require('zod'); 
const { user_schema } = require('../db');
//const z = zod();

const userCheck = zod.object({
        email: zod.string().email(), 
        password: zod.string(), 
        firstName : zod.string() , 
        lastName : zod.string() 
}); 



const userRouter = Router();
userRouter.post('/signup',async(req , res )=>{
    
        const {email , password , firstName , lastName} = req.body; 

        const userdata ={
            email , 
            password, 
            firstName, 
            lastName
        }
        const result = await userCheck.safeParseAsync(userdata); 
        
        if(!result.success){
             return res.status(400).json({
                msg: "Check The Schema ",
                //errors : result.error.
            })
        }
        
            try{
                await user_schema.create(userdata);
                res.status(200).json({msg: 'user Created' , userdata})
            }catch{
                res.status(400).json({
                    msg : "addition failed ", 
                })
            }
        
        
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

