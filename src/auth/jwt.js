import jwt from "jsonwebtoken"
const KEY = process.env.key
export function gerarTokenJwt(payload) {
  return jwt.sign(payload, KEY);
}

export function autenticacao(req, resp, next) {
  try {
    const token = req.headers["authorization"].split("Bearer ")[1];
    const decoded = jwt.verify(token, KEY);

    req.user = { id: decoded.id, usuario: decoded.usuario };

    next();
  } catch (error) {
    return resp.status(401).end();
  }
}


