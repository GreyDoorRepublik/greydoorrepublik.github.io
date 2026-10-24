# Grey Door Republik website

Static studio website for **https://greydoorrepublik.github.io/**.

## Publish with GitHub Pages

1. Create a **public** repository named `GreyDoorRepublik.github.io` under the `GreyDoorRepublik` GitHub account (GitHub repository names are case-insensitive).
2. Upload the **contents** of this folder to the repository root, including `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the `assets` directory.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. After GitHub Pages publishes, visit https://greydoorrepublik.github.io/.

The Floppy//144 button points to `/floppy144/`. This URL will work once that site is published at the matching path. Until then, it may return 404. A future site can be hosted using a repository called `floppy144` with GitHub Pages enabled, or by putting a `floppy144/` folder in the root site repository.

No JavaScript framework, package manager, compilation or third-party runtime is needed. The site uses Google Fonts; browser fallback fonts are provided if they are unavailable. Images are optimised WebP versions of the supplied artwork.

## Local preview

Run `python -m http.server 8000` from this directory, then visit `http://localhost:8000`.

## Editing

Update copy and sections in `index.html`, design in `styles.css`, navigation behaviour in `script.js`, and artwork in `assets/`.

All rights reserved. Artwork and site content belong to their respective rights holders.
