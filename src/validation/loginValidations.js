export async function validarCadastroUsuario(usuario) {
  if (!usuario.role){
    throw new Error("O campo role é obrigatório.");
  }
  if(!usuario.nome){
    throw new Error("O nome do usuário é obrigatório");
  }
  if (!usuario.senha) {
    throw new Error("Senha é obrigatória");    
  }
}

export async function validarEntradaUsuario(usuario) {
  if(!usuario.nome){
    throw new Error("O nome do usuário é obrigatório");
  }
  if (!usuario.senha) {
    throw new Error("Senha é obrigatória");    
  }  
}