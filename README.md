# Game of Life · Updates Page

Static landing page for `gameoflife.6x7.gr` that showcases the current construction of the Game of Life project. The page is intentionally friendly for both non-programmers (plain sentences, audio/video briefings) and engineers (short parenthetical tech notes per entry).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Content structure, sections, and media embeds. |
| `styles.css` | Visual system (dark theme, responsive layout). |
| `script.js` | Auto dates + generator for the 200-entry dated log. |

Deploy the repo as-is via GitHub Pages, Netlify, Vercel, or your hosting provider, then point the `gameoflife.6x7.gr` DNS (CNAME) to the hosting endpoint.

## Updating Content

1. **Text milestones** – edit the milestone cards inside `index.html`.
2. **Audio log** – drop a new MP3 in a `/media/` folder (or hosted CDN) and change the `<source>` URL.
3. **Video walkthrough** – replace the `iframe src` at the top hero with your own host (details below).
4. **Daily log tone** – update the `summarySnippets` or `techSnippets` arrays inside `script.js` if you want different phrasing; the page will regenerate all 200 entries automatically.

### Handling the 600&nbsp;MB `.mov`

Self-hosting such a large file is bandwidth-heavy and most browsers will stall before playback. Instead, upload to a streaming provider and embed:

| Platform | Notes |
| --- | --- |
| **YouTube** | Free, handles 4K, set to *Unlisted* for private links. |
| **Vimeo** | Cleaner player, more privacy controls (paid tiers). |
| **Cloudflare Stream** | Great for raw files, usage-based pricing, direct `<video>` sources. |

After uploading:

1. Copy the embed URL / video ID.
2. Replace `https://www.youtube.com/embed/dQw4w9WgXcQ` in `index.html`.
3. Commit + deploy.

If you must self-host, transcode to H.264 MP4 with `ffmpeg`, store on a CDN (e.g., Cloudflare R2 + Stream Delivery), and update the `<video>` tag accordingly.

## Local Preview

```bash
cd "/Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site"
npx serve .
```

Then open `http://localhost:3000`.

## License

MIT – see `LICENSE`.

