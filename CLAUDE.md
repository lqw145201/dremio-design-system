# Dremio Prototype – Design System Rules

## Project Stack & Component Locations
- React + Vite + TypeScript + Tailwind CSS v4 (`@theme inline` in `src/styles/theme.css`)
- **Icons (106 Dremio icons):** `src/app/components/icons/` — check here first, never install new icon packages
- **UI primitives:** `src/app/components/ui/` (Button, Table, Badge, etc.)
- **Pages:** `src/app/pages/` | **Components:** `src/app/components/`
- All colors via CSS tokens from `src/styles/theme.css` — never hardcode hex

## Figma MCP Workflow (Required for Every Component)

### Step 1 — Map the full page hierarchy BEFORE writing any code
Call `get_figma_data` (or `get_design_context`) on the **page-level node** first. Read every named child component in the returned tree. Build a mental map of:
- Which components exist and where they sit in the layout
- What each component's **name** tells you about its responsibility
- Which children belong to which parent

Do not write a single line of implementation until this map is complete.

### Step 2 — Read each named component individually
For every component identified in Step 1, call `get_design_context` / `get_figma_data` on it directly. Confirm:
- Exact dimensions (`width`, `height`, `padding`, `gap`)
- What children it contains (icons, buttons, inputs, labels)
- Background, border, and color fills from the style tokens

### Step 3 — Implement using project tokens, not Figma raw values
Map Figma fill/stroke values back to `src/styles/theme.css` tokens. Never hardcode hex.

### Step 4 — Validate against screenshot
Call `get_screenshot` on the Figma node, then compare the rendered result before marking complete.

**Figma file:** `https://www.figma.com/design/P2EhSAF4LQfhYQEIiyltan/`

| Reference | Node |
|---|---|
| Settings sample page | `12400:83714` |
| Home page | `12400:79817` |
| Page Headers docs | `11659:6606` |
| Secondary nav module | `35:1429` |
| Secondary nav full | `36:2383` |
| SQL Runner sample page | `7978:139494` |
| SQL Runner main section | `7978:139501` |
| SQL Runner left panel | `1432:22494` |
| SQL Runner action header | `1432:21801` |
| SQL Runner tab bar | `7178:58497` |
| Nav/Top Nav | `12337:132404` |

**⚠️ Never hand-build a component that exists in the Figma design system.** Always call `get_design_context` first. Approximations always produce wrong dimensions, spacing, and interaction states.

### Component name = content contract
A component's Figma name defines exactly what belongs inside it. Never add elements based on intuition:
- `Nav/Top Nav` → project context dropdown + search bar + AI agent button. Nothing else (no Run/Preview buttons, no engine selector).
- `Example/SQLRunner Action Header` → Run + Preview + Engine + Hide SQL pane + Settings/Privilege + Save as view. Not in the top nav.
- `SQLRunner/Tab module` → label text + close icon only. No leading icon unless the Figma component explicitly shows one.

**If you think an element "belongs" somewhere but haven't verified it in Figma — you're guessing. Stop and read Figma first.**

## Design Tokens (`src/styles/theme.css`)

| Token | Hex | Semantic Use |
|---|---|---|
| `--foreground` | `#202124` | Primary text, titles |
| `--secondary-foreground` | `#505862` | Secondary text, table headers, stat labels, section descriptions |
| `--muted-foreground` | `#B0B7BF` | **ONLY:** placeholders, disabled text, empty states |
| `--muted` | `#EEEFF1` | Dividers, muted backgrounds |
| `--background` | `#F6F7F8` | Page body |
| `--card` | `#FFFFFF` | Cards, panels |
| `--border` | `#D2D6DA` | Input/card borders |
| `--primary` | `#43B8C9` | Primary buttons, active states |
| `--sidebar-primary` | `#2E92A1` | Primary button hover state |
| `--accent` | `#008489` | Links, ghost text |
| `--destructive` | `#CA3F32` | Delete, error |
| `--destructive-hover` | `#AD3021` | Destructive button hover state |
| `--background-hover` | `#F1FAFB` | Ghost button hover bg, nav item hover |
| `--sidebar` | `#2A394A` | Left nav |

**CRITICAL:** `--muted-foreground` is for placeholders/disabled ONLY. Table headers, stat labels, section descriptions → `--secondary-foreground`.

## Typography
| Class | px | Use |
|---|---|---|
| `text-2xl` | 24px | Page titles |
| `text-xl` | 18px | Section titles |
| `text-lg` | 16px | Card/nav headers |
| `text-base` | 14px | Body, table cells, labels |
| `text-sm` | 12px | Badges, metadata |

Font: Inter. Weights: 600 semibold (headings/active), 400 regular (body).

## Page Layout
- Pages: `h-screen w-screen` — never wrapped in card/border/shadow/margin
- `react-resizable-panels` for AI agent layout ONLY — settings uses fixed-width panels
- Settings structure:
```
h-screen w-screen
  └─ LeftNav (64px)
  └─ flex-1 h-full (NO card wrapper)
       └─ SettingsSidebar (272px, border-right: 1px solid var(--muted))
       └─ flex-1 h-full
            └─ PageHeader (64px, border-bottom: 1px solid var(--muted), white bg)
            └─ Scrollable body (bg var(--background), padding 24px)
```
PageHeader right side: page-level actions only. Max 1 Primary button per page.

## Buttons
Use `<Button>` from `src/app/components/ui/button.tsx` — never hand-build `<button>` for primary/secondary actions.

**Figma-verified button states (all applied in `button.tsx` — do not override via `className`):**

| Variant | cva key | Default bg | Hover bg | Text color |
|---|---|---|---|---|
| Primary | `default` | `--primary` (`#43B8C9`) | `--sidebar-primary` (`#2E92A1`) | white |
| Secondary | `secondary` | `--card` (`#FFFFFF`) | `--background` (`#F6F7F8`) | `--secondary-foreground` |
| Ghost / Tertiary | `ghost` | transparent | `--background-hover` (`#F1FAFB`) | `--accent` (`#008489`) always |
| Destructive | `destructive` | `--destructive` (`#CA3F32`) | `--destructive-hover` (`#AD3021`) | white |

Disabled state for all variants: `opacity-50`, pointer-events disabled.

**Dimensions (Figma spec):** height `32px` (`h-[32px]`), horizontal padding `8px` (`px-2`), icon gap `4px` (`gap-1`), radius `4px` (`rounded-[4px]`). Both `size="default"` and `size="sm"` are 32px — there is only one standard button height in the Dremio design system.

**Max 1 Primary button per page.** Secondary has `border border-border`. Ghost has no border.

- **cva hover colors cannot be overridden via `className`** — Tailwind resolves by stylesheet order, not DOM order. Edit the variant in `button.tsx` directly.

## Icons
| Context | Size |
|---|---|
| Page header, secondary nav items | **24×24px** |
| Table row actions | **20×20px** |
| Inline with button text | **16×16px** |

- Identify icon name from Figma's `data-name` attribute in `get_design_context` output
- Icon color via Tailwind `text-*` classes (icons use `fill="currentColor"`)
- Never use `preserveAspectRatio="none"` — causes distortion
- `<img>` icons: always set `objectFit: "contain"`
- Fallback order: `src/app/components/icons/` → `@fluentui/react-icons` Regular → never hand-draw paths

## Secondary Nav (Settings Sidebar)
From Figma nodes `35:1429` / `36:2383`:

| Element | Spec |
|---|---|
| Container width | 272px |
| Right border | `1px solid var(--muted)` — NOT `var(--border)` |
| Header | 64px, `border-bottom: 1px solid var(--border)`, `pl-24px pr-8px` |
| Nav list | `pt-8px px-16px gap-6px` |
| Each item | `h-40px px-8px gap-8px rounded-4px` |
| Icon slot | **24×24px** |
| Hover bg | `var(--background-hover)` |
| Selected | bg `#2E92A1`, text white, font-weight 600 |

## Tables
Always `get_design_context` on Table before building — never hand-build `<thead>` or `<th>` elements.

- Header row: `bg var(--background)`, `text-sm`, `font-semibold`, `color var(--secondary-foreground)`
- Cell padding: `px-[20px] py-[14px]`; Header padding: `px-[20px] py-[10px]`
- Row divider: `border-bottom: 1px solid var(--muted)`
- Row actions: **hidden by default, visible on row hover only:**

```tsx
<tr className="group">
  <td>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-[4px]">
      <button className="text-secondary-foreground hover:bg-muted">
        <IconEdit size={20} />
      </button>
      {/* Delete: neutral default, red on hover only */}
      <button className="text-secondary-foreground hover:text-destructive hover:bg-destructive/10">
        <IconDelete size={20} />
      </button>
    </div>
  </td>
</tr>
```

## Critical Rules (Top Mistakes)
1. `--muted-foreground` for placeholders/disabled ONLY — everything else → `--secondary-foreground`
2. No card chrome (border/radius/shadow/margin) on full-page layouts
3. Max 1 Primary button per page
4. Row actions: hover-only visibility, never unconditional
5. Delete icons: neutral by default, `text-destructive` on hover only — never always-red
6. Secondary nav right border: `var(--muted)` not `var(--border)`
7. Icon sizes: 24px (nav/header), 20px (table rows), 16px (button inline) — not interchangeable
8. cva variant hover: edit `button.tsx` directly, never override via `className`
9. Always `get_design_context` before building any component — never approximate from memory
10. All icons exist in `src/app/components/icons/` — check there before anything else
11. **Read the page node first, then each child component.** Never start coding until the full hierarchy is mapped from Figma.
12. **Never place UI elements by intuition.** Run/Preview/Engine controls belong in the Action Header, not the Top Nav. Verify every element's home by reading its parent component in Figma.
13. **Never guess icon names for a component.** Read the component's children in Figma to see exactly which icon slot is used. If `with icon` is `false` or no icon child is present — there is no icon.
14. **Never use UI design tokens for code syntax colors.** `--primary` (`#43B8C9`), `--accent`, `--destructive` etc. are for UI chrome only. SQL/code editors must use a standard code-editor palette (e.g. keywords `#0033B3`, strings `#067D17`, functions `#7A3E9D`) that does not clash with Dremio brand colors.
15. **Component name is the source of truth for its contents.** If a Figma component is named `Nav/Top Nav`, read what's actually inside it — don't assume based on the word "nav" or general product knowledge.
