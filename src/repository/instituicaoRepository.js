import con from "./connect.js";

export async function adicionarInstituicao(instituicao) {
  const comando = `
    INSERT INTO tb_instituicao (nm_instituicao) VALUES (?)
  `;
  const resultado = await con.query(comando, instituicao.nome);
  return resultado[0][0];
};
export async function buscarInstituicao(id) {
  const comando = ` 
    SELECT nm_instituicao FROM tb_instituicao WHERE id_instituicao = ?
  `;
  const resultado = await con.query(comando, id);
  return resultado[0][0];
};
export async function deletarInstituicao(id) {
  const comando = `
    DELETE FROM tb_instituicao WHERE id_instituicao = ?
  `;
  const resultado = await con.query(comando, id);
  return resultado[0];
};
export async function atualizarInstituicao(id, instituicao) {
  const comando = `
    UPDATE tb_instituicao SET nm_instituicao = ? WHERE id_instituicao = ?
  `;
  const resultado = await con.query(comando, [instituicao.nome, id]);
  return resultado.affectedRows;
};