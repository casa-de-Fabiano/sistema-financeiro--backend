import { adicionarTransferenciasService, atualizarTransferenciasService, excluirTransferenciasServices, transferenciasDoMesService } from "../services/transferenciasService.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post("/transferencias/adicionar", async (req, res) => {
  try {
    const transferencias = {
      referencia: req.body.referencia,
      valorTransferencia: req.body.valorTransferencia,
      dataTransferencia: req.body.dataTransferencia,
      observacao: req.body.observacao,
      idContaOrigem: req.body.idContaOrigem,
      idContaDestino: req.body.idContaDestino
    }
    const resposta = await adicionarTransferenciasService(transferencias);
    res.status(201).json({ resposta: transferencias });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.post("/transferencias/mes", async (req, res) => {
  try {
    const transferencias = {
      inicio: req.body.dt_transferencia1,
      fim: req.body.dt_transferencia2
    }
    const resposta = await transferenciasDoMesService(transferencias);
    const formatter = new Intl.DateTimeFormat('pt-BR');

    const respostaFormatada = resposta.map(transferencias => ({
      ...transferencias,
      referencia: formatter.format(new Date(transferencias.referencia)),
      dataTransferencia: formatter.format(new Date(transferencias.dataTransferencia))
    }));


    return res.status(200).json({ resposta: respostaFormatada });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.delete("/transferencias/excluir/id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await excluirTransferenciasServices(id);
    res.status(200);
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.put("/transferencias/alterar/id", async (req, res) => {
  try {
    const id = req.params.id;
    const transferencias = {
      referencia: req.body.referencia,
      valorTransferencia: req.body.valorTransferencia,
      dataTransferencia: req.body.dataTransferencia,
      observacao: req.body.observacao,
      idContaOrigem: req.body.idContaOrigem,
      idContaDestino: req.body.idContaDestino
    }
    const resposta = await atualizarTransferenciasService(id, transferencias);
    res.status(200).send({resposta:transferencias})

  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

export default endpoints;