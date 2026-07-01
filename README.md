# Technical Documentation Hub

Bilingual technical documentation site — Arabic (RTL) and English (LTR) — covering CI/CD, Linux administration, and DevOps topics.

## Structure

```
.
├── index.html              # Root → redirects to /ar/
├── ar/                     # Arabic content (RTL)
│   ├── index.html          # Dashboard
│   └── courses/
│       ├── github-actions/ # GitHub Actions Guide
│       ├── linux-admin/    # Linux Administration Guide
│       └── openshift-4.14-upi/  # OpenShift 4.14 UPI on vSphere
├── en/                     # English content (LTR)
│   ├── index.html          # Dashboard
│   └── courses/
│       ├── github-actions/ # GitHub Actions Guide
│       ├── linux-admin/    # Linux Administration Guide
│       └── openshift-4.14-upi/  # OpenShift 4.14 UPI on vSphere
├── css/                    # Shared styles
│   └── style.css
├── js/
│   ├── theme.js            # Light/dark mode toggle (shared key: `claude-guide-theme`)
│   ├── lang.js             # Language toggle (swaps /en/ ↔ /ar/ in path)
│   └── search.js           # Course search on dashboard
├── Dockerfile              # nginx:alpine
├── docker-compose.yml      # Port 8080 → 80
└── nginx.conf              # gzip, static serving
```

## Quick Start

```bash
docker compose up -d --build
```

Open http://localhost:8080

## Features

- **Dark/light mode** — toggle via 🌙/☀️ button; persists across all pages via `localStorage`
- **Language toggle** — switches between Arabic (`/ar/`) and English (`/en/`) versions of the current page
- **RTL/LTR layout** — sidebar on right for Arabic, left for English; full direction-aware CSS
- **Code blocks** — macOS-style dots, syntax highlighting, JetBrains Mono
- **Responsive** — sidebar hides on screens < 900px

## Stack

Static HTML/CSS/JS — no framework. Served via nginx in Docker.

## Skill

This project was built using the `claude-theme` skill, which defines the design system for both Arabic (RTL) and English (LTR) modes. See `~/.config/opencode/skills/claude-theme/SKILL.md`.
