import con from "./connect.js";

export async function adicionarDespesas( despesas) {
  const comando = ` 
      INSERT INTO tb_despesas 
      (dt_referencia,  ds_tipo, vl_despesas, nr_parcelas, dt_despesas, ds_observacao, file_recibo, id_conta_origem, id_conta_destino )
    VALUES (?,?,?,?,?,?,?,?,?)`;
    const resposta = await con.query(comando, [ despesas.referencia, despesas.tipo, despesas.valorDespesa, despesas.parcelas, despesas.dt_despesas, despesas.observacao, despesas.recibo, despesas.idContaOrigem, despesas.idContaDestino]);
    return resposta[0][0];
  } 
  



export async function despesasDoMes(despesas){
  const comando = `
    SELECT * FROM tb_despesas WHERE dt_despesas BETWEEN ? AND ? ORDER BY dt_despesas DESC `;
  const resposta = await con.query(comando, [despesas.inicio, despesas.fim]);
  return resposta[0]
}
