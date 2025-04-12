const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LinkSchema = new Schema({
    id: ObjectId,
    data: String,
    temp_min: Number,
    temp_max: Number,
    descricao:String,
    iconeclima:String
});
const LinkModel=mongoose.model("db_links",LinkSchema);
module.exports=LinkModel;