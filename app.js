const express=require("express");
const rotasLink=require("./rotas/links")
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(rotasLink);
module.exports=app