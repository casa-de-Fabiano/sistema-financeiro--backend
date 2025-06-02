import {adicionarInstituicao, atualizarInstituicao, buscarInstituicao, deletarInstituicao} from "../repository/instituicaoRepository.js";

export async function adicionarInstituicaoService(instituicao) {
  if (!instituicao) throw new Error("Instituição inválida");
  let resposta = await adicionarInstituicao(instituicao);
  return resposta;
};
export async function atualizarInstituicaoService(id,instituicao) {
  if (!instituicao) throw new Error("Instituição inválida");
  let resposta = await atualizarInstituicao(id, instituicao);
  return resposta
};
export async function buscarInstituicaoService(id) {
  if (!id) throw new Error("ID inválido");
  let resposta = await buscarInstituicao(id);
  return resposta;
};
export async function deletarInstituicaoService(id) {
  let resposta = await deletarInstituicao(id);
  return resposta;
};