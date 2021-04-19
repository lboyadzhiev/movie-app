import { html } from '../../node_modules/lit-html/lit-html.js';

import { register } from '../api/data.js';

const registerTemplate = onSubmit => html`
    <section class="form-section" id="registerForm">
        <h1 class="heading-primary">Register</h1>
        <form @submit=${onSubmit} method="POST" class="form">
            <label>Email</label>
            <input type="text" name="email" class="form-item" id="email" />
            <label>Username</label>
            <input
                type="text"
                name="username"
                class="form-item"
                id="registerUsername"
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                class="form-item"
                id="registerPassword"
            />
            <label>Repeat Password</label>
            <input
                type="password"
                name="repeatPassword"
                class="form-item"
                id="registerRepeatPassword"
            />
            <input type="submit" class="btn" value="Register" />
        </form>
    </section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const rePassword = formData.get('repeatPassword');

        if (!username || !email || !password) {
            return alert('All fields are required!');
        }

        if (password != rePassword) {
            return alert(`Password don't match!`);
        }

        await register(email, username, password);

        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}
