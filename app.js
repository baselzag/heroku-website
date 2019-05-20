const express=require('express');
const app=express();
const port= process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('I am Basel and hello to my heroku website');
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}!`);
})