// PAGE — Org Settings: Cost Management
// Sidebar nav matches Figma "Sample pages > org settings" (node 12400:83714).
// Icons from src/app/components/icons/ (Dremio design system icon set).
//
// Design rules applied (see CLAUDE.md):
//   - Full-height layout, no card wrapper on settings shell
//   - Page-level actions (Export, Configure) live in PageHeader — never below it
//   - Max 1 Primary button per page (Configure Limits in header, via <Button variant="default">)
//   - Section-level "Add" actions use <Button variant="secondary">
//   - Table row actions hidden by default, visible on row hover only
//   - Row action icons 20×20px (table row action size per design system)
//   - Delete icon: text-secondary-foreground default; text-destructive only on group-hover
//   - Active sidebar bg: #2e92a1 (background/secondaryNavSelected token)
//   - Hover bg: #eeeff1 (background/greyHover token)
//   - #B0B7BF used ONLY for placeholders and disabled states — NEVER for labels
//   - Table header labels, card category labels, section descriptions → #505862

import { useState } from "react";
import { LeftNav } from "../components/LeftNav";
import { Button } from "../components/ui/button";
import {
  IconCaretLeft,
  IconInformation,
  IconSettingsBilling,
  IconSettingsBiApplications,
  IconSettingsExternalToken,
  IconSettingsOauth,
  IconSettingsProjects,
  IconSettingsUsers,
  IconSettingsRoles,
  IconSettingsPrivilege,
  IconSettingsAuditing,
  IconSettingsAiConfigurations,
  IconEdit,
  IconDelete,
  IconPlus,
  IconWarning,
  IconDatasetDownload,
  IconSettings,
  IconCopy,
} from "../components/icons";

// ─── Nav Items ────────────────────────────────────────────────────────────────

type NavItem = {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { id: "general",    label: "General Information",      Icon: IconInformation },
  { id: "cost",       label: "Cost Management",          Icon: IconSettingsBilling },
  { id: "bi",         label: "BI Applications",          Icon: IconSettingsBiApplications },
  { id: "token",      label: "External Token Providers", Icon: IconSettingsExternalToken },
  { id: "oauth",      label: "OAuth Applications",       Icon: IconSettingsOauth },
  { id: "projects",   label: "Projects",                 Icon: IconSettingsProjects },
  { id: "users",      label: "Users",                    Icon: IconSettingsUsers },
  { id: "roles",      label: "Roles",                    Icon: IconSettingsRoles },
  { id: "privileges", label: "Privileges",               Icon: IconSettingsPrivilege },
  { id: "auditing",   label: "Auditing",                 Icon: IconSettingsAuditing },
  { id: "ai",         label: "AI Configurations",        Icon: IconSettingsAiConfigurations },
];

// ─── Settings Sidebar ─────────────────────────────────────────────────────────
// Active bg = #2e92a1 (background/secondaryNavSelected)
// Hover bg  = #eeeff1 (background/greyHover)
// Icons: currentColor — set via className for active (white) vs default (secondary-foreground)

function SettingsSidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <div
      className="flex flex-col shrink-0 h-full bg-card"
      style={{ width: "272px", borderRight: "1px solid var(--muted)" }}
    >
      {/* Header — back arrow + title (h-[64px], pl-[24px] pr-[8px], border-bottom = border/default) */}
      <div
        className="flex items-center shrink-0 gap-2"
        style={{ height: "64px", borderBottom: "1px solid var(--border)", paddingLeft: "24px", paddingRight: "8px" }}
      >
        <button
          className="flex items-center justify-center shrink-0 cursor-pointer transition-colors hover:bg-muted rounded"
          style={{ width: "24px", height: "24px", border: "none", background: "transparent", padding: 0 }}
          aria-label="Back"
        >
          {/* Back arrow: 24px container, ~20px icon — matches Figma ArrowWithCircleLeft */}
          <IconCaretLeft size={20} className="text-secondary-foreground" />
        </button>
        <span className="text-lg font-semibold text-foreground whitespace-nowrap">
          Organization Settings
        </span>
      </div>

      {/*
       * Nav items list.
       * From Figma Nav/Secondary nav (node 36:2383):
       *   - pt-[8px] px-[16px] on the container
       *   - gap-[6px] between items
       *   - Each item: h-[40px], px-[8px], gap-[8px], rounded-[4px]
       *   - Icon slot: size-[24px] — 24×24px, not 16 or 20
       *   - Default text: #202124 (foreground), font-normal
       *   - Selected bg: #2e92a1, text: white, font-semibold
       *   - Hover bg: #f1fafb (background-hover token)
       */}
      <div
        className="flex flex-col overflow-y-auto"
        style={{ paddingTop: "8px", paddingLeft: "16px", paddingRight: "16px", gap: "6px" }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="flex items-center w-full cursor-pointer transition-colors"
              style={{
                height: "40px",
                padding: "0 8px",
                gap: "8px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: isActive ? "#2e92a1" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "#f1fafb";
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {/* Icon slot: 24×24px (per Figma Nav/Nav/Secondary nav module size-[24px]) */}
              <span className="flex items-center justify-center shrink-0" style={{ width: "24px", height: "24px" }}>
                <item.Icon
                  size={24}
                  className={isActive ? "text-white" : "text-secondary-foreground"}
                />
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#fff" : "var(--foreground)",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Shared UI Primitives ─────────────────────────────────────────────────────

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-card border border-border rounded-[8px] ${className}`}
      style={{ boxShadow: "var(--elevation-sm)" }}
    >
      {children}
    </div>
  );
}

function Badge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
}) {
  const styles: Record<string, React.CSSProperties> = {
    default: { backgroundColor: "var(--muted)",          border: "1px solid var(--border)",  color: "var(--secondary-foreground)" },
    success: { backgroundColor: "#edf7ed",                border: "1px solid #5abd4a",         color: "#5abd4a" },
    warning: { backgroundColor: "#fff4e5",                border: "1px solid #f5a623",         color: "#996600" },
    danger:  { backgroundColor: "#fdeded",                border: "1px solid var(--destructive)", color: "var(--destructive)" },
    info:    { backgroundColor: "rgba(39,122,189,0.12)", border: "1px solid var(--fyi)",      color: "var(--fyi)" },
  };
  return (
    <span
      className="inline-flex items-center px-2 rounded-[4px]"
      style={{ fontSize: "12px", fontWeight: 600, lineHeight: "18px", padding: "2px 8px", ...styles[variant] }}
    >
      {label}
    </span>
  );
}

function ProgressBar({
  value,
  max,
  variant = "default",
}: {
  value: number;
  max: number;
  variant?: "default" | "warning" | "danger";
}) {
  const pct = Math.min((value / max) * 100, 100);
  const color =
    variant === "danger" ? "var(--destructive)" :
    variant === "warning" ? "#f5a623" :
    "var(--primary)";
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", backgroundColor: "var(--muted)" }}>
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative flex shrink-0 cursor-pointer rounded-full transition-colors"
      style={{
        width: "36px",
        height: "20px",
        backgroundColor: checked ? "var(--primary)" : "var(--border)",
        border: "none",
        padding: 0,
      }}
    >
      <span
        className="absolute top-[2px] rounded-full bg-white transition-transform"
        style={{
          width: "16px",
          height: "16px",
          transform: checked ? "translateX(18px)" : "translateX(2px)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </button>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────
// Height 64px, border-bottom muted, bg white.
// Left: icon (ReactNode, 24px) + title (16px semibold).
// Right: page-level actions — only 1 Primary button allowed per page.

function PageHeader({
  icon,
  title,
  actions,
}: {
  icon: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center justify-between shrink-0 w-full bg-card"
      style={{ height: "64px", borderBottom: "1px solid var(--muted)", padding: "0 24px 0 16px" }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px", color: "var(--foreground)" }}>
          {title}
        </span>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

// ─── Stat Cards ───────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  progress,
  progressVariant,
}: {
  label: string;
  value: string;
  sub: string;
  progress?: { value: number; max: number };
  progressVariant?: "default" | "warning" | "danger";
}) {
  return (
    <SectionCard className="flex flex-col gap-3 p-4 flex-1">
      {/* Uppercase category label — secondary but meaningful, use secondary-foreground (#505862) */}
      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--secondary-foreground)", lineHeight: "18px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </p>
      <div className="flex flex-col gap-1">
        <p style={{ fontSize: "18px", fontWeight: 600, color: "var(--foreground)", lineHeight: "1.3" }}>
          {value}
        </p>
        {/* Sub-label is secondary but meaningful — use secondary-foreground */}
        <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
          {sub}
        </p>
      </div>
      {progress && <ProgressBar value={progress.value} max={progress.max} variant={progressVariant} />}
    </SectionCard>
  );
}

// ─── Quota Table ──────────────────────────────────────────────────────────────

type Quota = {
  id: string;
  resource: string;
  quotaType: string;
  limit: string;
  current: string;
  currentNum: number;
  limitNum: number;
  status: "ok" | "warning" | "danger";
};

const INITIAL_QUOTAS: Quota[] = [
  { id: "1", resource: "Query Jobs",       quotaType: "Concurrent",   limit: "50 jobs",      current: "23 jobs",    currentNum: 23,   limitNum: 50,    status: "ok" },
  { id: "2", resource: "Data Reflections", quotaType: "Storage",      limit: "500 GB",       current: "412 GB",     currentNum: 412,  limitNum: 500,   status: "warning" },
  { id: "3", resource: "Download Exports", quotaType: "Daily Volume", limit: "100 GB / day", current: "98 GB",      currentNum: 98,   limitNum: 100,   status: "danger" },
  { id: "4", resource: "API Requests",     quotaType: "Rate",         limit: "10,000 / hr",  current: "3,240 / hr", currentNum: 3240, limitNum: 10000, status: "ok" },
];

const STATUS_BADGE: Record<Quota["status"], React.ReactNode> = {
  ok:      <Badge label="Within limit" variant="success" />,
  warning: <Badge label="Near limit"   variant="warning" />,
  danger:  <Badge label="At limit"     variant="danger"  />,
};

const PROGRESS_VARIANT: Record<Quota["status"], "default" | "warning" | "danger"> = {
  ok: "default", warning: "warning", danger: "danger",
};

function QuotaTable() {
  const [quotas] = useState<Quota[]>(INITIAL_QUOTAS);
  return (
    <SectionCard>
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--muted)" }}>
        <div className="flex flex-col gap-0.5">
          <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
            Usage Quotas
          </h4>
          {/* Section description — secondary but meaningful, use secondary-foreground */}
          <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
            Set maximum resource limits for the organization
          </p>
        </div>
        {/* Section-level "Add" → Secondary button (1 Primary max per page, lives in header) */}
        <Button variant="secondary" size="sm">
          <IconPlus size={16} />
          Add Quota
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--muted)" }}>
              {["Resource", "Quota Type", "Limit", "Current Usage", "Status", ""].map((h) => (
                <th
                  key={h}
                  className="text-left"
                  style={{
                    padding: "10px 20px",
                    fontSize: "12px",
                    fontWeight: 600,
                    // Table column headers are structural labels — use secondary-foreground, NOT muted-foreground
                    color: "var(--secondary-foreground)",
                    lineHeight: "18px",
                    whiteSpace: "nowrap",
                    backgroundColor: "var(--background)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {quotas.map((q, i) => (
              // group enables hover-only row action disclosure
              <tr
                key={q.id}
                className="group"
                style={{ borderBottom: i < quotas.length - 1 ? "1px solid var(--muted)" : "none" }}
              >
                <td style={{ padding: "14px 20px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
                    {q.resource}
                  </p>
                </td>
                <td style={{ padding: "14px 20px" }}>
                  {/* Secondary table text → secondary-foreground */}
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "20px" }}>
                    {q.quotaType}
                  </p>
                </td>
                <td style={{ padding: "14px 20px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "var(--foreground)", lineHeight: "20px" }}>
                    {q.limit}
                  </p>
                </td>
                <td style={{ padding: "14px 20px", minWidth: "180px" }}>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--foreground)", lineHeight: "18px" }}>
                        {q.current}
                      </p>
                      <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
                        {Math.round((q.currentNum / q.limitNum) * 100)}%
                      </p>
                    </div>
                    <ProgressBar value={q.currentNum} max={q.limitNum} variant={PROGRESS_VARIANT[q.status]} />
                  </div>
                </td>
                <td style={{ padding: "14px 20px" }}>{STATUS_BADGE[q.status]}</td>
                <td style={{ padding: "14px 20px", width: "80px" }}>
                  {/*
                   * Row actions: hidden by default, appear only on row hover.
                   * Icon size: 20×20px (tableRowAction per design system).
                   * Edit: neutral color always.
                   * Delete: neutral default, destructive only on hover.
                   */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="flex items-center justify-center rounded cursor-pointer transition-colors hover:bg-muted text-secondary-foreground"
                      style={{ width: "32px", height: "32px", border: "none", background: "transparent" }}
                      aria-label="Edit"
                    >
                      <IconEdit size={20} />
                    </button>
                    <button
                      className="flex items-center justify-center rounded cursor-pointer transition-colors hover:bg-destructive/10 text-secondary-foreground group-hover:text-secondary-foreground hover:text-destructive"
                      style={{ width: "32px", height: "32px", border: "none", background: "transparent" }}
                      aria-label="Delete"
                    >
                      <IconDelete size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

// ─── Budget Alerts ────────────────────────────────────────────────────────────

type BudgetAlert = {
  id: string;
  name: string;
  resource: string;
  threshold: number;
  enabled: boolean;
  recipients: string;
};

const INITIAL_ALERTS: BudgetAlert[] = [
  { id: "1", name: "Storage Warning",    resource: "Total Storage", threshold: 80, enabled: true,  recipients: "admin@company.com, devops@company.com" },
  { id: "2", name: "Compute Near Limit", resource: "Compute Hours", threshold: 90, enabled: true,  recipients: "finance@company.com" },
  { id: "3", name: "Monthly Budget Cap", resource: "Total Spend",   threshold: 95, enabled: false, recipients: "cto@company.com, finance@company.com" },
];

function BudgetAlerts() {
  const [alerts, setAlerts] = useState<BudgetAlert[]>(INITIAL_ALERTS);
  const toggle = (id: string) =>
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)));

  return (
    <SectionCard>
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--muted)" }}>
        <div className="flex flex-col gap-0.5">
          <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
            Budget Alerts
          </h4>
          <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
            Get notified when resource usage reaches a threshold
          </p>
        </div>
        {/* Secondary button — 1 Primary max per page */}
        <Button variant="secondary" size="sm">
          <IconPlus size={16} />
          Add Alert
        </Button>
      </div>
      <div className="flex flex-col">
        {alerts.map((alert, i) => (
          <div
            key={alert.id}
            className="group flex items-start gap-4 px-5 py-4"
            style={{ borderBottom: i < alerts.length - 1 ? "1px solid var(--muted)" : "none" }}
          >
            {/* Alert icon container — color reflects enabled state */}
            <div
              className="flex items-center justify-center rounded-[6px] shrink-0 mt-px"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: alert.enabled ? "#fff4e5" : "var(--background)",
                color: alert.enabled ? "#f5a623" : "var(--muted-foreground)",
              }}
            >
              <IconWarning size={16} />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
                  {alert.name}
                </p>
                <Badge
                  label={`${alert.threshold}% threshold`}
                  variant={alert.threshold >= 90 ? "danger" : alert.threshold >= 80 ? "warning" : "info"}
                />
              </div>
              <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
                Monitors{" "}
                <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{alert.resource}</strong>
                {" · "}Sends to: {alert.recipients}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {/* Toggle is persistent state — always visible */}
              <Toggle checked={alert.enabled} onChange={() => toggle(alert.id)} />
              {/* Edit/delete — hover-only, 20×20px icons */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="flex items-center justify-center rounded cursor-pointer transition-colors hover:bg-muted text-secondary-foreground"
                  style={{ width: "32px", height: "32px", border: "none", background: "transparent" }}
                  aria-label="Edit"
                >
                  <IconEdit size={20} />
                </button>
                <button
                  className="flex items-center justify-center rounded cursor-pointer transition-colors hover:bg-destructive/10 text-secondary-foreground hover:text-destructive"
                  style={{ width: "32px", height: "32px", border: "none", background: "transparent" }}
                  aria-label="Delete"
                >
                  <IconDelete size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ─── Reflections Budget ───────────────────────────────────────────────────────

function ReflectionsBudget() {
  const [allocatedGB, setAllocatedGB] = useState(500);
  const usedGB = 412;
  const maxGB = 2048;

  return (
    <SectionCard>
      <div className="flex flex-col gap-5 px-5 py-5">
        <div className="flex flex-col gap-1">
          <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
            Reflections Storage Budget
          </h4>
          <p style={{ fontSize: "12px", fontWeight: 400, color: "var(--secondary-foreground)", lineHeight: "18px" }}>
            Control how much storage Dremio can allocate for data reflections (materialized query results).
          </p>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "Currently Used",   value: `${usedGB} GB` },
            { label: "Budget Allocated", value: `${allocatedGB} GB` },
            { label: "Total Available",  value: `${maxGB} GB` },
            { label: "Utilization",      value: `${Math.round((usedGB / allocatedGB) * 100)}%` },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5">
              {/* Stat labels — secondary but meaningful → secondary-foreground */}
              <p style={{ fontSize: "12px", color: "var(--secondary-foreground)", lineHeight: "18px" }}>
                {item.label}
              </p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--foreground)", lineHeight: "20px" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <ProgressBar
          value={usedGB}
          max={allocatedGB}
          variant={usedGB / allocatedGB >= 0.9 ? "warning" : "default"}
        />
        <div className="flex flex-col gap-2.5">
          <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--foreground)", lineHeight: "18px" }}>
            Set Budget (GB)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={100}
              max={maxGB}
              step={50}
              value={allocatedGB}
              onChange={(e) => setAllocatedGB(Number(e.target.value))}
              className="flex-1 cursor-pointer"
              style={{ accentColor: "var(--primary)" }}
            />
            <div className="flex items-center rounded-[4px] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <input
                type="number"
                min={100}
                max={maxGB}
                step={50}
                value={allocatedGB}
                onChange={(e) =>
                  setAllocatedGB(Math.max(100, Math.min(maxGB, Number(e.target.value))))
                }
                className="w-[72px] px-2.5 py-1.5 text-right focus:outline-none bg-transparent"
                style={{ fontSize: "14px", color: "var(--foreground)" }}
              />
              <span
                className="px-2.5 py-1.5"
                style={{
                  fontSize: "12px",
                  // "GB" unit label is a UI label — secondary-foreground, not muted-foreground
                  color: "var(--secondary-foreground)",
                  backgroundColor: "var(--background)",
                  borderLeft: "1px solid var(--border)",
                }}
              >
                GB
              </span>
            </div>
          </div>
        </div>
        {/* Save/reset: secondary actions (1 primary per page is Configure Limits in header) */}
        <div className="flex items-center gap-2 pt-1">
          <Button variant="secondary">Save Changes</Button>
          <Button variant="secondary">Reset to Default</Button>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Cost Management Content ──────────────────────────────────────────────────

function CostManagementContent() {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-card">
      {/*
       * PageHeader: page-level actions live here (right side).
       * "Configure Limits" = the 1 Primary button for this page (<Button variant="default">).
       * "Export Report" = Secondary (not the primary page action).
       * Icons in buttons are 16px (inline with text — inlineWithText size per design system).
       */}
      <PageHeader
        icon={<IconSettingsBilling size={24} className="text-foreground" />}
        title="Cost Management"
        actions={
          <>
            <Button variant="secondary" size="sm">
              <IconDatasetDownload size={16} />
              Export Report
            </Button>
            {/* Max 1 Primary button per page */}
            <Button variant="default" size="sm">
              <IconSettings size={16} className="text-white" />
              Configure Limits
            </Button>
          </>
        }
      />

      {/* Scrollable body — bg background (#F6F7F8), 24px padding */}
      <div
        className="flex flex-col gap-6 flex-1 overflow-y-auto px-6 py-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Stat cards row */}
        <div className="flex gap-4">
          <StatCard label="Total Storage"     value="2.4 TB"  sub="of 10 TB allocated"    progress={{ value: 2.4,  max: 10   }} progressVariant="default" />
          <StatCard label="Compute Hours"     value="847 h"   sub="of 1,000 h this month" progress={{ value: 847, max: 1000  }} progressVariant="warning" />
          <StatCard label="Active Engines"    value="3 / 5"   sub="engines running"        progress={{ value: 3,   max: 5    }} progressVariant="default" />
          <StatCard label="Est. Monthly Cost" value="$12,480" sub="↑ 8% vs last month" />
        </div>

        <QuotaTable />
        <BudgetAlerts />
        <ReflectionsBudget />

        {/* Bottom breathing room */}
        <div className="h-2" />
      </div>
    </div>
  );
}

// ─── AI Configurations Content ───────────────────────────────────────────────

function AiConfigurationsContent() {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-card">
      <PageHeader
        icon={<IconSettingsAiConfigurations size={24} className="text-foreground" />}
        title="AI Configurations"
      />
      <div className="flex flex-col gap-[16px] flex-1 overflow-y-auto p-[16px]" style={{ backgroundColor: "var(--background)" }}>
        {/* Section title + description */}
        <div className="flex flex-col gap-[4px]" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px", color: "var(--foreground)" }}>AI</h2>
          <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--secondary-foreground)" }}>
            Manage AI model provider configurations for AI features in your organization.
          </p>
        </div>

        {/* Provider count + add button */}
        <div className="flex items-center justify-between" style={{ maxWidth: 600 }}>
          <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--foreground)" }}>1 provider added</span>
          <button
            className="flex items-center gap-[4px] h-[32px] px-[8px] rounded-[4px] transition-colors hover:bg-[var(--background-hover)]"
            style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)", border: "1px solid var(--border)", background: "var(--card)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Add a model provider
          </button>
        </div>

        {/* Provider card */}
        <div style={{ maxWidth: 600 }}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-[8px]">
              <span
                className="inline-flex items-center px-[8px] rounded-[4px] text-[12px] font-semibold leading-[18px]"
                style={{ height: 24, border: "1px solid var(--primary)", color: "var(--primary)" }}
              >
                Default
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)" }}>Claude_Test</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="text-[14px] leading-[20px] hover:underline" style={{ color: "var(--accent)" }}>edit</button>
              <button className="text-[14px] leading-[20px] hover:underline" style={{ color: "var(--destructive)" }}>Delete</button>
            </div>
          </div>
          <div className="flex flex-col mt-[8px]">
            {[
              { label: "Model provider", value: "Anthropic" },
              { label: "Default model", value: "Claude 4 Sonnet" },
              { label: "Allowed models", value: "" },
              { label: "Organization ID", value: "org-abc123xyz" },
              { label: "Access key", value: "sk-ant-api03-Ful•••2wAA" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center" style={{ height: 20, marginBottom: 4 }}>
                <span style={{ width: 128, fontSize: 14, lineHeight: "20px", color: "var(--secondary-foreground)", flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--foreground)" }}>{value}</span>
              </div>
            ))}
          </div>
          <div className="h-px mt-[16px]" style={{ background: "var(--muted)" }} />
        </div>
      </div>
    </div>
  );
}

// ─── General Information Content ──────────────────────────────────────────────

function GeneralInformationContent() {
  const [orgName, setOrgName] = useState("Org_name");
  const orgId = "5d1cccfd-abbb-429a-984e-fe599df96fd5";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(orgId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-card">
      <PageHeader
        icon={<IconInformation size={24} className="text-foreground" />}
        title="General Information"
      />
      <div
        className="flex flex-col flex-1 overflow-y-auto"
        style={{ backgroundColor: "var(--background)", padding: "24px" }}
      >
        <div className="flex flex-col gap-[24px]" style={{ maxWidth: 560 }}>
          {/* Organization Name */}
          <div className="flex flex-col gap-[6px]">
            <label
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "var(--foreground)",
              }}
            >
              Organization Name
            </label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full bg-card focus:outline-none"
              style={{
                height: "36px",
                padding: "0 12px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
              }}
            />
          </div>

          {/* Organization ID */}
          <div className="flex flex-col gap-[6px]">
            <label
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "var(--foreground)",
              }}
            >
              Organization ID
            </label>
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "var(--foreground)",
                  fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
                }}
              >
                {orgId}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center shrink-0 rounded cursor-pointer transition-colors hover:bg-muted"
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  background: "transparent",
                }}
                aria-label="Copy Organization ID"
              >
                <IconCopy size={20} className="text-secondary-foreground" />
              </button>
            </div>
          </div>

          {/* Organization created date */}
          <div className="flex flex-col gap-[6px]">
            <label
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "var(--foreground)",
              }}
            >
              Organization created date
            </label>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "var(--foreground)",
              }}
            >
              Nov 13, 2025 10:26:00 AM
            </span>
          </div>

          {/* Default Project */}
          <div className="flex flex-col gap-[6px]">
            <label
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "var(--foreground)",
              }}
            >
              Default Project
            </label>
            <div
              className="relative w-full"
              style={{
                height: "36px",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                backgroundColor: "var(--card)",
              }}
            >
              <select
                className="w-full h-full appearance-none bg-transparent cursor-pointer focus:outline-none"
                style={{
                  padding: "0 32px 0 12px",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "var(--foreground)",
                }}
                defaultValue="test-project"
              >
                <option value="test-project">Test Project</option>
              </select>
              <svg
                className="absolute pointer-events-none"
                style={{ right: "12px", top: "50%", transform: "translateY(-50%)" }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="var(--secondary-foreground)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Save button — primary action for this page */}
          <div>
            <Button variant="default" size="sm">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Coming Soon Placeholder ──────────────────────────────────────────────────

function ComingSoon({ section }: { section: NavItem }) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-card">
      <PageHeader
        icon={<section.Icon size={24} className="text-foreground" />}
        title={section.label}
      />
      <div className="flex flex-1 items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
        <p style={{ fontSize: "14px", color: "var(--secondary-foreground)" }}>
          {section.label} — coming soon
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function OrgSettingsAiPage() {
  return <OrgSettingsPage defaultSection="ai" />;
}

export function OrgSettingsPage({ defaultSection = "general" }: { defaultSection?: string }) {
  const [activeId, setActiveId] = useState(defaultSection);
  const activeSection = NAV_ITEMS.find((n) => n.id === activeId)!;

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
      <LeftNav activePage="admin" />
      <div className="flex flex-1 h-full overflow-hidden">
        <SettingsSidebar active={activeId} onSelect={setActiveId} />

        {activeId === "general" ? (
          <GeneralInformationContent />
        ) : activeId === "cost" ? (
          <CostManagementContent />
        ) : activeId === "ai" ? (
          <AiConfigurationsContent />
        ) : (
          <ComingSoon section={activeSection} />
        )}
      </div>
    </div>
  );
}
