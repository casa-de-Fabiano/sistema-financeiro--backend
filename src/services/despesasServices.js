import { adicionarDespesas, despesasDoMes } from "../repository/despesasRepository.js";

export async function adicionarDespesasService(despesas){
  let resultado = await adicionarDespesas(despesas);
  return resultado;
}

export async function despesasDoMesService(despesas){
  let resultado = await despesasDoMes(despesas);
  return resultado;
}