const express=     require('express');
const path=        require("path");
const bodyParser=  require('body-parser');
const cors=        require('cors');
const passport=    require('passport');
const mongoose=    require('mongoose');
const nodemailer=   require("nodemailer");

//Configuring the database
 const config= require('./config/db.config');
 mongoose.connect(config.database);

 //Database connections check
 mongoose.connection.on('connected', function(){
     console.log("Successfully connect to the database :", config.database)
 });
 mongoose.connection.on('error', function(){
     console.log("Could not connect to the database, Exist now...");
     process.exit()
 })

//create express
const app = express();

//Route settings
const users = require('./app/routes/user.routes');
const media = require('./app/routes/media.routes');
 
//CORS Middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//parse requests of content-type - application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: true}))
 
//For passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//app.use("/upload",express.static('upload')) // This will if we want to set the file path in product controller.js file
app.use(express.static('upload'))

app.use('/users', users);
app.use('/media', media);

//Index route 
//For development
// app.get('/',function(req, res){
//     res.send({"message":"Welcome to the MEAN Authentications Applications"});
// });

// For production
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

//Start server
//const port= 3000;
const port= process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Server start on port", port)
});
