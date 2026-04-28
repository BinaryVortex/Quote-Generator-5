# Quote Generator

A simple, lightweight Quote Generator built with HTML, CSS, and JavaScript.

This small web app displays inspirational quotes and lets you generate a new random quote with a click. It's intentionally minimal so it's easy to understand, customize, and embed in other projects.

---

## Demo

![App Screenshot](./Screenshot%202024-08-12%20164413.png)

_Open `index.html` in your browser to try the app locally._

---

## Features

- Generate random quotes with a single click
- Clean, responsive UI (no frameworks)
- Single-page front-end (no build step required)
- Small, easy-to-read codebase ideal for learning or embedding

## Files in this repo

- `index.html` — main HTML file
- `style.css` — app styling
- `script.js` — JavaScript logic (quote array + generator)
- `Screenshot 2024-08-12 164413.png` — screenshot used in this README
- `QuoteGenerate.jpg` — alternative screenshot

## Quick start (Run locally)

1. Clone the repo:

   ```bash
   git clone https://github.com/BinaryVortex/Quote-Generator-5.git
   ```

2. Change into the project directory:

   ```bash
   cd Quote-Generator-5
   ```

3. Open the app in your browser:

   - Double-click `index.html`, or
   - Serve it with a simple static server (recommended):

     ```bash
     npx http-server .
     ```

---

## Usage

- Click the "New Quote" button to generate a different quote.
- To add or change quotes, open `script.js` and edit the `quotes` array.
- To change the visual design, edit `style.css`.

## Customization ideas

- Add social sharing links (Twitter/Facebook) prefilled with the current quote
- Load quotes from an external JSON file or API to expand the dataset
- Animate quote transitions (fade/slide)
- Add author attribution and filtering by author or tag

## Development notes

- No build tools required — this is plain HTML/CSS/JS. Keep files in the root for simplicity.
- If you rename the screenshot file, update its path in this README.

## Contributing

Contributions, issues, and feature requests are welcome. To contribute:

1. Fork the repository
2. Create a new branch for your change
3. Commit your changes and open a pull request

Please include clear descriptions for any changes.

## License

This project does not include a license file. If you want to make this project open source, add a LICENSE file (MIT is a common choice).

---

Made with care by BinaryVortex
