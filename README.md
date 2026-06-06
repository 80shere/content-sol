# ContentSol - Content + Visual = Results

A modern, production-ready agency website built with React, Vite, and Tailwind CSS. Features multilingual support (EN/ES), Silo-structured content architecture, and optimized for SEO and conversions.

## 🚀 Features

- **Multilingual Support**: English and Spanish with language switcher
- **SEO Optimized**: JSON-LD schema, meta tags, and semantic HTML
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Fast loading with Vite and optimized assets
- **Conversion Focused**: Multiple CTAs and lead capture forms
- **Silo Structure**: Organized content architecture for better SEO
- **Modern UI**: Smooth animations with Framer Motion
- **Dark Theme**: Professional dark design with accent colors

## 📁 Project Structure

```
content-sol/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── i18n/
│   │   └── translations.js
│   ├── store/
│   │   └── languageStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd content-sol
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌍 Multilingual Support

The site supports English (EN) and Spanish (ES). Users can switch languages using the language selector in the header. Language preference is saved in localStorage.

To add more languages:
1. Add translations to `src/i18n/translations.js`
2. Update language options in `src/components/Header.jsx`
3. Update `tailwind.config.js` if needed

## 📊 SEO & Content Architecture

### Silo Structure

The site is organized into 4 main content silos:

1. **SEO Copywriting** (`/services#seo`)
   - Blog posts about SEO writing
   - Service page with pricing
   - Case studies

2. **AI Images** (`/services#ai`)
   - Blog posts about AI image generation
   - Service page with features
   - Portfolio examples

3. **Professional Photography** (`/services#photo`)
   - Blog posts about personal branding
   - Service page with packages
   - Portfolio showcase

4. **Copywriting** (`/services#copy`)
   - Blog posts about persuasive writing
   - Service page with types
   - Email templates

### Internal Linking Strategy

- Each service page links to related blog posts
- Blog posts link back to relevant services
- Portfolio cases link to multiple services
- Footer contains navigation to all main sections

## 🎨 Design System

### Colors
- **Primary**: `#1a1a1a` (Dark background)
- **Secondary**: `#0066ff` (Blue accent)
- **Accent**: `#ff6b35` (Orange accent)
- **Neutral Light**: `#f5f5f5`
- **Neutral Dark**: `#2a2a2a`

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Spacing
- Section padding: `6rem` (section class)
- Container max-width: `80rem` (7xl)

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables

No environment variables required for basic setup. If you add a backend API, add it to `.env.local`:

```
VITE_API_URL=https://api.example.com
```

## 📈 Performance Optimization

- **Image Optimization**: Use WebP format with fallbacks
- **Code Splitting**: Vite automatically splits code by route
- **Lazy Loading**: Images and components load on demand
- **Caching**: Static assets cached by browser
- **Minification**: Production builds are minified

## 🔒 Security

- No sensitive data in frontend code
- All forms use HTTPS
- Content Security Policy ready
- XSS protection via React's built-in escaping

## 📧 Contact Form

The contact form currently logs to console. To integrate with a backend:

1. Update the `handleSubmit` function in `src/pages/Contact.jsx`
2. Send form data to your API endpoint
3. Implement email sending on backend

Example:
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 🧪 Testing

To add tests:

1. Install testing libraries
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom
   ```

2. Create test files (e.g., `src/components/Header.test.jsx`)

3. Run tests
   ```bash
   npm run test
   ```

## 📝 License

This project is proprietary. All rights reserved.

## 🤝 Support

For questions or support, contact: peerfield@gmail.com

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
