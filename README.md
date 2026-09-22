# Inversion Mastery — C1+ Grammar Lab

A dependency-free web app for mastering English inversion from controlled recognition to C1+ production.

## What is included

- 6 sequential levels:
  1. **Spot the Structure** — analysis and recognition
  2. **Build the Inversion** — word-order synthesis
  3. **Type It** — typed gap completion
  4. **Transform It** — Cambridge-style sentence transformations
  5. **Diagnose the Error** — identify and repair structural errors
  6. **C1+ Synthesis Lab** — open-ended production
- **20-item exit ticket** with fresh tasks drawing on all six levels.
- **90% certificate threshold**.
- Detailed feedback that attempts to identify:
  - missing inversion
  - wrong auxiliary
  - wrong verb form after `did`
  - wrong form after a modal
  - misplaced fronted trigger
  - incomplete C1+ structure
- Local progress persistence with `localStorage`.
- Printable certificate after passing.
- No framework, build step, database or server required.

## Run locally

Open `index.html` in a browser.

For a local server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Create Inversion Mastery C1+ grammar app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/inversion-mastery.git
git push -u origin main
```

Then enable **GitHub Pages** in the repository settings and select the `main` branch / root folder.

## Extending the question bank

All content lives in `app.js`.

Each item has a type such as:

- `mc`
- `order`
- `text`
- `transform`
- `diagnose`
- `synthesis`

To add a task, copy an existing object and provide the expected answer plus a `rule`. The feedback engine uses those fields to generate the explanation and error diagnosis.

## Important implementation note

The open-ended C1+ checking is intentionally conservative: it checks required structural features rather than pretending that a simple string comparison can perfectly judge every possible grammatical sentence. For a production classroom version, the next upgrade would be an LLM or grammar-analysis service behind a secure API, with teacher-defined rubrics and human override.
