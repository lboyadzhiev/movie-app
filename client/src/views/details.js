import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovieById, deleteMovie } from '../api/data.js';

const detailTemlate = (movie, isOwner, onDelete) => html`
    <div id="detailsMovie">
        <h1 class="heading-primary">Details</h1>
        <div class="movies__movie">
            <h2 class="heading-secondary">${movie.title}</h2>
            <img class="movies__img" src=${movie.img} />
            <p class="movies__description">${movie.description}</p>
            <h2 class="heading-secondary">Genres</h2>
            <ul>
                <li class="movies__description">${movie.genres}</li>
            </ul>
        </div>
        ${isOwner
            ? html`
                  <div class="movies__btn-group">
                      <button class="movies__btn btn">
                          <a href=${`/edit/${movie._id}`}>Edit</a>
                      </button>
                      <button class="movies__btn btn">
                          <a @click=${onDelete} href="javasript:void(0)"
                              >Delete</a
                          >
                      </button>
                  </div>
              `
            : ''}
    </div>
`;
export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id);
    const userId = sessionStorage.getItem('userId');

    ctx.render(detailTemlate(movie, movie._ownerId == userId, onDelete));

    async function onDelete() {
        const confirm = config('Are you sure you want to delete this movie?');
        if (confirm) {
            await deleteMovie(movie._id);

            ctx.page.redirect('/my-movies');
        }
    }
}
