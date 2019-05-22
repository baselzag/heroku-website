
const express = require('express');
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const app = express();
const port = process.env.PORT || 3000;

// set views folder
app.set('views', path.join(__dirname, '/src/views'));
// set view engine
app.set('view engine', 'ejs');

// set the public folder
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', mainRoutes);
app.get('/', (req, res) => {
res.send('I am Ahmad and Hello to my heroku website');
});

// const registerRoutes=require('./src/routes/registerRoutes');
// app.use('/register',registerRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});



