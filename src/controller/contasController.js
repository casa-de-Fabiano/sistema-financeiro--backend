import { encontrarNomeDaContaService, deletarContaService, atualizarDadosDaContaService } from "../services/contaServices.js";
import { Router } from "express";

const endpoints = Router();

// esse endpoint irá ser usado para encontrar o nome da conta, na hora de criar uma nova despesa, transferencia ou receita 
endpoints.get("/conta/nome/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const nome = await encontrarNomeDaContaService(id);
    return res.status(200).send(nome);
  } catch (error) {
    return res.status(404).send({ mensagem: error.message });
  }
});

endpoints.delete("/conta/deletar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletar = await deletarContaService(id);
    return res.status(200)
  } catch (error) {
    return res.status(404).send({ mensagem: error.message });
  }
});

endpoints.put("/conta/atualizar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conta = {
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      cc: req.body.cc
    }
    const resposta = await atualizarDadosDaContaService(id, conta);
    return res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(404).send({ mensagem: error.message });
  }
});

export default endpoints;