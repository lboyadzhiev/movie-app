import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = onSubmit => html`
    <section class="form-section">
        <h1 class="heading-primary">Register</h1>
        <form @submit=${onSubmit} class="form">
            <label>Email</label>
            <input class="form-item" type="text" name="email" />
            <label>Password</label>
            <input class="form-item" type="password" name="password" />
            <label>Repeat Password</label>
            <input class="form-item" type="password" name="repeatPassword" />
            <input class="btn" type="submit" value="Register" />
        </form>
    </section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');

        if (email == '' || password == '' || rePass == '') {
            return alert('All fields are required!');
        }

        if (password != rePass) {
            return alert("Passwords don't match!");
        }

        await register(email, password);

        ctx.page.redirect('/movies');
    }
}
