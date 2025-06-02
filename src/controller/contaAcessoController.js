import { alterarAcessoDaContaService, criarAcessoDaContaService, delearAcessoDaContaService, verificarAcessoDaContaComIdService } from "../services/contaAcessoService.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post("/contas-acesso/adicionar", async (req, res) => {
  try {
    const conta = {
      idConta: req.body.idConta,
      idInstituicao: req.body.idInstituicao,
      proprietario: req.body.proprietario
    }
    const resposta = await criarAcessoDaContaService(conta);
    return res.status(201).send(resposta);

  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.delete("/contas-acesso/deletar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await delearAcessoDaContaService(id);
    return res.status(200);
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.put("/contas-acesso/atualizar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conta = {
      idConta: req.body.idConta,
      idInstituicao: req.body.idInstituicao,
      proprietario: req.body.proprietario
    }
    const resposta = await alterarAcessoDaContaService(id, conta);
    return res.status(200).send({ mensagem: "Atualização realizada com sucesso." });

  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.get("/contas-acesso/buscar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await verificarAcessoDaContaComIdService(id);
    return res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

export default endpoints;