import {html} from '../../node_modules/lit-html/lit-html.js'
import * as subscribeService from '../services/subscribeService.js'

const footerTemplate = (submitHandler) => html `
<div class="email-notification"></div>
<div class="footer-section">

<form @submit=${submitHandler}  method="post" class="footer-form">
<div>
    <label for="userEmail">Email:</label>
    <input type="email" name="userEmail" id="userEmail" autocomplete="off">
    <input type="submit" class="btn" value="Subscribe">
</div>
    <p>subscribe for our newsletter</p>  
</form>
   
</div>   
`;

export  function footerView() {
    return footerTemplate(submitHandler)

    async function submitHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const userEmail = formData.get('userEmail').trim()

        if(userEmail === '') {
            const msg = document.querySelector('.err-message')
            msg.textContent = 'Email is required!'
            setTimeout(() => {
              msg.textContent = ''
            }, 3000);
                 return;
        }

        const data = {userEmail}

        await subscribeService.subscription(data)
       
        const emailInput = document.getElementById('userEmail');
        emailInput.value = '';

        const emailNotification = document.querySelector('.email-notification')
            emailNotification.textContent = 'Email sent!'
            setTimeout(() => {
              emailNotification.textContent = ''
            }, 3000);
    }
}