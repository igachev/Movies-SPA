
import * as userService from '../services/userService.js'

export async function logoutView(ctx) {
    await userService.logout()
    const welcomeMsg = document.querySelector('.welcome-msg')
    welcomeMsg.textContent = ''
    ctx.page.redirect('/')
}