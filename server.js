require("dotenv").config();
const app=require("./app");
const Loader=require("./Loaders")
let ld=new Loader();
ld.startDB();
app.listen(process.env.PORT,(erro)=>{
    if(!erro)
        console.log("Conectado com exito")
});