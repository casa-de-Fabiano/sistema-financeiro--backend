import con from "./connect.js";

export async function criarAcessoDaConta(conta) {
  const comando = `
    INSERT INTO tb_conta_acesso (id_conta, id_instituicao, bt_proprietario)
    VALUES (?, ?, ?)
  `;
  const resultado = await con.query(comando, [conta.idConta, conta.idInstituicao, conta.proprietario]);
  return resultado[0][0];
};
 
export async function verificarAcessoDaContaComId(id) {
  const comando = ` 
    SELECT * FROM tb_conta_acesso 
    WHERE id_conta_acesso = ?`
  const resultado = await con.query(comando, [id]);
  return resultado[0][0];
};

export async function delearAcessoDaConta(id) {
  const comando = ` 
    DELETE FROM tb_conta_acesso
    WHERE id_conta_acesso = ?`
  const resultado = await con.query(comando, [id]);
  return resultado[0];
}

export async function alterarAcessoDaConta(id, conta) {
  const comando = ` 
    UPDATE tb_conta_acesso
    SET id_conta = ?, id_instituicao = ?, bt_proprietario = ?
    WHERE id_conta_acesso = ?`;
  const resultado = await con.query(comando, [conta.idConta, conta.idInstituicao, conta.proprietario, id]);
  return resultado.affectedRows;
}
