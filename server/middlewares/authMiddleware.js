const jwt = require('../jwtPromise/jsonwebtoken.js')
const SECRET = process.env.JWT_SECRET

exports.authentication = async (req, res, next) => {
  const token = req.header('X-Authorization')

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET)

      const { exp } = decodedToken

      if (Date.now() >= exp * 1000) {
        return res.status(401).json({ ok: false, message: 'Session expired' })
      }

      req.user = decodedToken
     // next()
    } catch (err) {
      res.status(401).json({ ok: false, message: 'Invalid token' })
      return; // Add this line to immediately exit the middleware function
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

