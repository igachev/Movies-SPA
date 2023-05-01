import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

const detailsTemplate = (movie,isOwner) => html `
    <div class="details-section">

    <div >
    <img src="${movie.imageUrl}" alt="${movie.title}">
    </div>

    <div class="details-card">

<div >
    <p>Title: ${movie.title}</p>
</div>

<div >
    <p>Year: ${movie.year}</p>
</div>

<div >
    <p>Runtime: ${movie.runtime} minutes</p>
</div>

<div >
    <p>Genre: ${movie.genre}</p>
</div>

<div >
    <p>Description: ${movie.description}</p>
</div>

${  isOwner
    ? html ` <div>
    <a href="/movies/${movie._id}/edit" class="btn">Edit</a>
    <a href="/movies/${movie._id}/delete" class="btn">Delete</a>
    </div>` 
    : nothing}

</div>
</div>
`;

export async function detailsView(ctx) {
    const movieId = ctx.params.movieId
    const movie = await movieService.getOne(movieId)
    const currentUser = sessionStorage.getItem('userId')
    const isOwner = movie.owner == currentUser
    ctx.render(detailsTemplate(movie,isOwner))
    
}