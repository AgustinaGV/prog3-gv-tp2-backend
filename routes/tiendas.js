module.exports = function (app) {

const crudTiendas = (app) => {
    var Tienda = require('../models/tiendas.js');

    //Funciones de endpoints
    //GET - Devuelve todas las tiendas;
    findAllTiendas = (req, res) => {
        Tienda.find((err, tiendas) => {
            if (!err) {
                console.log('GET /tiendas');
                res.send(tiendas)
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };


// POST - insert a new registrer in the DB;

addTienda = function (req, res) {

    console.log('POST');
    console.log(req.body);

    var tienda = new Tienda({
        id: req.body.id,
        lat: req.body.lat,
        lng: req.body.lng,
        name: req.body.name,
        veg: req.body.veg,
        type: req.body.type,
        description: req.body.description,
        number: req.body.number,
        horarioAtencion: req.body.horarioAtencion,
        delivery: req.body.delivery,
        redes: req.body.redes

    });

    tienda.save(function (err) {

        if (!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(tienda);
};

// PUT - Update a registrer already exist in the DB;
modificarTiendas = function (req, res) {

    Tienda.findById(req.params.id, function (err, tienda) {

        tienda.id = req.body.id;
        tienda.lat = req.body.lat;
        tienda.lng = req.body.lng;
        tienda.name = req.body.name;
        tienda.veg = req.body.veg;
        tienda.type = req.body.type;
        tienda.description = req.body.description;
        tienda.number = req.body.number;
        tienda.horarioAtencion = req.body.horarioAtencion;
        tienda.delivery = req.body.delivery;
        tienda.redes = req.body.redes;
        tienda.save(function (err) {
            if (!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }

            res.send(tienda);
        });
    });
}

//DELETE - Delete a register with specified ID;
deleteTienda = function (req, res) {

    Tienda.findById(req.params.id, function (err, tienda) {

        tienda.remove(function (err) {
            if (!err) {
                console.log('Removed');
            } else {
                console.log('ERROR: ' + err);
            }

            res.send(tienda);
        })
    });
}

//Rutas de la API, asociadas a una función;
app.get('/tiendas', findAllTiendas);
app.post('/tiendas', addTienda);
app.put('/tiendas/:id', modificarTiendas);
app.delete('/tiendas/:id', deleteTienda);

}

}