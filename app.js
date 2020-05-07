var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var cors = require('cors');

//Conexion a base de datos;
mongoose.connect('mongodb+srv://agustina:antitodo3215987@cluster0-m9ebe.mongodb.net/veg?retryWrites=true&w=majority', function(err, res) {

if (err) throw err;
console.log('Conectado a mi base!');
});

//Middelwares (investigar que es esto);

app.use(bodyParser.urlencoded( {extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

routes = require('./routes/tiendas')(app);

app.get('/', function(req, res){
  res.send("Welcome to the machine");

});

server.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo en localhost:3000");
});

module.export = app;

