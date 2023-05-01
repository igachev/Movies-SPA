
import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js'
import { renderNavigation } from './middlewares/renderNavMenuMiddleware.js'
import { createView } from './views/createView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { logoutView } from './views/logoutView.js'
import { moviesView } from './views/moviesView.js'
import { registerView } from './views/registerView.js'

page(authMiddleware)
page(renderNavigation)
page(renderMiddleware)

page('/',homeView)
page('/register',registerView)
page('/login',loginView)
page('/logout',logoutView)
page('/movies',moviesView)
page('/movies/create',createView)

page.start()