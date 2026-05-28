const {Router} = require('express');

const courseRouter = Router();

courseRouter.post('/buy' ,(req, res)=>{
    res.json({
        message:" course baught "
    })
} )
courseRouter.get('/preview' ,(req, res)=>{
    res.json({
        message:" saare courses  "
    })
} )

module.exports={
    courseRouter:courseRouter
}
