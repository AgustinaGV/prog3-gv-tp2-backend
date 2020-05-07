const crudTiendas = (app) => {
    const Tienda = require('../models/tiendas.js');

    //Funciones de endpoints
    //GET - Devuelve todas las tiendas;
    findAllTiendas = (req, res) => {
        Tienda.find((err, tiendas) => {
            if (!err) {
                console.log('GET /tiendas');
                res.send(tiendas);
            } else {
                console.log('ERROR:' + err);
            }
        });
    };
    //POST - Insert a new register in the DB
    addTienda = function (req, res) {
        console.log('POST');
        console.log(req.body);
        var tienda = new Tiendas({
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
                console.log('Error:' + err);
            }
        });

        res.send(Tienda);
    };

    //PUT - Update a register that already exists in the DB
    modifyTiendas = function (req, res) {
        Tienda.findById(req.params.id, function (err, tienda) {
            tienda.id = req.body.id;
            tienda.lat = req.body.lat;
            tienda.lng = req.body.lng;
            tienda.name = req.body.name;
            tienda.description = req.body.description;
            tienda.address = req.body.address;
            tienda.category = req.body.category;
            tienda.horarios = req.body.horarios;
            tienda.type = req.body.type;

            tienda.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('Error:' + err);
                }
                res.send(tienda);
            });
        });
    };

    //DELETE - Delete a register with specified ID
    deleteTienda = function (req, res) {
        Tienda.findById(req.params.id, function (err, tienda) {
            tienda.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('Error:' + err);
                }
                res.send(tienda);
            });
        });
    };
    //URLS
    app.get('/tiendas', findAllTiendas);
    app.post('/tiendas', addTienda);
    app.put('/tiendas/:id', modifyTiendas);
    app.delete('/tiendas/:id', deleteTienda);
}

module.exports = crudTiendas;