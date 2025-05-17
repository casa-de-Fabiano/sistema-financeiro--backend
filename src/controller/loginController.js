import { gerarTokenJwt } from "../auth/jwt.js";
import { Router } from "express";
import { cadastrarUsuarioService, validarEntradaUsuarioService, verificarUsuarioService } from "../services/loginService.js";
import { validarCadastroUsuario } from "../validation/loginValidations.js";
const endpoints = Router();

endpoints.post('/entrar', async (req, resp) => {
  try {
    const usuario = {
      nome: req.body.usuario,
      senha: req.body.senha
    };
    const admin = await validarEntradaUsuarioService(usuario);
    const token = gerarTokenJwt(admin);
    return resp.send({
      token:token
    });
  } catch (error) {
    return resp.status(400).send({ mensagem: error.message });
  }
})

endpoints.post('/criar', async (req, resp) => {
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
    return resp.send({
      token: token
    });
  } catch (error) {
    return resp.status(400).send({ mensagem: error.message });
  }
})

endpoints.get('/consultar/usuario', async (req,resp)=>{
  try {
    const id = req.query.id;
    const usuario = await verificarUsuarioService(id);
    return resp.send({usuario:id});
    } catch (error) {
      return resp.status(400).send({ mensagem: error.message });
      }
})
export default endpoints;
