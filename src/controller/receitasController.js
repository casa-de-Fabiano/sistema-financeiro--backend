import { receitasDoMesService, criarReceitaService, atualizarReceitasService, excluirReceitasService } from "../services/receitasService.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post("/receitas/adicionar", async (req, res) => {
  try {
    const receitas = {
      referencia: req.body.referencia,
      tipo: req.body.tipo,
      valorReceita: req.body.valorReceita,
      dataReceita: req.body.dataReceita,
      observacao: req.body.observacao
    }
    const resposta = await criarReceitaService(receitas);
    res.status(201).send({ resposta: receitas })
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.post("/receitas/mes", async (req, res) => {
  try {
    const receitas = {
      inicio: req.body.dt_receita1,
      fim: req.body.dt_receita2
    }
    const resposta = await receitasDoMesService(receitas);

    const formatter = new Intl.DateTimeFormat('pt-BR');

    const respostaFormatada = resposta.map(receitas => ({
      ...receitas,
      referencia: formatter.format(new Date(receitas.referencia)),
      dataReceita: formatter.format(new Date(receitas.dataReceita))
    }));
    res.status(200).send({ resposta: respostaFormatada })
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.delete("/despesas/excluir/:id", async (req, res) =>{
  try {
    const id = req.params.id;
    const resposta = await excluirReceitasService(id);
    res.status(200)
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });    
  }
})

endpoints.put("/receitas/atualizar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const receitas = {
      referencia: req.body.referencia,
      tipo: req.body.tipo,
      valorReceita: req.body.valorReceita,
      dataReceita: req.body.dataReceita,
      observacao: req.body.observacao
    }
    const resposta = await atualizarReceitasService(id, receitas);
    res.status(200).send({ resposta: receitas })
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });

  }
})

export default endpoints;