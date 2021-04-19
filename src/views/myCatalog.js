import { html } from '../../node_modules/lit-html/lit-html.js';

const myTemplate = () => html`
    <section class="myMovies-section" id="detailsMovie">
        <h1 class="heading-primary">Details</h1>

        <div class="movies">
            <div class="movies__movie">
                <h2 class="heading-secondary">Title: Us (2019)</h2>
                <img
                src=https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX140_CR0,0,140,209_AL_.jpg
                alt="movie img" class="movies__img">
                <p class="movies__tickets">
                    A family's serenity turns to chaos when a group of
                    doppelgängers begins to terrorize them.
                </p>
                <h2 class="heading-secondary">Genres</h2>
                <ul class="movies__tickets">
                    <li>Horror, Triller</li>
                </ul>
                <p class="movies__tickets">Available Tickets: 50</p>

                <
                <button class="movies__btn btn">
                    <a href="#">Buy ticket</a>
                </button>
            </div>
        </div>
    </section>
`;

export async function myPage(ctx) {
    ctx.render(myTemplate());

    ctx.setUserNav();
}
