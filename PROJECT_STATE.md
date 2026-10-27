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
- Application folders and source files have not been created yet.

## Decisions

- Use the stack listed above; it is planned and has not been installed or scaffolded yet.
- Use Google Gemini for AI features; do not use Claude or OpenAI.
- Keep API keys out of source code. Store local secrets in `.env.local` and keep that file out of Git.

## Done

- Created the permanent workspace instructions.
- Created this project-state document.
- Initialized the Git repository.
- Checked the build and lint commands; neither is available until a project manifest and scripts are added.

## Current Step

Initial project setup is complete. No application features or scaffold have been created.

## Next Steps

- Scaffold the Next.js App Router application with TypeScript.
- Add and configure the planned dependencies and development scripts.
- Implement features only as requested, one step at a time.

## Known Bugs

- None known. The application has not been implemented yet.

## How To Run

There is no runnable application yet because the project scaffold, dependencies, and package scripts have not been created. Once added, document the install, development, build, and lint commands here. Put local API keys in `.env.local`; never commit that file or place keys in source code.
