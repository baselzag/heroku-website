const express=require('express');


const mainRoutes =express.Router();  


mainRoutes.route('/').get((req,res)=>{
    res.render('index')
});


module.exports=mainRoutes;