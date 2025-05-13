import express from "express";

const app = express();
app.use(express.json())

import loginController from './controller/loginController.js'

export default function addRotas(servidor){
  servidor.use(loginController)
}