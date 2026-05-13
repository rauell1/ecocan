# Contributing to ECOCAN

Thank you for your interest in contributing to ECOCAN's codebase.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/rauell1/ecocan.git
cd ecocan

# Install dependencies (pnpm only — do not use npm or yarn)
pnpm install

# Start the dev server
pnpm dev
```

## Development Workflow

1. **Branch naming**: `feat/description`, `fix/description`, `chore/description`
2. **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/)
   - `feat:` new feature
   - `fix:` bug fix
   - `chore:` maintenance (deps, config)
   - `docs:` documentation only
3. **Pull requests**: Keep PRs small and focused. One concern per PR.

## Code Quality

Before pushing, the pre-commit hook runs `lint-staged` automatically. You can also run manually:

```bash
pnpm lint          # ESLint check
pnpm typecheck     # TypeScript strict check
pnpm format:check  # Prettier formatting check
pnpm test          # Vitest unit tests
pnpm build         # Full Next.js production build
```

## Key Conventions

- **Package manager**: `pnpm` always. Never commit `package-lock.json` or `yarn.lock`.
- **Components**: Edit existing components in `components/` rather than creating one-off variants.
- **Pages**: Follow the App Router folder structure under `app/`.
- **Styling**: Tailwind CSS only. Use design tokens from `tailwind.config.ts` and CSS variables from `app/globals.css`.
- **Animation**: GSAP + ScrollTrigger inside `useEffect` with `gsap.context()` cleanup. Never at module scope.
- **Images**: Use `next/image` — never raw `<img>` tags.
- **No secrets**: Never commit `.env` files or API keys.

## Testing

```bash
pnpm test              # Run all tests once
pnpm test:watch        # Watch mode
pnpm test:coverage     # With coverage report
```

Place tests in `__tests__/` mirroring the source path (e.g., `__tests__/lib/utils.test.ts`).

## Questions?

Open an issue or email [hello@ecocan.africa](mailto:hello@ecocan.africa).
