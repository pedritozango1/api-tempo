const start=require("./mangoDBConnect");
class Loader{
    startDB(){
        start();
    }
}
module.exports=Loader;