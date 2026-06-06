# ContentSol - Premium Content & Visual Solutions

A modern, bilingual (EN/ES) website for ContentSol agency built with React, Vite, and Tailwind CSS.

## Features

✅ **Bilingual Support** - English and Spanish with automatic language detection
✅ **Light Premium Design** - Modern, clean, professional aesthetic
✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **SEO Optimized** - Meta tags, semantic HTML, Open Graph
✅ **Fast Performance** - Vite + React for optimal speed
✅ **Smooth Animations** - Framer Motion for engaging interactions
✅ **Lead Capture** - Contact forms and WhatsApp integration
✅ **Multiple Pages** - Home, Services, Portfolio, Blog, About, Contact

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **State Management:** Zustand
- **Icons:** Lucide React

## Project Structure

```
content-sol-v2/
├── src/
│   ├── components/        # Reusable components (Header, Footer)
│   ├── pages/            # Page components (Home, Services, etc.)
│   ├── i18n/             # Translations (EN/ES)
│   ├── store/            # Zustand stores (language)
│   ├── styles/           # Global CSS
│   ├── App.jsx           # Main app with routing
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json           # Vercel deployment config
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
cd content-sol-v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Using GitHub + Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/content-sol.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Import" and Vercel will auto-deploy

## Customization

### Change Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  primary: '#0F172A',      // Deep navy
  secondary: '#0EA5E9',    // Sky blue
  accent: '#F59E0B',       // Amber
  // ... more colors
}
```

### Update Translations
Edit `src/i18n/translations.js` to add or modify text in English and Spanish.

### Add New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## Performance Optimization

- Images are optimized with Vite
- Code splitting enabled for faster initial load
- CSS is minified and tree-shaken
- Lazy loading for routes (optional)

## SEO

- Semantic HTML structure
- Meta tags in index.html
- Open Graph tags for social sharing
- Responsive design for mobile SEO
- Fast performance for Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 ContentSol. All rights reserved.

## Support

For questions or issues, contact: peerfield@gmail.com
