import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const loginTemplate = (submitHandler) => html `
<section class="login-section">
    <form @submit=${submitHandler} method="post" class="login-form">

        <div class="inner-container">

        <label for="email">Email:</label>
        
        <input type="email" name="email" id="email" class="login-input-field" size="30" placeholder="john@gmail.com...">
           
        <label for="password">Password:</label>
        
        <input type="password" name="password" id="password" class="login-input-field" size="30" placeholder="******">
           
        <input type="submit" value="Sign In" class="btn">
        <hr>
        <p>Not Registered? <a href="/register">Click here</a></p>
    </div>

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
            //alert('All fields are required!')
            const msg = document.querySelector('.err-message')
       msg.textContent = 'All fields are required!'
       setTimeout(() => {
         msg.textContent = ''
       }, 3000);
       
            return
        }
    
        await userService.login(email,password)
        const token = sessionStorage.getItem('authToken')

        if(!token) {
           return
        }

            ctx.page.redirect('/movies')
    }
}