import { adicionarDespesasService, despesasDoMesService } from "../services/despesasServices.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post("/despesas/adicionar", async (req, res) =>{
  try {
    const despesas = {
      referencia:req.body.referencia,
      tipo:req.body.tipo,
      valorDespesa:req.body.valorDespesa,
      parcelas:req.body.parcelas,
      dt_despesas:req.body.dt_despesas,
      observacao:req.body.observacao,
      recibo:req.body.recibo,
      idContaOrigem:req.body.idContaOrigem,
      idContaDestino:req.body.idContaDestino
    }
    const resposta = await adicionarDespesasService(despesas);
    res.status(201).send({resposta:despesas});
    
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.post("/despesas/mes", async (req, res) =>{
  try {
    const despesas = {
      inicio:req.body.dt_despesa1,
      fim:req.body.dt_despesa2,
    }
    const resposta = await despesasDoMesService(despesas);
    // Extrair apenas as datas existentes no banco de dados
    const datasExistentes = resposta.map(despesa => despesa.dt_despesas);
    res.status(200).send({ datasExistentes });
    } catch (error) {
      return res.status(400).send({ mensagem: error.message });
    }
})

export default endpoints;
