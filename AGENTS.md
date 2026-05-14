# Agent Instructions

## Commands
- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally

## Requirements
- Node.js >=22.12.0

## Tech Stack
- Astro 6.x with React integration
- Tailwind CSS v4 (via @tailwindcss/vite)
- TypeScript (strict mode)

## Architecture
- Entry point: `src/pages/index.astro`
- Components follow atomic design: `src/components/atoms/`, `molecules/`, `organisms/`, `templates/`
- Layout: `src/layouts/Layout.astro`
- Data files: `src/data/` (projects.ts, techStack.ts, socialLinks.ts)
- Styles: `src/styles/global.css`

## Notes
- Tailwind v4 uses `@tailwindcss/vite` plugin (not a PostCSS config)
- React components use `.tsx` extension
- Astro components use `.astro` extension
- Use `npm run astro -- --help` for additional CLI commands