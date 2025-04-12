const LinkModel = require("./../Model/LinkModel");

class LinkController {
    
    async store(req,res) {
        try{
            console.log(req.body)
            const Link = await LinkModel.create(req.body);
            return res.status(200).json(Link);  
        }catch(erro){
            console.log("erro: "+erro);
        }
    }
    async findID(req,res) {
        try {
            let {id}=req.query;
            const Link = await LinkModel.findById(id);
            return res.status(200).json(Link);
        } catch (error) {
            console.log("erro: "+erro);   
        }
        
    }
}
module.exports=LinkController;
