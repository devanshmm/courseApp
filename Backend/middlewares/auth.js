const express = require('express'); 
const app = express(); 

app.use(express.json()); 

const Auth = function (req , res , next) {
    console.log( ' this is middle shit bro ')
    next();
}

module.exports={
    Auth
}