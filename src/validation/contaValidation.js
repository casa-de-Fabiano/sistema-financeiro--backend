export async function validarConta(id) {
  if(!id){
    throw new Error("ID não informado");
  }
};