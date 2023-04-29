import {html} from '../../node_modules/lit-html/lit-html.js'

const homeTemplate = () => html `
<section>
<h1>Lorem ipsum dolor sit amet.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores placeat quasi nobis quidem sunt iure dignissimos dolores eligendi nam.</p>
</section>
`

export async function homeView(ctx) {
ctx.render(homeTemplate())


}