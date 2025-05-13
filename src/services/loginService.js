import { cadastrarUsuario, entrarUsuario, verificarUsuario } from "../repository/loginRepository.js";
import { validarCadastroUsuario, validarEntradaUsuario } from "../validation/loginValidations.js";

export async function cadastrarUsuarioService(usuario) {
  validarCadastroUsuario(usuario)
  let id = await cadastrarUsuario(usuario)
  return id
}

export async function validarEntradaUsuarioService(usuario) {
  validarEntradaUsuario(usuario)
  const registros = await entrarUsuario(usuario)
  if(!registros) throw new Error ("Email ou senha inválidos!")

  return registros
}

export async function verificarUsuarioService(id) {
  if(!id) throw new Error ("id inválido!")
  
  const usuario = await verificarUsuario(id)
  if(!usuario) throw new Error("Usuário inválido!");
  
}