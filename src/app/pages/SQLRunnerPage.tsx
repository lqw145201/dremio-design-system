import { useState } from "react";
import { Button } from "../components/ui/button";
import { LeftNav } from "../components/LeftNav";
import { IconAiAgent } from "../components/icons/IconAiAgent";
import { IconCaretDown } from "../components/icons/IconCaretDown";
import { IconCaretRight } from "../components/icons/IconCaretRight";
import { IconClose } from "../components/icons/IconClose";
import { IconDatasetAddField } from "../components/icons/IconDatasetAddField";
import { IconDatasetGroupBy } from "../components/icons/IconDatasetGroupBy";
import { IconDatasetJoin } from "../components/icons/IconDatasetJoin";
import { IconDatasetPreview } from "../components/icons/IconDatasetPreview";
import { IconDatasetRun } from "../components/icons/IconDatasetRun";
import { IconEntityFolderBlue } from "../components/icons/IconEntityFolderBlue";
import { IconEntityNamespace } from "../components/icons/IconEntityNamespace";
import { IconEntityTable } from "../components/icons/IconEntityTable";
import { IconEntityView } from "../components/icons/IconEntityView";
import { IconEyeHide } from "../components/icons/IconEyeHide";
import { IconJobEngineStart } from "../components/icons/IconJobEngineStart";
import { IconNavSqlRunner } from "../components/icons/IconNavSqlRunner";
import { IconPlus } from "../components/icons/IconPlus";
import { IconSearch } from "../components/icons/IconSearch";
import { IconSettingsPrivilege } from "../components/icons/IconSettingsPrivilege";
import { IconSqlFunction } from "../components/icons/IconSqlFunction";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = "tab-1" | "tab-2" | "tab-3";
type PanelTab = "data" | "scripts";

interface ScriptTab {
  id: TabId;
  label: string;
}

interface DatasetItem {
  id: string;
  label: string;
  type: "namespace" | "folder" | "table" | "view";
  level: 1 | 2 | 3;
  expanded?: boolean;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SCRIPT_TABS: ScriptTab[] = [
  { id: "tab-1", label: "New Query 1" },
  { id: "tab-2", label: "Sales Analysis" },
  { id: "tab-3", label: "User Metrics" },
];

const DATASET_TREE: DatasetItem[] = [
  { id: "1", label: "Samples", type: "namespace", level: 1, expanded: true },
  { id: "2", label: "NYC Taxi", type: "folder", level: 2, expanded: true },
  { id: "3", label: "trips", type: "table", level: 3 },
  { id: "4", label: "taxi_zones", type: "table", level: 3 },
  { id: "5", label: "TPC-DS", type: "folder", level: 2 },
  { id: "6", label: "Production", type: "namespace", level: 1, expanded: true },
  { id: "7", label: "sales", type: "folder", level: 2, expanded: true },
  { id: "8", label: "orders", type: "table", level: 3 },
  { id: "9", label: "order_items", type: "table", level: 3 },
  { id: "10", label: "customers_v", type: "view", level: 3 },
  { id: "11", label: "analytics", type: "folder", level: 2 },
  { id: "12", label: "Scratch Space", type: "namespace", level: 1 },
];

// SQL content as pre-tokenized lines for Menlo rendering
const SQL_LINES: { text: string; tokens: { text: string; kind: "kw" | "fn" | "str" | "plain" | "comment" }[] }[] = [
  { text: "SELECT", tokens: [{ text: "SELECT", kind: "kw" }] },
  { text: "  o.order_id,", tokens: [{ text: "  o.order_id,", kind: "plain" }] },
  { text: "  o.order_date,", tokens: [{ text: "  o.order_date,", kind: "plain" }] },
  { text: "  c.customer_name,", tokens: [{ text: "  c.customer_name,", kind: "plain" }] },
  { text: "  c.region,", tokens: [{ text: "  c.region,", kind: "plain" }] },
  { text: "  SUM(oi.quantity * oi.unit_price) AS total_amount,", tokens: [{ text: "  ", kind: "plain" }, { text: "SUM", kind: "fn" }, { text: "(oi.quantity * oi.unit_price) ", kind: "plain" }, { text: "AS", kind: "kw" }, { text: " total_amount,", kind: "plain" }] },
  { text: "  COUNT(oi.item_id) AS item_count", tokens: [{ text: "  ", kind: "plain" }, { text: "COUNT", kind: "fn" }, { text: "(oi.item_id) ", kind: "plain" }, { text: "AS", kind: "kw" }, { text: " item_count", kind: "plain" }] },
  { text: "FROM", tokens: [{ text: "FROM", kind: "kw" }] },
  { text: "  sales.orders AS o", tokens: [{ text: "  sales.orders ", kind: "plain" }, { text: "AS", kind: "kw" }, { text: " o", kind: "plain" }] },
  { text: "  JOIN sales.order_items AS oi ON o.order_id = oi.order_id", tokens: [{ text: "  ", kind: "plain" }, { text: "JOIN", kind: "kw" }, { text: " sales.order_items ", kind: "plain" }, { text: "AS", kind: "kw" }, { text: " oi ", kind: "plain" }, { text: "ON", kind: "kw" }, { text: " o.order_id = oi.order_id", kind: "plain" }] },
  { text: "  JOIN customers_v AS c ON o.customer_id = c.customer_id", tokens: [{ text: "  ", kind: "plain" }, { text: "JOIN", kind: "kw" }, { text: " customers_v ", kind: "plain" }, { text: "AS", kind: "kw" }, { text: " c ", kind: "plain" }, { text: "ON", kind: "kw" }, { text: " o.customer_id = c.customer_id", kind: "plain" }] },
  { text: "WHERE", tokens: [{ text: "WHERE", kind: "kw" }] },
  { text: "  o.order_date >= DATE '2026-01-01'", tokens: [{ text: "  o.order_date >= ", kind: "plain" }, { text: "DATE", kind: "kw" }, { text: " ", kind: "plain" }, { text: "'2026-01-01'", kind: "str" }] },
  { text: "  AND o.status = 'completed'", tokens: [{ text: "  ", kind: "plain" }, { text: "AND", kind: "kw" }, { text: " o.status = ", kind: "plain" }, { text: "'completed'", kind: "str" }] },
  { text: "GROUP BY", tokens: [{ text: "GROUP BY", kind: "kw" }] },
  { text: "  o.order_id, o.order_date, c.customer_name, c.region", tokens: [{ text: "  o.order_id, o.order_date, c.customer_name, c.region", kind: "plain" }] },
  { text: "ORDER BY total_amount DESC", tokens: [{ text: "ORDER BY", kind: "kw" }, { text: " total_amount ", kind: "plain" }, { text: "DESC", kind: "kw" }] },
  { text: "LIMIT 100;", tokens: [{ text: "LIMIT", kind: "kw" }, { text: " 100;", kind: "plain" }] },
];

// ─── Token color helper ──────────────────────────────────────────────────────

function tokenColor(kind: string): string {
  switch (kind) {
    case "kw": return "#0033B3";   // dark blue — SQL reserved words
    case "fn": return "#7A3E9D";   // purple — built-in functions (SUM, COUNT)
    case "str": return "#067D17";  // green — string literals
    case "comment": return "#8C8C8C"; // gray — comments
    default: return "var(--foreground)"; // plain identifiers / operators
  }
}

// ─── Dataset icon helper ──────────────────────────────────────────────────────

function DatasetIcon({ type }: { type: DatasetItem["type"] }) {
  switch (type) {
    case "namespace": return <IconEntityNamespace width={16} height={16} className="text-secondary-foreground shrink-0" />;
    case "folder": return <IconEntityFolderBlue width={16} height={16} className="shrink-0" />;
    case "table": return <IconEntityTable width={16} height={16} className="text-secondary-foreground shrink-0" />;
    case "view": return <IconEntityView width={16} height={16} className="text-secondary-foreground shrink-0" />;
  }
}

// ─── Top Nav ─────────────────────────────────────────────────────────────────
// Figma: 12401:87010 — Nav/Top Nav, height 48px, bg #F6F7F8, padding 8px 16px
// Layout: space-between (dropdown left, AI agent button right)
// Search (525px) absolute-centered

function TopNav() {
  return (
    <div
      className="relative flex items-center justify-between shrink-0"
      style={{
        height: 48,
        padding: "0 16px",
        background: "var(--background)",
        borderBottom: "1px solid var(--muted)",
      }}
    >
      {/* Left: "First Lakehouse" context dropdown (200 × 32) */}
      <button
        className="flex items-center gap-2 rounded-[4px] shrink-0 hover:bg-background-hover transition-colors"
        style={{
          width: 200,
          height: 32,
          padding: "0 8px",
          background: "#FAFBFB",
          border: "1px solid #D0D4D9",
        }}
      >
        <span className="flex-1 text-left text-base font-semibold truncate" style={{ color: "#2A2D32" }}>
          First Lakehouse
        </span>
        <IconCaretDown width={16} height={16} className="text-secondary-foreground shrink-0" />
      </button>

      {/* Center (absolute): Search field (525 × 32) */}
      <div
        className="absolute flex items-center gap-2 rounded-[4px]"
        style={{
          width: 525,
          height: 32,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "0 8px",
          background: "#FAFBFB",
          border: "1px solid #D0D4D9",
        }}
      >
        <IconSearch width={16} height={16} className="shrink-0" style={{ color: "var(--muted-foreground)" }} />
        <span className="flex-1 text-base text-muted-foreground truncate">
          Search data, scripts, recent jobs and more...
        </span>
      </div>

      {/* Right: AI agent Secondary button (100 × 32) */}
      <Button variant="secondary" className="flex items-center gap-1 shrink-0">
        <IconAiAgent width={16} height={16} />
        AI agent
      </Button>
    </div>
  );
}

// ─── Left Panel ──────────────────────────────────────────────────────────────
// Figma: SQLRunner/Left Panel (type=Data), fixed width ~272px, fills height

function LeftPanel({
  panelTab,
  setPanelTab,
}: {
  panelTab: PanelTab;
  setPanelTab: (t: PanelTab) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = DATASET_TREE.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="flex flex-col shrink-0 overflow-hidden"
      style={{ width: 272, borderRight: "1px solid var(--muted)", background: "var(--card)" }}
    >
      {/* Tab row: Data | Scripts */}
      <div
        className="flex shrink-0"
        style={{ height: 40, borderBottom: "1px solid var(--muted)", padding: "0 8px", alignItems: "flex-end" }}
      >
        {(["data", "scripts"] as PanelTab[]).map((tab) => {
          const active = panelTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setPanelTab(tab)}
              className="capitalize text-base px-3 transition-colors"
              style={{
                height: 40,
                color: active ? "var(--accent)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: -1,
                background: "transparent",
                paddingBottom: 8,
              }}
            >
              {tab === "data" ? "Data" : "Scripts"}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="shrink-0 px-2 py-2" style={{ borderBottom: "1px solid var(--muted)" }}>
        <div
          className="flex items-center gap-2 rounded-[4px]"
          style={{ height: 32, border: "1px solid var(--border)", background: "var(--background)", padding: "0 8px" }}
        >
          <IconSearch width={16} height={16} className="text-muted-foreground shrink-0" />
          <input
            className="flex-1 text-base bg-transparent outline-none text-foreground"
            placeholder="Search tables or views"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Dataset tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {filtered.map((item) => {
          const indent = { 1: 8, 2: 20, 3: 32 }[item.level];
          const isLeaf = item.type === "table" || item.type === "view";
          return (
            <div
              key={item.id}
              className="flex items-center gap-1 text-base text-foreground hover:bg-background-hover cursor-pointer transition-colors"
              style={{ height: 32, paddingLeft: indent, paddingRight: 8 }}
            >
              {!isLeaf ? (
                <IconCaretRight
                  width={12}
                  height={12}
                  className="text-muted-foreground shrink-0"
                  style={{ transform: item.expanded ? "rotate(90deg)" : undefined }}
                />
              ) : (
                <span style={{ width: 12, display: "inline-block", flexShrink: 0 }} />
              )}
              <DatasetIcon type={item.type} />
              <span className="truncate text-sm">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tab Bar ─────────────────────────────────────────────────────────────────
// Figma: Example/SQLRunner Tab Bar — height 40px, border-bottom #EEEFF1 (muted)
// Tab (chosen): bg white, text #202124 semibold, accent 2px underline at bottom
// Tab (default): text #505862 regular
// No leading icon in tab — label + close icon only

function TabBar({
  tabs,
  activeTab,
  onSelect,
}: {
  tabs: ScriptTab[];
  activeTab: TabId;
  onSelect: (id: TabId) => void;
}) {
  return (
    <div
      className="flex items-stretch shrink-0 overflow-x-auto"
      style={{ height: 40, borderBottom: "1px solid var(--muted)", background: "var(--card)", padding: "0 8px" }}
    >
      {/* Tab items */}
      {tabs.map((tab, i) => {
        const active = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            className="relative flex items-stretch shrink-0"
            style={{ width: 240 }}
          >
            <button
              onClick={() => onSelect(tab.id)}
              className="flex items-center gap-2 flex-1 group transition-colors"
              style={{
                padding: "6px 8px 6px 16px",
                color: active ? "var(--foreground)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                background: active ? "var(--card)" : "transparent",
                fontSize: 14,
              }}
            >
              <span className="flex-1 text-left truncate">{tab.label}</span>
              <span
                className="flex items-center justify-center rounded-sm transition-opacity"
                style={{ width: 24, height: 24, opacity: active ? 1 : 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconClose width={12} height={12} className="text-secondary-foreground" />
              </span>
            </button>

            {/* Active underline indicator (accent color, 2px at bottom) */}
            {active && (
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 2, background: "var(--accent)" }}
              />
            )}

            {/* Right separator between tabs */}
            {i < tabs.length - 1 && (
              <div
                className="absolute right-0 self-center"
                style={{ width: 1, height: 24, background: "var(--border)" }}
              />
            )}
          </div>
        );
      })}

      {/* Add tab (+) button */}
      <div className="flex items-center pl-1">
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        >
          <IconPlus width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

// ─── Action Header ────────────────────────────────────────────────────────────
// Figma: Example/SQLRunner Action Header — row, gap 8px, padding 0 8px
// Left: Run (Primary) | Preview (Secondary) | Engine (border pill)
// Right (flex-end): Hide SQL pane (Ghost) | Settings/Privilege icon | Save as view (Secondary+dropdown)

function ActionHeader() {
  return (
    <div
      className="flex items-center gap-2 shrink-0"
      style={{ padding: "8px 8px", borderBottom: "1px solid var(--muted)" }}
    >
      {/* Run button — Primary */}
      <Button variant="default" className="flex items-center gap-1 shrink-0" style={{ width: 100 }}>
        <IconDatasetRun width={16} height={16} />
        Run
      </Button>

      {/* Preview button — Secondary */}
      <Button variant="secondary" className="flex items-center gap-1 shrink-0" style={{ width: 100 }}>
        <IconDatasetPreview width={16} height={16} />
        Preview
      </Button>

      {/* Engine selector pill */}
      <div
        className="flex items-center gap-1 rounded-[4px] shrink-0 cursor-pointer hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "4px 8px", border: "1px solid var(--border)" }}
      >
        <span className="text-sm text-foreground">Engine: </span>
        <IconJobEngineStart width={16} height={16} style={{ color: "#5ABD4A" }} />
        <span className="text-sm text-foreground">xl_us-west-4</span>
        <div
          className="flex items-center justify-center rounded-[4px]"
          style={{ padding: "2px 4px", background: "var(--muted)" }}
        >
          <span className="text-sm text-foreground font-medium">XL</span>
        </div>
        <IconCaretDown width={16} height={16} className="text-secondary-foreground" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Hide SQL pane — Ghost / Tertiary */}
      <Button variant="ghost" className="flex items-center gap-1 shrink-0">
        <IconEyeHide width={16} height={16} />
        Hide SQL pane
      </Button>

      {/* Settings/Privilege icon button */}
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors shrink-0"
        style={{ width: 32, height: 32 }}
      >
        <IconSettingsPrivilege width={24} height={24} className="text-secondary-foreground" />
      </button>

      {/* Save as view — Secondary with dropdown */}
      <button
        className="flex items-center gap-2 rounded-[4px] shrink-0 hover:bg-background transition-colors"
        style={{
          height: 32,
          padding: "4px 8px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--secondary-foreground)",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        Save as view
        <div className="flex items-center pl-1" style={{ borderLeft: "1px solid var(--border)" }}>
          <IconCaretDown width={16} height={16} />
        </div>
      </button>
    </div>
  );
}

// ─── SQL Editor ───────────────────────────────────────────────────────────────
// Figma: SQL Statement sample (1463:19355 type=multiple)
// Font: Menlo, 12px, line-height 20px
// Toolbar (right-aligned icons) + hairline + line numbers + code area

function SqlEditor() {
  return (
    <div
      className="flex flex-col flex-1 overflow-hidden"
      style={{ background: "var(--card)", border: "1px solid var(--muted)", borderRadius: 4, margin: "0 8px" }}
    >
      {/* Toolbar — right-aligned icon row */}
      <div
        className="flex items-center justify-end shrink-0 gap-2"
        style={{ padding: "4px 8px", borderBottom: "1px solid var(--muted)" }}
      >
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24 }}
          title="Functions"
        >
          <IconSqlFunction width={16} height={16} className="text-secondary-foreground" />
        </button>
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24 }}
          title="AI Assist"
        >
          <IconAiAgent width={16} height={16} className="text-secondary-foreground" />
        </button>
      </div>

      {/* Code area: line numbers + SQL */}
      <div className="flex flex-1 overflow-auto" style={{ fontFamily: "Menlo, 'Courier New', monospace", fontSize: 12, lineHeight: "20px" }}>
        {/* Line numbers */}
        <div
          className="select-none text-right shrink-0"
          style={{
            width: 28,
            padding: "8px 0 8px 8px",
            color: "var(--secondary-foreground)",
            borderRight: "1px solid var(--border)",
            background: "var(--card)",
          }}
        >
          {SQL_LINES.map((_, i) => (
            <div key={i} style={{ lineHeight: "20px" }}>{i + 1}</div>
          ))}
        </div>

        {/* SQL code */}
        <div style={{ padding: "8px 16px", flex: 1 }}>
          {SQL_LINES.map((line, i) => (
            <div key={i} style={{ whiteSpace: "pre", lineHeight: "20px" }}>
              {line.tokens.map((token, j) => (
                <span key={j} style={{ color: tokenColor(token.kind) }}>
                  {token.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Result Action Bar ────────────────────────────────────────────────────────
// Figma: SQLRunner/Result Action Bar (Action bar=data-empty)
// Height 48px, bg #F6F7F8, padding 0 8px
// Buttons: Add Field | Group By | Join (all disabled) | Filter Columns input | 0 Columns label

function ResultActionBar() {
  return (
    <div
      className="flex items-center gap-2 shrink-0"
      style={{
        height: 48,
        padding: "0 8px",
        background: "var(--background)",
        borderBottom: "1px solid var(--muted)",
      }}
    >
      {/* Add Field — disabled */}
      <button
        disabled
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium"
        style={{ height: 32, padding: "0 8px", background: "var(--muted)", color: "var(--muted-foreground)", border: "none", cursor: "default" }}
      >
        <IconDatasetAddField width={16} height={16} />
        Add Field
      </button>

      {/* Group By — disabled */}
      <button
        disabled
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium"
        style={{ height: 32, padding: "0 8px", background: "var(--muted)", color: "var(--muted-foreground)", border: "none", cursor: "default" }}
      >
        <IconDatasetGroupBy width={16} height={16} />
        Group By
      </button>

      {/* Join — disabled */}
      <button
        disabled
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium"
        style={{ height: 32, padding: "0 8px", background: "var(--muted)", color: "var(--muted-foreground)", border: "none", cursor: "default" }}
      >
        <IconDatasetJoin width={16} height={16} />
        Join
      </button>

      {/* Filter Columns input — disabled */}
      <div
        className="flex items-center rounded-[4px]"
        style={{ width: 187, height: 32, padding: "0 8px", background: "var(--muted)", border: "1px solid var(--border)" }}
      >
        <span className="text-base text-muted-foreground">Filter Columns</span>
      </div>

      {/* Column count */}
      <span className="text-base text-foreground pl-1">0 Columns</span>
    </div>
  );
}

// ─── Results Section (empty state) ───────────────────────────────────────────
// Figma: Example/SQLRunner Result Section (type=empty)
// Centered illustration + message

function ResultsEmpty() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4" style={{ background: "var(--card)" }}>
      <div
        className="flex items-center justify-center rounded-full"
        style={{ width: 64, height: 64, background: "var(--background)" }}
      >
        <IconNavSqlRunner width={32} height={32} className="text-muted-foreground" />
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" className="text-sm">
          Run a query
        </Button>
        <span className="text-base text-secondary-foreground">to see results here.</span>
      </div>
    </div>
  );
}

// ─── Results Frame ────────────────────────────────────────────────────────────
// Figma: Frame 887 — column, padding 0 8px, fills height
// Children: SQLRunner/Result Action Bar (48px) + Example/SQLRunner Result Section (fill, empty)

function ResultsFrame() {
  return (
    <div className="flex flex-col" style={{ flex: "0 0 280px", padding: "0 8px" }}>
      <ResultActionBar />
      <ResultsEmpty />
    </div>
  );
}

// ─── Wiki Panel (collapsed) ───────────────────────────────────────────────────
// Figma: SQLRunner/Wiki Panel Small (Property 1=collapsed) — 35px wide

function WikiPanelCollapsed() {
  return (
    <div
      className="flex items-start justify-center shrink-0"
      style={{
        width: 35,
        borderLeft: "1px solid var(--muted)",
        background: "var(--card)",
        paddingTop: 8,
      }}
    >
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        title="Expand wiki panel"
      >
        <IconCaretRight width={16} height={16} />
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function SQLRunnerPage() {
  const [activeTab, setActiveTab] = useState<TabId>("tab-1");
  const [panelTab, setPanelTab] = useState<PanelTab>("data");

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left Nav — 64px collapsed */}
      <LeftNav />

      {/* Content section — fills remaining width */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>

        {/* Top Nav — 48px */}
        <TopNav />

        {/* Bottom: left panel + main + wiki */}
        <div className="flex flex-1 overflow-hidden">

          {/* Left Panel — 272px */}
          <LeftPanel panelTab={panelTab} setPanelTab={setPanelTab} />

          {/* Hairline divider (1px) */}
          <div style={{ width: 1, background: "var(--muted)", flexShrink: 0 }} />

          {/* Main section — fills, column, gap 8px */}
          <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>
            {/* Tab Bar */}
            <TabBar tabs={SCRIPT_TABS} activeTab={activeTab} onSelect={setActiveTab} />

            {/* Action Header */}
            <ActionHeader />

            {/* SQL Editor — flex-1 */}
            <div className="flex flex-col flex-1 overflow-hidden py-2">
              <SqlEditor />
            </div>

            {/* Hairline between editor and results */}
            <div style={{ height: 1, background: "var(--muted)", margin: "0 8px", flexShrink: 0 }} />

            {/* Results Frame */}
            <ResultsFrame />
          </div>

          {/* Wiki Panel — 35px collapsed */}
          <WikiPanelCollapsed />
        </div>
      </div>
    </div>
  );
}
