import {render} from '../../node_modules/lit-html/lit-html.js'

const root = document.querySelector('main')

export const renderMiddleware = (ctx,next) => {
    ctx.render = (currentTemplate) => render(currentTemplate,root)
    next()
}