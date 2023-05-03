import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'



function likeHandler(movieId) {
    return async function(e) {
        e.preventDefault()
    const userId = sessionStorage.getItem('userId')
    const updatedMovie = await movieService.addLike(movieId,userId)
    const countLikes = document.getElementById('count-likes')
    countLikes.textContent = 'Likes: ' + updatedMovie.likes.length
    const likeBtn = document.querySelector('.like-btn')
    likeBtn.style.display = 'none'
    return updatedMovie
    } 
}

const detailsTemplate = (movie,isOwner,isAuthenticated,isLiked) => html `
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

<div>
    <p id="count-likes">Likes: ${movie.likes.length}</p>
</div>

${  isOwner
    ? html ` <div>
    <a href="/movies/${movie._id}/edit" class="btn">Edit</a>
    <a href="/movies/${movie._id}/delete" class="btn">Delete</a>
    </div>` 
    : nothing}

${(isAuthenticated && !isOwner && !isLiked)
    
    ? html `<button class="btn like-btn" @click=${likeHandler(movie._id)}>Like</button>`
    : nothing}
    

</div>
</div>
`;



export async function detailsView(ctx) {
    const movieId = ctx.params.movieId
    const movie = await movieService.getOne(movieId)
    const currentUser = sessionStorage.getItem('userId')
    const isOwner = movie.owner == currentUser
    const isAuthenticated = sessionStorage.getItem('authToken') ? true : false
    const isLiked = await movieService.isLiked(movieId,currentUser)
    ctx.render(detailsTemplate(movie,isOwner,isAuthenticated,isLiked))
    
}

