import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = () => html`
    <section class="form-section">
        <h1 class="heading-primary">Register</h1>
        <form class="form">
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
    ctx.render(registerTemplate());
}
