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

const moviesTemplate = (movies,page) => html `
<section class="movies-section">
    
    <div class="movie-container">
        ${movies.map((movie) => movieCard(movie))}
    </div>

    <div class="pagination">
    <nav>
    <ul class="pagination-list">
    <li><a href="/movies?page=${prevPage(page)}">Previous Page</a></li>
    <li><a href="/movies?page=${nextPage(page)}">Next Page</a></li>
    </ul>
    </nav> 
    </div>

</section>
`;

function nextPage(currentPage) {
    let page = currentPage + 1
    return page;
}

function prevPage(currentPage) {
    let page = Math.max(1, currentPage-1)
    return page;
}

export async function moviesView(ctx) {
    let params = new URLSearchParams(ctx.querystring)
   // console.log(params.get('page'));
    let page = params.get("page") || 1;
    page = Number(page)
   // console.log(page);
    const movies = await movieService.getAll(page)
   // console.log(movies);
    ctx.render(moviesTemplate(movies,page))
}