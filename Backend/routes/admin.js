const {Router} = require('express'); 
const { admin_schema } = require('../db'); 

const adminRoutes = Router(); 



adminRoutes.post('/signup',(req , res )=>{
    res.json({
        message: "User signed up successfully"
    })
} )

adminRoutes.post('/signin', (req,res)=>{
    res.json({
        message:'signin Endpoint '
    })
})
adminRoutes.post('/course', (req,res)=>{
    res.json({
        message:'course created  '
    })
})
adminRoutes.put('/course', (req,res)=>{
    res.json({
        message:'change something its  a put req  '
    })
})
adminRoutes.get('/course', (req,res)=>{
    res.json({
        message:'these are all the courses   '
    })
})

module.exports = adminRoutes;