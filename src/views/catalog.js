import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMovies } from '../api/data.js';

const catalogTemplate = movies => html`
    <section class="allMovies" id="cinema">
        <h1 class="heading-primary">All Movies</h1>
        <form action="" class="form search-form" method="GET">
            <label>Search movie:</label>
            <input type="text" class="form-item" name="search" />
            <input type="submit" class="btn" value="search" />
        </form>

        <div class="movies">${Object.values(movies).map(movieTemplate)}</div>
    </section>
`;

const movieTemplate = movie => html`
    <div class="movies__movie">
        <h2 class="heading-secondary">${movie.title}</h2>
        <img ${movie.imgUrl} alt="movie img" class="movies__img" />
        <p class="movies__tickets">Available Tickets: ${movie.tickets}</p>

        <div class="movies__btn-group">
            <button class="movies__btn btn">
                <a href="#">Buy Ticket</a>
            </button>
            <button class="movies__btn btn">
                <a href="/details">Details</a>
            </button>
        </div>
    </div>
`;

export async function catalogPage(ctx) {
    const movies = await getMovies();
    ctx.render(catalogTemplate(movies));
}
