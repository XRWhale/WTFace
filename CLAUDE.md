# WTFace — 내 관상 동물상

## Project Overview
Bilingual (KO/EN) face reading web app that analyzes uploaded photos and assigns one of 9 animal spirit types.

- **Live URL:** https://ai-test-d4dec.web.app/
- **Deploy:** Firebase Hosting
- **Branch:** `master`

## Stack
- Pure HTML/CSS/JS — no build step, no framework, no npm
- Firebase Hosting for deployment

## Key Files
- `index.html` — main app entry point
- `main.js` — app logic, 9 animal spirit types (TYPES array), AI analysis
- `i18n.js` — KO/EN translation system
- `style.css` — all styles
- `privacy.html`, `terms.html` — legal pages

## Animal Spirit Types
tiger, fox, magpie, crane, deer, bear, rabbit, turtle, dragon

## Language System
- `i18n.js` handles KO/EN translations
- Language defaults based on browser/system locale
- Toggle available on all pages

## Deployment
```bash
firebase deploy
```
