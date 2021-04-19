import { html } from '../../node_modules/lit-html/lit-html.js';

import { login } from '../api/data.js';

const loginTemplate = onSubmit => html`
    <section class="form-section" id="loginForm">
        <h1 class="heading-primary">Login</h1>
        <form @submit=${onSubmit} method="POST" class="form">
            <label>Username</label>
            <input
                type="text"
                name="username"
                class="form-item"
                id="loginUsername"
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                class="form-item"
                id="loginPassword"
            />
            <input type="submit" class="btn" value="Login" />
        </form>
    </section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userName = formData.get('username');
        const password = formData.get('password');

        await login(userName, password);

        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}
