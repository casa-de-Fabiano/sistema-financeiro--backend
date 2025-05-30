import { adicionarDespesasService, despesasDoMesService, excluirDespesasService, atualizarDespesasService, alterarArquivoDespesasService } from "../services/despesasServices.js";
import { Router } from "express";

import multer from "multer";

const endpoints = Router();

endpoints.post("/despesas/adicionar", async (req, res) => {
  try {
    const despesas = {
      referencia: req.body.referencia,
      tipo: req.body.tipo,
      valorDespesa: req.body.valorDespesa,
      parcelas: req.body.parcelas,
      dt_despesas: req.body.dt_despesas,
      observacao: req.body.observacao,
      recibo: req.body.recibo,
      idContaOrigem: req.body.idContaOrigem,
      idContaDestino: req.body.idContaDestino
    }
    const resposta = await adicionarDespesasService(despesas);
    res.status(201).send({ resposta: despesas });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.post("/despesas/mes", async (req, res) => {
  try {
    const despesas = {
      inicio: req.body.dt_despesa1,
      fim: req.body.dt_despesa2,
    }
    const resposta = await despesasDoMesService(despesas);

    const formatter = new Intl.DateTimeFormat('pt-BR');

    const respostaFormatada = resposta.map(despesa => ({
      ...despesa,
      dt_referencia: formatter.format(new Date(despesa.dt_referencia)),
      dt_despesas: formatter.format(new Date(despesa.dt_despesas))
    }));

    res.status(200).send({ resposta: respostaFormatada });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.delete("/despesas/excluir/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await excluirDespesasService(id);
    res.status(200);
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.put("/despesas/atualizar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const despesas = {
      referencia: req.body.referencia,
      tipo: req.body.tipo,
      valorDespesa: req.body.valorDespesa,
      parcelas: req.body.parcelas,
      dt_despesas: req.body.dt_despesas,
      observacao: req.body.observacao,
      idContaOrigem: req.body.idContaOrigem,
      idContaDestino: req.body.idContaDestino
    }
    const resposta = await atualizarDespesasService(id, despesas);
    res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }

})

let uploadFile = multer({ dest: './storage/reciboDespesas' });
endpoints.put("/despesas/atualizar/:id/recibo", uploadFile.single('recibo'), async (req, res) => {
  try {
    const id = req.params.id;
    const caminhoFile = req.file.path;

    await alterarArquivoDespesasService(id, caminhoFile);

    res.status(204).send()
  }
  catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

export default endpoints;