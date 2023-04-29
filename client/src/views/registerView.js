import {html} from '../../node_modules/lit-html/lit-html.js'

const registerTemplate = (submitHandler) => html `
<section>
    <form @submit=${submitHandler} method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">

        <label for="password">Password:</label>
        <input type="password" name="password" id="password">

        <label for="repeatPassword">Repeat Password:</label>
        <input type="password" name="repeatPassword" id="repeatPassword">

        <input type="submit" value="Register">
    </form>
</section>
`

export async function registerView(ctx) {
ctx.render(registerTemplate(submitHandler))

async function submitHandler(e) {
    e.preventDefault()

    
}
}