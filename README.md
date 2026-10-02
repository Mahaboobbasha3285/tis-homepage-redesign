# Tula's International School — Homepage Redesign

A modern, animated homepage concept for Tula's International School (TIS), built as a frontend developer take-home assignment.

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes

## Features

- Responsive desktop / tablet / mobile layout
- Scroll-triggered section reveals with Framer Motion
- Desktop custom cursor interaction
- Animated light / dark theme switcher
- Scroll progress indicator
- Reusable component architecture
- Semantic sections and accessible navigation
- External links to official TIS pages for source content

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

## Project structure

```text
app/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Stats.jsx
│   ├── Experience.jsx
│   ├── Sports.jsx
│   ├── Campus.jsx
│   ├── Testimonials.jsx
│   ├── Admissions.jsx
│   ├── Footer.jsx
│   ├── MotionReveal.jsx
│   ├── CustomCursor.jsx
│   ├── ScrollProgress.jsx
│   ├── ThemeToggle.jsx
│   └── ThemeProvider.jsx
├── globals.css
├── layout.jsx
└── page.jsx
```

## Design decisions

The page uses a restrained editorial visual system: deep forest green, warm paper tones and muted gold. Large serif display typography creates a premium education/editorial feel while the body type stays highly readable.

Animations are deliberately short and viewport-triggered rather than continuous. This keeps the experience expressive without turning the homepage into a performance-heavy animation demo.

The custom cursor is enabled only for fine-pointer devices and is hidden on touch devices.

## Content source

Core facts and copy direction were based on the official Tula's International School website:

https://tis.edu.in/

The implementation is a redesign concept and should be reviewed against the current official brand guidelines/assets before production use.

## Before submission

- Replace remote demo imagery with approved TIS image assets if the company provides them.
- Verify all links.
- Run `npm run build`.
- Test Chrome, Edge and Safari plus mobile widths.
- Push the final version to a public GitHub repository.
- Deploy the final repository to Vercel.
