import {html,nothing,render} from '../../node_modules/lit-html/lit-html.js'
import * as commentService from '../services/commentService.js'

const addCommentTemplate = (submitHandler) => html `
<section class="comment-section">
<div class="comment-card">
    <form @submit=${submitHandler} class="comment-form" method="post">
        <label for="comment">Comment:</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        <input type="submit" value="Post" class="btn">
    </form>
</div>
</section>
`;

export async function addCommentView(ctx) {
    ctx.render(addCommentTemplate(submitHandler))

    async function submitHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const comment = formData.get('comment').trim()
        const movieId = ctx.params.movieId
        const email = sessionStorage.getItem('email')
        const username = email.split('@')[0]
        

        const data = {comment,movieId,username}
         await commentService.add(movieId,data)
        ctx.page.redirect(`/movies/${movieId}/details`)
    }
}