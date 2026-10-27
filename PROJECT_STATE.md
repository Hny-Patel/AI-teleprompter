# Project State

## Product

A cross-platform AI teleprompter web app (PWA) for iPhone, Android, Mac, and Windows.

Planned features:

- Smooth-scrolling teleprompter and script editor
- Camera recording and beautification
- Eye-contact correction
- Voice-follow scrolling, mistake handling, and automatic removal of bad takes
- Video editing for trimming, cropping, and captions
- Remote control, offline use, and cloud sync

## Tech Stack

Planned stack:

- Next.js (App Router) and TypeScript
- Tailwind CSS v4, shadcn/ui, and Motion
- Zustand
- Dexie (IndexedDB)
- Supabase
- Serwist (PWA)
- MediaPipe
- Google Gemini API (`@google/genai`) for all AI features

Claude and OpenAI are not part of this project.

## Folder Map

- `.github/copilot-instructions.md` — permanent workspace instructions
- `PROJECT_STATE.md` — current product, technology, and project status
- `app/` — Next.js App Router, global styles, page, and layout
- `components/` — responsive app shell, studio view, workspace navigation, theme controls, and shadcn/ui components
- `features/` — location for future feature modules
- `hooks/` — location for future shared React hooks
- `lib/` — shared utilities, including the shadcn `cn` helper
- `store/` — location for future application state
- `public/` — static assets

## Decisions

- Use Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Motion, Lucide icons, and Geist for the application shell.
- Use the remaining planned stack as product features are implemented.
- Use Google Gemini for AI features; do not use Claude or OpenAI.
- Keep API keys out of source code. Store local secrets in `.env.local` and keep that file out of Git.
- Use `light`, `dark`, and `oled` themes; the theme choice is stored by the theme provider.
- Keep the Gemini key and model names in `.env.example`; the current shell does not require credentials.

## Done

- Created the permanent workspace instructions.
- Created this project-state document.
- Initialized the Git repository.
- Scaffolded the Next.js App Router project with TypeScript and Tailwind CSS v4.
- Set up shadcn/ui, Motion, Lucide icons, and the Geist font.
- Added responsive desktop sidebar and iPhone-safe mobile tab navigation, reduced-motion-aware screen transitions, and light/dark/OLED themes.
- Added `.env.example` and project run instructions.
- Confirmed lint and production build checks pass.
- Verified the production shell, mobile navigation, OLED theme selection, and screen transitions in a browser.
- Pushed the initial project setup to `https://github.com/Hny-Patel/AI-teleprompter.git` on `main`.

## Current Step

Initial application foundation and responsive studio shell are in place and pushed to the GitHub `main` branch. The teleprompter, editor, camera, AI, sync, and other product features are not implemented yet.

## Next Steps

- Build the script editor and teleprompter experience.
- Add product features only as requested, one step at a time.

## Known Bugs

- None known. The application has not been implemented yet.

## How To Run

Install dependencies with `npm install`, then start the app with `npm run dev` and open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` for checks. The app shell does not require API keys. For future Gemini features, copy `.env.example` to `.env.local` and fill in the private key; `.env.local` is ignored by Git.
