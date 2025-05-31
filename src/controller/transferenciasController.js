import multer from "multer";
import { adicionarTransferenciasService, alterarArquivoTransferenciasServices ,atualizarTransferenciasService, excluirTransferenciasServices, transferenciasDoMesService } from "../services/transferenciasService.js";
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
    return res.status(201).send({ resposta: transferencias });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.post("/transferencias/mes", async (req, res) => {
  try {
    const transferencias = {
      inicio: req.body.inicio,
      fim: req.body.fim
    }
    const resposta = await transferenciasDoMesService(transferencias);
    const formatter = new Intl.DateTimeFormat('pt-BR');

    const respostaFormatada = resposta.map(transferencias => ({
      ...transferencias,
      dt_referencia: formatter.format(new Date(transferencias.dt_referencia)),
      dt_transferencia: formatter.format(new Date(transferencias.dt_transferencia))
    }));
    
    return res.status(200).send({ resposta: respostaFormatada });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.delete("/transferencias/excluir/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await excluirTransferenciasServices(id);
    return res.status(200);
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.put("/transferencias/alterar/:id", async (req, res) => {
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
    return res.status(200).send({resposta:transferencias})

  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

let uploadFile = multer ({dest: "./storage/reciboTransferencias"});
endpoints.put("/transferencias/atualizar/:id/recibo", uploadFile.single("recibo"), async (req, res) => {
  try {
    const id = req.params.id;
    const caminhoFile = req.file.path;
    await alterarArquivoTransferenciasServices(id, caminhoFile);
    res.status(204).send()
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

export default endpoints;