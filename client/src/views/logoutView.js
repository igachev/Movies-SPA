
import * as userService from '../services/userService.js'

export async function logoutView(ctx) {
    await userService.logout()
    ctx.page.redirect('/')
}