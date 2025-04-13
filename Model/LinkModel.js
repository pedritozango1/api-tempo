const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LinkSchema = new Schema({
    id: ObjectId,
    cidade: String,
    pais: String,
    iconeClima: String,
    descricao: String,
    temperatura: Number,
    temp_max: Number,
    temp_min: Number,
    sensacao: Number,
    humidade: Number,
    pressao: Number,
    vento: Number,
    nuvens: Number,
    timezone: Number,
    dataHora: Number,
    longitude: Number,
    latitude: Number,
    previsoes: [{
        data: String,
        temp_min: Number,
        temp_max: Number,
        descricao: String,
        iconeclima: String
    }]

});
const LinkModel=mongoose.model("db_links",LinkSchema);
module.exports=LinkModel;