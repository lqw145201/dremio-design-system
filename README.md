# Using Claude Code with the Dremio Design System

This guide is for anyone on the product team who wants to build UI screens or components using Claude Code with our shared Dremio design system rules already baked in.

---

## Prerequisites

1. **Install Claude Code** — download from https://claude.ai/download (desktop app)
2. **Install Node.js** — https://nodejs.org (LTS version)
3. **Have git installed** — most Macs have it; run `git --version` to check
4. **Access to the Dremio Figma file** — ask for the link if you don't have it

---

## Step 1 — Clone the repo

Open Terminal and run:

```bash
git clone https://github.com/lqw145201/dremio-design-system.git
cd dremio-design-system
npm install
```

This downloads the project and installs all dependencies. You only do this once.

---

## Step 2 — Open Claude Code in the project folder

```bash
claude
```

Run this from inside the `dremio-design-system/` folder. Claude Code will automatically read `CLAUDE.md` — the file that tells it our design system rules, token names, component locations, and Figma workflow. **You don't need to set anything up manually.**

To confirm it loaded, you can ask: *"What design rules are you following for this project?"*

---

## Step 3 — Start the dev server (to preview your work)

In a separate terminal tab:

```bash
npm run dev
```

Then open http://localhost:5173 in your browser. Changes you make with Claude Code will appear here live.

---

## Step 4 — Ask Claude Code to build something

Claude Code is most effective when you give it a Figma node to reference. Two ways to do this:

**Option A — Give it a Figma URL or node ID:**
> "Build the Cost Management settings page. Reference Figma node `12400:83714` for the layout."

**Option B — Describe what you need:**
> "Add a new settings section for 'Engine Pools' that follows the same layout as the existing sections — sidebar nav item, page header, scrollable content area with a table."

Claude Code will:
- Fetch the Figma design context automatically
- Use the correct tokens (`--primary`, `--secondary-foreground`, etc.) instead of hardcoded hex values
- Use the existing `<Button>`, icon, and table components from the codebase
- Follow the correct hover states, spacing, and typography

---

## Step 5 — Review and iterate

Check the browser at localhost:5173. If something looks off, tell Claude Code specifically what's wrong:

> "The badge colors don't match — the warning badge should have an orange border."
> "The button height looks too tall, it should be 32px."
> "The table row actions should only show on hover."

Claude Code knows the design system rules and will correct itself.

---

## Step 6 — Get updates from teammates

When someone on the team updates the design rules or code and pushes to GitHub:

```bash
git pull
```

That's it. The next time you start Claude Code, it will automatically use the updated `CLAUDE.md` rules.

---

## Tips for better results

| Do | Don't |
|---|---|
| Reference a Figma node ID when possible | Ask it to "guess" a layout from scratch |
| Say the component variant: "secondary button", "ghost button" | Say "a button" without specifying |
| Ask it to check existing components first | Ask it to build something that already exists |
| Review in the browser after each change | Let changes accumulate without checking |

---

## How the design rules work

`CLAUDE.md` in the project root is a plain text file that Claude Code reads at the start of every session. It encodes our team's design decisions — token names, component patterns, spacing, hover states, Figma workflow steps — so you don't have to explain them every time. When a rule changes (e.g., we update a hover color after a design review), one person updates `CLAUDE.md`, pushes to GitHub, and everyone inherits it on their next `git pull`.
