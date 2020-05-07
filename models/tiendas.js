var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tiendasSchema = new Schema({
    id:{type: String},
    lat:{type: String},
    lng:{type: String},
    name:{type: String},
    veg:{type: String},
    type:{type: String},
    description:{type: String},
    number:{type: String},
    horarioAtencion:{type: String},
    delivery:{type: String},
    redes:{type: String}
});

module.exports = mongoose.model('Tienda', tiendasSchema, 'tiendas' );