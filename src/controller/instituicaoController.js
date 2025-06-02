import { adicionarInstituicaoService, atualizarInstituicaoService, buscarInstituicaoService, deletarInstituicaoService } from "../services/instituicaoService.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post("/instituicao/adicionar", async (req, res) => {
  try {
    const instituicao = {
      nome: req.body.nome,
    }
    const resposta = await adicionarInstituicaoService(instituicao);
    return res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});
endpoints.get("/instituicao/buscar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const resposta = await buscarInstituicaoService(id);
    return res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});
endpoints.put("/instituicao/atualizar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const instituicao = {
      nome: req.body.nome,
    }
    const resposta = await atualizarInstituicaoService(id, instituicao);
    return res.status(200).send({ resposta: resposta });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
});


  export default endpoints;