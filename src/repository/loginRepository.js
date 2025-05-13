import con from "./connect.js";
export async function cadastrarUsuario(usuario) {
  const comando = `
    INSERT INTO tb_usuario (id_instituicao, nm_usuario, ds_senha ) 
      VALUES (?,?,?);` //tem que inserir o ID da instituição
  
  const resposta = await con.query(comando, [usuario.idInstituicao, usuario.nome, usuario.senha])
  return resposta[0].insertId;
}

export async function entrarUsuario(usuario) {
  const comando = `
    SELECT id_usuario	id, id_instituicao, nm_usuario	usuario, ds_senha	senha
    FROM tb_usuario 
    WHERE nm_usuario = ? and ds_senha = ?;
  `
  const resposta = await con.query(comando, [usuario.nome, usuario.senha])
  return resposta[0][0];
}

export async function verificarUsuario(id) {
  const comando = `
    SELECT id_usuario FROM tb_usuario
      WHERE id_usuario = ? ;
  `
  const resposta = await con.query(comando, [id]);
  return resposta[0][0];
}