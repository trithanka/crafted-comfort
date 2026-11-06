# Crafted Comfort website

Static site for Crafted Comfort, Guwahati: the Northeast India partner of Loom Crafts and the team behind Barefoot in the Garden, Crafted Comfort B&B and Nuts and Berries. Plain HTML, CSS and JavaScript; no build step.

## Run it locally

```bash
python3 -m http.server 8001
```

Then open http://localhost:8001.

## Folder layout

```
index.html               Home: about, all companies, furniture, trial visit, contact
loom-crafts.html         Company pages (one per brand)
barefoot.html
bnb.html
nuts-and-berries.html

assets/
  css/                   Styles, loaded in this order by every page:
    base.css             tokens (colours, sizes), fonts, reset, type roles
    elements.css         buttons, header, section spacing
    sections.css         tabs plate, trial-visit planner, menus, about panel, facts, contact ticket
    page-hero.css        company page hero, breadcrumbs, two-up splits, price rows
    footer.css           site footer
    motion.css           scroll reveals, hero entrance, hover and press states
    media.css            figures, captions, photo credits, looping clips
    home.css             bullets, home hero with the rotating company strip, company cards
    company.css          company page profile: key facts, service rows, menus
    company-motion.css   sticky header, reading progress, service-row reveals
  js/main.js             tabs, planner, enquiry forms, reveals, home hero, sticky header
  fonts/                 Archivo (self-hosted)
  img/
    brand/               logo and favicon
    photos/              photographs used on the pages

design-source/           original JPGs and logo files; not loaded by the site
PRODUCT.md               who the site is for, brands, contacts, content rules
DESIGN.md                visual system: colours, type, layout, components
```

## Common edits

- **Phone number:** search the HTML for `7099279374`; the JS copy is `PHONE_DISPLAY` / `PHONE_LINK` at the top of `assets/js/main.js`.
- **Enquiry forms:** set `FORM_ENDPOINT` in `assets/js/main.js`. Until it is set, forms say the request could not be sent and show the phone number.
- **Colours and sizes:** the tokens at the top of `assets/css/base.css`.
- **A new photo:** add a `.webp` to `assets/img/photos/` and reference it as `assets/img/photos/<name>.webp`.

The order of the stylesheet links matters: later files override earlier ones. Add new styles to the file for that part of the site, keeping the order above.
