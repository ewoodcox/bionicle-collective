# The Bionicle Collective

A hub site for the collection, YouTube channel, and social media.

## What’s included

- **Hero** – Brand and short intro
- **Collection** – Image gallery (click to open lightbox)
- **YouTube** – Channel embed + link to your channel
- **Connect** – Social links (YouTube, Instagram, X, Discord, etc.)

## Setup

1. **Your links and media**  
   Edit `js/config.js` and set:
   - `youtubeChannel` – full URL to your YouTube channel (e.g. `https://www.youtube.com/@bioniclecollective`)
   - `youtubeChannelId` – optional; your channel’s ID (starts with `UC...`) if you want the embed to show your uploads
   - `social` – URLs for each platform you use
   - `gallery` – array of `{ src, alt, caption }` for each collection image (paths or full URLs)

2. **Collection images**  
   Either:
   - Put images in a folder (e.g. `images/collection/`) and reference them in `config.gallery` as `images/collection/photo1.jpg`, or  
   - Use full URLs (e.g. from Imgur or your own hosting).

3. **Social cards**  
   In `index.html`, in the “Connect” section, add or remove `.social-card` items and set `data-platform` to match the keys in `config.social` (e.g. `youtube`, `instagram`, `twitter`, `discord`). The script will fill in the `href` from config.

## Run locally

Open `index.html` in a browser, or use a simple static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Deploy

Upload the project to any static host (Netlify, Vercel, GitHub Pages, etc.). No build step required.

## Not affiliated with LEGO

Fan project; LEGO and Bionicle are trademarks of the LEGO Group.
