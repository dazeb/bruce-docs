# Deploying BRUCE Documentation to GitHub

## Option 1: Create New Repository on GitHub

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `bruce-docs`
3. Description: "BRUCE Documentation - When your Dolphin needs a Great White 🦈"
4. Make it **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push to GitHub

```bash
cd nextra

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/bruce-docs.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option 2: Deploy to Vercel (Automatic)

### Quick Deploy
1. Push to GitHub (see Option 1)
2. Go to https://vercel.com/new
3. Import your `bruce-docs` repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"
6. Done! Your site will be live at `bruce-docs.vercel.app`

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `docs.bruce.io`)
3. Follow DNS configuration instructions
4. SSL certificate automatically provisioned

## Option 3: GitHub Pages

### Step 1: Build Static Site
```bash
cd nextra
npm run build
# Output in /out directory
```

### Step 2: Deploy with GitHub Pages Action

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then:
1. Push to GitHub
2. Go to Settings → Pages
3. Source: GitHub Actions
4. Visit `https://YOUR_USERNAME.github.io/bruce-docs/`

## Option 4: Netlify

1. Push to GitHub (see Option 1)
2. Go to https://app.netlify.com/start
3. Connect to GitHub and select `bruce-docs`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"
6. Site will be live at `bruce-docs.netlify.app`

## Continuous Deployment

All options support automatic deployment:
- **Vercel**: Deploys automatically on every push to main
- **GitHub Pages**: Deploys via Actions on every push
- **Netlify**: Deploys automatically on every push

## Custom Domain Setup

### For Vercel/Netlify:
1. Add domain in platform settings
2. Update DNS records:
   - **CNAME**: `www` → `cname.vercel-dns.com` (or Netlify)
   - **A record**: `@` → Platform IP

### For GitHub Pages:
1. Add `CNAME` file to `/public` with your domain
2. Update DNS:
   - **CNAME**: `www` → `YOUR_USERNAME.github.io`
   - **A records**: Point to GitHub Pages IPs

## Environment Variables

No environment variables needed for static export!

## Build Optimization

The site is already optimized:
- Static export (`output: 'export'`)
- Image optimization disabled (for static hosting)
- Proper `basePath` configuration
- No server-side dependencies

## Monitoring

After deployment, monitor:
- Build success/failure
- Deploy previews (Vercel/Netlify)
- Analytics (optional: Vercel Analytics, Google Analytics)

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Run `npm ci` instead of `npm install`
- Check for TypeScript errors: `npm run lint`

### 404 Errors
- Ensure `trailingSlash: true` in `next.config.mjs`
- Check `basePath` configuration
- Verify all internal links use correct paths

### Styling Issues
- Clear browser cache
- Check CSS bundle generation
- Verify Tailwind CSS compilation

---

**Ready to deploy!** Choose your platform and follow the steps above. 🚀

**"Step aside, kid. I've got this."** 🦈
