# Changelog

All notable changes to this project are documented here.
Format: **Date · Author · What · Why**

---

## 2026-03-15 · @diogoluxo + Claude Code

### Semantic Layer page — Implement from Figma (node `162:87985`) at `/semantic-layer`
**What changed**
- Created `src/app/pages/SemanticLayerPage.tsx` — semantic layer overview page with collapsible sections
- Page header: sparkle icon + "Semantic layer" title + "Edit" primary button
- Left secondary nav (210px): Overview (active, teal), Entities (6), Relationships (6), Metrics (10), Knowledge Graph
- Main content area: Entities section (6 rows: Customer, Order, Product, Campaign, support ticket, web session — each with attributes/relationships/metrics counts), Relationships section (6 rows with One-to-Many/Many-to-One/One-to-One types), Metrics section (collapsed)
- Right sidebar (220px): Owner, Created on, Last updated, Last updated by (all with Antonio avatar), Manage privileges link, Datasets included (6 iceberg tables)
- All sections are collapsible via chevron toggle
- LeftNav Semantic Layer item now links to `/semantic-layer` with active state support
- Added `/semantic-layer` route to `routes.ts`

**Why**
User requested Figma node `162:87985` (AI-semantic-layer file) implemented as the Semantic Layer nav destination.

---

## 2026-03-15 · @diogoluxo + Claude Code

### SQL Runner page — Implement from Figma (node `7978:139494`) at `/new-query`
**What changed**
- Created `src/app/pages/NewQueryPage.tsx` — full SQL Runner workspace matching Figma design
- Left panel (272px): Data/Scripts tabs with collapse `←` button, All/Starred(0)/Name-sort sub-header, search, dataset tree with column-level type badges (`#` numeric, `ab` text, `⊡` datetime)
- Tab bar: multiple timestamp-based tabs with close buttons, functional `+` add-tab, wiki icon on right
- Action header: Run | Preview | Engine selector | Hide SQL pane | Settings | Save as view (dropdown)
- SQL editor: 5 `SELECT * FROM ...` lines, Menlo font, proper syntax coloring
- Empty state: Dremio narwhal mascot illustration + "Run a Query to Get Started"
- LeftNav SQL item now links to `/new-query` with active state support
- Added `/new-query` route to `routes.ts`

**Why**
User requested Figma node `7978:139494` (SQL Runner sample page) as the SQL nav destination.

---

## 2026-03-15 · @diogoluxo + Claude Code

### Catalog page — Implement from Figma (node `12649:20001`)
**What changed**
- Created `src/app/pages/CatalogPage.tsx` — dataset details page with catalog-specific left panel, DatabaseHeader, SQL editor, and populated result table
- Implemented `src/app/components/DatabaseHeader.tsx` — 64px header with entity icon + name/schema, and tabs: Data (active, teal underline), Details, Lineage, Reflections, Settings gear
- Updated `src/app/components/LeftNav.tsx` — Catalog nav item now shows active state (teal background, teal icon) when `activePage === "catalog"`
- Added `/catalog` route to `src/app/routes.ts`
- Catalog left panel includes Data/Scripts tabs, All/Starred(0) sub-tabs, search field, and full namespace/folder/table tree matching the Figma dataset tree
- Main section reuses the SQL Runner layout: TabBar → ActionHeader → ContextBar → SQL editor → ResultActionBar (with real data: 21 columns, 1200 rows, 1s) → Result table

**Why**
User requested Figma node `12649:20001` (main design system file) implemented as the Catalog page. The page is a "dataset details" view showing a database catalog tree alongside the SQL Runner workspace.

---

## 2026-03-15 · @diogoluxo + Claude Code

### HomePage — Update to final design from Figma (node `12400:79817`) + AI agent navigation
**What changed**
- "Welcome to Dremio!" gradient heading (32px semibold, teal→green→yellow-green gradient)
- Prompt box: 80px tall, teal border `#299fb1`, subtle shadow, gradient placeholder text
- Suggestion chips: plain white rounded pills with AI spark icon, separated by vertical hairline dividers (no chip borders)
- Get Started cards: gradient backgrounds matching Figma (`white→#FFF9EF` for Add Data, `white→#E7FBF9` for Explore), 138px height, with data source and SQL editor illustrations
- Quick Actions: 3 cards with bg-[var(--background)] icon containers, correct Figma icons
- TopNav: added "AI agent" button (teal border, spark icon) linking to `/ai-agent`
- AI Agent page now accessible at `/ai-agent`; Home nav item in LeftNav links back to `/`

**Why**
User requested the final Figma design (main design system file, node `12400:79817`) and incremental AI agent page access. TopNav updated to match Figma spec with the AI agent CTA button.

---

## 2026-03-15 · @diogoluxo + Claude Code

### HomePage — Implement from Figma (node `7957:13822`)
**What changed**
- Created `src/app/pages/HomePage.tsx` — full home page with AI prompt, Get Started cards, and Quick Actions
- AI prompt bar: teal-bordered input with gradient placeholder text, send button, and 3 suggestion chips
- "Get Started" section: two side-by-side cards (Add Data with connector illustration, Explore with Sample Data with mini dashboard illustration)
- "Quick Actions" section: three cards (Run Queries, Add Users, Deep Dive with Dremio University) each with icon + title + description
- Updated `LeftNav.tsx` to accept `activePage` prop — Home nav item shows active state (teal background) when on `/`
- Added `/` route → `HomePage`, moved AI Agent to `/ai-agent` in `routes.ts`

**Why**
New home page design was specified in Figma (file `EewwUz0PTD0TY5t3KCEDaO`, node `7957:13822`). Implemented using design tokens and existing components.

---

## 2026-03-14 · @diogoluxo + Claude Code

### Scaffold all missing Figma components locally — 50 stub files
**What changed**
- Created 50 new component stub files matching every Figma component that had no local counterpart
- Organized into 4 new directories: `sql-runner/` (22 components), `privileges/` (9), `catalog/` (5), `form/` (7), plus 7 page-level components
- Added complete Figma Component → Local File mapping table to CLAUDE.md (70 entries)
- Updated CLAUDE.md "Project Stack & Component Locations" section with all new directories

**Why**
Audit via Figma REST API revealed 50 UI components defined in the Figma design system with no local file. Adding stubs ensures the AI agent can find the correct file for every Figma component, and each stub's JSDoc comment references the Figma source page for future implementation.

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
