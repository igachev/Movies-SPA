import { html } from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

const editTemplate = (movie, submitHandler) => html`
<section class="edit-section">
    <form class="edit-form" method="post" @submit=${submitHandler}>

    <div class="container">

        <div>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" .value=${movie.title}>
        </div>

        <div>
            <label for="year">Year:</label>
            <input type="number" name="year" id="year" .value=${movie.year}>
        </div>

        <div>
            <label for="runtime">Runtime:</label>
            <input type="number" name="runtime" id="runtime" .value=${movie.runtime}>
        </div>

        <div>
            <label for="genre">Genre:</label>
            <input type="text" name="genre" id="genre" .value=${movie.genre}>
        </div>

        <div class="description-field">
            <label for="description">Description:</label>
            <textarea name="description" id="description" rows="4" cols="40" .value=${movie.description}></textarea>
        </div>

        <div>
            <label for="imageUrl">imageUrl:</label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${movie.imageUrl}>
        </div>

        <div class="submit-field">
            <input type="submit" value="Edit" class="btn">
            <a href="/movies/${movie._id}/details" class="btn">Back</a>
        </div>

        </div>

    </form>
</section>
`;

export async function editView(ctx) {
    const movie = await movieService.getOne(ctx.params.movieId)
    ctx.render(editTemplate(movie,submitHandler))

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

        await movieService.edit(ctx.params.movieId,movieData)
        ctx.page.redirect(`/movies/${ctx.params.movieId}/details`)
    }
}