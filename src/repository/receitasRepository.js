import con from "./connect.js";

export async function criarReceita(receitas) {
  const comando = `
    INSERT INTO tb_receita (dt_referencia, ds_tipo, vl_receita, dt_receita,ds_observacao,id_conta)
      VALUES(?,?,?,?,?,?);  
  `
  const resposta = await con.query(comando, [receitas.referencia, receitas.tipo, receitas.valorReceita, receitas.dataReceita, receitas.observacao, receitas.idConta]);
  return resposta[0][0];
}

export async function receitasDoMes(receitas) {
  const comando = `
    SELECT dt_referencia, ds_tipo, vl_receita, dt_receita,ds_observacao,id_conta
    FROM tb_receita WHERE dt_receita BETWEEN ? AND ?
  `;
  const resposta = await con.query(comando, [receitas.inicio, receitas.fim]);
  return resposta[0];
}

export async function excluirReceitas(id) {
  const comando = `
    DELETE FROM tb_receitas WHERE id_receita = ?
  `;
  const resposta = await con.query(comando, [id]);
  return resposta[0];
}

export async function atualizarReceitas(id, despesas) {
  const comando = `
    UPDATE tb_receitas
    SET dt_referencia = ?, ds_tipo = ?, vl_receita = ?, dt_receita = ?, ds_observacao = ?, id_conta = ? WHERE id_receita = ?
    `;
  const resposta = await con.query(comando, [despesas.referencia, despesas.tipo, despesas.valorReceita, despesas.dataReceita, despesas.observacao, despesas.idConta, id]);
  return resposta.affectedRows;
}