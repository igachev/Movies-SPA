const jwt = require('../jwtPromise/jsonwebtoken.js')
const SECRET = process.env.JWT_SECRET

exports.authentication = async (req,res,next) => {
const token = req.header('X-Authorization')

if(token) {

    try {
    const decodedToken = await jwt.verify(token,SECRET)

    const { exp } = decodedToken

    if (Date.now() >= exp * 1000) {
      res.status(401).json({ ok: false })
      return
    }

    req.user = decodedToken;
    } catch (err) { 
        res.status(401).json({ok:false})
    }

}

next()

}

exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.stack)
  res.status(500).json({ ok: false })
}