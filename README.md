# Grey Door Republik

A static website for the independent game studio Grey Door Republik.

## GitHub Pages

The downloadable GitHub Pages package has index.html at its root. Upload every file and the assets folder to the root of your GitHub repository, including the hidden .nojekyll file. In the repository, open Settings > Pages, choose Deploy from a branch, select main and /(root), then Save. GitHub will provide the live URL when deployment finishes.

The source project's deployable files are in dist/. No package manager, build command, server, secret, or Sites account is needed to host them. All site assets use relative paths, so both a user site and a repository project site work without changing a base URL.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Editing

- index.html: text, sections, links, and metadata.
- styles.css: colours, typography, responsive layouts, and doorway animation.
- script.js: the doorway interaction and automatic copyright year.
- assets/gdr-logo.png: existing studio artwork from the user’s Library.
- assets/favicon.svg: simple doorway icon.

The site uses Barlow Condensed, DM Sans, and IBM Plex Mono through Google Fonts. If these are unavailable, system fonts are used. Other assets are local.

## Content notes

The studio name and independent status were supplied by the user. The visual identity uses the existing Grey Door Republik logo retrieved from the user’s Library. Copy and the archival paper/charcoal/rust palette follow the GDR game-ideas discussion and established studio line, “Independent Games for Strange Places.” Floppy//144 and greydoorrepublik@gmail.com were supplied by the user. The game page is linked at https://greydoorrepublik.github.io/floppy144/ and clearly labelled as forthcoming. No release dates, game screenshots, team biographies, awards, or registered trademark claims are invented. The hero uses the existing studio logo. The Floppy//144 panel is typographic, not a screenshot; screenshots are forthcoming. Unreleased game ideas and private development details are not advertised.

## Accessibility

Includes semantic page regions, a skip link, visible focus, native keyboard-accessible controls, a live announcement for the door state, and reduced-motion support. Enter or Space opens/closes the door, Escape closes it, and the separate Close the door button returns focus to the main control.

## Artwork provenance

The existing Grey Door Republik logo was retrieved from the user’s Library search for “Grey Door”. It is used without altering the original file. No new generated hero illustration is used in the final site.
