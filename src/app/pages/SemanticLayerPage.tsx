import { useState } from "react";
import { Button } from "../components/ui/button";
import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconCaretDown } from "../components/icons/IconCaretDown";
import { IconEntityIcebergTable } from "../components/icons/IconEntityIcebergTable";

// ─── Types ───────────────────────────────────────────────────────────────────

type SidebarSection = "overview" | "entities" | "relationships" | "metrics" | "knowledge-graph";

interface Entity {
  name: string;
  attributes: number;
  relationships: number;
  metrics: number;
}

interface Relationship {
  from: string;
  to: string;
  type: "One-to-Many" | "Many-to-One" | "One-to-One";
}

interface Dataset {
  name: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ENTITIES: Entity[] = [
  { name: "Customer", attributes: 9, relationships: 2, metrics: 2 },
  { name: "Order", attributes: 5, relationships: 3, metrics: 4 },
  { name: "Product", attributes: 8, relationships: 1, metrics: 3 },
  { name: "Campaign", attributes: 6, relationships: 4, metrics: 2 },
  { name: "support ticket", attributes: 7, relationships: 5, metrics: 1 },
  { name: "web session", attributes: 4, relationships: 2, metrics: 3 },
];

const RELATIONSHIPS: Relationship[] = [
  { from: "Customer", to: "Order", type: "One-to-Many" },
  { from: "Customer", to: "Support ticket", type: "One-to-Many" },
  { from: "Customer", to: "Web session", type: "One-to-Many" },
  { from: "Order", to: "Product", type: "One-to-Many" },
  { from: "Product", to: "Category", type: "Many-to-One" },
  { from: "Order", to: "Shipment", type: "One-to-One" },
];

const DATASETS: Dataset[] = [
  { name: "analytics.prod.events" },
  { name: "sales.prod.orders" },
  { name: "catalog.prod.products" },
  { name: "customer_segments" },
  { name: "support.prod.tickets" },
  { name: "analytics.prod.events" },
];

const NAV_ITEMS: { id: SidebarSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "entities", label: "Entities (6)" },
  { id: "relationships", label: "Relationships (6)" },
  { id: "metrics", label: "Metrics (10)" },
  { id: "knowledge-graph", label: "Knowledge Graph" },
];

// ─── Semantic layer icon (sparkle/asterisk) ───────────────────────────────────

function SemanticLayerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.5 9L20 7L15 12L20 17L13.5 15L12 22L10.5 15L4 17L9 12L4 7L10.5 9L12 2Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ label, collapsed, onToggle }: { label: string; collapsed: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 w-full text-left hover:bg-background-hover transition-colors rounded-[4px]"
      style={{ padding: "12px 16px" }}
    >
      <span
        className="inline-flex shrink-0 transition-transform"
        style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)" }}
      >
        <IconCaretDown size={16} className="text-secondary-foreground" />
      </span>
      <span className="font-semibold text-foreground" style={{ fontSize: 14 }}>{label}</span>
    </button>
  );
}

// ─── Entities Table ───────────────────────────────────────────────────────────

function EntitiesTable({ entities }: { entities: Entity[] }) {
  return (
    <div style={{ borderTop: "1px solid var(--muted)" }}>
      {entities.map((entity, i) => (
        <div
          key={entity.name + i}
          className="flex items-center hover:bg-background-hover transition-colors cursor-pointer group"
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--muted)",
          }}
        >
          <span className="flex-1 font-medium text-foreground" style={{ fontSize: 14 }}>
            {entity.name}
          </span>
          <span className="text-secondary-foreground" style={{ fontSize: 14 }}>
            {entity.attributes} Attribute{entity.attributes !== 1 ? "s" : ""}
            <span className="mx-2 text-muted-foreground">•</span>
            {entity.relationships} relationship{entity.relationships !== 1 ? "s" : ""}
            <span className="mx-2 text-muted-foreground">•</span>
            {entity.metrics} related metric{entity.metrics !== 1 ? "s" : ""}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Relationships Table ──────────────────────────────────────────────────────

function RelationshipsTable({ relationships }: { relationships: Relationship[] }) {
  return (
    <div style={{ borderTop: "1px solid var(--muted)" }}>
      {relationships.map((rel, i) => (
        <div
          key={i}
          className="flex items-center hover:bg-background-hover transition-colors cursor-pointer"
          style={{ padding: "12px 16px", borderBottom: "1px solid var(--muted)" }}
        >
          <span className="flex-1 font-medium text-foreground" style={{ fontSize: 14 }}>
            {rel.from} → {rel.to}
          </span>
          <span className="text-secondary-foreground" style={{ fontSize: 14 }}>{rel.type}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Right Sidebar ────────────────────────────────────────────────────────────

function RightSidebar({ datasets }: { datasets: Dataset[] }) {
  return (
    <div
      className="flex flex-col shrink-0 overflow-y-auto"
      style={{ width: 220, borderLeft: "1px solid var(--muted)", padding: "24px 16px", gap: 0 }}
    >
      {/* Metadata */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Owner */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary-foreground">Owner</span>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 20, height: 20, background: "#E07B54", fontSize: 10, color: "white", fontWeight: 600 }}
            >
              A
            </div>
            <span className="text-sm text-foreground font-medium">Antonio</span>
          </div>
        </div>

        {/* Created on */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary-foreground">Created on</span>
          <span className="text-sm text-foreground">Jan 1, 2026, 6:23AM</span>
        </div>

        {/* Last updated */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary-foreground">Last updated</span>
          <span className="text-sm text-foreground">Jan 1, 2026, 6:23AM</span>
        </div>

        {/* Last updated by */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary-foreground">Last updated by</span>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 20, height: 20, background: "#E07B54", fontSize: 10, color: "white", fontWeight: 600 }}
            >
              A
            </div>
            <span className="text-sm text-foreground font-medium">Antonio</span>
          </div>
        </div>

        {/* Manage privileges */}
        <button
          className="text-sm text-left w-fit hover:underline transition-colors"
          style={{ color: "var(--accent)" }}
        >
          Manage privileges
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--muted)", marginBottom: 16 }} />

      {/* Datasets included */}
      <div>
        <div className="flex items-center gap-1 mb-3">
          <span className="font-semibold text-foreground" style={{ fontSize: 14 }}>
            Datasets included ({datasets.length})
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {datasets.map((ds, i) => (
            <div key={i} className="flex items-center gap-2">
              <IconEntityIcebergTable size={16} className="shrink-0" />
              <span className="text-sm text-foreground truncate">{ds.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function SemanticLayerPage() {
  const [activeSection, setActiveSection] = useState<SidebarSection>("overview");
  const [entitiesCollapsed, setEntitiesCollapsed] = useState(false);
  const [relationshipsCollapsed, setRelationshipsCollapsed] = useState(false);
  const [metricsCollapsed, setMetricsCollapsed] = useState(true);

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <LeftNav activePage="semantic-layer" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />

        {/* Page Header */}
        <div
          className="flex items-center justify-between shrink-0 px-6"
          style={{ height: 64, borderBottom: "1px solid var(--muted)", background: "var(--card)" }}
        >
          <div className="flex items-center gap-2">
            <SemanticLayerIcon />
            <span className="font-semibold text-foreground" style={{ fontSize: 16 }}>Semantic layer</span>
          </div>
          <Button variant="default">Edit</Button>
        </div>

        {/* Body: sidebar + main + right */}
        <div className="flex flex-1 overflow-hidden" style={{ background: "var(--background)" }}>

          {/* Left secondary nav */}
          <div
            className="flex flex-col shrink-0 overflow-y-auto gap-[6px]"
            style={{ width: 210, background: "var(--card)", borderRight: "1px solid var(--muted)", padding: "8px 16px" }}
          >
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="w-full text-left transition-colors rounded-[4px]"
                  style={{
                    height: 40,
                    padding: "0 8px",
                    fontSize: 14,
                    fontWeight: active ? 600 : 400,
                    color: active ? "white" : "var(--foreground)",
                    background: active ? "var(--sidebar-primary)" : "transparent",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Main content */}
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto" style={{ background: "var(--card)" }}>

              {/* Entities section */}
              <div style={{ borderBottom: "1px solid var(--muted)" }}>
                <SectionHeader
                  label={`Entities (${ENTITIES.length})`}
                  collapsed={entitiesCollapsed}
                  onToggle={() => setEntitiesCollapsed((v) => !v)}
                />
                {!entitiesCollapsed && <EntitiesTable entities={ENTITIES} />}
              </div>

              {/* Relationships section */}
              <div style={{ borderBottom: "1px solid var(--muted)" }}>
                <SectionHeader
                  label={`Relationships (${RELATIONSHIPS.length})`}
                  collapsed={relationshipsCollapsed}
                  onToggle={() => setRelationshipsCollapsed((v) => !v)}
                />
                {!relationshipsCollapsed && <RelationshipsTable relationships={RELATIONSHIPS} />}
              </div>

              {/* Metrics section */}
              <div>
                <SectionHeader
                  label="Metrics (10)"
                  collapsed={metricsCollapsed}
                  onToggle={() => setMetricsCollapsed((v) => !v)}
                />
              </div>
            </div>

            {/* Right sidebar */}
            <RightSidebar datasets={DATASETS} />
          </div>
        </div>
      </div>
    </div>
  );
}
