import con from "./connect.js";

// esse endpoint irá ser usado para encontrar o nome da conta, na hora de criar uma nova despesa
export async function encontrarNomeDaConta(id) {
  const comando = `
    select nm_conta from tb_conta
        where id_conta = ?;`;
  const resposta = await con.query(comando, [id])
  return resposta[0][0]
};

export async function atualizarDadosDaConta(id, conta){
  const comando = `
    UPDATE tb_conta
    SET nm_conta = ?, bt_cnpj = ?, bt_cc = ?
    WHERE id_conta = ?
  `;
  const resposta = await con.query(comando, [conta.nome, conta.cnpj, conta.cc, id]);
  return resposta[0].affectedRows;
};

export async function deletarConta(id) {
  const comando = `
    delete from tb_conta
    where id_conta = ?;
  `;
  const resposta = await con.query(comando, [id]);
  return resposta[0];
  
};