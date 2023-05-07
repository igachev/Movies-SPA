import {html, nothing} from '../../node_modules/lit-html/lit-html.js'

const loggedUserLinks = html `
<li><a class="nav-btn" href="/logout">Logout</a></li>
<li><a class="nav-btn" href="/movies/create">Create Movie</a></li>
`;

const guestUserLinks = html `
<li><a class="nav-btn" href="/login">Login</a></li>
<li><a class="nav-btn" href="/register">Register</a></li>
`;

const username = sessionStorage.getItem('email')?.split('@')[0]

const navigationTemplate = (ctx) => html `
        <nav>
            <ul class="menu-list">
                <li><a class="nav-btn" href="/">Home</a></li>
                <li><a class="nav-btn" href="/movies">All Movies</a></li>
                ${ctx.user
                  ? loggedUserLinks
                  : guestUserLinks
                  }
            </ul>
        </nav>
        <span class="welcome-msg">${username ? html `Welcome, ${username}!` : nothing}</span>
`

export function navigationView(ctx) {
    return navigationTemplate(ctx)
}