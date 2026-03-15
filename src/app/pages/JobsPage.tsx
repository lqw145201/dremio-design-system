import { useState } from "react";
import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconJobCompleted } from "../components/icons/IconJobCompleted";
import { IconJobFailed } from "../components/icons/IconJobFailed";
import { IconJobCancel } from "../components/icons/IconJobCancel";
import { IconJobLoading } from "../components/icons/IconJobLoading";
import { IconDatasetReflections } from "../components/icons/IconDatasetReflections";
import { IconSearch } from "../components/icons/IconSearch";
import { IconCaretDown } from "../components/icons/IconCaretDown";
import { IconEntityFolderBlue } from "../components/icons/IconEntityFolderBlue";

type JobStatus = "completed" | "failed" | "cancelled" | "loading";

interface AttributeBadge {
  label: string;
}

interface Job {
  id: string;
  user: string;
  hasReflection: boolean;
  attributes: AttributeBadge[];
  dataset: string;
  engine: string;
  startTime: string;
  duration: string;
  sql: string;
  status: JobStatus;
}

const JOBS: Job[] = [
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: true, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: true, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "Dremio(Automatic)", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "sales_analytic", engine: "—", startTime: "11/22/2021 09:37:39", duration: "00:03:28", sql: "—", status: "failed" },
  { id: "1e0e2e5b-a91b-c", user: "Dremio(Automatic)", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "sales_raw", engine: "—", startTime: "11/22/2021 09:37:28", duration: "00:01:11", sql: "—", status: "failed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: true, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "Internal" }, { label: "AI agent" }, { label: "AI Function" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "External" }, { label: "MCP" }, { label: "AI Function" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "loading" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "cancelled" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (preview)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "loading" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
  { id: "1e0e2e5b-a91b-c", user: "isha@dremio.com", hasReflection: false, attributes: [{ label: "UI (run)" }], dataset: "nyc_tesst", engine: "preview", startTime: "11/22/2021 09:37:39", duration: "00:00:01", sql: "SELECT * FROM nyc_te...", status: "completed" },
];

function StatusIcon({ status }: { status: JobStatus }) {
  if (status === "completed") return <IconJobCompleted size={20} />;
  if (status === "failed") return <IconJobFailed size={20} />;
  if (status === "cancelled") return <IconJobCancel size={20} />;
  return <IconJobLoading size={20} />;
}

function FilterDropdown({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className="flex gap-[8px] h-[32px] items-center px-[8px] rounded-[4px] shrink-0 cursor-pointer"
      style={{
        width: 160,
        border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
        background: active ? "var(--background-hover)" : "var(--card)",
      }}
    >
      <span
        className="flex-1 text-[14px] leading-[20px] truncate"
        style={{ color: active ? "var(--accent)" : "var(--foreground)" }}
      >
        {label}
      </span>
      <IconCaretDown size={16} className={active ? "text-accent" : "text-secondary-foreground"} />
    </div>
  );
}

function AttributeTag({ label }: { label: string }) {
  return (
    <span
      className="text-[12px] leading-[18px] px-[8px] rounded-[4px] shrink-0 whitespace-nowrap"
      style={{
        height: 24,
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid var(--border)",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {label}
    </span>
  );
}

const HEADER_CELL = "flex items-center text-[14px] font-semibold leading-[20px] shrink-0 px-[8px] h-full";

export function JobsPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <LeftNav activePage="jobs" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />

        {/* Filter bar */}
        <div
          className="flex items-center gap-[8px] shrink-0 pl-[8px] pr-[16px]"
          style={{ height: 64, borderBottom: "1px solid var(--muted)", background: "var(--card)" }}
        >
          {/* Search + filter dropdowns */}
          <div className="flex-1 flex items-center gap-[16px]">
            {/* Search */}
            <div
              className="flex items-center gap-[4px] h-[32px] px-[8px] rounded-[4px] shrink-0"
              style={{ width: 280, border: "1px solid var(--border)", background: "var(--card)" }}
            >
              <IconSearch size={16} className="text-secondary-foreground shrink-0" />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search jobs"
                className="flex-1 text-[14px] leading-[20px] outline-none bg-transparent"
                style={{ color: "var(--foreground)" }}
              />
            </div>
            <FilterDropdown label="Start Time" />
            <FilterDropdown label="Status" />
            <FilterDropdown label="UI, +1" active />
            <FilterDropdown label="User" />
          </div>

          {/* Manage Columns */}
          <button
            className="flex items-center gap-[4px] h-[32px] px-[8px] rounded-[4px] shrink-0 hover:bg-[var(--background)] transition-colors"
            style={{ border: "1px solid var(--border)", background: "var(--card)" }}
          >
            {/* manage columns icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 4h16M2 10h16M2 16h16M6 2v16M14 2v16" stroke="var(--secondary-foreground)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[14px] font-medium leading-[20px] whitespace-nowrap" style={{ color: "var(--secondary-foreground)" }}>
              Manage Columns
            </span>
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto" style={{ background: "var(--background)" }}>
          <table className="w-full border-collapse" style={{ background: "var(--card)" }}>
            {/* Header */}
            <thead>
              <tr style={{ height: 40, borderBottom: "1px solid var(--muted)" }}>
                <th className="text-left" style={{ width: 176, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ paddingLeft: 28, color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Job ID
                  </div>
                </th>
                <th className="text-left" style={{ width: 176, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    User
                  </div>
                </th>
                <th style={{ width: 40, padding: 0 }}>
                  <div className="flex items-center justify-center h-full" style={{ borderRight: "1px solid var(--muted)" }}>
                    <IconDatasetReflections size={20} className="text-secondary-foreground" />
                  </div>
                </th>
                <th className="text-left" style={{ width: 240, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Attribute
                  </div>
                </th>
                <th className="text-left" style={{ width: 176, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Dataset
                  </div>
                </th>
                <th className="text-left" style={{ width: 120, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Engine
                  </div>
                </th>
                <th className="text-left" style={{ width: 176, padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Start Time
                  </div>
                </th>
                <th className="text-right" style={{ width: 120, padding: 0 }}>
                  <div className={HEADER_CELL + " justify-end"} style={{ color: "var(--foreground)", borderRight: "1px solid var(--muted)" }}>
                    Duration
                  </div>
                </th>
                <th className="text-left" style={{ padding: 0 }}>
                  <div className={HEADER_CELL} style={{ color: "var(--foreground)" }}>
                    SQL
                  </div>
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {JOBS.map((job, i) => (
                <tr
                  key={i}
                  className="group hover:bg-[var(--background-hover)] cursor-pointer"
                  style={{ height: 40, borderBottom: "1px solid var(--muted)" }}
                >
                  {/* Job ID */}
                  <td style={{ width: 176, padding: 0 }}>
                    <div className="flex items-center gap-[6px] px-[8px] h-[40px]" style={{ paddingLeft: 8 }}>
                      <StatusIcon status={job.status} />
                      <span
                        className="text-[14px] leading-[20px] truncate"
                        style={{ color: "var(--accent)" }}
                      >
                        {job.id}
                      </span>
                    </div>
                  </td>

                  {/* User */}
                  <td style={{ width: 176, padding: 0 }}>
                    <div className="px-[8px] h-[40px] flex items-center">
                      <span className="text-[14px] leading-[20px] truncate" style={{ color: "var(--foreground)" }}>
                        {job.user}
                      </span>
                    </div>
                  </td>

                  {/* Reflection */}
                  <td style={{ width: 40, padding: 0 }}>
                    <div className="flex items-center justify-center h-[40px]">
                      {job.hasReflection && (
                        <IconDatasetReflections size={16} className="text-[var(--primary)]" />
                      )}
                    </div>
                  </td>

                  {/* Attribute */}
                  <td style={{ width: 240, padding: 0 }}>
                    <div className="flex items-center gap-[4px] px-[8px] h-[40px] overflow-hidden">
                      {job.attributes.map((attr, j) => (
                        <AttributeTag key={j} label={attr.label} />
                      ))}
                    </div>
                  </td>

                  {/* Dataset */}
                  <td style={{ width: 176, padding: 0 }}>
                    <div className="flex items-center gap-[6px] px-[8px] h-[40px]">
                      {job.dataset !== "—" && <IconEntityFolderBlue size={16} />}
                      <span className="text-[14px] leading-[20px] truncate" style={{ color: "var(--foreground)" }}>
                        {job.dataset}
                      </span>
                    </div>
                  </td>

                  {/* Engine */}
                  <td style={{ width: 120, padding: 0 }}>
                    <div className="px-[8px] h-[40px] flex items-center">
                      <span className="text-[14px] leading-[20px]" style={{ color: "var(--foreground)" }}>
                        {job.engine}
                      </span>
                    </div>
                  </td>

                  {/* Start Time */}
                  <td style={{ width: 176, padding: 0 }}>
                    <div className="px-[8px] h-[40px] flex items-center">
                      <span className="text-[14px] leading-[20px] whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                        {job.startTime}
                      </span>
                    </div>
                  </td>

                  {/* Duration */}
                  <td style={{ width: 120, padding: 0 }}>
                    <div className="px-[8px] h-[40px] flex items-center justify-end">
                      <span className="text-[14px] leading-[20px]" style={{ color: "var(--foreground)" }}>
                        {job.duration}
                      </span>
                    </div>
                  </td>

                  {/* SQL */}
                  <td style={{ padding: 0 }}>
                    <div className="px-[8px] h-[40px] flex items-center">
                      <span className="text-[14px] leading-[20px] truncate" style={{ color: "var(--foreground)" }}>
                        {job.sql}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
