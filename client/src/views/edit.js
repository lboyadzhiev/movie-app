import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovieById, editMovie } from '../api/data.js';

const editTemplate = (movie, onSubmit) => html`
    <section class="form-section">
        <h1 class="heading-primary">Edit movie</h1>
        <form @submit=${onSubmit} class="form">
            <label>Title</label>
            <input
                class="form-item"
                type="text"
                name="title"
                value=${movie.title}
            />
            <label>Image Url</label>
            <input
                class="form-item"
                type="text"
                name="imageUrl"
                value=${movie.img}
            />
            <label>Description</label>
            <textarea class="form-item" type="text" name="description">
            ${movie.description}
            </textarea
            >
            <label>Genres</label>
            <input
                class="form-item"
                type="text"
                name="genres"
                value=${movie.genres}
            />
            <input class="btn" type="submit" value="Edit" />
        </form>
    </section>
`;
export async function editPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id);

    ctx.render(editTemplate(movie, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const img = formData.get('imageUrl');
        const desc = formData.get('description');
        const genre = formData.get('genres');

        await editMovie(movie._id, { title, img, desc, genre });

        ctx.page.redirect('/my-movies');
    }
}
