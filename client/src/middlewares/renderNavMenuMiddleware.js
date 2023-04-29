import {render} from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js'

const header = document.querySelector('header')

export const renderNavigation = (ctx,next) => {
    render(navigationView(ctx),header)
    next()
}