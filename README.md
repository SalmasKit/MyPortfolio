# Portfolio — modular structure

The original single HTML file has been separated into HTML partials, CSS, data, and behavior.

## Structure

index.html
├── css/
│   └── style.css
├── js/
│   ├── portfolio-data.js
│   ├── portfolio.js
│   └── loader.js
├── partials/
│   ├── navbar.html
│   ├── hero.html
│   ├── main.html
│   ├── projects.html
│   ├── about.html
│   ├── tech.html
│   ├── journey.html
│   ├── certifications.html
│   ├── contact.html
│   ├── footer.html
│   └── modal.html
├── translations.js   ← keep your existing file here
└── assets/           ← copy your existing assets folder here

## Important

The partials are loaded with fetch(), so do NOT open index.html with file://.
Use VS Code Live Server, XAMPP, GitHub Pages, or another HTTP server.

Example:
python -m http.server 5500

Then open:
http://localhost:5500/

## Where to edit

HTML sections → partials/
Design → css/style.css
Projects / skills / certificates / detail data → js/portfolio-data.js
Interactions / filters / modal / theme / language → js/portfolio.js
Translations → translations.js
