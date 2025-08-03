# 🛒 E-Commerce Monorepo

This monorepo contains the codebase for a complete e-commerce platform built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **TurboRepo**.

## 📁 Structure

```
e-com/
│
├── apps/             → Application code
│   ├── admin/        → Admin dashboard (Next.js)
│   └── web/          → Customer-facing web app (Next.js)
│
├── packages/         → Shared services & UI components
│   ├── services/     → API clients, auth services, stores
│   └── ui/           → Shared UI components and utilities
│
├── package.json      → Root workspace configuration
├── turbo.json        → TurboRepo pipeline configuration
└── README.md         → You're here
```

## 📦 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Monorepo Management**: TurboRepo
- **State Management**: React Context / Zustand (via services/store)
- **API**: Modular API service via shared `services` package

## 🧰 Getting Started

### Prerequisites

- Node.js `>=18`
- pnpm or npm
- TurboRepo (`npx turbo`)

### Install Dependencies

```bash
npm install
```

### Run all apps

```bash
npm run dev
```

Or run each app individually:

```bash
npm run dev:admin 
npm run dev:web
```

## 📂 Workspaces

This monorepo uses workspaces (configured in `package.json` and `turbo.json`).

---

## 👥 Contributing

1. Clone repo
2. Run `npm install`
3. Start dev servers
4. Code, test, and push PRs

---

Sayyed Kamran Ali
