import { gerarTokenJwt } from "../auth/jwt.js";
import { Router } from "express";
import { cadastrarUsuarioService, validarEntradaUsuarioService, verificarUsuarioService, deletarUsuarioService, editarNomeDoUsuarioService, editarSenhaDoUsuarioService } from "../services/loginService.js";
import { validarCadastroUsuario } from "../validation/loginValidations.js";
const endpoints = Router();

endpoints.post("/entrar", async (req, res) => {
  try {
    const usuario = {
      nome: req.body.usuario,
      senha: req.body.senha
    };
    const admin = await validarEntradaUsuarioService(usuario);
    const token = gerarTokenJwt(admin);
    return res.send({
      token: token
    });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.post("/criar", async (req, res) => {
  try {
    const usuario = {
      idInstituicao: req.body.idInstituicao,
      nome: req.body.usuario,
      senha: req.body.senha,
      role: req.body.role
    };
    await validarCadastroUsuario(usuario);
    const id = await cadastrarUsuarioService(usuario);
    const token = gerarTokenJwt({ id });
    return res.status(200).send({
      token: token
    });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.get("/consultar/usuario:id", async (req, res) => {
  try {
    const id = req.query.id;
    const usuario = await verificarUsuarioService(id);
    return res.status(200).send({ usuario: id });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.delete("/usuario/deletar/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let resultado = await deletarUsuarioService(id);
    return res.status(204);
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.put("/usuario/editar/nome/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const nome = req.body.nome;
    const resultado = await editarNomeDoUsuarioService(id,nome);
    return res.status(200).send({resultado:resultado });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

endpoints.put("/usuario/editar/senha/:id", async (req,res)=>{
  try {
    const id = req.params.id;
    const senha = req.body.senha;
    const resultado = await editarSenhaDoUsuarioService(id,senha);  
    return res.status(200).send({resultado:resultado });
  } catch (error) {
    return res.status(400).send({ mensagem: error.message });
  }
})

export default endpoints;