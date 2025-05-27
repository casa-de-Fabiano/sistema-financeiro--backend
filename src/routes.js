import express from "express";

import loginController from './controller/loginController.js';
import despesasController from './controller/despesasController.js';
import contasController from './controller/contasController.js';

export default function addRotas(servidor){
  servidor.use(loginController);
  servidor.use(despesasController);
  servidor.use(contasController);
}
