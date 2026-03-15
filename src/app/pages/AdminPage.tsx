import { useState } from "react";
import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconInformation } from "../components/icons/IconInformation";
import { IconMore } from "../components/icons/IconMore";
import { IconCopy } from "../components/icons/IconCopy";
import { IconEdit } from "../components/icons/IconEdit";
import { IconNavCatalog } from "../components/icons/IconNavCatalog";
import { IconSettingsEngines } from "../components/icons/IconSettingsEngines";
import { IconSettingsBiApplications } from "../components/icons/IconSettingsBiApplications";
import { IconSettingsMonitor } from "../components/icons/IconSettingsMonitor";
import { IconDatasetReflections } from "../components/icons/IconDatasetReflections";
import { IconSettingsEngineRerouting } from "../components/icons/IconSettingsEngineRerouting";
import { IconSettingsPreference } from "../components/icons/IconSettingsPreference";
import { IconSettingsAiConfigurations } from "../components/icons/IconSettingsAiConfigurations";

type AdminTab = "details" | "privileges";
type AdminSection =
  | "project-overview"
  | "catalog"
  | "engines"
  | "bi-applications"
  | "monitor"
  | "reflections"
  | "engine-routing"
  | "preference"
  | "ai";

interface NavItem {
  id: AdminSection;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "project-overview", label: "Project Overview", icon: <IconInformation size={24} /> },
  { id: "catalog", label: "Catalog", icon: <IconNavCatalog size={24} /> },
  { id: "engines", label: "Engines", icon: <IconSettingsEngines size={24} /> },
  { id: "bi-applications", label: "BI applications", icon: <IconSettingsBiApplications size={24} /> },
  { id: "monitor", label: "Monitor", icon: <IconSettingsMonitor size={24} /> },
  { id: "reflections", label: "Reflections", icon: <IconDatasetReflections size={24} /> },
  { id: "engine-routing", label: "Engine routing", icon: <IconSettingsEngineRerouting size={24} /> },
  { id: "preference", label: "Preference", icon: <IconSettingsPreference size={24} /> },
  { id: "ai", label: "AI", icon: <IconSettingsAiConfigurations size={24} /> },
];

function CopyButton() {
  return (
    <button
      className="shrink-0 flex items-center justify-center rounded-[4px] hover:bg-[var(--muted)] transition-colors"
      style={{ width: 24, height: 24 }}
      title="Copy"
    >
      <IconCopy size={16} className="text-secondary-foreground" />
    </button>
  );
}

function EditButton() {
  return (
    <button
      className="shrink-0 flex items-center justify-center rounded-[4px] hover:bg-[var(--muted)] transition-colors"
      style={{ width: 24, height: 24 }}
      title="Edit"
    >
      <IconEdit size={16} className="text-secondary-foreground" />
    </button>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <p className="text-[14px] leading-[20px] text-foreground">{label}</p>
  );
}

function ReadOnlyField({ value, action = "copy" }: { value: string; action?: "copy" | "edit" }) {
  return (
    <div className="flex items-start gap-[8px] pr-[8px] min-h-[32px]">
      <p
        className="flex-1 text-[14px] leading-[24px] text-foreground break-all"
        style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontWeight: 450 }}
      >
        {value}
      </p>
      {action === "copy" ? <CopyButton /> : <EditButton />}
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[4px]" style={{ width: 600 }}>
      <FieldLabel label={label} />
      {children}
    </div>
  );
}

export function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("project-overview");
  const [activeTab, setActiveTab] = useState<AdminTab>("details");
  const [projectName, setProjectName] = useState("First_project");

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <LeftNav activePage="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />

        <div className="flex-1 flex overflow-hidden">
        {/* Secondary nav */}
        <div
          className="flex flex-col shrink-0 overflow-y-auto"
          style={{ width: 272, background: "var(--card)", borderRight: "1px solid var(--muted)" }}
        >
          {/* Header */}
          <div
            className="flex items-center shrink-0 px-[24px]"
            style={{ height: 64, borderBottom: "1px solid var(--border)" }}
          >
            <span className="text-[16px] font-semibold leading-[24px] text-foreground">First Lakehouse</span>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-[6px] pt-[8px] px-[16px]">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-[8px] h-[40px] px-[8px] rounded-[4px] w-full text-left transition-colors hover:bg-[var(--background-hover)]"
                  style={{
                    background: active ? "var(--sidebar-primary)" : "transparent",
                  }}
                >
                  <span style={{ color: active ? "white" : "var(--secondary-foreground)" }}>
                    {item.icon}
                  </span>
                  <span
                    className="text-[14px] leading-[20px]"
                    style={{
                      fontWeight: active ? 600 : 400,
                      color: active ? "white" : "var(--foreground)",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--card)" }}>
          {/* Page header */}
          <div
            className="flex items-center px-[16px] shrink-0"
            style={{ height: 64, borderBottom: "1px solid var(--muted)", background: "var(--card)" }}
          >
            <div className="flex items-center gap-[4px] flex-1">
              <IconInformation size={24} className="text-secondary-foreground shrink-0" />
              <span className="text-[14px] font-semibold leading-[20px] text-foreground">Project Overview</span>
            </div>
            <button className="flex items-center justify-center hover:bg-[var(--muted)] rounded-[4px] transition-colors" style={{ width: 24, height: 24 }}>
              <IconMore size={24} className="text-secondary-foreground" />
            </button>
          </div>

          {/* Tab bar */}
          <div
            className="flex items-end gap-[24px] pl-[8px] pr-[16px] shrink-0"
            style={{ height: 40, borderBottom: "1px solid var(--muted)", background: "var(--card)" }}
          >
            {(["details", "privileges"] as AdminTab[]).map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex flex-col items-center shrink-0 pb-0"
                >
                  <div className="flex items-center justify-center px-[8px] py-[2px]">
                    <span
                      className="text-[14px] leading-[20px] capitalize"
                      style={{
                        fontWeight: active ? 600 : 400,
                        color: active ? "var(--accent)" : "var(--foreground)",
                      }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </div>
                  <div
                    className="h-[2px] w-full rounded-full"
                    style={{ background: active ? "var(--accent)" : "transparent" }}
                  />
                </button>
              );
            })}
          </div>

          {/* Scrollable body */}
          <div
            className="flex-1 overflow-y-auto flex flex-col gap-[24px] p-[16px]"
            style={{ background: "var(--background)" }}
          >
            {/* Project name — editable */}
            <FormField label="Project name">
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="h-[32px] px-[8px] text-[14px] leading-[20px] text-foreground rounded-[4px] outline-none focus:border-[var(--primary)] transition-colors"
                style={{
                  width: 600,
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                }}
              />
            </FormField>

            {/* Organization ID */}
            <FormField label="Organization ID">
              <ReadOnlyField value="5d1cccfd-abbb-429a-984e-fe599df96fd5" />
            </FormField>

            {/* Project ID */}
            <FormField label="Project ID">
              <ReadOnlyField value="7f2b3e4d-efc1-4b8a-9c4d-8a2e3f4b5c6d" />
            </FormField>

            {/* JDBC connection */}
            <FormField label="JDBC connection">
              <ReadOnlyField value="jdbc:dremio:direct=sql.dremio.cloud:443;ssl=true;PROJECT_ID=23456a8d-1578-4395-b394-94534c0ca18f;" />
            </FormField>

            {/* Divider */}
            <div className="shrink-0 h-px" style={{ width: 600, background: "var(--muted)" }} />

            {/* Project storage bucket */}
            <div className="flex flex-col gap-[16px]" style={{ width: 600 }}>
              <div className="flex flex-col gap-[4px]">
                <FieldLabel label="Project storage bucket" />
                <p
                  className="text-[14px] leading-[24px] text-foreground"
                  style={{ fontFamily: "'Fira Code', 'Courier New', monospace", fontWeight: 450 }}
                >
                  Your own cloud storage
                </p>
              </div>

              {/* Indented sub-fields */}
              <div className="flex flex-col gap-[16px] pl-[24px]">
                <FormField label="Default storage URI">
                  <ReadOnlyField value="s3://analytics-warehouse/tables/" />
                </FormField>

                <FormField label="Role ARN">
                  <ReadOnlyField value="arn:aws:iam::987654321098:role/DataLakeReadWriteRole" action="edit" />
                </FormField>

                <FormField label="External ID">
                  <ReadOnlyField value="secure-external-id-abc123xyz" />
                </FormField>
              </div>
            </div>

            {/* Divider + external engines link */}
            <div className="flex flex-col gap-[24px]" style={{ width: 600 }}>
              <div className="h-px" style={{ background: "var(--muted)" }} />
              <div className="flex items-center gap-[24px]">
                <span className="text-[14px] leading-[20px] text-foreground">Connect to external engines</span>
                <span
                  className="text-[14px] leading-[20px] cursor-pointer hover:underline shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
