import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit, errMrg) => html`
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
            ${errMrg ? html`<p class="errMsg">${errMrg}</p>` : ''}
        </form>
    </section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('repeatPassword').trim();

        if (email == '' || password == '' || rePass == '') {
            return ctx.render(
                registerTemplate(onSubmit, 'All fields are required!!!')
            );
        }

        if (password != rePass) {
            return ctx.render(
                registerTemplate(onSubmit, "Passwords don't match!!!")
            );
        }

        await register(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/movies');
    }
}
