const jwt = require('../jwtPromise/jsonwebtoken.js')
const SECRET = process.env.JWT_SECRET

exports.authentication = async (req,res,next) => {
  const token = req.header('X-Authorization')

  if(token) {

  try {
    const decodedToken = await jwt.verify(token, SECRET)

    const { exp } = decodedToken

    if (Date.now() >= exp * 1000) {
      return res.status(401).json({ ok: false, message: 'Session expired' })
    }

    req.user = decodedToken
    
  } catch (err) {
    return res.status(401).json({ ok: false, message: 'Invalid token' })
  }
}

  next()
}

exports.isAuthorized = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ ok: false, message: 'Unauthorized access' })
  }

  next()
}
