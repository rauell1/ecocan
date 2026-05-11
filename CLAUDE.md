# Ecocan + AI Assistants

This document describes how AI coding assistants (Claude, Copilot, etc.) should work with the Ecocan repo.

## Goals

- Keep generated code idiomatic with the existing React + Tailwind + Next.js patterns.
- Preserve accessibility, responsiveness, and performance.
- Avoid generating secrets or committing credentials.

## Usage guidelines

- Prefer editing existing components in `components/` instead of creating many one-off variants.
- Follow the established folder structure when adding new pages or sections under `app/`.
- Reuse `components/ui` primitives and `components/shared` blocks wherever possible.
- When adding new dependencies, ensure they are lightweight and fit the current stack.

## Auto-updating strategy

These guidelines can evolve with the codebase. To auto-update:

- Maintain a script that inspects new components and patterns (e.g., new shared utilities) and adjusts examples and recommendations here.
- Or treat this file as living documentation, updated via PRs whenever major architectural changes are introduced.

## Safety & review

- Always run `npm run lint` and `npm run build` locally or in CI before merging AI-generated changes.
- Prefer small, focused pull requests to keep review manageable.
