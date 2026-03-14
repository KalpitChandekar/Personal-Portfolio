# Personal Portfolio

A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

This project showcases Kalpit Chandekar's work, skills, experience, testimonials, and contact details in a responsive single-page layout with animated sections and a custom neon visual theme.

## Live Overview

The portfolio includes:

- Hero section with animated intro and personal branding
- About section with strengths and professional summary
- Experience timeline
- Skills grid with mobile-friendly item limits
- Projects showcase with featured work
- Testimonials section
- Contact form with EmailJS integration
- Responsive footer and smooth scrolling navigation

## Tech Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- React Three Fiber + Drei
- Lucide React
- EmailJS

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs linting

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  sections/
    hero.tsx
    about.tsx
    experience.tsx
    skills.tsx
    projects.tsx
    testimonials.tsx
    contact.tsx
  ui/
    navigation.tsx
    footer.tsx
```

## Contact Form

The contact section currently sends messages through EmailJS.

If you reuse this project, update the EmailJS configuration in [components/sections/contact.tsx](/d:/Personal-Portfolio/components/sections/contact.tsx) with your own service ID, template ID, and public key.

## Customization

You can easily customize:

- Personal details and copy in the section components
- Social links in the hero, contact, and footer areas
- Project cards in `components/sections/projects.tsx`
- Skills in `components/sections/skills.tsx`
- Theme colors in `app/globals.css`

## Deployment

This project can be deployed on Vercel:

1. Push the repository to GitHub
2. Import it into Vercel
3. Deploy with the default Next.js settings

## Notes

- The UI is optimized for desktop and mobile layouts
- Animations use Framer Motion and GSAP together
- Some project and testimonial content is static and can be updated directly in the component files

## License

This project is open for learning and personal inspiration. If you reuse it publicly, update the branding and content to match your own identity.
