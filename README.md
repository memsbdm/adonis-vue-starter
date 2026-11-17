# Adonis Inertia Vue Starter

A full-stack TypeScript starter built with AdonisJS, Inertia.js and Vue.

## Tech Stack

- **Backend:** AdonisJS 7, TypeScript, Kysely, PostgreSQL, VineJS
- **Frontend:** Vue 3, Inertia.js 3, Vite 8, Tailwind CSS 4
- **UI:** Ark UI, Lucide, Storybook
- **Tooling:** Yarn 4, Oxlint, Oxfmt, Lefthook
- **Infrastructure:** Docker, GitHub Actions

## Getting Started

### Requirements

- Node.js 26.13.1
- Yarn 4.18.1
- Docker

### Installation

```bash
yarn install
cp apps/web/.env.example apps/web/.env
```

Generate the application key:

```bash
cd apps/web
node ace generate:key
cd ../..
```

### Start PostgreSQL

```bash
docker compose up -d
```

### Start development

```bash
yarn dev
```

Open http://localhost:3333
