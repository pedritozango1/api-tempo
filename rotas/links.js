const express=require("express");
const rotasLink =express.Router();
const LinkController=require("./../Controller/LinkController");
rotasLink.get("/",(req,res)=>{
    console.log("Dentro")
    return res.status(200).json({Mesage:"Rota index no ar"});
})
rotasLink.get("/buscarID",(req,res)=>{
    console.log(req.query)
    let link= new LinkController();
    console.log("Passei")
    link.findID(req,res);
})
rotasLink.post("/store",(req,res)=>{
    console.log(req.body)
    let link= new LinkController();
    console.log("Passei")
    link.store(req,res);
   
})
module.exports=rotasLink;