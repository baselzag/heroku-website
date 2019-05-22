const express=require('express');


const registerRoutes =express.Router();  


registerRoutes.route('/').get((req,res)=>{
    res.render('register')
});


module.exports=registerRoutes;