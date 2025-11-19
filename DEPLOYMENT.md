# Deployment Guide - Making Your Game Playable

This guide shows you how to make your game playable by others during development.

## Quick Options

### Option 1: GitHub Pages (Free, Easiest)
**Best for:** Static site + WebGL game hosting

1. **Push your site to GitHub:**
   ```bash
   cd "/Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/GameOfLife-Site.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / folder: `/ (root)`
   - Click Save
   - Your site will be at: `https://YOUR_USERNAME.github.io/GameOfLife-Site/`

3. **Update CNAME file** (if you have a custom domain):
   - The CNAME file should point to `gameoflife.6x7.gr`
   - In GitHub Pages settings, add your custom domain
   - Update DNS to point to GitHub Pages

### Option 2: Netlify (Free, Auto-deploy)
**Best for:** Automatic deployments from Git

1. **Sign up at netlify.com** (free tier is generous)
2. **Add new site** → Import from Git
3. **Connect your GitHub repo**
4. **Build settings:**
   - Build command: (leave empty - it's static)
   - Publish directory: `/` (root)
5. **Deploy!** Your site will be live instantly
6. **Custom domain:** Add `gameoflife.6x7.gr` in Domain settings

### Option 3: Vercel (Free, Fast)
**Best for:** Fast global CDN

1. **Sign up at vercel.com**
2. **Import Git repository**
3. **Deploy** (auto-detects static site)
4. **Add custom domain** in project settings

---

## Hosting the Unity WebGL Game

### Step 1: Build WebGL Version

1. **Open Unity** → Open your `GameOfWorld` project
2. **File → Build Settings**
3. **Platform:** Select `WebGL`
4. **Player Settings:**
   - Company Name: Your studio name
   - Product Name: Game of Life
   - WebGL Template: Default (or Minimal for smaller builds)
   - Compression Format: Gzip (recommended)
   - Memory Size: 2048 MB (adjust based on your game)
5. **Build** → Choose output folder: `GameOfLife-Site/game/`

### Step 2: Host the WebGL Build

**Option A: Same Domain (Recommended)**
- Build to `GameOfLife-Site/game/` folder
- Deploy entire site (includes game)
- Game accessible at: `https://gameoflife.6x7.gr/game/`

**Option B: Separate Hosting (For Large Builds)**
- Use **Itch.io** (free, game-specific):
  1. Create account at itch.io
  2. Create new project
  3. Upload WebGL build
  4. Set to "Public" or "Unlisted"
  5. Get embed link or direct URL

- Use **Cloudflare Pages** (free, fast):
  1. Create Cloudflare account
  2. Pages → Create project
  3. Upload WebGL build folder
  4. Deploy
  5. Get URL (e.g., `game-build.pages.dev`)

### Step 3: Update HTML to Link to Game

Edit `index.html` and update the "Play Game" button (see the updated HTML file).

---

## Development Sharing Options

### For Quick Testing (No Build Needed)

**Option 1: Local Network Sharing**
```bash
# In GameOfLife-Site directory
npx serve . --listen 0.0.0.0:3000
```
- Share your local IP: `http://YOUR_IP:3000`
- Others on same WiFi can access

**Option 2: ngrok (Temporary Public URL)**
```bash
# Install ngrok: https://ngrok.com/download
ngrok http 3000
```
- Get public URL (e.g., `https://abc123.ngrok.io`)
- Share with testers
- Free tier: URLs expire after 2 hours

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"
- Share your local IP address

---

## Recommended Setup for Development

1. **Static Site:** Deploy to Netlify/Vercel (auto-updates on git push)
2. **WebGL Game:** Build to `game/` folder in same repo
3. **Update Link:** Point "Play Game" button to `/game/` or external URL
4. **Share:** Give testers the URL: `https://gameoflife.6x7.gr`

---

## File Size Considerations

- **WebGL builds can be large** (50-500MB+)
- **GitHub Pages:** 1GB limit, 100GB bandwidth/month
- **Netlify:** 100GB bandwidth/month (free)
- **Vercel:** 100GB bandwidth/month (free)
- **For large builds:** Use Cloudflare R2 + CDN or Itch.io

---

## Quick Start Commands

```bash
# Build WebGL game (in Unity)
# File → Build Settings → WebGL → Build to: GameOfLife-Site/game/

# Deploy site to Netlify (after pushing to GitHub)
# Just connect repo in Netlify dashboard - auto-deploys!

# Test locally
cd "/Users/phktistakis/Devoloper Projects/GameOfSapho/GameOfLife-Site"
npx serve .
```

---

## Next Steps

1. ✅ Build WebGL version in Unity
2. ✅ Deploy static site (Netlify/Vercel/GitHub Pages)
3. ✅ Upload WebGL build to same host or separate service
4. ✅ Update "Play Game" link in `index.html`
5. ✅ Share URL with testers!

