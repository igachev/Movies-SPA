
export const authMiddleware = (ctx,next) => {
    const authToken = sessionStorage.getItem('authToken');
        ctx.user = authToken;
        next();
}