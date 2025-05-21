import { encontrarNomeDaConta } from "../global/conta.js";
import { adicionarDespesas, despesasDoMes } from "../repository/despesasRepository.js";

export async function adicionarDespesasService(despesas){
  if (!despesas){ throw new Error("Despesas não podem ser vazias") }
  let resultado = await adicionarDespesas(despesas);
  return resultado;
}
export async function encontrarNomeDaContaService(conta) {
  if (!conta) { throw new Error("Conta não encontrada") }
  let resultado = await encontrarNomeDaConta(conta);
  return resultado;
}
export async function despesasDoMesService(despesas){
  if (!despesas){ throw new Error("Despesas não podem ser vazias")}
  let resultado = await despesasDoMes(despesas);
  return resultado;
}