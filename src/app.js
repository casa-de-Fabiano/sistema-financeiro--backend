import express from "express";
import "dotenv/config.js";
import cors from "cors";
import addRotas from "./routes.js";

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

addRotas(servidor);

const porta = process.env.porta;
servidor.listen(porta, () => console.log(`configuração inicial `));