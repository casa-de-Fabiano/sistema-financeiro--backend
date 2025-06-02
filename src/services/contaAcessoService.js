import {criarAcessoDaConta, alterarAcessoDaConta, delearAcessoDaConta, verificarAcessoDaContaComId} from "../repository/contaAcessoRepository.js";
import { validarAcessoDaConta, validarVerificacaoDeAcessoDaConta } from "../validation/contaAcessoValidation.js";

export async function criarAcessoDaContaService(conta){
  await validarAcessoDaConta(conta);
  const resultado = await criarAcessoDaConta(conta);
  return resultado;
};

export async function alterarAcessoDaContaService(id,conta){
  const resultado = await alterarAcessoDaConta(id,conta);
  return resultado;
};

export async function delearAcessoDaContaService(id){
  const resultado = await delearAcessoDaConta(id);
  return resultado;
};

export async function verificarAcessoDaContaComIdService(id){
  await validarVerificacaoDeAcessoDaConta(id);
  const resultado = await verificarAcessoDaContaComId(id);
  return resultado;
};