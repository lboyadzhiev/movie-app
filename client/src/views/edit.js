import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovieById, editMovie } from '../api/data.js';

const editTemplate = (movie, onSubmit) => html`
    <div id="editMovie">
        <h1>Edit movie</h1>
        <form @submit=${onSubmit}>
            <label>Title</label>
            <input type="text" name="title" value="Us (2019)" id="editTitle" />
            <label>Image Url</label>
            <input
                type="text"
                name="imageUrl"
                id="editImage"
                value="https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX140_CR0,0,140,209_AL_.jpg"
            />
            <label>Description</label>
            <textarea type="text" id="editDescription" name="description">
A family's serenity turns to chaos when a group of doppelgängers begins to terrorize them.</textarea
            >
            <label>Genres</label>
            <input
                type="text"
                name="genres"
                value="Horror,Triller"
                id="editGenres"
            />
            <label>Available Tickets</label>
            <input type="number" name="tickets" value="50" id="editTickets" />
            <input type="submit" value="Edit" />
        </form>
    </div>
`;
export async function editPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id);

    ctx.render(editTemplate(movie, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
    }
}
