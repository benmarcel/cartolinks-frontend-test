# Next.js + TypeScript Assignment

This project is a **frontend application** built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).  
It demonstrates responsive UI components such as a **Navbar**, **Hero Carousel**, **Feature Section**, **gallery section**, and **footer**, styled with [Tailwind CSS](https://tailwindcss.com/).

---

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/docs/app)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Project Structure
frontend-assignment/
├── .next/                  # Next.js build output (auto-generated)
├── node_modules/           # Dependencies
├── public/                 # Static assets (images, icons, etc.)
│   
│
├── src/
│   └── app/                # Next.js App Router pages and layouts
│       ├── components/     
│       │   ├── Navbar.tsx
│       │   ├── HeroCarousel.tsx
│       │   ├── CarouselCard.tsx
│       │   ├── FeatureSection.tsx
│       │   ├── FeatureCard.tsx
│       │   └── context/
│       │       └── ThemeContext.tsx
│       │
│       ├── globals.css     # Tailwind + global styles
│       ├── layout.tsx      # Root layout (App Router)
│       └── page.tsx        # Entry page
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json




---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/benmarcel/cartolinks-frontend-test.git
cd cartolinks-frontend-test

npm install
# or
yarn install
npm run dev
# or
yarn dev

```

# Features

## Responsive Navbar
With theme toggle, icons, and user profile dropdown.

## Hero Carousel
Custom-built slider with:

Next/Previous navigation

Dot indicators

Peek preview 

## Feature Section
Grid-based layout showing 8 feature cards (2 rows × 4 columns on large screens, responsive on smaller screens).


