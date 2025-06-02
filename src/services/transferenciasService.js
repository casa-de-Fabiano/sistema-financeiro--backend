import {transferenciasDoMes, alterarArquivoDeTransferencias ,adicionarTransferencias, atualizarTransferencias, excluirTransferencias} from "../repository/transferenciaRepository.js";

export async function adicionarTransferenciasService(transferencias) {
  if(!transferencias) throw new Error("Transferencia não pode estar vazia");
  const resposta = await adicionarTransferencias(transferencias);
  return resposta;
};
export async function transferenciasDoMesService(transferencias) {
  if(!transferencias) throw new Error("Transferencia não pode estar vazia");
  const resposta = await transferenciasDoMes(transferencias);
  return resposta;
};
export async function excluirTransferenciasServices(id) {
  const resposta = await excluirTransferencias(id);
  return resposta;
};
export async function atualizarTransferenciasService(transferencias, id) {
  const resposta = await atualizarTransferencias(transferencias, id);
  return resposta;
};
export async function alterarArquivoTransferenciasServices(id, caminho) {
  let linhasAfetadas = await alterarArquivoDeTransferencias(id, caminho)
  if (linhasAfetadas === 0) throw new Error("Nenhuma linha foi alterada"); 
};