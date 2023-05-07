import {html,nothing,render} from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'
import * as commentService from '../services/commentService.js'

function deleteHandler(movieId,userComment,userUsername) {
    return async function(e) {
        e.preventDefault()
        const commentData = {comment:userComment, username:userUsername}
        const deleteComment = await commentService.deleteComment(movieId,commentData)
        const commentContainer = e.target.parentElement.parentElement
        //console.log(commentContainer);
        commentContainer.remove()
        return deleteComment
    }
}

const commentCard = (comment,ownerOfComment,movieId,userComment,userUsername) => html `
<div class="comment-card-template">
<h4 class="username-field">${comment.username} : </h4>
${ownerOfComment
? html `<div class="delete-icon">
    <button @click=${deleteHandler(movieId,userComment,userUsername)} class="btn">X</button>
</div>`
:nothing}
 
<p class="comment-text">${comment.comment}</p> 
      
</div>
`;

function likeHandler(movieId) {
    return async function(e) {
        e.preventDefault()
    const userId = sessionStorage.getItem('userId')
    const updatedMovie = await movieService.addLike(movieId,userId)
    const countLikes = document.getElementById('count-likes')
    countLikes.textContent = 'Likes: ' + updatedMovie.likes.length
    // render the dislike button
    const ownerBtns = document.querySelector('.owner-btns')
    const dislikeBtnTemplate = html`<button class="btn dislike-btn" @click=${dislikeHandler(movieId)}>Dislike</button>`
    render(dislikeBtnTemplate, ownerBtns)

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
    const ownerBtns = document.querySelector('.owner-btns')
    const likeBtnTemplate = html`<button class="btn like-btn" @click=${likeHandler(movieId)}>Like</button>`
    render(likeBtnTemplate, ownerBtns)

    const dislikeBtn = document.querySelector('.dislike-btn')
    dislikeBtn.style.display = 'none'
  
    return updatedMovie
    }
}

const detailsTemplate = (movie,isOwner,isAuthenticated,isLiked,comments) => html `
    <div class="details-section">

    <div >
    <img src="${movie.imageUrl}" alt="${movie.title}">
    </div>

    <div class="details-card">

<div class="title-field">
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

<div class="description-field" >
    <p>Description: ${movie.description}</p>
</div>

<div>
    <p id="count-likes">Likes: ${movie.likes.length}</p>
</div>

<!-- owner can see edit and delete -->
<div class="owner-btns">
${  isOwner
    ? html ` 
    <a href="/movies/${movie._id}/edit" class="btn">Edit</a>
    <a href="/movies/${movie._id}/delete" class="btn">Delete</a>
    ` 
    : nothing}
</div>
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

<!-- Only logged in users can write comments -->
${isAuthenticated
    ? html `<div class="comment-field"><a href="/comments/${movie._id}/add" class="btn" >Add comment</a></div>`
    : nothing
    }

<div class="comment-container">
    <h3>Comments: </h3>
    ${comments.length !== 0
     ? comments.map((c) => commentCard(c,c.username == sessionStorage.getItem('email')?.split('@')[0],movie._id,c.comment,c.username))
     : html `<h5>No comments yet...</h5>`}
</div>

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
    const comments = await commentService.getMovieComments(movieId)
    ctx.render(detailsTemplate(movie,isOwner,isAuthenticated,isLiked,comments))
    
}

