# nit

Public pages for [Nit](https://github.com/bkrem/nit), served by GitHub Pages at https://bkrem.github.io/nit/. The old https://bkrem.github.io/nit-site/ URLs redirect here from [bkrem/nit-site](https://github.com/bkrem/nit-site).

- `index.html` — landing page, styled by `_landing.css` (brand tokens from Nit's `STYLEGUIDE.md`)
- `privacy/index.html` — privacy policy (linked from App Store Connect), styled by `_style.css`
- `support/index.html` — support page (linked from App Store Connect), styled by `_style.css`
- `faq/index.html` — frequently asked questions, styled by `_style.css`
- `assets/screenshots/` — 780 px WebP frames from the App Store screenshot set (dark mode, public PRs only)
- `assets/fonts/` — JetBrains Mono woff2 (OFL, see `OFL.txt`), self-hosted so the page makes no third-party request
- `assets/og.png` — the 1200×630 social preview, rendered from `assets/og-source.html` (instructions in that file); bump the `?v=` on the `og:image` URL in `index.html` after re-rendering so chat apps refetch it
- `favicon.svg`, `apple-touch-icon.png` — the mark and the app icon

No build step: edit the HTML and merge to `master`. `.nojekyll` at the repository root keeps Jekyll from dropping the `_`-prefixed stylesheets.
