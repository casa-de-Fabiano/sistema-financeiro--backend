import { encontrarNomeDaContaService } from "../services/despesasServices.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get("/conta/nome/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const nome = await encontrarNomeDaContaService(id);
    res.status(200).send(nome);
  } catch (error) {
    res.status(404).send({mensagem:error.message});

  }
})

export default endpoints;