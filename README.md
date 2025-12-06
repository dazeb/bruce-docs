# BRUCE Documentation

**Big Brother Ultimate Communication Equipment** - "When your Dolphin needs a Great White" 🦈

This is the official documentation site for the BRUCE project, built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## 📦 Build for Production

```bash
# Build static site
npm run build

# The output will be in the /out directory
# Ready for deployment to any static hosting
```

## 🌐 Deployment Options

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dazeb/bruce-docs)

1. Push this repo to GitHub
2. Import to Vercel
3. Automatic deployment on every push

### GitHub Pages

```bash
npm run build
# Deploy /out directory to gh-pages branch
```

### Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

### Coolify / Docker

See the main BRUCE repository for Docker deployment instructions.

## 📁 Project Structure

```
nextra/
├── pages/              # Documentation pages (MDX)
│   ├── index.mdx      # Home page
│   ├── _app.jsx       # Custom App component
│   ├── _meta.js       # Navigation configuration
│   └── docs/          # Documentation sections
│       ├── getting-started/
│       ├── hardware/
│       ├── firmware/
│       └── build-guides/
├── theme.config.jsx   # Nextra theme configuration
├── next.config.mjs    # Next.js configuration
└── package.json       # Dependencies
```

## 🎨 Customization

### Theme Configuration

Edit `theme.config.jsx` to customize:
- Logo and branding
- Colors (primaryHue, primarySaturation)
- Footer text
- GitHub repository links
- SEO meta tags

### Navigation

Edit `pages/_meta.js` and subdirectory `_meta.js` files to configure:
- Page order
- Section titles
- Navigation structure

### Styling

The site uses BRUCE's shark theme:
- Primary color: Deep ocean blue (hue 204)
- Dark mode by default
- Shark emoji (🦈) branding throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2
- **Documentation**: Nextra 3.3
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS (via Nextra theme)
- **Deployment**: Static export

## 📝 Adding Content

Create new `.mdx` files in the `pages/docs/` directory:

```mdx
---
title: My New Page
---

# My New Page

Content goes here with full Markdown and React component support.
```

## 🔗 Links

- **Main BRUCE Repository**: https://github.com/dazeb/bruce
- **Live Documentation**: https://dazeb.github.io/bruce (or your custom domain)
- **Nextra Documentation**: https://nextra.site
- **Next.js Documentation**: https://nextjs.org

## 📄 License

Same as BRUCE project - see main repository.

---

**"Step aside, kid. I've got this."** 🦈
