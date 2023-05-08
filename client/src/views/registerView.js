import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const registerTemplate = (submitHandler) => html `
<section>
    <form @submit=${submitHandler} method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" autocomplete="off">

        <label for="password">Password:</label>
        <input type="password" name="password" id="password">

        <label for="repeatPassword">Repeat Password:</label>
        <input type="password" name="repeatPassword" id="repeatPassword">

        <input type="submit" value="Register">

        <hr>
        <p>Already Registered? <a href="/login">Click here</a></p>
    </form>
</section>
`

export async function registerView(ctx) {
ctx.render(registerTemplate(submitHandler))

async function submitHandler(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const repeatPassword = formData.get('repeatPassword').trim()

    if(password !== repeatPassword) {
        const msg = document.querySelector('.err-message')
        msg.textContent = 'Password missmatch!'
        setTimeout(() => {
          msg.textContent = ''
        }, 3000);
        return
    }

    if(email === '' || password === '' || repeatPassword === '') {
        const msg = document.querySelector('.err-message')
       msg.textContent = 'All fields are required!'
       setTimeout(() => {
         msg.textContent = ''
       }, 3000);
        return
    }

    await userService.register(email,password)
    ctx.page.redirect('/login')
}
}