import {html} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

const createTemplate = (submitHandler) => html `
<section>
    <form method="post" @submit=${submitHandler}>

        <div>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title">
        </div>

        <div>
            <label for="year">Year:</label>
            <input type="number" name="year" id="year">
        </div>

        <div>
            <label for="runtime">Runtime:</label>
            <input type="number" name="runtime" id="runtime">
        </div>

        <div>
            <label for="genre">Genre:</label>
            <input type="text" name="genre" id="genre">
        </div>

        <div>
            <label for="description">Description:</label>
            <input type="text" name="description" id="description">
        </div>

        <div>
            <label for="imageUrl">imageUrl:</label>
            <input type="text" name="imageUrl" id="imageUrl">
        </div>

        <div>
            <input type="submit" value="Create">
        </div>
    </form>
</section>
`;

export async function createView(ctx) {
    ctx.render(createTemplate(submitHandler))

    async function submitHandler(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const title = formData.get('title').trim()
        const year = formData.get('year').trim()
        const runtime = formData.get('runtime').trim()
        const genre = formData.get('genre').trim()
        const description = formData.get('description').trim()
        const imageUrl = formData.get('imageUrl').trim()

        if(title === '' || year === '' || runtime === '' ||
        genre === '' || description === '' || imageUrl === '') {
            alert('All fields are required!')
            return;
        }

        const movieData = {
            title,
            year,
            runtime,
            genre,
            description,
            imageUrl
        }

        await movieService.create(movieData)
        ctx.page.redirect('/')
    }
}