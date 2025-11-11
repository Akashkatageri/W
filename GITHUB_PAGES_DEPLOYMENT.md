# GitHub Pages Deployment Guide for ProFolioSite

This is an exact copy of the ProFolioSite portfolio with:
✅ PostCSS warning fixed (using @tailwindcss/vite plugin)
✅ White and lavender color theme
✅ GitHub Pages deployment ready

## Quick Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create GitHub Actions workflow file** at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages in repository settings**:
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Save

3. **Push your code** to trigger deployment:
```bash
git add .
git commit -m "Deploy ProFolioSite"
git push origin main
```

Your site will be live at: `https://[username].github.io/[repository-name]`

### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script to package.json**:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist/public"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Configure GitHub Pages**:
   - Go to Settings > Pages
   - Under "Source", select "gh-pages branch"
   - Save

## PostCSS Warning Fix

The PostCSS warning about missing `from` option has been resolved by using the `@tailwindcss/vite` plugin in the Vite configuration. This is the modern, recommended approach that eliminates the warning while maintaining full Tailwind CSS functionality.

**What was changed:**
- Using `@tailwindcss/vite` plugin instead of separate PostCSS configuration
- This plugin handles PostCSS internally with proper configuration

## Color Theme: White and Lavender

The site now features a beautiful white and lavender color scheme:
- **Primary**: Lavender (hsl(260, 60%, 65%))
- **Background**: Pure White (hsl(0, 0%, 100%))
- **Accents**: Various shades of lavender for depth
- **Text**: Dark gray with lavender undertones

## Customization

Update these files to personalize your portfolio:

1. **Personal Information** (`client/src/components/Hero.tsx`):
   - Name
   - Title
   - Social links (GitHub, LinkedIn)

2. **About Section** (`client/src/components/About.tsx`):
   - Bio text
   - Highlights

3. **Skills** (`client/src/components/Skills.tsx`):
   - Add/remove skill categories
   - Update skills list

4. **Projects** (`client/src/components/Projects.tsx`):
   - Add your actual projects
   - Update images
   - Add GitHub/live demo links

5. **Certifications** (`client/src/components/Certifications.tsx`):
   - Update certificate details
   - Replace certificate image

6. **Contact** (`client/src/components/Contact.tsx`):
   - Update email address
   - Social media links

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start` (production)

## File Structure

```
ProFolioSite/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx      # Top navigation with theme toggle
│   │   │   ├── Hero.tsx           # Hero section with intro
│   │   │   ├── About.tsx          # About me section
│   │   │   ├── Skills.tsx         # Skills and technologies
│   │   │   ├── Projects.tsx       # Portfolio projects
│   │   │   ├── Certifications.tsx # Certifications showcase
│   │   │   ├── Contact.tsx        # Contact form and links
│   │   │   ├── Footer.tsx         # Footer with links
│   │   │   └── ThemeProvider.tsx  # Dark/light theme management
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main page layout
│   │   ├── App.tsx               # Root component
│   │   └── index.css             # Tailwind + custom styles
│   └── index.html                # HTML template
├── attached_assets/              # Images and assets
└── package.json                  # Dependencies

```

## Features

✨ **Responsive Design**: Works perfectly on all devices
🎨 **Theme Toggle**: Light/dark mode with persistent preference
⚡ **Performance**: Optimized build with code splitting
🎯 **SEO Optimized**: Meta tags for better search visibility
♿ **Accessible**: ARIA labels and semantic HTML
🎭 **Smooth Animations**: Framer Motion for polished UX

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Routing**: Wouter

---

Built with ❤️ using modern web technologies
