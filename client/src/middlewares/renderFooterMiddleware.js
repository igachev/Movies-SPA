import { footerView } from "../views/footerView.js";
import {render} from '../../node_modules/lit-html/lit-html.js'

const footer = document.querySelector('footer')

export const renderFooterMiddleware = (ctx,next) => {
    
    render(footerView(),footer)
    next()
}
