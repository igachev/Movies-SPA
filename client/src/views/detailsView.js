import {html,nothing,render} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

function likeHandler(movieId) {
    return async function(e) {
        e.preventDefault()
    const userId = sessionStorage.getItem('userId')
    const updatedMovie = await movieService.addLike(movieId,userId)
    const countLikes = document.getElementById('count-likes')
    countLikes.textContent = 'Likes: ' + updatedMovie.likes.length
    // render the dislike button
    const detailsCard = document.querySelector('.details-card')
    const dislikeBtnTemplate = html`<button class="btn dislike-btn" @click=${dislikeHandler(movieId)}>Dislike</button>`
    render(dislikeBtnTemplate, detailsCard)

    const likeBtn = document.querySelector('.like-btn')
    likeBtn.style.display = 'none'
    
    return updatedMovie
    } 
}

function dislikeHandler(movieId) {
    return async function(e) {
    e.preventDefault()
    const userId = sessionStorage.getItem('userId')
    const updatedMovie = await movieService.removeLike(movieId,userId)
    const countLikes = document.getElementById('count-likes')
    countLikes.textContent = 'Likes: ' + updatedMovie.likes.length
    // render the like button
    const detailsCard = document.querySelector('.details-card')
    const likeBtnTemplate = html`<button class="btn like-btn" @click=${likeHandler(movieId)}>Like</button>`
    render(likeBtnTemplate, detailsCard)

    const dislikeBtn = document.querySelector('.dislike-btn')
    dislikeBtn.style.display = 'none'
  
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

<!-- owner can see edit and delete -->
${  isOwner
    ? html ` <div>
    <a href="/movies/${movie._id}/edit" class="btn">Edit</a>
    <a href="/movies/${movie._id}/delete" class="btn">Delete</a>
    </div>` 
    : nothing}

<!-- logged in user who is not owner can see like btn and 
the movie is not yet liked by him -->
${(isAuthenticated && !isOwner && !isLiked) 
    ? html `<button class="btn like-btn" @click=${likeHandler(movie._id)}>Like</button>`
    : nothing
    }
    
<!-- logged in user who is not owner and already liked the movie
can see dislike btn -->
${(isAuthenticated && !isOwner && isLiked) 
    ? html `<button class="btn dislike-btn" @click=${dislikeHandler(movie._id)}>Dislike</button>`
    : nothing
    }

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

