# ProFolioSite Design Guidelines - Purple Theme

## Design Approach
**System**: Modern portfolio design inspired by Linear's clean typography and Stripe's professional restraint, with purple as the signature brand color.

## Core Design Elements

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Font weight 700, sizes: h1 (text-5xl md:text-7xl), h2 (text-4xl md:text-5xl), h3 (text-2xl md:text-3xl)
- **Body**: Font weight 400, text-base md:text-lg, line-height relaxed (1.75)
- **Accents**: Font weight 600 for emphasis

### Color Palette (Purple Theme)
- **Primary**: Purple-600 (#9333ea)
- **Primary Light**: Purple-400 (#c084fc)
- **Primary Dark**: Purple-800 (#6b21a8)
- **Background**: Slate-50 for light sections, White for alternating
- **Text**: Slate-900 primary, Slate-600 secondary
- **Accents**: Purple-100 for subtle backgrounds, Purple-900 for deep contrast

### Layout System
**Spacing Units**: Consistent use of 4, 8, 16, 24, and 32 (px-4, py-8, space-y-16, etc.)
- Section padding: py-16 md:py-24
- Container: max-w-6xl mx-auto px-4 md:px-8
- Element spacing: space-y-8 for content blocks, space-y-4 for related items

### Component Structure

#### Navigation
- Fixed top navigation with backdrop blur (backdrop-blur-lg bg-white/90)
- Logo/name on left, navigation links center-right
- Smooth scroll behavior to sections
- Active section indicator (purple-600 underline)
- Mobile: Hamburger menu with slide-in drawer

#### Hero Section
- Full viewport height (min-h-screen) with flex centering
- Large gradient text heading with purple gradient (from-purple-600 to-purple-800)
- Animated typing effect or fade-in for introduction text
- Professional headshot image: 200px circular image with purple ring border (ring-4 ring-purple-400)
- Subtitle with role/title below name
- Dual CTA buttons: Primary (purple-600), Secondary (outline purple-600)
- Subtle background: gradient from purple-50 to white or abstract geometric pattern

#### About Me Section
- Two-column layout (md:grid-cols-2)
- Left: Detailed bio paragraph with engaging copy
- Right: Skills grid showcasing technical proficiencies
- Skill tags: Pill-shaped badges with purple-100 background, purple-700 text, hover lift effect
- Section uses white background for contrast

#### Projects/Portfolio Section
- Background: slate-50
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Project cards with:
  - Project thumbnail/screenshot image (aspect-ratio-video, rounded-lg)
  - Title (text-xl font-semibold)
  - Description (2-3 lines, text-slate-600)
  - Technology tags (similar to skill badges but smaller)
  - Live demo and GitHub links as icon buttons
- Card hover: Lift effect (hover:shadow-xl hover:-translate-y-2 transition)
- Cards have subtle border and shadow (border border-slate-200 shadow-md)

#### Contact Section
- Centered layout with purple gradient background (bg-gradient-to-br from-purple-600 to-purple-800)
- White text throughout
- Heading: "Let's Connect" or "Get In Touch"
- Social media icons in a row (GitHub, LinkedIn, Twitter, Email) - use Font Awesome
- Icon styling: Large (text-4xl), white with hover scale effect
- Optional contact form: Name, Email, Message fields with white borders and transparent backgrounds
- Submit button: white background with purple text, hover inverts

#### Footer
- Simple centered footer with purple-900 background
- Copyright text in white/purple-100
- Quick links to sections
- Social icons repeated (smaller size)

### Images
1. **Hero Section**: Professional headshot - circular cropped portrait, high-quality, 400x400px minimum, centered above or beside introduction text
2. **Project Cards**: 3-6 project screenshots/mockups showing actual work - 16:9 aspect ratio, high quality, demonstrating variety of projects
3. **Optional About Section**: Candid working photo or team collaboration image to humanize the profile

### Animations
- Fade-in on scroll for section content (use intersection observer)
- Smooth scroll behavior for navigation
- Hover effects: Lift on cards, scale on icons, glow on buttons
- Typing animation for hero subtitle
- Keep animations subtle and professional - no distracting movements

### Responsive Breakpoints
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Single column on mobile, multi-column on desktop
- Navigation collapses to hamburger below md breakpoint
- Font sizes scale down 1-2 sizes on mobile

### GitHub Pages Configuration
- Build output in `/dist` directory
- Base path configured for repository name
- All assets use relative paths
- 404.html for SPA routing if needed