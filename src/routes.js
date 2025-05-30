import express from "express";

import loginController from "./controller/loginController.js";
import despesasController from "./controller/despesasController.js";
import contasController from "./controller/contasController.js";
import receitasController from "./controller/receitasController.js";
import transferenciaController from "./controller/transferenciasController.js";

export default function addRotas(servidor){
  servidor.use(loginController);
  servidor.use(despesasController);
  servidor.use(contasController);
  servidor.use(receitasController);
  servidor.use(transferenciaController);
}
