import { html } from '../../node_modules/lit-html/lit-html.js';
import { createMovie } from '../api/data.js';

const createTemplate = onSubmit => html`
    <section class="form-section">
        <h1 class="heading-primary">Create movie</h1>
        <form @submit=${onSubmit} class="form">
            <label>Title</label>
            <input class="form-item" type="text" name="title" />
            <label>Image Url</label>
            <input class="form-item" type="text" name="imageUrl" />
            <label>Description</label>
            <textarea
                class="form-item"
                type="text"
                name="description"
            ></textarea>
            <label>Genres</label>
            <input class="form-item" type="text" name="genres" />
            <input class="btn" type="submit" value="Create" />
        </form>
    </section>
`;
export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const img = formData.get('imageUrl');
        const desc = formData.get('description');
        const genre = formData.get('genres');

        if (title == '' || img == '' || desc == '' || genre == '') {
            return ctx.render(onSubmit, 'All fields are required!!!');
        }

        await createMovie({ title, img, desc, genre });

        ctx.page.redirect('/my-movies');
    }
}
