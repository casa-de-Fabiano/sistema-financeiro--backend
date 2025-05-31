import con from "./connect.js";

export async function adicionarTransferencias(transferencias) {
  const comando = `
    INSERT INTO tb_transferencia (dt_referencia, vl_transferencia, dt_transferencia, ds_observacao, id_conta_origem, id_conta_destino)
    VALUES (?,?,?,?,?,?)
  `;
  const resposta = await con.query(comando, [transferencias.referencia, transferencias.valorTransferencia, transferencias.dataTransferencia, transferencias.observacao, transferencias.idContaOrigem, transferencias.idContaDestino]);
  return resposta[0][0];
}

export async function transferenciasDoMes(transferencias) {
  const comando = `
    SELECT dt_referencia, vl_transferencia, dt_transferencia, ds_observacao, file_recibo, id_conta_origem, id_conta_destino 
    FROM tb_transferencia 
    WHERE dt_transferencia BETWEEN ? AND ? ORDER BY dt_transferencia DESC`;
  const resposta = await con.query(comando, [transferencias.inicio, transferencias.fim]);
  return resposta[0];
};

export async function alterarArquivoDeTransferencias(id, caminho){
  const comando = `UPDATE tb_transferencia SET file_recibo = ? WHERE id_transferencia = ?`;
  const resposta = await con.query(comando, [caminho, id]);
  return resposta.affectedRows;
};

export async function excluirTransferencias(id) {
  const comando = `
    DELETE FROM tb_transferencia WHERE id_transferencia = ?
  `;
  const resposta = await con.query(comando, [id]);
  return resposta[0];
};

export async function atualizarTransferencias(id, transferencias) {
  const comando = `
    UPDATE tb_transferencia SET dt_referencia = ?, vl_transferencia = ?, dt_transferencia = ?, ds_observacao = ?, id_conta_origem = ?, id_conta_destino = ? WHERE id_transferencia = ?
  `
  const resposta = await con.query(comando, [transferencias.referencia, transferencias.valorTransferencia, transferencias.dataTransferencia, transferencias.observacao, transferencias.idContaOrigem, transferencias.idContaDestino, id]);
  return resposta.affectedRows;
};