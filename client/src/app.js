
import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { renderFooterMiddleware } from './middlewares/renderFooterMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js'
import { renderNavigation } from './middlewares/renderNavMenuMiddleware.js'
import { addCommentView } from './views/addcommentView.js'
import { createView } from './views/createView.js'
import { deleteView } from './views/deleteView.js'
import { detailsView } from './views/detailsView.js'
import { editView } from './views/editView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { moviesView } from './views/moviesView.js'
import { registerView } from './views/registerView.js'

page(authMiddleware)
page(renderNavigation)
page(renderMiddleware)
page(renderFooterMiddleware)

page('/',homeView)
page('/register',registerView)
page('/login',loginView)
page('/logout',logoutView)
page('/movies',moviesView)
page('/movies/create',createView)
page('/movies/:movieId/details',detailsView)
page('/movies/:movieId/delete',deleteView)
page('/movies/:movieId/edit',editView)
page('/comments/:movieId/add',addCommentView)

page.start()