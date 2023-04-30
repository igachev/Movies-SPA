import {html} from '../../node_modules/lit-html/lit-html.js'

const loggedUserLinks = html `
<li><a href="/logout">Logout</a></li>
<li><a href="/create">Create Movie</a></li>
`;

const guestUserLinks = html `
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`;

const navigationTemplate = (user) => html `
        <nav>
            <ul class="menu-list">
                <li><a href="/">Home</a></li>
                <li><a href="/movies">All Movies</a></li>
                ${user
                  ? loggedUserLinks
                  : guestUserLinks
                  }
            </ul>
        </nav>
`

export function navigationView(ctx) {
    return navigationTemplate(ctx.user)
}