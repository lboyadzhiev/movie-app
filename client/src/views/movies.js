import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovies } from '../api/data.js';

const moviesTemplate = data => html`
    <div id="cinema">
        <h1 class="heading-primary">All Movies</h1>
        <div class="movies">${data.map(movieTemplate)}</div>
    </div>
`;

const movieTemplate = movie => html`
    <div class="movies__movie">
        <h2 class="heading-secondary">${movie.title}</h2>
        <img class="movies__img" src=${movie.img} />
        <div class="movies__btn-group">
            <button class="movies__btn btn">
                <a href="${`/details/${movie._id}`}">Details</a>
            </button>
        </div>
    </div>
`;

export async function moviesPage(ctx) {
    const data = await getMovies();

    ctx.render(moviesTemplate(data));
}
