# Scoutable Website

A modern, performant website for Scoutable - a talent marketplace and intelligence platform for government and enterprise contractors. Built with Next.js, TypeScript, Tailwind CSS, and Storyblok CMS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Headless CMS**: Storyblok for content management with visual editing
- **Design System**: Comprehensive UI components with dark mode support
- **Performance Optimized**: Image optimization, code splitting, lazy loading
- **SEO Ready**: Next SEO, structured data, sitemap generation
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation
- **Security First**: IRAP-aligned architecture, Australian data residency
- **Analytics**: GA4 and Plausible integration
- **Responsive**: Mobile-first design with modern UI patterns

## 🏗️ Architecture

### Information Architecture
```
Home
├── Product
│   ├── Overview
│   ├── Modules
│   │   ├── Talent Marketplace
│   │   ├── Talent Intelligence
│   │   └── Talent Development
│   ├── Features
│   ├── Security & Compliance
│   └── Integrations
├── Solutions
│   ├── Government Procurement
│   ├── Program Delivery
│   ├── HR & Talent Acquisition
│   ├── Vendor Management
│   └── Partner Ecosystem
├── Pricing
├── Resources
│   ├── Guides & Playbooks
│   ├── Case Studies
│   ├── Blog
│   └── Webinars
├── Company
│   ├── About
│   ├── Careers
│   ├── Press
│   └── Contact
└── Request a Demo
```

### Tech Stack

**Frontend**
- Next.js 14 (App Router, SSR/ISR)
- TypeScript for type safety
- Tailwind CSS for styling
- Headless UI for accessible components
- Lucide React for icons

**CMS & Content**
- Storyblok for content management
- Visual editor with component-based content
- Rich text rendering
- Image optimization

**Performance & SEO**
- Next.js Image optimization
- Code splitting and lazy loading
- Next SEO for meta tags
- Structured data (JSON-LD)
- Sitemap and robots.txt generation

**Analytics & Monitoring**
- Google Analytics 4
- Plausible (privacy-friendly alternative)
- Error tracking and monitoring

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Storyblok account (for CMS)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scoutable-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
# Storyblok
STORYBLOK_ACCESS_TOKEN=your_storyblok_access_token
STORYBLOK_PREVIEW_TOKEN=your_storyblok_preview_token

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=scoutable.app

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://scoutable.app
NEXT_PUBLIC_SITE_NAME=Scoutable
```

5. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📝 Content Management

### Storyblok Setup

The website uses Storyblok as a headless CMS with the following content types:

**Page Types**
- `page` - Generic pages
- `modulePage` - Product module pages
- `useCasePage` - Solution/use case pages
- `resourceArticle` - Blog posts, guides, etc.
- `caseStudy` - Customer case studies
- `pricingPage` - Pricing page
- `securityPage` - Security documentation
- `companyPage` - Company pages

**Content Blocks**
- `hero` - Hero sections with CTAs
- `feature_grid` - Feature grids with icons
- `stats` - Statistics/metrics
- `testimonial` - Customer testimonials
- `logo_cloud` - Customer/partner logos
- `cta` - Call-to-action sections
- `faq` - FAQ accordions
- `tabs` - Tabbed content
- `steps` - Process steps
- `section` - Rich text content

### Content Guidelines

1. **Australian English**: Use Australian spelling and terminology
2. **Government Focus**: Content should speak to government buyers and enterprise
3. **Security Emphasis**: Highlight IRAP alignment and data residency
4. **Outcome-Oriented**: Focus on business outcomes, not just features

## 🎨 Design System

### Colors
- **Primary**: Blue scale for CTAs and key elements
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green for positive states
- **Warning**: Amber for warnings
- **Error**: Red for errors

### Typography
- **Font**: Inter (system fallback)
- **Scale**: Tailwind's default scale
- **Weight**: 300-900 range

### Components
- Buttons (primary, secondary, ghost, outline)
- Cards with variants
- Badges and tags
- Form inputs and textareas
- Navigation components
- Layout components

### Dark Mode
Full dark mode support with automatic system preference detection and manual toggle.

## 🔒 Security & Compliance

### Security Features
- IRAP-aligned architecture
- Australian data residency
- End-to-end encryption
- Role-based access control
- Comprehensive audit logging

### Privacy & Compliance
- Privacy Act 1988 compliance
- GDPR compliance for international users
- Cookie consent management
- Data minimization principles

## 📊 Analytics & Monitoring

### Analytics Setup
- Google Analytics 4 for detailed insights
- Plausible for privacy-friendly analytics
- Custom event tracking for conversions
- Performance monitoring

### Key Metrics
- Page views and user sessions
- Demo request conversions
- Newsletter signups
- Resource downloads
- Contact form submissions

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables (Production)
Ensure all environment variables are set in your production environment:
- Storyblok tokens
- Analytics IDs
- Site URL and name
- Any third-party API keys

### Performance Targets
- Lighthouse score ≥90 (Performance/Best Practices/SEO/Accessibility)
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3.5s on 4G
- First Contentful Paint (FCP) < 2s

## 🧪 Testing

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation
- Focus management

### Performance Testing
- Lighthouse audits
- Core Web Vitals monitoring
- Mobile performance testing
- Network throttling tests

## 📚 Documentation

### Content Model Documentation
Detailed documentation of all Storyblok content types and blocks is available in the CMS.

### API Documentation
REST API endpoints for contact forms, newsletter signup, and other integrations.

### Deployment Guide
Step-by-step deployment instructions for various hosting platforms.

## 🤝 Contributing

1. Follow the established code style and conventions
2. Ensure accessibility standards are maintained
3. Test on multiple devices and browsers
4. Update documentation for any new features
5. Follow Australian English spelling and terminology

## 📞 Support

For technical support or questions:
- Email: dev@scoutable.app
- Documentation: [Internal wiki]
- Status Page: https://status.scoutable.app

## 📄 License

Copyright © 2025 Scoutable Pty Ltd. All rights reserved.
