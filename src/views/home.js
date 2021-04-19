import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <img src="./images/background.jpg" class="background-img" alt="bg-images" />
`;

export async function homePage(ctx) {
    ctx.render(homeTemplate());
}
