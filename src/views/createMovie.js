import { html } from '../../node_modules/lit-html/lit-html.js';

const createTemplate = () => html`
    <section class="form-section" id="addMovie">
        <h1 class="heading-primary">Create Movie</h1>
        <form action="" method="POST" class="form">
            <label>Title</label>
            <input
                type="text"
                name="title"
                class="form-item"
                id="createTitle"
            />
            <label>Image Url</label>
            <input
                type="text"
                name="imageUrl"
                class="form-item"
                id="createImage"
            />
            <label>Description</label>
            <textarea
                type="text"
                name="description"
                class="form-item"
                id="createDescription"
            ></textarea>
            <label>Genres</label>
            <input
                type="text"
                class="form-item"
                name="genres"
                id="createGenres"
            />
            <label>Available Tickets</label>
            <input
                type="number"
                class="form-item"
                name="tickets"
                id="createTickets"
            />
            <input type="submit" class="btn" value="Create" />
        </form>
    </section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate());
}
