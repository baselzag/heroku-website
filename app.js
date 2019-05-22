
const express = require('express');
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const app = express();
const port = process.env.PORT || 3000;


//set express urlencoder middelwear
app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 


// set views folder
app.set('views', path.join(__dirname, '/src/views'));
// set view engine
app.set('view engine', 'ejs');

// set the public folder
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', mainRoutes);  // we import the module mainRoutes
app.use('/admin',adminRoutes); // /admin then go to adminRoutes file and there you must to go to register file(/admin/register)

// const registerRoutes=require('./src/routes/registerRoutes');
// app.use('/register',registerRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});



