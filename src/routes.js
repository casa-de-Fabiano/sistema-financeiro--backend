import express from "express";

import loginController from './controller/loginController.js';
import despesasController from './controller/despesasController.js';

export default function addRotas(servidor){
  servidor.use(loginController);
  servidor.use(despesasController);
}
