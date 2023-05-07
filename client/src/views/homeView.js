import {html} from '../../node_modules/lit-html/lit-html.js'

const homeTemplate = () => html `
<section class="home-section">
<h1>Welcome!</h1>
<div class="options">
<p>Browse through our movie / tv show collection and find out your next movie to watch</p>
<p>Like and comment on the movies you enjoy</p>
<p>Add Movies to our collection</p>

</div>
</section>
`

export async function homeView(ctx) {
ctx.render(homeTemplate())


}