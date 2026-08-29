# Arka Gandiva Labs Website

Version 1 of the official Arka Gandiva Labs LLC website.

## Stack
- React
- Vite
- React Router
- Lucide icons
- Static hosting friendly

## Routes
- `/`
- `/about`
- `/support`
- `/privacy`
- `/lunomi`
- `/lunomi/support`
- `/lunomi/privacy`

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

The output is generated in `dist/`.

## Cloudflare Pages
Recommended settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

For client-side routing, configure Cloudflare Pages to serve `index.html` for SPA routes if needed.

## Before public launch
- Review and finalize legal/privacy wording with appropriate counsel.
- Replace any placeholder contact/support information if needed.
- Add actual Lunomi screenshots and final app icon assets.
- Add App Store badge/link after the app is approved.
