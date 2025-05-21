import { adicionarDespesasService, despesasDoMesService, encontrarNomeDaContaService } from "../services/despesasServices.js";
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
      dt_despesa1:req.body.dt_despesa1,
      dt_despesa2:req.body.dt_despesa2,
    }
    const resposta = await despesasDoMesService(despesas);
    res.status(200).send({despesas});
    } catch (error) {
      return res.status(400).send({ mensagem: error.message });
    }
})

export default endpoints;
