import { criarReceita, receitasDoMes, excluirReceitas, atualizarReceitas } from "../repository/receitasRepository.js";

export async function criarReceitaService(receitas) {
  if(!receitas) throw new Error("Receita não pode ser vazia");
  const resultado = await criarReceita(receitas);
  return resultado; 
};
export async function receitasDoMesService(receitas) {
  if(!receitas) throw new Error("Receita não pode ser vazia");
  const resultado = await receitasDoMes(receitas);
  return resultado;
};
export async function excluirReceitasService(id) {
  const resultado = await excluirReceitas(id);
  return resultado;
};
export async function atualizarReceitasService(receitas, id) {  
  const resultado = await atualizarReceitas(receitas, id);
  return resultado;
};