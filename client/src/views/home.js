import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <img class="background-img" src="images/background.jpg" />
`;

export async function homePage(ctx) {
    ctx.render(homeTemplate());
}
