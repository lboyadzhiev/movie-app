import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyMovies } from '../api/data.js';

const myMoviesTemplate = movies => html`
    <div id="cinema">
        <h1 class="heading-primary">My Movies</h1>
        <div class="movies">${movies.map(movieTemplate)}</div>
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
export async function myMoviesPage(ctx) {
    const movies = await getMyMovies();

    ctx.render(myMoviesTemplate(movies));
}
