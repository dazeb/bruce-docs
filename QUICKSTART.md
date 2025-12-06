# BRUCE Nextra Documentation - Quick Start

Get the BRUCE documentation site running in 5 minutes!

## Quick Start

### 1. Install Dependencies

```bash
cd nextra
npm install
```

This will install:
- Next.js 15.1.8
- React 19
- Nextra 4.2.0
- Nextra Docs Theme 4.2.0
- TypeScript and type definitions

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

You should see:
- 🦈 BRUCE logo with shark emoji
- Dark mode by default (Bruce's intimidating aesthetic)
- Navigation sidebar with Getting Started, Hardware, Firmware, Build Guides
- Full-text search
- Responsive mobile design

### 3. Make Changes

Edit any `.mdx` file in `app/` and see live changes:

```bash
# Edit the home page
code app/page.mdx

# Edit getting started
code app/docs/getting-started/page.mdx

# Add a new page
code app/docs/hardware/new-page.mdx
```

### 4. Build for Production

```bash
npm run build
```

This creates a static export in `out/` directory, ready for deployment to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting

## What's Included

### Documentation Structure

```
app/
├── page.mdx                    # Home page with BRUCE intro
├── docs/
│   ├── page.mdx                # Docs landing page
│   ├── getting-started/
│   │   ├── _meta.ts            # Navigation config
│   │   └── page.mdx            # Getting started content
│   ├── hardware/
│   │   ├── _meta.ts            # Navigation config
│   │   └── page.mdx            # Hardware overview
│   ├── firmware/
│   │   ├── _meta.ts            # Navigation config
│   │   └── page.mdx            # Firmware overview
│   └── build-guides/
│       ├── _meta.ts            # Navigation config
│       └── page.mdx            # Build guides overview
```

### BRUCE-Specific Features

- **Shark Logo (🦈)**: Represents Bruce's apex predator personality
- **Dark Blue Theme**: Professional, intimidating color scheme
- **Dark Mode Default**: Matches Bruce's serious aesthetic
- **Custom Footer**: "When your Dolphin needs a Great White"
- **GitHub Integration**: Edit links and repo connection
- **Search**: Full-text search across all docs
- **Mobile Responsive**: Works on all devices

### Theme Configuration

The theme is fully configured in `theme.config.tsx`:

```tsx
// Key settings:
- logo: Shark emoji + BRUCE text
- primaryHue: Dark blue (204 dark, 212 light)
- defaultTheme: 'dark'
- footer: Custom Bruce tagline
- editLink: GitHub edit links
- navigation: Prev/next page links
```

## Adding Content

### Create a New Page

1. **Create the file:**
   ```bash
   touch app/docs/hardware/pinout.mdx
   ```

2. **Add content:**
   ```mdx
   # Pinout Reference

   Complete pin assignments for BRUCE.

   ## ESP32-S3 Pins

   | Pin | Function | Notes |
   |-----|----------|-------|
   | GPIO21 | I2C SDA | 4.7kΩ pull-up |
   | GPIO22 | I2C SCL | 4.7kΩ pull-up |
   ```

3. **Update navigation** in `app/docs/hardware/_meta.ts`:
   ```ts
   export default {
     index: 'Overview',
     pinout: 'Pinout Reference',  // Add this
     // ... other entries
   }
   ```

### Use MDX Components

Nextra provides built-in components:

```mdx
import { Callout, Steps, Tabs } from 'nextra/components'

<Callout type="warning">
  CRITICAL: ESP32 is 3.3V only!
</Callout>

<Steps>
### Step 1
Connect power

### Step 2
Connect I2C bus
</Steps>
```

## Deployment Options

### Option 1: GitHub Pages

```bash
# Build the site
npm run build

# Deploy the 'out/' folder to gh-pages branch
# (Use gh-pages package or manual deployment)
```

### Option 2: Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js
4. Automatic deployments on every push

### Option 3: Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

## Development Tips

### Live Reload

Changes to `.mdx` files reload instantly. Changes to config files (`theme.config.tsx`, `next.config.mjs`) require server restart:

```bash
# Ctrl+C to stop, then:
npm run dev
```

### TypeScript

The project uses TypeScript. Type errors will show in the terminal.

### Search

The search is automatic - all content is indexed. No configuration needed.

### Navigation Order

Control page order in `_meta.ts` files:

```ts
export default {
  first: 'First Page',
  second: 'Second Page',
  third: 'Third Page'
}
```

### Syntax Highlighting

Code blocks support many languages:

```bash
npm install nextra
```

```typescript
const config: DocsThemeConfig = {
  logo: <span>BRUCE</span>
}
```

```python
def bruce_init():
    print("BRUCE online")
```

## Troubleshooting

### Port Already in Use

```bash
# Use different port
PORT=3001 npm run dev
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Next Steps

1. **Explore the site**: Navigate through all sections
2. **Add content**: Start filling in the documentation pages
3. **Customize theme**: Adjust colors, fonts in `theme.config.tsx`
4. **Add images**: Put images in `public/` and reference as `/image.png`
5. **Deploy**: Push to production when ready

## Resources

- **Nextra Docs**: https://nextra.site/
- **Next.js Docs**: https://nextjs.org/docs
- **BRUCE Repo**: https://github.com/dazeb/esp32-flipper-devboard

## Need Help?

- Check the [Nextra documentation](https://nextra.site/)
- Open an issue on GitHub
- Review the existing `.mdx` files for examples

---

**Happy documenting!** 🦈

*"When your Dolphin needs a Great White"*
