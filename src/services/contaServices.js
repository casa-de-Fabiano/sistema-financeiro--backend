import { encontrarNomeDaConta, atualizarDadosDaConta, deletarConta } from "../repository/contaRepository.js";
import { validarConta } from "../validation/contaValidation.js";

export async function encontrarNomeDaContaService(id) {
  await validarConta(id)
  if (!id) throw new Error("Conta não encontrada"); 
  let resultado = await encontrarNomeDaConta(id);
  return resultado;
};

export async function atualizarDadosDaContaService(id, conta) {
  if (!id) throw new Error("Conta não encontrada");
  let resultado = await atualizarDadosDaConta(id, conta);
  return resultado;
};

export async function deletarContaService(id) {
  let resultado = await deletarConta(id);
  return resultado;  
};