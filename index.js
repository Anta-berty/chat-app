
const express = require('express'); // Framework sur Node.js basé sur la construction des Applications Web
//const bodyParser = require('body-parser'); //Traducteur pour JSON au niveau du serveur
const mongoose = require('mongoose'); // Lien à la base de données
const cors = require('cors') // Permet d'autorise l'accès à des ressources situées sur une autre origine que le site courant

// create express app
const app = express();

// CORS
app.use(cors()); // Liste des IP autorisés.

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(express.json())

// Configuring the database
const dbConfig = require('./database.config.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to slack like application."});
});

//const routeMessage = require('./routes/message.routes.js')(app);


// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
})