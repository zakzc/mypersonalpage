# Zak Zangrando: personal website

A single-page portfolio with my experience, skills, education and projects. Live at <https://zakzangrando.com>.

## Stack

React 19, TypeScript, Vite, Sass, Framer Motion. Tests run with Vitest and Testing Library.

## Scripts

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server at <http://localhost:5173> |
| `npm run build`     | Type-check and build to `build/`                |
| `npm run preview`   | Serve the production build locally              |
| `npm test`          | Run the tests                                   |
| `npm run typecheck` | Type-check only                                 |

## Content

Everything shown on the page (experience, skills, education, projects, languages) lives in
[`src/data/myData.json`](src/data/myData.json). Edit that file to update the site.

## Deploy

Hosted on Firebase Hosting from the `build/` folder (see `firebase.json`): `npm run build` then `firebase deploy`.

## Credits

Photos from [Unsplash](https://unsplash.com). Icons from [Linea](https://linearicons.com/) and
[Flaticon](https://www.flaticon.com/); some hand-drawn.
