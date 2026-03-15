import { IconNavDataset } from "./icons/IconNavDataset";
import { IconDatasetDetails } from "./icons/IconDatasetDetails";
import { IconDatasetLineage } from "./icons/IconDatasetLineage";
import { IconDatasetReflections } from "./icons/IconDatasetReflections";
import { IconSettings } from "./icons/IconSettings";
import { IconEntityView } from "./icons/IconEntityView";

type DatabaseTab = "data" | "details" | "lineage" | "reflections";

interface DatabaseHeaderProps {
  name?: string;
  schema?: string;
  activeTab?: DatabaseTab;
  onTabChange?: (tab: DatabaseTab) => void;
}

const TABS: { id: DatabaseTab; label: string; icon: React.ReactNode }[] = [
  { id: "data", label: "Data", icon: <IconNavDataset size={24} /> },
  { id: "details", label: "Details", icon: <IconDatasetDetails size={24} /> },
  { id: "lineage", label: "Lineage", icon: <IconDatasetLineage size={24} /> },
  { id: "reflections", label: "Reflections", icon: <IconDatasetReflections size={24} /> },
];

export function DatabaseHeader({
  name = "Database Name",
  schema = "Sales",
  activeTab = "data",
  onTabChange,
}: DatabaseHeaderProps) {
  return (
    <div
      className="flex items-stretch shrink-0 w-full bg-[var(--card)]"
      style={{ height: 64, borderBottom: "1px solid var(--muted)" }}
    >
      {/* Left: entity icon + name + schema */}
      <div
        className="flex items-center gap-2 shrink-0 overflow-hidden"
        style={{ width: 304, padding: "0 8px" }}
      >
        <div className="shrink-0 size-[24px] flex items-center justify-center text-secondary-foreground">
          <IconEntityView size={24} />
        </div>
        <div className="flex flex-col min-w-0">
          <span
            className="font-['Inter',sans-serif] font-semibold leading-[20px] text-foreground truncate"
            style={{ fontSize: 14 }}
          >
            {name}
          </span>
          <span
            className="font-['Inter',sans-serif] font-normal leading-[18px]"
            style={{ fontSize: 12, color: "var(--accent)" }}
          >
            {schema}
          </span>
        </div>
      </div>

      {/* Tabs row */}
      <div className="flex flex-1 items-end gap-2 px-2">
        {TABS.map((tab) => {
          const active = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className="flex items-center gap-2 shrink-0 transition-colors"
              style={{
                height: 60,
                padding: "0 8px",
                color: active ? "var(--accent)" : "var(--secondary-foreground)",
                fontWeight: active ? 600 : 400,
                fontSize: 14,
                background: "transparent",
                borderBottom: active ? "4px solid var(--accent)" : "4px solid transparent",
              }}
            >
              <span
                className="flex items-center justify-center shrink-0 size-[24px]"
                style={{ color: active ? "var(--accent)" : "var(--secondary-foreground)" }}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          );
        })}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Settings gear */}
        <div className="flex items-center pr-2 pb-2">
          <button
            className="flex items-center justify-center rounded-[4px] hover:bg-background-hover transition-colors"
            style={{ width: 32, height: 32, color: "var(--secondary-foreground)" }}
            title="Settings"
          >
            <IconSettings size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
