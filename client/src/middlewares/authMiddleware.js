
export const authMiddleware = (ctx,next) => {
    ctx.user = sessionStorage.getItem('authToken')
    next()
}