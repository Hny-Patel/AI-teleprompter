# Teleprompt

A cross-platform AI teleprompter web app. This first setup step includes the Next.js foundation and a responsive, themeable studio shell; product features will be added in later steps.

## Run locally

1. Install Node.js 20.9 or later.
2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

To check the project, run `npm run lint` and `npm run build`.

The app shell works without API keys. When a later feature needs Gemini, copy `.env.example` to `.env.local` and add your private Gemini API key there. Never commit `.env.local`.

## Project layout

- `app/` — Next.js App Router and global styles
- `components/` — app shell, theme controls, and shadcn/ui components
- `features/` — feature modules as they are added
- `hooks/` — shared React hooks as they are added
- `lib/` — shared utilities
- `store/` — application state as it is added
