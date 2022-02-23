const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



const port = process.env.PORT || 3030;



app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(bodyParser.json());




mongoose.connect('mongodb+srv://Taoufiq:Alsa2018el@cluster0.atxzc.mongodb.net/MonPermis?retryWrites=true&w=majority' , {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  logger.exit();
});















// _______________import router_______________ 
const AdminRoutes = require("./routes/Admin.router");
const ConducteurRoutes = require("./routes/Conducteur.router");



app.use('/Admin',AdminRoutes);

app.use('/Conducteur',ConducteurRoutes);













module.exports =app;


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  }) 