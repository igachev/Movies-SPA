import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const loginTemplate = (submitHandler) => html `
<section>
    <form @submit=${submitHandler} method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">

        <label for="password">Password:</label>
        <input type="password" name="password" id="password">

        <input type="submit" value="Login">
    </form>
</section>
`;

export async function loginView(ctx) {
    ctx.render(loginTemplate(submitHandler))

    async function submitHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
    
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
       
        
        if(email === '' || password === '') {
            alert('All fields are required!')
            return
        }
    
        await userService.login(email,password)
        ctx.page.redirect('/')
    }
}