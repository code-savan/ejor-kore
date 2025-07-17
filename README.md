# EJOR-KORE SERVICES LTD - Professional Website

A modern, professional website for EJOR-KORE SERVICES LTD, Nigeria's premier water treatment and geotechnical services company.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Single Page Application**: All content in sections with smooth scrolling navigation
- **WhatsApp Integration**: Floating WhatsApp button and contact CTAs
- **Services Showcase**: Comprehensive display of water treatment and geotechnical services
- **Client Testimonials**: Social proof with customer reviews
- **Project Portfolio**: Showcase of recent completed projects
- **Company Information**: About section with company history and expertise
- **Contact Information**: Multiple ways to get in touch

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your logo**:
   - Replace `public/logo.jpg` with your actual company logo
   - Ensure it's sized appropriately (recommended: 150x150px)

3. **Update contact information**:
   - Replace `+234XXXXXXXXX` with your actual WhatsApp number
   - Update email addresses in the contact section
   - Update company address and location

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### WhatsApp Integration
Update the WhatsApp number in the following files:
- `src/components/whatsapp-button.tsx`
- `src/components/navigation.tsx`
- `src/components/footer.tsx`
- `src/app/page.tsx`

### Company Information
Update company details in:
- `src/app/layout.tsx` (metadata)
- `src/app/page.tsx` (all sections)
- `src/components/footer.tsx`

### Services
Modify services in `src/app/page.tsx` in the `ServicesOverview` function to match your specific offerings.

### Project Images
Add actual project images to the `public` folder and update the image paths in the `RecentProjects` section.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `out` directory to your hosting provider

## Performance Optimizations

- **Image Optimization**: Uses Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for better performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Mobile First**: Responsive design for all devices
- **Fast Loading**: Optimized for Lighthouse scores 90+

## Sections

1. **Hero Section**: Compelling headline with main CTA
2. **Services Overview**: Four main service categories
3. **Why Choose Us**: Company differentiators
4. **Recent Projects**: Portfolio showcase
5. **Client Testimonials**: Social proof
6. **About Section**: Company information
7. **Contact Section**: Multiple contact methods

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For technical support or customization requests, contact your development team.

---

© 2024 EJOR-KORE Services Ltd. All rights reserved.
