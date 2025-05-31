import con from "./connect.js";
export async function cadastrarUsuario(usuario) {
  const comando = `
    INSERT INTO tb_usuario (id_instituicao, nm_usuario, ds_senha, ds_role ) 
      VALUES (?,?,?,?);` //tem que inserir o ID da instituição
  
  const resposta = await con.query(comando, [usuario.idInstituicao, usuario.nome, usuario.senha, usuario.role])
  return resposta[0].insertId;
};

export async function entrarUsuario(usuario) {
  const comando = `
    SELECT id_usuario	id, id_instituicao, nm_usuario  usuario, ds_senha	senha, ds_role	role
    FROM tb_usuario 
    WHERE nm_usuario = ? and ds_senha = ?;
  `
  const resposta = await con.query(comando, [usuario.nome, usuario.senha])
  return resposta[0][0];
};

export async function verificarUsuario(id) {
  const comando = `
    SELECT id_usuario FROM tb_usuario
      WHERE id_usuario = ? ;
  `
  const resposta = await con.query(comando, [id]);
  return resposta[0][0];
};

export async function deletarUsuario(id) {
  const comando = `
  DELETE FROM tb_usuario WHERE id_usuario = ?;`
  const resposta = await con.query(comando, [id])
  return resposta[0];
};

export async function editarNomeDoUsuario(usuario, id) {
  const comando = `
    UPDATE tb_usuario SET nm_usuario = ? WHERE id_usuario = ?;`
  let resposta = await con.query(comando, [usuario.nome, id])
  return resposta.affectedRows;
};

export async function editarSenhaDoUsuario(usuario, id) {
  const comando = `
    UPDATE tb_usuario SET ds_senha = ? WHERE id_usuario = ?;`
  let resposta = await con.query(comando, [usuario.senha, id])
  return resposta.affectedRows; 
};