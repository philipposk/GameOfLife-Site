# Quick Deploy Guide - Make Game Playable

Your site is already live at **gameoflife.6x7.gr** ✅

Now you need to build and upload the Unity WebGL game so others can play it.

## Step 1: Build WebGL in Unity

1. **Open Unity** → Open your `GameOfWorld` project
2. **File → Build Settings**
3. **Platform:** Select `WebGL` (if not selected, click it and click "Switch Platform")
4. **Player Settings** (click "Player Settings"):
   - **Company Name:** Studio 6x7 (or your choice)
   - **Product Name:** Game of Life
   - **WebGL Template:** Default (or Minimal for smaller builds)
   - **Compression Format:** Gzip (recommended for faster loading)
   - **Memory Size:** 2048 MB (adjust if needed)
5. **Build** → Choose output folder:
   ```
   /Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site/game/
   ```
   ⚠️ **Important:** Build directly to the `game/` folder in your site directory

## Step 2: Upload to Your Hosting

### If using GitHub Pages:
```bash
cd "/Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site"
git add game/
git commit -m "Add WebGL game build"
git push
```
GitHub Pages will auto-deploy (takes 1-2 minutes)

### If using Netlify/Vercel:
1. The `game/` folder should be in your repo
2. Push to GitHub - auto-deploys
3. Or drag-drop the `game/` folder in Netlify dashboard

### If using FTP/SFTP:
1. Upload the entire `game/` folder contents to your server
2. Make sure it's at: `gameoflife.6x7.gr/game/`
3. Ensure `index.html` is in the `game/` folder (Unity creates this)

## Step 3: Test It

1. Visit: `https://gameoflife.6x7.gr/game/`
2. The game should load in the browser
3. Click "Play Game" button on your main site - should work!

## Troubleshooting

**Game doesn't load?**
- Check browser console (F12) for errors
- Make sure all files in `game/` folder are uploaded
- Check that `index.html` exists in `game/` folder
- Verify file permissions on server

**Game loads but is slow?**
- Enable compression in Unity Build Settings
- Consider using Brotli compression if your host supports it
- Reduce memory size if possible

**404 Error on /game/?**
- Make sure the folder is named exactly `game` (lowercase)
- Verify it's in the root of your site directory
- Check server file structure matches local structure

## File Structure Should Look Like:

```
GameOfLife-Site/
├── index.html          ← Your main site
├── styles.css
├── script.js
├── game/               ← Unity WebGL build goes here
│   ├── index.html      ← Unity's game loader
│   ├── Build/
│   │   ├── YourGame.data
│   │   ├── YourGame.framework.js
│   │   └── YourGame.wasm
│   └── TemplateData/
└── ...
```

## Quick Commands

```bash
# After building in Unity, commit and push:
cd "/Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site"
git add game/
git commit -m "Add WebGL game build"
git push

# Or if using FTP, upload the game/ folder via your FTP client
```

## That's It!

Once uploaded, anyone can visit `gameoflife.6x7.gr` and click "Play Game" to play your game! 🎮

