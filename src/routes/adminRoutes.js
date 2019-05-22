const express=require('express');

const {MongoClient} = require('mongodb'); // the same line unten

// const MongoClient = require('mongodb').MongoClient;

const dbUrl='mongodb+srv://baselzag:BBB123@cluster0-5vmay.mongodb.net/test?retryWrites=true';
const dbName ='herokuwebDB';



const adminRoutes =express.Router();  


adminRoutes.route('/register').get((req,res)=>{  // get to show some data
    res.render('register')
});


adminRoutes.route('/register').post((req,res)=>{
    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(dbUrl,{useNewUrlParser:true});
            const db = client.db(dbName);
            const response = await db.collection('users').insertOne({username:req.body.email, password:req.body.password});
            res.send(response);
            
        } catch (error) {
            res.send(error.message);
            
        }
        client.close();
    }());
});


module.exports=adminRoutes;