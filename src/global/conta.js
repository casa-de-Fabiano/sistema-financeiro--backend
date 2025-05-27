import con from "../repository/connect.js";

// esse endpoint irá ser usado para encontrar o nome da conta, na hora de criar uma nova despesa
export async function encontrarNomeDaConta(id) {
  const comando = `
    select nm_conta from tb_conta
        where id_conta = ?;`;
  const resposta = await con.query(comando, [id])
  return resposta[0][0]
}