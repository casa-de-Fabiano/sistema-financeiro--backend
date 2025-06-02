export async function validarAcessoDaConta(conta) {
  if (!conta.idConta) {
    throw new Error("O campo de id da conta não foi preenchido");
  }
  if (!conta.idInstituicao){
    throw new Error("O campo de id da instituição não foi preenchido");
  }
  if (!conta.proprietario) {
    throw new Error("O campo de proprietário não foi preenchido");
  }
};

export async function validarVerificacaoDeAcessoDaConta(id) {
  if (!id) {
    throw new Error("ID inválido");
  }
}