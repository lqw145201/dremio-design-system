# Changelog

All notable changes to this project are documented here.
Format: **Date · Author · What · Why**

---

## 2026-03-12 · @lqw145201 + Claude Code

### CLAUDE.md — Stronger Figma workflow rules
**What changed**
- Rewrote Figma MCP Workflow section into an explicit 4-step process (map hierarchy → read each component → implement with tokens → validate screenshot)
- Added "Component name = content contract" section with concrete SQL Runner examples
- Added Figma node reference table for all SQL Runner components
- Added 5 new critical rules (#11–15)

**Why**
When building the SQL Runner page from memory (without reading Figma first), multiple structural mistakes were made: Run/Preview buttons placed in the wrong component, wrong icon used in tabs, brand colors used for SQL syntax, result action bar missing entirely. Root cause was skipping the Figma read step. Rules updated to enforce reading the page hierarchy before writing any code.

---

## 2026-03-12 · @lqw145201 + Claude Code

### SQL Runner page — Full rebuild from Figma (node `7978:139494`)
**What changed**
- Top nav: replaced engine selector + script name + Run/Preview with correct `Nav/Top Nav` (First Lakehouse dropdown · centered search bar · AI agent button)
- Action Header: Run + Preview + Engine pill + Hide SQL pane + Settings/Privilege icon + Save as view — now correctly placed below the tab bar
- Tab bar: removed incorrect `IconSqlFunction` leading icons; tabs are label + close only, 240px wide
- SQL editor: font changed to Menlo 12px/20px (Figma spec); syntax colors switched to proper code-editor palette (keywords `#0033B3`, strings `#067D17`, functions `#7A3E9D`)
- Result section: added `SQLRunner/Result Action Bar` (Add Field · Group By · Join · Filter Columns · 0 Columns, all disabled in empty state)
- Wiki panel collapsed (35px) added on far right

**Why**
Initial implementation was built from general product intuition rather than reading the Figma design. All six errors traced back to that single skipped step.

---

## 2026-03-12 · @lqw145201 + Claude Code

### README.md — Team onboarding guide
**What changed**
- Replaced placeholder README with a step-by-step guide for product team members
- Covers: prerequisites, clone steps, running dev server, how to prompt Claude Code, iterating on designs, pulling updates, tips table

**Why**
Team members need to be able to clone the repo and immediately start using Claude Code with the correct design system rules, without any manual setup or explanation.

---

## 2026-03-12 · @lqw145201 + Claude Code

### Project setup — GitHub repo + CLAUDE.md tracking
**What changed**
- Moved `CLAUDE.md` from parent directory into `dremio-prototype/` (git root) so it is tracked and pushed to GitHub
- Created `.gitignore` excluding `node_modules/`, `dist/`, `.DS_Store`, `*.local`
- Updated git remote from `mona_test_aiagent` to `dremio-design-system`
- Initial push to `https://github.com/lqw145201/dremio-design-system`

**Why**
`CLAUDE.md` was outside the git root and not being shared. Moving it into the repo means every teammate who clones and runs `claude` automatically inherits the design system rules — no manual setup needed.

---

## How to add a new entry

Copy this template and add it at the top of the file (newest first):

```
## YYYY-MM-DD · @your-handle + Claude Code

### Component or file name — Short description
**What changed**
- Bullet list of specific changes

**Why**
One or two sentences explaining the motivation or problem solved.
```

> Claude Code should update this file automatically whenever a page, component, or rule is added or significantly changed.
