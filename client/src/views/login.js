import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = onSubmit => html`
    <section class="form-section">
        <h1 class="heading-primary">Login</h1>
        <form @submit=${onSubmit} class="form">
            <label>Email</label>
            <input class="form-item" type="text" name="email" />
            <label>Password</label>
            <input class="form-item" type="password" name="password" />
            <input class="btn" type="submit" value="Login" />
        </form>
    </section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        await login(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/movies');
    }
}
