import jwt from "jsonwebtoken"
const KEY = process.env.key
export function gerarTokenJwt(payload) {
  return jwt.sign(payload, KEY, {
    expiresIn: "1hr",
  });
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


// export function gerarToken(userInfo) {
//   return jwt.sign(userInfo, key, { expiresIn: '1h' })

// }

// export function autenticacao(req, resp, next) {
//   try {
//     const token = req.headers['x-access-token']
//     if (!token) return resp.status(401).send({ auth: false, message: ' No token provided.' })
//     jwt.verify(token, key, function (err, decoded) {
//       if (err) return resp.status(500).send({ auth: false, message: ' Failed to authenticate token.' })
//       req.userId = decoded.id
//       next()
//     })
//   } catch (error) {
//     return resp.status(500).send({ auth: false, message: ' Failed to authenticate to key.' })

//   }
// }


// export function gerarToken(userInfo) {
//   return jwt.sign(userInfo, key)
// }

// export function autenticar(req,resp,next){
//   return autenticacao(req,resp,next)
// }


// export function autenticacao(req, resp, next) {
//   try {
//       const token = req.headers["authorization"].split("Bearer ")[1];
//       const decoded = jwt.verify(token, key)
//       next();
//     }
//    catch (error) {
//     return resp.status(401).end();
//   }
// }