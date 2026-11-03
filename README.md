# Pratham Central

An interactive, trilingual portfolio presented as a Mumbai local train station. The frontend is a React app; the portfolio itself does not need the included FastAPI backend or a database.

## What is included

- `frontend/src/data/content.js` is the central source for portfolio copy and English, Hindi, and Marathi UI strings.
- `frontend/src/pages/` contains the station, Engineering Express, Community Junction, Product Junction, About, and Contact pages.
- `frontend/src/components/` contains the shared navigation, train scene, ticket counter, station map, and UI components.
- `frontend/public/` contains the illustrations, social preview, favicon, and self-hosted fonts.
- The About, Contact, and Footer pages link to Pratham's LinkedIn, email, GitHub, and downloadable résumé.
- `backend/` is a separate FastAPI starter; it is not required to run this portfolio.
- `architecture.md`, `features.md`, and `decisions.md` describe the structure, roadmap, and implementation choices.

## Requirements

- Node.js 20 or 22 (Node.js 22 was used to build this checkout).
- Corepack, which is included with current Node.js distributions, to run the project’s pinned Yarn 1.22.22 package manager.
- Internet access for the initial dependency install. The font files are checked into `frontend/public/fonts` and are served locally at runtime.

## Run locally

1. Open PowerShell in the project folder.
2. Change into the frontend folder:

   ```powershell
   cd frontend
   ```

3. Install the locked dependencies:

   ```powershell
   corepack yarn install --frozen-lockfile
   ```

4. Start the development server:

   ```powershell
   corepack yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000). Keep the terminal running while you use the site; press `Ctrl+C` there to stop it.

No `.env` file, database, account, or backend process is needed for the portfolio routes. If port 3000 is already occupied, Create React App will offer another available port in the terminal.

## Production build

From `frontend/`, run:

```powershell
corepack yarn build
```

The static production site is written to `frontend/build/`. Deploy that folder to a static host configured to serve `index.html` for client-side routes such as `/about` and `/engineering`.

## Optional font refresh

The normal install and run steps do not fetch assets. If you intentionally want to refresh the self-hosted Google Font files, run this from the project root with Python 3 and internet access:

```powershell
python scripts/fetch_fonts.py
```

## Step-by-step first run

1. Install Node.js 20 or 22 if it is not already installed.
2. Open a terminal in this project directory.
3. Run `cd frontend`.
4. Run `corepack yarn install --frozen-lockfile` and wait for it to finish.
5. Run `corepack yarn start`.
6. Visit `http://localhost:3000` in a browser.
7. To make a deployable bundle, stop the dev server with `Ctrl+C`, then run `corepack yarn build` from the same `frontend` directory.

## Build handoff

- Profile links and portfolio copy refreshed on 4 November 2026, 01:22 IST using the verified LinkedIn profile and source project details; a current résumé is available at `frontend/public/resume.pdf`.
- Production compilation completed successfully with `npm run build` from `frontend/`; the build output includes `frontend/build/resume.pdf`.
- Run locally with `corepack yarn start` from `frontend/`, or regenerate the production bundle with `corepack yarn build`.
- Created a branded SVG favicon and made the font refresh script work from this checkout on Windows and other platforms.
- See `decisions.md` for the dated handoff decisions and `test_result.md` for the build record.
