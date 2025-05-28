import { adicionarDespesas, despesasDoMes, excluirDespesas, atualizarDespesas } from "../repository/despesasRepository.js";
export async function adicionarDespesasService(despesas) {
  if (!despesas) { throw new Error("Despesas não podem ser vazias") }
  let resultado = await adicionarDespesas(despesas);
  return resultado;
}
export async function despesasDoMesService(despesas) {
  if (!despesas) { throw new Error("Despesas não podem ser vazias") }
  let resultado = await despesasDoMes(despesas);
  return resultado;
}
export async function excluirDespesasService(id) {
  let resultado = await excluirDespesas(id);
  return resultado;
}
export async function atualizarDespesasService(despesas, id) {
  if (!despesas) throw new Error("Despesas não podem ser vazias")

  let resultado = await atualizarDespesas(despesas, id);
  return resultado;

}