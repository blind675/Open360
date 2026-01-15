This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview

Open360 is a project discovery web app built with Next.js. It lists projects from a MongoDB database, lets users search by title, and shows project details on a dedicated page. Authenticated users can follow projects, and server actions power the data fetching and follow/unfollow behavior.

## Features

- **Project catalog** with search-by-title filtering.
- **Project detail pages** with images, descriptions, and follow status.
- **Google authentication** via NextAuth.
- **MongoDB-backed** data storage using Mongoose models.
- **Scraper integration** to ingest project data via an external API.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18 + Tailwind CSS
- **Auth:** NextAuth (Google provider)
- **Database:** MongoDB (Mongoose)

## Environment Variables

Create a `.env.local` file with the following values:

```bash
# MongoDB connection string
MONGO_DB_URI=

# Google OAuth (NextAuth)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# External scraper service URL
API_BASE_URL=
```

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Common Scripts

```bash
# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
