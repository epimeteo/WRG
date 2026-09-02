# WRG — three editable website concepts

This package contains three independent homepage concepts:

1. `heritage-modern/`
2. `human-response/`
3. `editorial-authority/`

Open `index.html` in this folder to access the comparison page. Each concept also has its own `index.html` and can be opened directly in a browser.

## What to edit

- **Page content and structure:** edit the `index.html` inside the selected concept folder.
- **Theme colors, type, corners and shadows:** edit the variables at the beginning of that concept's `styles.css`.
- **Shared responsive layout:** edit `shared/base.css`.
- **Mobile menu behavior:** edit `shared/site.js`.
- **Hero and project photography:** replace the files in `shared/assets/` while keeping the same filenames, or update the image paths in each `index.html`.
- **Contact information:** replace the example telephone number and email address near the end of each `index.html` before production.

## Mobile behavior

Responsive rules are included in `shared/base.css` at the `920px` and `620px` breakpoints. Each theme also includes its own small responsive adjustments at the end of its `styles.css`.

## Suggested editing workflow

1. Duplicate the full package before making major changes.
2. Edit one theme's `styles.css` first.
3. Open the theme's `index.html` directly in the browser and resize the window to review desktop, tablet and mobile layouts.
4. Replace the reference photography and placeholder contact information before publishing.

The prototypes use plain HTML, CSS and JavaScript. No framework, build process or external library is required to edit or view the three sites in this folder.
