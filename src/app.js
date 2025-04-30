import express from "express";
import 'dotenv/config.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const porta = process.env.porta;
app.listen(porta, () => console.log(`configuração inicial`));