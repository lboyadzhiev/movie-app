import { html } from '../../node_modules/lit-html/lit-html.js';

const myTemplate = () => html`
    <section class="myMovies-section" id="myMovies">
        <h1 class="heading-primary">My Movies</h1>

        <div class="movies">
            <div class="movies__movie">
                <h2 class="heading-secondary">Title: Us (2019)</h2>
                <img
                src=https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX140_CR0,0,140,209_AL_.jpg
                alt="movie img" class="movies__img">
                <p class="movies__tickets">Available Tickets: 50</p>

                <div class="movies__btn-group">
                    <button class="movies__btn btn">
                        <a href="#">Edit</a>
                    </button>
                    <button class="movies__btn btn">
                        <a href="#">Delete</a>
                    </button>
                    <button class="movies__btn btn">
                        <a href="#">Buy Ticket</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
`;

export async function myPage(ctx) {
    ctx.render(myTemplate());

    ctx.setUserNav();
}
