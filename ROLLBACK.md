# Ecocan Rollback Guide

This document tracks deployment history and provides guidance on how to roll back to previous stable states.

## How this file updates

Currently, this file is generated and maintained manually by contributors or automation scripts (GitHub Actions, CI) that append deployment and rollback information after each change.

To make it auto-update after every change, wire a CI workflow (e.g., GitHub Actions) that:
- Detects merges to `main`.
- Runs a script to append a new entry under **Deployment Log** with commit hash, author, date, and summary.
- Commits the updated `ROLLBACK.md` back to `main`.

## Deployment Log

> Add one entry per production deployment. CI can automate this section.

- _Initial scaffold_: First migration of Ecocan website to this repository.

## How to roll back

1. Identify the last known good commit from this log or your deployment provider (e.g., Vercel dashboard).
2. Create a rollback branch:
   - 
3. Push the branch and create a pull request titled **"Rollback to <commit>"**.
4. Verify the preview deployment.
5. Merge to `main` and confirm production health.

You can enhance this with:
- Links to Vercel deployments.
- Checklists for validating key pages.
- Incident IDs or ticket references.
