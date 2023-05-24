
export const authorizationMiddleware = (ctx,next) => {
    const authToken = sessionStorage.getItem('authToken');
    if(!authToken) {
        ctx.page.redirect('/login')
    }
    next()
}