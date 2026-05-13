# Security Policy

## Supported Versions

| Version          | Supported |
| ---------------- | --------- |
| Latest on `main` | Yes       |
| Older branches   | No        |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability, please send an email to:

**security@ecocan.africa**

Include:

- A description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

You will receive an acknowledgment within **48 hours** and a full response within **7 days**.

## Disclosure Policy

- We follow responsible disclosure practices.
- We will coordinate with you on the timeline for public disclosure.
- We will credit reporters in release notes unless you prefer anonymity.

## Scope

In scope:

- The ECOCAN web application (this repo)
- Authentication and session handling
- Data exposure vulnerabilities
- Content Security Policy bypasses

Out of scope:

- Social engineering attacks
- Physical security
- Third-party services (Vercel, GitHub)

## Security Measures

- Content-Security-Policy headers on all routes
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- GDPR and Kenya ODPC compliance
