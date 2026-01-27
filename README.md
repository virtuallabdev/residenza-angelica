# Residenza Angelica - Luxury Hotel Website

A modern, fully-featured SvelteKit website for a luxury hotel residence with multi-language support, dark/light theme switching, and comprehensive SEO optimization.

## Features

### 🎨 Design & Theme
- **DaisyUI Integration**: Beautiful, responsive component library built on Tailwind CSS
- **Custom Light & Dark Themes**: Warm, luxurious color palette (browns, golds, accents)
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Smooth Animations**: CSS transitions and hover effects throughout

### 🌍 Internationalization (i18n)
- **3 Language Support**: Italian (default), English, German
- **Client-Side Language Switching**: No page reload required
- **localStorage Persistence**: User language preference saved
- **Dynamic Page Content**: All text dynamically rendered based on selected language

### 📱 Multi-Page Structure
- **Home Page**: Hero section with feature highlights and CTAs
- **Rooms Page**: Room types (Standard, Deluxe, Suite) with features and pricing
- **Gallery Page**: Photo gallery with category filtering
- **Services Page**: Comprehensive service listings with special packages
- **Contacts Page**: Contact information, form, and map section

### 🔍 SEO Optimization
- **Static Site Generation**: Configured for SSG with `@sveltejs/adapter-static`
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph & Twitter Cards**: Social media optimization
- **Structured Data**: JSON-LD schema for hotel information
- **Sitemap & Robots.txt**: Proper site indexing
- **hreflang Tags**: Multilingual site support for search engines
- **Canonical URLs**: Prevent duplicate content issues
- **Mobile-Optimized**: Responsive viewport configuration
- **Fast Loading**: Optimized assets and preload hints

### 🛠️ Technical Stack
- **SvelteKit**: Modern, performant framework with server-side rendering
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Pre-built components on top of Tailwind
- **Svelte Stores**: Global state management for theme and language

## Project Structure

```
src/
├── components/          # Reusable Svelte components
│   ├── Navigation.svelte    # Header navigation with language & theme switch
│   └── Footer.svelte        # Footer with links and info
├── lib/                 # Utility functions
│   └── i18n.ts         # Internationalization setup with translations
├── routes/             # Page routes
│   ├── +layout.svelte  # Main layout wrapper
│   ├── +page.svelte    # Home page
│   ├── rooms/
│   │   └── +page.svelte
│   ├── gallery/
│   │   └── +page.svelte
│   ├── services/
│   │   └── +page.svelte
│   ├── contacts/
│   │   └── +page.svelte
│   └── api/            # API endpoints
├── stores/             # Svelte stores
│   ├── language.ts     # Language switcher store
│   └── theme.ts        # Theme switcher store
├── styles/             # Global styles
│   └── app.css         # Tailwind imports & custom styles
├── utils/              # Utility functions
│   └── seo.ts          # SEO meta tag generation
└── app.html            # HTML template

static/
├── robots.txt          # SEO robots configuration
└── sitemap.xml         # XML sitemap for all pages

Configuration Files:
- svelte.config.js      # SvelteKit & adapter configuration
- tailwind.config.ts    # Tailwind & DaisyUI theme setup
- tsconfig.json         # TypeScript configuration
- postcss.config.js     # PostCSS configuration
- .prettierrc            # Code formatting rules
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Production Build

```bash
npm run build
```

The built site will be in the `build/` directory, ready for static hosting.

## Configuration

### Theme Customization

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#8B7355',    // Main brown color
      secondary: '#D4A574',  // Gold accent
      accent: '#C4956E'      // Additional accent
    }
  }
}
```

### Language Translations

Edit `src/lib/i18n.ts` to add/modify translations:

```typescript
export const translations = {
  it: { /* Italian strings */ },
  en: { /* English strings */ },
  de: { /* German strings */ }
};
```

### Contact Information

Update contact details in:
- `src/routes/contacts/+page.svelte` - Contact page
- `src/components/Footer.svelte` - Footer links
- `src/utils/seo.ts` - Structured data

## SEO Best Practices Implemented

1. **Meta Tags**
   - Descriptive title and description for each page
   - Open Graph tags for social sharing
   - Twitter card optimization

2. **Structured Data**
   - Hotel schema with organization information
   - Rating and amenity information
   - Contact details and location

3. **Site Structure**
   - Clear URL hierarchy (/rooms, /gallery, etc.)
   - Internal linking between related pages
   - Mobile-responsive design

4. **Performance**
   - Static site generation for fast loading
   - Optimized CSS with Tailwind
   - Preload hints for critical resources

5. **Internationalization**
   - hreflang tags for language versions
   - Alternate link tags in HTML head
   - Language-specific sitemap entries

6. **Technical SEO**
   - robots.txt for crawler instructions
   - XML sitemap with priorities
   - Canonical URLs on all pages
   - Proper HTML structure with semantic tags

## Deployment

### Static Hosting Options

Since this is a static site, you can deploy to:

- **Vercel**: `npm run build && vercel deploy --prod`
- **Netlify**: Connect your GitHub repo for automatic deployment
- **GitHub Pages**: `npm run build && git push`
- **AWS S3**: Upload the `build/` folder
- **Cloudflare Pages**: Connect your Git repository

### Environment Variables

Create a `.env` file for any environment-specific settings:

```env
VITE_SITE_URL=https://residenza-angelica.it
VITE_ANALYTICS_ID=YOUR_ANALYTICS_ID
```

## Customization Guide

### Adding New Pages

1. Create a new directory in `src/routes/`, e.g., `src/routes/about/`
2. Add `+page.svelte` for content and `+page.ts` with `export const prerender = true`
3. Add navigation link in `src/components/Navigation.svelte`
4. Update translations in `src/lib/i18n.ts`
5. Add to `sitemap.xml`

### Styling

- Use Tailwind utility classes for styling
- DaisyUI components for common UI patterns
- Custom CSS in `src/styles/app.css` with @layer directives

### Adding Images

Place images in `static/` directory and reference them:

```svelte
<img src="/images/room.jpg" alt="Room description" />
```

## Performance Tips

1. **Optimize Images**: Use modern formats (WebP) and appropriate sizes
2. **Lazy Loading**: Add `loading="lazy"` to images below the fold
3. **Caching**: Configure proper cache headers in your hosting provider
4. **Analytics**: Integrate Google Analytics or similar (update in `app.html`)
5. **CDN**: Use a CDN like Cloudflare for global distribution

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## License

Copyright © 2024 Residenza Angelica. All rights reserved.

## Support

For questions or issues, contact: info@residenza-angelica.it

---

Built with ❤️ using [SvelteKit](https://kit.svelte.dev), [Tailwind CSS](https://tailwindcss.com), and [DaisyUI](https://daisyui.com)
