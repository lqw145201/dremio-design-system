import { useState } from "react";
import { Button } from "../components/ui/button";
import { DatabaseHeader } from "../components/DatabaseHeader";
import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconAiAgent } from "../components/icons/IconAiAgent";
import { IconCaretDown } from "../components/icons/IconCaretDown";
import { IconCaretRight } from "../components/icons/IconCaretRight";
import { IconClose } from "../components/icons/IconClose";
import { IconDatasetAddField } from "../components/icons/IconDatasetAddField";
import { IconDatasetDownload } from "../components/icons/IconDatasetDownload";
import { IconDatasetGroupBy } from "../components/icons/IconDatasetGroupBy";
import { IconDatasetJoin } from "../components/icons/IconDatasetJoin";
import { IconDatasetPreview } from "../components/icons/IconDatasetPreview";
import { IconDatasetRun } from "../components/icons/IconDatasetRun";
import { IconEntityFolderBlue } from "../components/icons/IconEntityFolderBlue";
import { IconEntityIcebergTable } from "../components/icons/IconEntityIcebergTable";
import { IconEntityNamespace } from "../components/icons/IconEntityNamespace";
import { IconEntityTable } from "../components/icons/IconEntityTable";
import { IconEntityView } from "../components/icons/IconEntityView";
import { IconEyeHide } from "../components/icons/IconEyeHide";
import { IconJobEngineStart } from "../components/icons/IconJobEngineStart";
import { IconPlus } from "../components/icons/IconPlus";
import { IconSearch } from "../components/icons/IconSearch";
import { IconSettingsPrivilege } from "../components/icons/IconSettingsPrivilege";
import { IconSqlFunction } from "../components/icons/IconSqlFunction";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabId = "tab-1";
type PanelTab = "data" | "scripts";
type DataSubTab = "all" | "starred";

interface DatasetItem {
  id: string;
  label: string;
  type: "namespace" | "folder" | "table" | "view" | "iceberg";
  level: 1 | 2 | 3 | 4 | 5;
  expanded?: boolean;
  tag?: string; // e.g. "JSON", "abc", "##"
}

// ─── Constants ───────────────────────────────────────────────────────────────

const CATALOG_TREE: DatasetItem[] = [
  { id: "1", label: "tshiran@dremio.com", type: "namespace", level: 1 },
  { id: "2", label: "Business", type: "namespace", level: 1 },
  { id: "3", label: "Compute", type: "namespace", level: 1 },
  { id: "4", label: "Finance", type: "namespace", level: 1 },
  { id: "5", label: "GCS", type: "namespace", level: 1, expanded: true },
  { id: "6", label: "Level 1", type: "folder", level: 2, expanded: true },
  { id: "7", label: "Level 2", type: "folder", level: 3, expanded: true },
  { id: "8", label: "NYCTaxiTrips", type: "iceberg", level: 4, expanded: true },
  { id: "9", label: "NYCTaxiTrips", type: "view", level: 5 },
  { id: "10", label: "NYCTaxiTrips", type: "table", level: 5 },
  { id: "11", label: "NYCTaxiTrips", type: "table", level: 5 },
  { id: "12", label: "pickup_datetime", type: "table", level: 5 },
  { id: "13", label: "dropoff_datetime", type: "table", level: 5 },
  { id: "14", label: "passenger_count", type: "table", level: 5 },
  { id: "15", label: "passenger_city", type: "table", level: 5 },
  { id: "16", label: "fare_amount", type: "table", level: 5 },
  { id: "17", label: "total_amount", type: "table", level: 5 },
  { id: "18", label: "passenger_city", type: "view", level: 5 },
  { id: "19", label: "Test", type: "namespace", level: 1 },
  { id: "20", label: "Mona", type: "namespace", level: 1 },
  { id: "21", label: "Marketing", type: "namespace", level: 1 },
];

// Simple SQL lines for the catalog data view
const SQL_LINES = [
  { tokens: [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " country;", kind: "plain" as const }] },
  { tokens: [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " city;", kind: "plain" as const }] },
  { tokens: [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " customer;", kind: "plain" as const }] },
  { tokens: [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " call;", kind: "plain" as const }] },
  { tokens: [{ text: "SELECT", kind: "kw" as const }, { text: " * ", kind: "plain" as const }, { text: "FROM", kind: "kw" as const }, { text: " TaxiTrip.NYCTaxiFare;", kind: "plain" as const }] },
];

// Result table columns + sample data
const RESULT_COLUMNS = ["Pickup_datetime", "ID", "passenger_count", "trip_distance_mi", "fare_amount", "total_amour..."];

const RESULT_ROWS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  pickup: "2014-11-11 20:50:00",
  uuid: "227b5e44-1cd7-11ed-...",
  passengers: 5,
  distance: 1.09,
  fare: 6.5,
  total: 8.5,
}));

// ─── Token color helper ──────────────────────────────────────────────────────

function tokenColor(kind: string): string {
  switch (kind) {
    case "kw": return "#0033B3";
    case "fn": return "#7A3E9D";
    case "str": return "#067D17";
    default: return "var(--foreground)";
  }
}

// ─── Dataset icon helper ─────────────────────────────────────────────────────

function DatasetIcon({ type }: { type: DatasetItem["type"] }) {
  switch (type) {
    case "namespace": return <IconEntityNamespace size={16} className="text-secondary-foreground shrink-0" />;
    case "folder": return <IconEntityFolderBlue size={16} className="shrink-0" />;
    case "table": return <IconEntityTable size={16} className="text-secondary-foreground shrink-0" />;
    case "view": return <IconEntityView size={16} className="shrink-0" />;
    case "iceberg": return <IconEntityIcebergTable size={16} className="shrink-0" />;
  }
}

// ─── Left Panel ──────────────────────────────────────────────────────────────

function CatalogLeftPanel({
  panelTab,
  setPanelTab,
}: {
  panelTab: PanelTab;
  setPanelTab: (t: PanelTab) => void;
}) {
  const [search, setSearch] = useState("");
  const [dataSubTab, setDataSubTab] = useState<DataSubTab>("all");

  const filtered = CATALOG_TREE.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="flex flex-col shrink-0 overflow-hidden"
      style={{ width: 304, borderRight: "1px solid var(--muted)", background: "var(--card)" }}
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
                fontSize: 14,
              }}
            >
              {tab === "data" ? "Data" : "Scripts"}
            </button>
          );
        })}
      </div>

      {/* Sub-tabs: All | Starred */}
      {panelTab === "data" && (
        <div
          className="flex shrink-0 gap-4"
          style={{ padding: "8px 16px 0", borderBottom: "1px solid var(--muted)" }}
        >
          {(["all", "starred"] as DataSubTab[]).map((sub) => {
            const active = dataSubTab === sub;
            return (
              <button
                key={sub}
                onClick={() => setDataSubTab(sub)}
                className="pb-2 text-sm transition-colors"
                style={{
                  color: active ? "var(--accent)" : "var(--secondary-foreground)",
                  fontWeight: active ? 600 : 400,
                  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                  background: "transparent",
                }}
              >
                {sub === "all" ? "All" : "Starred (0)"}
              </button>
            );
          })}
        </div>
      )}

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

      {/* Dataset tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {filtered.map((item) => {
          const baseIndent = { 1: 8, 2: 20, 3: 32, 4: 44, 5: 56 }[item.level];
          const isExpandable = item.type === "namespace" || item.type === "folder" || item.type === "iceberg";
          return (
            <div
              key={item.id}
              className="flex items-center gap-1 text-sm text-foreground hover:bg-background-hover cursor-pointer transition-colors"
              style={{ height: 28, paddingLeft: baseIndent, paddingRight: 8 }}
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

function TabBar({ activeTab }: { activeTab: TabId }) {
  return (
    <div
      className="flex items-stretch shrink-0 overflow-x-auto"
      style={{ height: 40, borderBottom: "1px solid var(--muted)", background: "var(--card)", padding: "0 8px" }}
    >
      <div className="relative flex items-stretch shrink-0" style={{ width: 240 }}>
        <button
          className="flex items-center gap-2 flex-1"
          style={{
            padding: "6px 8px 6px 16px",
            color: "var(--foreground)",
            fontWeight: 600,
            background: "var(--card)",
            fontSize: 14,
          }}
        >
          <span className="flex-1 text-left truncate">New Query 1</span>
          <span className="flex items-center justify-center rounded-sm" style={{ width: 24, height: 24 }}>
            <IconClose size={12} className="text-secondary-foreground" />
          </span>
        </button>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 2, background: "var(--accent)" }} />
      </div>

      {/* Add tab button */}
      <div className="flex items-center pl-1">
        <button
          className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
          style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        >
          <IconPlus size={16} />
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

      {/* Engine selector pill */}
      <div
        className="flex items-center gap-1 rounded-[4px] shrink-0 cursor-pointer hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "4px 8px", border: "1px solid var(--border)" }}
      >
        <span className="text-sm text-foreground">Engine:</span>
        <span style={{ color: "#5ABD4A" }} className="inline-flex">
          <IconJobEngineStart size={16} />
        </span>
        <span className="text-sm text-foreground">xl_us-west-4</span>
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
        Save View
        <div className="flex items-center pl-1" style={{ borderLeft: "1px solid var(--border)" }}>
          <IconCaretDown size={16} />
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
      <span className="text-sm" style={{ color: "var(--secondary-foreground)" }}>
        Context:
      </span>
      <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
        @my space
      </span>
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        title="Functions"
      >
        <IconSqlFunction size={16} />
      </button>
      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 24, height: 24, color: "var(--secondary-foreground)" }}
        title="AI Assist"
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
      {/* Line numbers */}
      <div
        className="select-none text-right shrink-0"
        style={{
          width: 28,
          padding: "8px 0 8px 8px",
          color: "var(--secondary-foreground)",
          borderRight: "1px solid var(--border)",
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
  );
}

// ─── Result Action Bar ────────────────────────────────────────────────────────

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
      <button
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "0 8px", color: "var(--secondary-foreground)" }}
      >
        <IconDatasetAddField size={16} />
        Add Field
      </button>
      <button
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "0 8px", color: "var(--secondary-foreground)" }}
      >
        <IconDatasetGroupBy size={16} />
        Group By
      </button>
      <button
        className="flex items-center gap-1 rounded-[4px] text-sm font-medium hover:bg-background-hover transition-colors"
        style={{ height: 32, padding: "0 8px", color: "var(--secondary-foreground)" }}
      >
        <IconDatasetJoin size={16} />
        Join
      </button>

      <div
        className="flex items-center rounded-[4px]"
        style={{ height: 32, padding: "0 8px", background: "var(--card)", border: "1px solid var(--border)", minWidth: 140 }}
      >
        <span className="text-sm text-muted-foreground">Filter Columns</span>
      </div>

      <span className="text-sm text-foreground">21 Columns</span>

      <div className="flex-1" />

      <span className="text-sm" style={{ color: "var(--secondary-foreground)" }}>
        Job: <span style={{ color: "var(--accent)" }}>Run</span>
      </span>
      <span className="text-sm text-secondary-foreground">Rows: 1200</span>
      <span className="text-sm text-secondary-foreground">Time: 1s</span>

      <button
        className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
        style={{ width: 32, height: 32, color: "var(--secondary-foreground)" }}
      >
        <IconDatasetDownload size={16} />
      </button>
    </div>
  );
}

// ─── Result Table ─────────────────────────────────────────────────────────────

function ResultTable() {
  return (
    <div className="flex-1 overflow-auto" style={{ background: "var(--card)" }}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--muted)" }}>
            <th
              className="text-left font-semibold text-secondary-foreground bg-background shrink-0"
              style={{ padding: "8px 12px", minWidth: 32 }}
            >
              #
            </th>
            {RESULT_COLUMNS.map((col) => (
              <th
                key={col}
                className="text-left font-semibold text-secondary-foreground bg-background"
                style={{ padding: "8px 12px", minWidth: 140, whiteSpace: "nowrap" }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RESULT_ROWS.map((row) => (
            <tr
              key={row.id}
              className="group hover:bg-background-hover transition-colors"
              style={{ borderBottom: "1px solid var(--muted)" }}
            >
              <td className="text-secondary-foreground" style={{ padding: "6px 12px" }}>{row.id}</td>
              <td style={{ padding: "6px 12px" }}>{row.pickup}</td>
              <td style={{ padding: "6px 12px" }}>{row.uuid}</td>
              <td style={{ padding: "6px 12px" }}>{row.passengers}</td>
              <td style={{ padding: "6px 12px" }}>{row.distance}</td>
              <td style={{ padding: "6px 12px" }}>{row.fare}</td>
              <td style={{ padding: "6px 12px" }}>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Wiki Panel (collapsed) ───────────────────────────────────────────────────

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
        <IconCaretRight size={16} />
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function CatalogPage() {
  const [panelTab, setPanelTab] = useState<PanelTab>("data");

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left Nav — 64px, catalog active */}
      <LeftNav activePage="catalog" />

      {/* Content section — fills remaining width */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>

        {/* Top Nav — 48px */}
        <TopNav />

        {/* Database Header — 64px */}
        <DatabaseHeader name="Database Name" schema="Sales" activeTab="data" />

        {/* Bottom: left panel + main + wiki */}
        <div className="flex flex-1 overflow-hidden">

          {/* Catalog Left Panel — 304px */}
          <CatalogLeftPanel panelTab={panelTab} setPanelTab={setPanelTab} />

          {/* Main section */}
          <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>

            {/* Tab Bar */}
            <TabBar activeTab="tab-1" />

            {/* Action Header */}
            <ActionHeader />

            {/* Context Bar */}
            <ContextBar />

            {/* SQL Editor */}
            <div
              className="shrink-0 overflow-hidden"
              style={{ height: 140, borderBottom: "1px solid var(--muted)" }}
            >
              <SqlEditor />
            </div>

            {/* Result Action Bar */}
            <ResultActionBar />

            {/* Result Table */}
            <ResultTable />
          </div>

          {/* Wiki Panel — 35px collapsed */}
          <WikiPanelCollapsed />
        </div>
      </div>
    </div>
  );
}
