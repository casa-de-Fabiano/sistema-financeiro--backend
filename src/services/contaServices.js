import { encontrarNomeDaConta } from "../repository/contaRepository.js";
import { validarConta } from "../validation/contaValidation.js";

export async function encontrarNomeDaContaService(id) {
  await validarConta(id)
  if (!id) { throw new Error("Conta não encontrada") }
  let resultado = await encontrarNomeDaConta(id);
  return resultado;
};