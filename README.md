# Personal Portfolio

A dependency-free portfolio homepage designed for GitHub Pages. The site uses a two-column layout: a pinned about section on the left and a scrollable project showcase on the right.

## Customize

Edit [index.html](./index.html) to replace:

- Your name, introduction, location, and contact links
- Project titles, descriptions, tags, and URLs
- The number of project cards

Each card has a `data-video-id` attribute on its media area. Replace its empty value with the ID from a YouTube URL (for example, `dQw4w9WgXcQ`) to embed that video. Leave it empty to show the placeholder.

Project media is loaded by [script.js](./script.js), so no build tools are required.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.

GitHub will publish `index.html` at the generated Pages URL. The site is static, so changes are published automatically after they are pushed to the selected branch.
