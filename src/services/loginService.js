import crypto from 'crypto';
import { cadastrarUsuario, entrarUsuario, verificarUsuario } from "../repository/loginRepository.js";
import { validarCadastroUsuario, validarEntradaUsuario } from "../validation/loginValidations.js";

function criptografarSenhaMD5(senha) {
  return crypto.createHash('md5').update(senha).digest('hex');
}

export async function cadastrarUsuarioService(usuario) {
  validarCadastroUsuario(usuario)
  usuario.senha = criptografarSenhaMD5(usuario.senha);
  let id = await cadastrarUsuario(usuario)
  return id
}

export async function validarEntradaUsuarioService(usuario) {
  validarEntradaUsuario(usuario)
  usuario.senha = criptografarSenhaMD5(usuario.senha);
  const registros = await entrarUsuario(usuario)
  if(!registros) throw new Error ("Email ou senha inválidos!")

  return registros
}

export async function verificarUsuarioService(id) {
  if(!id) throw new Error ("id inválido!")
  
  const usuario = await verificarUsuario(id)
  if(!usuario) throw new Error("Usuário inválido!");
  
}