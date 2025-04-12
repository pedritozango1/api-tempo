require("dotenv").config();
const mongoose = require("mongoose");

async function mongooser() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB conectado com sucesso!");
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err.message);
    }
}

module.exports = mongooser;