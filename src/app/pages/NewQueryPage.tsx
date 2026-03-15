import { useState } from "react";
import { Button } from "../components/ui/button";
import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconCaretDown } from "../components/icons/IconCaretDown";
import { IconCaretRight } from "../components/icons/IconCaretRight";
import { IconClose } from "../components/icons/IconClose";
import { IconCollapseLeft } from "../components/icons/IconCollapseLeft";
import { IconDatasetAddField } from "../components/icons/IconDatasetAddField";
import { IconDatasetGroupBy } from "../components/icons/IconDatasetGroupBy";
import { IconDatasetJoin } from "../components/icons/IconDatasetJoin";
import { IconDatasetPreview } from "../components/icons/IconDatasetPreview";
import { IconDatasetRun } from "../components/icons/IconDatasetRun";
import { IconEntityFolderBlue } from "../components/icons/IconEntityFolderBlue";
import { IconEntityIcebergTable } from "../components/icons/IconEntityIcebergTable";
import { IconEntityIcebergView } from "../components/icons/IconEntityIcebergView";
import { IconEntityNamespace } from "../components/icons/IconEntityNamespace";
import { IconEntityTable } from "../components/icons/IconEntityTable";
import { IconEyeHide } from "../components/icons/IconEyeHide";
import { IconJobEngineStart } from "../components/icons/IconJobEngineStart";
import { IconPlus } from "../components/icons/IconPlus";
import { IconSearch } from "../components/icons/IconSearch";
import { IconSettingsPrivilege } from "../components/icons/IconSettingsPrivilege";
import { IconSqlFunction } from "../components/icons/IconSqlFunction";
import { IconAiAgent } from "../components/icons/IconAiAgent";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = string;
type PanelTab = "data" | "scripts";
type DataSubTab = "all" | "starred";

interface TreeItem {
  id: string;
  label: string;
  type: "namespace" | "folder" | "iceberg" | "table" | "json-view" | "datetime" | "numeric" | "text";
  level: 1 | 2 | 3 | 4 | 5;
  expanded?: boolean;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const INITIAL_TABS: { id: TabId; label: string }[] = [
  { id: "t1", label: "Aug 9, 2023, 1:28:28 PM" },
  { id: "t2", label: "Aug 9, 2023, 1:28:28 PM" },
  { id: "t3", label: "Aug 9, 2023, 1:28:28 PM" },
  { id: "t4", label: "Aug 9, 2023, 1:28:28 PM" },
];

const TREE_ITEMS: TreeItem[] = [
  { id: "1", label: "my space", type: "namespace", level: 1 },
  { id: "2", label: "Business", type: "namespace", level: 1 },
  { id: "3", label: "Compute", type: "namespace", level: 1 },
  { id: "4", label: "Finance", type: "namespace", level: 1 },
  { id: "5", label: "GCS", type: "namespace", level: 1, expanded: true },
  { id: "6", label: "Level 1", type: "folder", level: 2, expanded: true },
  { id: "7", label: "Level 2", type: "folder", level: 3, expanded: true },
  { id: "8", label: "NYCTaxiTrips", type: "iceberg", level: 4, expanded: true },
  { id: "9", label: "NYCTaxiTrips", type: "json-view", level: 5 },
  { id: "10", label: "NYCTaxiTrips", type: "table", level: 5 },
  { id: "11", label: "pickup_datetime", type: "datetime", level: 5 },
  { id: "12", label: "dropoff_datetime", type: "datetime", level: 5 },
  { id: "13", label: "passenger_count", type: "numeric", level: 5 },
  { id: "14", label: "passenger_city", type: "numeric", level: 5 },
  { id: "15", label: "fare_amount", type: "numeric", level: 5 },
  { id: "16", label: "total_amount", type: "numeric", level: 5 },
  { id: "17", label: "passenger_city", type: "text", level: 5 },
  { id: "18", label: "Test", type: "namespace", level: 1 },
  { id: "19", label: "Testing", type: "namespace", level: 1 },
  { id: "20", label: "Marketing", type: "namespace", level: 1 },
  { id: "21", label: "Oracle", type: "namespace", level: 1 },
];

const SQL_LINES = [
  [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " country;", kind: "plain" as const }],
  [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " city;", kind: "plain" as const }],
  [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " customer;", kind: "plain" as const }],
  [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " call;", kind: "plain" as const }],
  [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " TaxiTrip.NYCTaxiFare;", kind: "plain" as const }],
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function tokenColor(kind: string): string {
  switch (kind) {
    case "kw": return "#0033B3";
    case "fn": return "#7A3E9D";
    case "str": return "#067D17";
    default: return "var(--foreground)";
  }
}

// Inline column-type badge (text prefix for numeric/text/datetime columns)
function TypeBadge({ type }: { type: TreeItem["type"] }) {
  switch (type) {
    case "numeric": return <span className="text-xs text-muted-foreground font-mono shrink-0" style={{ minWidth: 16 }}>#</span>;
    case "text": return <span className="text-xs text-muted-foreground font-mono shrink-0" style={{ minWidth: 16 }}>ab</span>;
    case "datetime": return <span className="text-xs text-muted-foreground font-mono shrink-0" style={{ minWidth: 16 }}>⊡</span>;
    default: return null;
  }
}

function TreeIcon({ type }: { type: TreeItem["type"] }) {
  switch (type) {
    case "namespace": return <IconEntityNamespace size={16} className="text-secondary-foreground shrink-0" />;
    case "folder": return <IconEntityFolderBlue size={16} className="shrink-0" />;
    case "iceberg": return <IconEntityIcebergTable size={16} className="shrink-0" />;
    case "table": return <IconEntityTable size={16} className="text-secondary-foreground shrink-0" />;
    case "json-view": return <IconEntityIcebergView size={16} className="shrink-0" />;
    default: return null;
  }
}

// ─── Left Panel ──────────────────────────────────────────────────────────────

function LeftPanel({
  panelTab,
  setPanelTab,
}: {
  panelTab: PanelTab;
  setPanelTab: (t: PanelTab) => void;
}) {
  const [search, setSearch] = useState("");
  const [dataSubTab, setDataSubTab] = useState<DataSubTab>("all");

  const filtered = TREE_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="flex flex-col shrink-0 overflow-hidden"
      style={{ width: 272, borderRight: "1px solid var(--muted)", background: "var(--card)" }}
    >
      {/* Tabs row: Data | Scripts + collapse button */}
      <div
        className="flex items-end shrink-0"
        style={{ height: 40, borderBottom: "1px solid var(--muted)", padding: "0 8px" }}
      >
        {(["data", "scripts"] as PanelTab[]).map((tab) => {
          const active = panelTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setPanelTab(tab)}
              className="capitalize transition-colors"
              style={{
                height: 40,
                padding: "0 12px 8px",
                color: active ? "var(--accent)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                fontSize: 14,
                background: "transparent",
                borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              {tab === "data" ? "Data" : "Scripts"}
            </button>
          );
        })}
        <div className="flex-1" />
        {/* Collapse left button */}
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors mb-1"
          style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
          title="Collapse panel"
        >
          <IconCollapseLeft size={16} />
        </button>
      </div>

      {/* Sub-tabs: All | Starred + Name sort */}
      <div
        className="flex items-center shrink-0"
        style={{ height: 36, padding: "0 8px", borderBottom: "1px solid var(--muted)" }}
      >
        {(["all", "starred"] as DataSubTab[]).map((sub) => {
          const active = dataSubTab === sub;
          return (
            <button
              key={sub}
              onClick={() => setDataSubTab(sub)}
              className="transition-colors"
              style={{
                height: 36,
                padding: "0 8px",
                fontSize: 13,
                color: active ? "var(--accent)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                background: "transparent",
                borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
              }}
            >
              {sub === "all" ? "All" : "Starred (0)"}
            </button>
          );
        })}
        <div className="flex-1" />
        <button
          className="flex items-center gap-1 rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ height: 24, padding: "0 6px", fontSize: 12, color: "var(--secondary-foreground)" }}
        >
          Name
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2L8 6H2L5 2Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className="shrink-0 px-2 py-2">
        <div
          className="flex items-center gap-2 rounded-[4px]"
          style={{ height: 32, border: "1px solid var(--border)", background: "var(--background)", padding: "0 8px" }}
        >
          <IconSearch size={16} className="text-muted-foreground shrink-0" />
          <input
            className="flex-1 text-sm bg-transparent outline-none text-foreground"
            placeholder="Search Tables or Views"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {filtered.map((item) => {
          const indent = { 1: 8, 2: 20, 3: 32, 4: 44, 5: 56 }[item.level];
          const isExpandable = item.type === "namespace" || item.type === "folder" || item.type === "iceberg";
          const isColumn = item.type === "numeric" || item.type === "text" || item.type === "datetime";

          return (
            <div
              key={item.id}
              className="flex items-center gap-1 text-sm text-foreground hover:bg-background-hover cursor-pointer transition-colors"
              style={{ height: 28, paddingLeft: indent, paddingRight: 8 }}
            >
              {isExpandable ? (
                <span
                  className="shrink-0 inline-flex"
                  style={{ transform: item.expanded ? "rotate(90deg)" : undefined }}
                >
                  <IconCaretRight size={12} className="text-muted-foreground" />
                </span>
              ) : (
                <span style={{ width: 12, display: "inline-block", flexShrink: 0 }} />
              )}
              {isColumn ? <TypeBadge type={item.type} /> : <TreeIcon type={item.type} />}
              <span className="truncate text-sm">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tab Bar ─────────────────────────────────────────────────────────────────

function TabBar({
  tabs,
  activeTab,
  onSelect,
  onClose,
  onAdd,
}: {
  tabs: { id: TabId; label: string }[];
  activeTab: TabId;
  onSelect: (id: TabId) => void;
  onClose: (id: TabId) => void;
  onAdd: () => void;
}) {
  return (
    <div
      className="flex items-stretch shrink-0 overflow-x-auto"
      style={{ height: 40, borderBottom: "1px solid var(--muted)", background: "var(--card)", padding: "0 4px" }}
    >
      {tabs.map((tab, i) => {
        const active = tab.id === activeTab;
        return (
          <div key={tab.id} className="relative flex items-stretch shrink-0" style={{ maxWidth: 220, minWidth: 140 }}>
            <button
              onClick={() => onSelect(tab.id)}
              className="flex items-center gap-1 flex-1 transition-colors"
              style={{
                padding: "6px 4px 6px 12px",
                color: active ? "var(--foreground)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                background: active ? "var(--card)" : "transparent",
                fontSize: 12,
              }}
            >
              <span className="flex-1 text-left truncate">{tab.label}</span>
              <span
                className="flex items-center justify-center rounded-sm hover:bg-muted transition-colors shrink-0"
                style={{ width: 20, height: 20 }}
                onClick={(e) => { e.stopPropagation(); onClose(tab.id); }}
              >
                <IconClose size={10} className="text-secondary-foreground" />
              </span>
            </button>
            {active && (
              <div className="absolute bottom-0 left-0 right-0" style={{ height: 2, background: "var(--accent)" }} />
            )}
            {i < tabs.length - 1 && (
              <div className="absolute right-0 self-center" style={{ width: 1, height: 20, background: "var(--border)" }} />
            )}
          </div>
        );
      })}

      {/* Add tab */}
      <div className="flex items-center px-1">
        <button
          onClick={onAdd}
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        >
          <IconPlus size={16} />
        </button>
      </div>

      <div className="flex-1" />

      {/* Wiki/document icon on far right */}
      <div className="flex items-center px-2">
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
          title="Wiki"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM13 3.5V9H18.5L13 3.5ZM7 12H17V13.5H7V12ZM7 15.5H14V17H7V15.5Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Action Header ────────────────────────────────────────────────────────────

function ActionHeader() {
  return (
    <div
      className="flex items-center gap-2 shrink-0"
      style={{ padding: "8px", borderBottom: "1px solid var(--muted)" }}
    >
      <Button variant="default" className="flex items-center gap-1 shrink-0">
        <IconDatasetRun size={16} />
        Run
      </Button>
      <Button variant="secondary" className="flex items-center gap-1 shrink-0">
        <IconDatasetPreview size={16} />
        Preview
      </Button>

      {/* Engine selector */}
      <div
        className="flex items-center gap-1 rounded-[4px] shrink-0 cursor-pointer hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "4px 8px", border: "1px solid var(--border)" }}
      >
        <span className="text-sm text-secondary-foreground">Engine:</span>
        <span style={{ color: "#5ABD4A" }} className="inline-flex">
          <IconJobEngineStart size={16} />
        </span>
        <span className="text-sm text-foreground">xl,us-west-4</span>
        <div
          className="flex items-center justify-center rounded-[4px]"
          style={{ padding: "2px 4px", background: "var(--muted)" }}
        >
          <span className="text-sm text-foreground font-medium">XL</span>
        </div>
        <IconCaretDown size={16} className="text-secondary-foreground" />
      </div>

      <div className="flex-1" />

      <Button variant="ghost" className="flex items-center gap-1 shrink-0">
        <IconEyeHide size={16} />
        Hide SQL pane
      </Button>

      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors shrink-0"
        style={{ width: 32, height: 32 }}
      >
        <IconSettingsPrivilege size={24} className="text-secondary-foreground" />
      </button>

      <button
        className="flex items-center gap-0 rounded-[4px] shrink-0"
        style={{
          height: 32,
          background: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--secondary-foreground)",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        <span style={{ padding: "0 8px" }}>Save as view</span>
        <div
          className="flex items-center justify-center"
          style={{ padding: "0 6px", borderLeft: "1px solid var(--border)", height: "100%" }}
        >
          <IconCaretDown size={14} />
        </div>
      </button>
    </div>
  );
}

// ─── Context Bar ─────────────────────────────────────────────────────────────

function ContextBar() {
  return (
    <div
      className="flex items-center justify-end gap-2 shrink-0"
      style={{ height: 36, padding: "0 8px", borderBottom: "1px solid var(--muted)", background: "var(--card)" }}
    >
      <span className="text-sm text-secondary-foreground">Context:</span>
      <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>@my space</span>
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
      >
        <IconSqlFunction size={16} />
      </button>
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
      >
        <IconAiAgent size={16} />
      </button>
    </div>
  );
}

// ─── SQL Editor ───────────────────────────────────────────────────────────────

function SqlEditor() {
  return (
    <div
      className="flex flex-1 overflow-hidden"
      style={{ fontFamily: "Menlo, 'Courier New', monospace", fontSize: 12, lineHeight: "20px", background: "var(--card)" }}
    >
      <div
        className="select-none text-right shrink-0"
        style={{
          width: 32,
          padding: "8px 4px 8px 8px",
          color: "var(--secondary-foreground)",
          borderRight: "1px solid var(--border)",
        }}
      >
        {SQL_LINES.map((_, i) => <div key={i} style={{ lineHeight: "20px" }}>{i + 1}</div>)}
      </div>
      <div style={{ padding: "8px 16px", flex: 1 }}>
        {SQL_LINES.map((line, i) => (
          <div key={i} style={{ whiteSpace: "pre", lineHeight: "20px" }}>
            {line.map((token, j) => (
              <span key={j} style={{ color: tokenColor(token.kind) }}>{token.text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Result Action Bar ────────────────────────────────────────────────────────

function ResultActionBar() {
  return (
    <div
      className="flex items-center gap-2 shrink-0"
      style={{ height: 48, padding: "0 8px", background: "var(--background)", borderBottom: "1px solid var(--muted)" }}
    >
      {[
        { icon: <IconDatasetAddField size={16} />, label: "Add Field" },
        { icon: <IconDatasetGroupBy size={16} />, label: "Group By" },
        { icon: <IconDatasetJoin size={16} />, label: "Join" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          disabled
          className="flex items-center gap-1 rounded-[4px] text-sm font-medium"
          style={{ height: 32, padding: "0 8px", background: "var(--muted)", color: "var(--muted-foreground)", cursor: "default" }}
        >
          {icon}
          {label}
        </button>
      ))}
      <div
        className="flex items-center rounded-[4px]"
        style={{ height: 32, padding: "0 8px", background: "var(--muted)", border: "1px solid var(--border)", minWidth: 140 }}
      >
        <span className="text-sm text-muted-foreground">Filter Columns</span>
      </div>
      <span className="text-sm text-foreground">0 Columns</span>
    </div>
  );
}

// ─── Empty State ─────────────────────────────────────────────────────────────
// Figma: Dremio mascot illustration + "Run a Query to Get Started"

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4" style={{ background: "var(--card)" }}>
      {/* Dremio mascot illustration */}
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        {/* Screen/monitor */}
        <rect x="20" y="20" width="70" height="50" rx="6" fill="#E7FBF9" stroke="#43B8C9" strokeWidth="2"/>
        <rect x="26" y="26" width="58" height="36" rx="3" fill="white"/>
        {/* Code lines on screen */}
        <rect x="30" y="32" width="30" height="3" rx="1.5" fill="#0033B3" opacity="0.6"/>
        <rect x="30" y="39" width="40" height="3" rx="1.5" fill="#0033B3" opacity="0.6"/>
        <rect x="30" y="46" width="25" height="3" rx="1.5" fill="#067D17" opacity="0.6"/>
        {/* Monitor stand */}
        <rect x="50" y="70" width="10" height="8" rx="2" fill="#43B8C9"/>
        <rect x="42" y="76" width="26" height="4" rx="2" fill="#43B8C9"/>
        {/* Narwhal/mascot body */}
        <ellipse cx="93" cy="62" rx="16" ry="12" fill="#43B8C9"/>
        {/* Tail */}
        <path d="M109 58 L118 50 L116 62 L118 74 L109 66 Z" fill="#2E92A1"/>
        {/* Eye */}
        <circle cx="85" cy="59" r="3" fill="white"/>
        <circle cx="85" cy="59" r="1.5" fill="#202124"/>
        {/* Horn */}
        <path d="M80 54 L72 44" stroke="#43B8C9" strokeWidth="3" strokeLinecap="round"/>
        {/* Flipper */}
        <ellipse cx="92" cy="73" rx="8" ry="4" fill="#2E92A1" transform="rotate(-20 92 73)"/>
        {/* Blush */}
        <ellipse cx="83" cy="63" rx="3" ry="2" fill="#F9A8D4" opacity="0.5"/>
      </svg>
      <p className="text-base font-medium text-secondary-foreground">Run a Query to Get Started</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function NewQueryPage() {
  const [tabs, setTabs] = useState(INITIAL_TABS);
  const [activeTab, setActiveTab] = useState<TabId>("t1");
  const [panelTab, setPanelTab] = useState<PanelTab>("data");

  function handleClose(id: TabId) {
    const remaining = tabs.filter((t) => t.id !== id);
    setTabs(remaining);
    if (activeTab === id && remaining.length > 0) {
      setActiveTab(remaining[remaining.length - 1].id);
    }
  }

  function handleAdd() {
    const id = `t${Date.now()}`;
    const newTab = { id, label: new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit" }) };
    setTabs((prev) => [...prev, newTab]);
    setActiveTab(id);
  }

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <LeftNav activePage="sql" />

      <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>
        <TopNav />

        <div className="flex flex-1 overflow-hidden">
          <LeftPanel panelTab={panelTab} setPanelTab={setPanelTab} />

          <div className="flex-1 flex flex-col overflow-hidden">
            <TabBar
              tabs={tabs}
              activeTab={activeTab}
              onSelect={setActiveTab}
              onClose={handleClose}
              onAdd={handleAdd}
            />
            <ActionHeader />
            <ContextBar />

            {/* SQL Editor — fixed height */}
            <div className="shrink-0 overflow-hidden" style={{ height: 140, borderBottom: "1px solid var(--muted)" }}>
              <SqlEditor />
            </div>

            {/* Result area */}
            <ResultActionBar />
            <EmptyState />
          </div>
        </div>
      </div>
    </div>
  );
}
