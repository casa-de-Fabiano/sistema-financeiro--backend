import { encontrarNomeDaConta } from "../global/conta.js";
import { adicionarDespesas, despesasDoMes } from "../repository/despesasRepository.js";
import { validarConta } from "../validation/contaValidation.js";
export async function adicionarDespesasService(despesas){
  if (!despesas){ throw new Error("Despesas não podem ser vazias") }
  let resultado = await adicionarDespesas(despesas);
  return resultado;
}
export async function encontrarNomeDaContaService(id) {
  await validarConta(id)
  if (!id) { throw new Error("Conta não encontrada") }
  let resultado = await encontrarNomeDaConta(id);
  return resultado;
}
export async function despesasDoMesService(despesas){
  if (!despesas){ throw new Error("Despesas não podem ser vazias")}
  let resultado = await despesasDoMes(despesas);
  return resultado;
}