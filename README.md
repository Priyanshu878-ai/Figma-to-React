# Elementum — Landing Page

A responsive React implementation of the "Elementum" landing page, built from a Figma design.

## Live Demo
https://elementum-landing-sage.vercel.app/

## Tech Stack
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion (animations)

## Features
- Fully responsive layout (mobile, tablet, desktop)
- Reusable components (`Highlight`, `ScribbleUnderline`, `PillButton`, `CircleImage`)
- Subtle hover states and scroll-based animations
- Sections: Navbar, Hero, Feature highlights, Services/Offer list, Testimonials, Newsletter & Footer

## Getting Started

Clone the repo and install dependencies:

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
src/
  components/   → page section components
  constants/    → shared data (nav links, layout values)
  assets/       → local images
public/
  avatars/      → design images
  fonts/        → custom fonts
\`\`\`