const jwt = require('../jwtPromise/jsonwebtoken.js')
const SECRET = process.env.JWT_SECRET

exports.authentication = async (req,res,next) => {
const token = req.header('X-Authorization')

if(token) {

    try {
    const decodedToken = await jwt.verify(token,SECRET)
    req.user = decodedToken
    } catch (err) {
        res.status(401).json({ok:false})
    }

}

next()

}