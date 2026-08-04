# Contributing to NovaMind AI

Thank you for your interest in contributing to NovaMind AI!

## Getting Started

1. **Fork the Repository**: Clone your fork locally.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   Copy `.env.example` to `.env` and configure your local SQLite database:
   ```bash
   cp .env.example .env
   npx prisma db push
   npx prisma db seed
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Development Guidelines

- **TypeScript**: All new code must be strictly typed. No `any` allowed.
- **Component Styling**: Use Tailwind CSS tokens. Keep styling dark-theme harmonized with the NovaMind AI aesthetic (`#050511`).
- **Build Verification**: Ensure `npm run build` succeeds before opening a Pull Request.

## Submitting Pull Requests

1. Create a feature branch (`git checkout -b feature/amazing-feature`).
2. Commit your changes with clear messages (`git commit -m 'Add vision stream endpoint'`).
3. Push to your branch and open a Pull Request.
