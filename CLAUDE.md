# CLAUDE.md

## What this repo is

This is a **teaching demo repo** for a college course called "Проєктний практикум" (Project Practicum), used to teach Git and GitHub. This is **not** a normal software project being built for its own sake — the app (a simple habit-tracker) is just a vehicle. The actual point of every session is to produce small, clean, well-scoped commits and diffs that an instructor can show on a projector while explaining a specific Git concept (staging, committing, tagging, branching, merging, resolving conflicts, etc.).

## How you'll be used

The instructor runs you from the terminal (`claude` CLI) live, in front of students, and gives you small tasks one at a time, in a fixed sequence tied to the course's lab list. Because of this:

- **Every prompt is deliberately scoped to one tiny increment.** Don't be surprised that a task looks "too small" or "incomplete" on its own — that's intentional. Don't proactively expand the scope, add extra features, refactor unrelated code, or "finish the job" beyond exactly what was asked.
- **Speed matters more than polish.** The instructor needs each task to take roughly 1-3 minutes end to end, not 15-20. Keep changes minimal and don't gold-plate.
- **The resulting diff is the actual teaching material.** Students will see `git diff` / `git log -p` on whatever you produce, so keep changes localized to the files mentioned in the prompt and avoid touching files that weren't asked about — including config files, formatting-only changes, or "drive-by" cleanups.

## Hard constraints (unless explicitly told otherwise in a given prompt)

- Do **not** run `npm install`, update `package.json`, or add/upgrade any dependency.
- Do **not** run `npm run build`, `npm run dev`, tests, or a linter/formatter as a side effect of a task.
- Do **not** create files, components, or logic that weren't asked for "just in case" they'll be needed later — a future lab's prompt will ask for them explicitly when the time comes.
- Do **not** fix unrelated bugs, rename things, or "improve" code style outside the scope of the current prompt, even if you notice something imperfect.
- If a prompt seems to conflict with something built in an earlier step, assume it's intentional (e.g. two branches are meant to touch the same lines on purpose to create a merge conflict for the lesson) — just do exactly what's asked, don't try to reconcile or warn about it.

## Stack

- **Vite + React**, plain JavaScript (no TypeScript).
- Functional components with hooks (`useState`, etc.) — no class components.
- No UI component libraries, no CSS frameworks (plain CSS only).
- No state management libraries (Redux, Zustand, etc.) — local component state via hooks is enough for this app's scope.

## Project structure

- `src/App.jsx` — root component, owns the habit-list state.
- `src/components/ItemForm.jsx` — form for adding a new habit.
- `src/components/ItemList.jsx` — renders the list of habit cards.
- `src/components/Item.jsx` — a single habit card's rendering and interactions.

Keep new logic within this structure unless a prompt explicitly asks you to introduce something new (e.g. a new component file).
