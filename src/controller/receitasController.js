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
      observacao: req.body.observacao,
      idConta: req.body.idConta
    }
    const resposta = await criarReceitaService(receitas);
    return res.status(201).send({ resposta: receitas })
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.post("/receitas/mes", async (req, res) => {
  try {
    const receitas = {
      inicio: req.body.dt_receita1,
      fim: req.body.dt_receita2
    }
    const resposta = await receitasDoMesService(receitas);

    console.log("Dados brutos recebidos:", resposta);

    const formatter = new Intl.DateTimeFormat('pt-BR');

    const respostaFormatada = resposta.map(receitas => {
      const referenciaDate = new Date(receitas.dt_referencia);
      const dataReceitaDate = new Date(receitas.dt_receita);

      const referenciaFormatted = isNaN(referenciaDate) ? receitas.dt_referencia : formatter.format(referenciaDate);
      const dataReceitaFormatted = isNaN(dataReceitaDate) ? receitas.dt_receita : formatter.format(dataReceitaDate);

      return {
        ...receitas,
        referencia: referenciaFormatted,
        dataReceita: dataReceitaFormatted
      };
    });
    return res.status(200).send({ resposta: respostaFormatada })
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

endpoints.delete("/despesas/excluir/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await excluirReceitasService(id);
    res.status(200)
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});

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
});

export default endpoints;