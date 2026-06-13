# Mayur Makwana Portfolio - Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/mayurmakwana/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Reusable UI components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       └── GlassCard.tsx
├── data/                   # Static data
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── services.ts
│   └── testimonials.ts
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Design System

### Colors
- **Dark Background**: `#0a0f1f` - `#1f2937`
- **Accent**: `#0ea5e9` (cyan/sky blue)
- **Accent Gradient**: `#0ea5e9` → `#06b6d4`

### Components

#### Button
```tsx
<Button variant="primary|secondary|outline" size="sm|md|lg" href="#" onClick={() => {}}>
  Button Text
</Button>
```

#### GlassCard
```tsx
<GlassCard className="" hoverEffect={true} variant="default|dark">
  Content
</GlassCard>
```

## 🔧 Customization

### Update Personal Information

**Navbar & Footer** - Update social links in:
- `components/ui/Navbar.tsx`
- `components/ui/Footer.tsx`

**Hero Section** - Update intro text in:
- `components/sections/Hero.tsx`

### Update Content

Edit data files in `data/` directory:
- `skills.ts` - Update skills and categories
- `experience.ts` - Add work experience
- `projects.ts` - Add your projects
- `services.ts` - Update service offerings
- `testimonials.ts` - Add client testimonials

### Add Profile Image

1. Place image in `public/images/`
2. Update `About.tsx` to use Next.js Image component

```tsx
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Mayur Makwana"
  width={300}
  height={300}
  className="rounded-2xl"
/>
```

## 🎬 Animations

Project uses Framer Motion for animations:
- Smooth transitions
- Scroll-triggered animations
- Hover effects
- Staggered animations

## 📊 Performance Optimization

- ✅ Code splitting
- ✅ Image optimization
- ✅ CSS-in-JS
- ✅ Next.js static generation
- ✅ Lighthouse score: 90+

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the 'out' directory to Netlify
```

### Environment Variables for Production

Set these in your deployment platform:
- `NEXT_PUBLIC_EMAIL_JS_SERVICE_ID`
- `NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY`

## 📝 SEO Optimization

- ✅ Metadata in `app/layout.tsx`
- ✅ Open Graph tags
- ✅ Structured data ready
- ✅ Mobile responsive
- ✅ Fast loading times

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

## 📦 Dependencies

- **Next.js** - React framework
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **React Icons** - Icon library
- **TypeScript** - Type safety

## 📄 License

MIT - Feel free to use this template for your portfolio!

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Email: mayur.r.makwana@gmail.com
- LinkedIn: linkedin.com/in/mayurmakwana

---

**Made with ❤️ by Mayur Makwana**
