import * as movieService from '../services/movieService.js'

export async function deleteView(ctx) {
    
    const movie = await movieService.getOne(ctx.params.movieId)
    const confirmDelete = confirm(`Are you sure you want to remove ${movie.title} ?`)

    if(confirmDelete) {
        await movieService.deleteOne(ctx.params.movieId)
        ctx.page.redirect('/movies')
    }
    
}