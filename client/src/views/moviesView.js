import {html} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

const movieCard = (movie) => html `
    <div class="movie-card">

<div class="img">
    <img src="${movie.imageUrl}" alt="${movie.title}">
</div>

<div class="title">
    <p>${movie.title}</p>
</div>

<div>
    <a href="/movies/${movie._id}/details">Details</a>
</div>

</div>
`;

const moviesTemplate = (movies) => html `
<section class="movies-section">
    <div class="movie-container">
        ${movies.map((movie) => movieCard(movie))}
    </div>
</section>
`;

export async function moviesView(ctx) {
    const movies = await movieService.getAll()
    ctx.render(moviesTemplate(movies))
}