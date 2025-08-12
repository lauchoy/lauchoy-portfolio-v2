# Lauchoy Portfolio V2

A modern, responsive creative portfolio website built with Astro, TypeScript, and Tailwind CSS. Features a sophisticated design perfect for creative professionals in fashion, tech, photography, and media agencies.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Built with Astro for optimal loading speeds
- **TypeScript**: Type-safe development with full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Interactive Components**: Smooth animations and hover effects
- **Portfolio Filtering**: Dynamic project filtering by category
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- **Language**: TypeScript for type safety
- **Fonts**: Inter, Playfair Display, JetBrains Mono (Google Fonts)
- **Icons**: Heroicons (SVG icons)

## 📁 Project Structure

```
lauchoy-portfolio-v2/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # Route pages
│   │   ├── index.astro   # Homepage
│   │   ├── work.astro    # Portfolio page
│   │   ├── about.astro   # About page
│   │   └── contact.astro # Contact page
│   └── styles/
│       └── global.css    # Global styles and Tailwind imports
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Primary**: Sophisticated grays and slate tones
- **Accent**: Purple to pink gradient (#e052ff to #c730e8)
- **Typography**: High contrast for excellent readability

### Typography
- **Display Font**: Playfair Display (elegant serif for headings)
- **Body Font**: Inter (modern sans-serif for readability)
- **Mono Font**: JetBrains Mono (for code and technical content)

### Components
- **Navigation**: Fixed header with glass effect
- **Hero Section**: Full-screen with animated background elements
- **Portfolio Grid**: Responsive grid with hover effects
- **Contact Form**: Professional form with validation
- **Footer**: Comprehensive site information and social links

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lauchoy/lauchoy-portfolio-v2.git
   cd lauchoy-portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🚀 Deployment

### GitHub Pages
This project is configured for GitHub Pages deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   The site will be available at: `https://lauchoy.github.io/lauchoy-portfolio-v2`

### Other Platforms
The built files in the `dist/` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3

## 🎯 Customization

### Content Updates
- **Personal Information**: Update contact details in `src/layouts/BaseLayout.astro`
- **Portfolio Projects**: Modify project data in `src/pages/work.astro`
- **About Content**: Edit personal story in `src/pages/about.astro`
- **Services**: Update service offerings in `src/pages/index.astro`

### Styling
- **Colors**: Modify the color palette in `tailwind.config.mjs`
- **Fonts**: Update font selections in `src/styles/global.css`
- **Animations**: Customize animations in the Tailwind config

### Configuration
- **Site URL**: Update in `astro.config.mjs`
- **Meta Tags**: Modify default descriptions in `BaseLayout.astro`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/lauchoy/lauchoy-portfolio-v2/issues).

## 📞 Contact

- **Website**: [lauchoy.github.io/lauchoy-portfolio-v2](https://lauchoy.github.io/lauchoy-portfolio-v2)
- **Email**: hello@lauchoy.com
- **GitHub**: [@lauchoy](https://github.com/lauchoy)

---

Built with ❤️ using Astro and Tailwind CSS
