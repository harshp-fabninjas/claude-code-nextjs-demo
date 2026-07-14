# Frontend changes

## New route: `/figma`

Added `app/figma/page.tsx`, a new page ported from a Figma mockup (file `Ld3bFjtCNYEBPCBunJ4rqM`, frame "About"). The page includes:

- **Navigation** — "Demo Figma" logo, 3 nav links, black CTA button
- **About hero** — heading, subheading, body copy, and a portrait photo
- **Contact form** — first/last name, email, message fields, and a submit button (static markup, no submit handler — front-end only)
- **Footer** — site name, 3 columns of link groups, and 4 social icons, divided by a top border

### Assets

Downloaded directly from the Figma file and committed to `public/figma/`:

- `about-portrait.png` — the hero portrait photo (508×657)
- `icon-facebook.svg`, `icon-linkedin.svg`, `icon-youtube.svg`, `icon-instagram.svg` — footer social icons, exported as SVG and cleaned up (stripped Figma's export-only wrapper groups, set `fill="currentColor"` so they inherit text color)

The footer divider line was implemented as a plain CSS border instead of downloading an image asset, since it's a flat 1px rule.

### Styling approach

This page intentionally uses its own visual identity (black/white/gray, `Inter` font) matching the mockup exactly, rather than the homepage's warm terracotta theme (`app/globals.css` tokens). `Inter` is loaded via `next/font/google` scoped locally inside `app/figma/page.tsx`, so it doesn't affect global fonts or any other route. No existing files were modified — `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, and `next.config.ts` are all unchanged.

Layout uses standard flex/grid (not the mockup's absolute positioning) so it responds reasonably down to mobile widths — hero columns and form fields stack, and secondary nav links hide below `sm`.

### Verification

- `npm run lint` — clean on the new file
- `npm run build` — compiles, typechecks, and statically prerenders `/figma` alongside `/`
- Visually verified at desktop (1440px) and mobile (390px) widths via a local browser session; matches the Figma screenshot
