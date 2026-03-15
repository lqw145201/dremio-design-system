import { LeftNav } from "../components/LeftNav";
import { TopNav } from "../components/TopNav";
import { IconNavSqlRunner } from "../components/icons/IconNavSqlRunner";

// ── AI spark icon (shared) ────────────────────────────────────────────────────
function AiSparkIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 1.5C10.3 3.8 11.6 7.2 14.2 9.5C16.6 11.7 19.2 12.5 19.2 12.5C19.2 12.5 16.6 13.3 14.2 15.5C11.6 17.8 10.3 21.2 10 23.5C9.7 21.2 8.4 17.8 5.8 15.5C3.4 13.3 0.8 12.5 0.8 12.5C0.8 12.5 3.4 11.7 5.8 9.5C8.4 7.2 9.7 3.8 10 1.5Z"
        fill="url(#aiGrad)"
      />
      <defs>
        <linearGradient id="aiGrad" x1="0.8" y1="12.5" x2="19.2" y2="12.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29A0B1" />
          <stop offset="0.55" stopColor="#4FC08B" />
          <stop offset="1" stopColor="#B7D325" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Suggestion chip with divider ─────────────────────────────────────────────
function SuggestionChip({ label, showDivider }: { label: string; showDivider?: boolean }) {
  return (
    <div className="flex items-center gap-[8px] shrink-0">
      <button className="flex h-[32px] items-center gap-[4px] bg-white rounded-[4px] px-[8px] hover:bg-[var(--background-hover)] transition-colors">
        <AiSparkIcon size={20} />
        <span
          className="text-[12px] font-normal text-[var(--secondary-foreground)] whitespace-nowrap leading-[18px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {label}
        </span>
      </button>
      {showDivider && (
        <div className="w-px h-[24px] bg-[var(--muted)]" />
      )}
    </div>
  );
}

// ── Users icon ────────────────────────────────────────────────────────────────
function IconAllUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Graduation cap icon ───────────────────────────────────────────────────────
function IconGradCap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Send icon ─────────────────────────────────────────────────────────────────
function IconSend() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Add Data illustration ─────────────────────────────────────────────────────
function AddDataIllustration() {
  return (
    <div className="absolute h-[137px] right-[2px] top-[4px] w-[146px] overflow-hidden">
      {/* Dot grid */}
      <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dots1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#D2D6DA" fillOpacity="0.6" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots1)" />
      </svg>
      {/* Connector lines */}
      <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="68" y1="65" x2="46" y2="65" stroke="#43B8C9" strokeWidth="2" strokeDasharray="3 2" opacity="0.5" />
        <line x1="68" y1="65" x2="82" y2="18" stroke="#43B8C9" strokeWidth="2" strokeDasharray="3 2" opacity="0.5" />
        <line x1="68" y1="65" x2="82" y2="108" stroke="#43B8C9" strokeWidth="2" strokeDasharray="3 2" opacity="0.5" />
        <line x1="68" y1="65" x2="100" y2="65" stroke="#43B8C9" strokeWidth="2" strokeDasharray="3 2" opacity="0.5" />
      </svg>
      {/* Dremio narwhal center card */}
      <div className="absolute left-[46px] top-[52px] bg-white border border-[var(--muted)] rounded-[8px] p-[12px] shadow-sm">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4z" fill="#43B8C9" fillOpacity="0.15" />
          <path d="M11 16l3 3 7-7" stroke="#43B8C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Source icon: file */}
      <div className="absolute top-[4px] left-[75px] bg-white bg-opacity-50 border border-[var(--muted)] rounded-[8px] p-[8px]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#505862" strokeWidth="1.5" fill="none" />
          <path d="M14 2v6h6" stroke="#505862" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {/* Source icon: AWS S3 */}
      <div className="absolute top-[52px] left-[2px] bg-white bg-opacity-50 border border-[var(--muted)] rounded-[8px] p-[8px]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#FF9900" fillOpacity="0.2" />
          <path d="M12 6l-6 3v6l6 3 6-3V9L12 6z" stroke="#FF9900" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {/* Source icon: Azure */}
      <div className="absolute top-[98px] left-[86px] bg-white bg-opacity-50 border border-[var(--muted)] rounded-[8px] p-[8px] opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#0078D4" fillOpacity="0.2" />
          <path d="M4 16l5-9 4 7H9l3 2H7l-3 0z" fill="#0078D4" fillOpacity="0.7" />
          <path d="M14 8l4 8h-3" stroke="#0078D4" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
}

// ── Explore illustration ──────────────────────────────────────────────────────
function ExploreIllustration() {
  return (
    <div className="absolute h-[145px] right-[-8px] top-[-8px] w-[190px] overflow-hidden">
      {/* Dot grid */}
      <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dots2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#D2D6DA" fillOpacity="0.6" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots2)" />
      </svg>
      {/* SQL editor mockup card */}
      <div className="absolute bg-white left-[10px] top-[5px] w-[160px] h-[130px] rounded-[8px] overflow-hidden border border-[var(--muted)]">
        {/* Header bar */}
        <div className="flex items-center gap-[7px] px-[8px] h-[32px] bg-[var(--background)] border-b border-[var(--muted)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--muted-foreground)" strokeWidth="1.5" />
            <path d="M8 9l3 3-3 3M13 15h3" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[12px] text-[var(--muted-foreground)]" style={{ fontFamily: "Inter, sans-serif" }}>citibikes</span>
        </div>
        {/* Content skeleton rows */}
        <div className="flex flex-col gap-[8px] px-[16px] py-[12px]">
          <div className="h-[8px] w-[91px] bg-[var(--background)] rounded-full" />
          <div className="h-[8px] w-[69px] bg-[var(--background)] rounded-full" />
          <div className="h-[8px] w-[49px] bg-[var(--background)] rounded-full" />
          <div className="h-[8px] w-[81px] bg-[var(--background)] rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ── Quick Action card ─────────────────────────────────────────────────────────
function QuickActionCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-[16px] bg-white border border-[var(--border)] rounded-[4px] px-[24px] py-[16px] cursor-pointer hover:border-[var(--primary)] transition-colors min-w-0">
      <div className="flex items-center justify-center bg-[var(--background)] rounded-[8px] shrink-0 size-[40px] text-[var(--secondary-foreground)]">
        {icon}
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[14px] font-semibold text-[var(--foreground)] leading-[20px]"
          style={{ fontFamily: "Inter, sans-serif" }}>
          {title}
        </p>
        <p className="text-[12px] font-normal text-[var(--secondary-foreground)] leading-[18px]"
          style={{ fontFamily: "Inter, sans-serif" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function HomePage() {
  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      <LeftNav activePage="home" />

      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />

        {/* Scrollable main area */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-[960px] mx-auto px-[24px] py-[80px] flex flex-col gap-[40px]">

            {/* ── Hero + prompt ──────────────────────────────────────── */}
            <div className="flex flex-col gap-[24px]">
              {/* Gradient heading */}
              <div className="flex flex-col gap-[8px]">
                <p
                  className="text-[32px] font-semibold text-center w-full bg-clip-text text-transparent leading-[1.5]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundImage:
                      "linear-gradient(176deg, rgb(41,159,177) 41.8%, rgb(79,192,139) 57.3%, rgb(183,211,37) 69.9%)",
                  }}
                >
                  Welcome to Dremio!
                </p>
              </div>

              {/* Prompt + chips */}
              <div className="flex flex-col gap-[16px]">
                {/* Prompt box */}
                <div
                  className="relative flex items-center bg-white border rounded-[8px] p-[16px] h-[80px] w-full"
                  style={{
                    borderColor: "#299fb1",
                    boxShadow: "1px 1px 4px 0px rgba(153,193,92,0.07), 5px 6px 8px 0px rgba(153,193,92,0.06), 10px 13px 10px 0px rgba(153,193,92,0.03)",
                  }}
                >
                  <p
                    className="flex-1 text-[14px] font-normal leading-[20px] bg-clip-text text-transparent"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      backgroundImage:
                        "linear-gradient(176deg, rgba(41,159,177,0.7) 6%, rgba(79,192,139,0.7) 62%, rgba(183,211,37,0.7) 107%)",
                    }}
                  >
                    How can I help you today?
                  </p>
                  <button className="absolute right-[16px] top-1/2 -translate-y-1/2 flex items-center justify-center size-[24px]">
                    <IconSend />
                  </button>
                </div>

                {/* Suggestion chips with dividers */}
                <div className="flex items-center">
                  <SuggestionChip label="How can I add my data?" showDivider />
                  <SuggestionChip label="Help me learn about Dremio" showDivider />
                  <SuggestionChip label="What data can I play with?" />
                </div>
              </div>
            </div>

            {/* ── Get Started ───────────────────────────────────────── */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] font-semibold text-[var(--foreground)] leading-[24px]"
                style={{ fontFamily: "Inter, sans-serif" }}>
                Get Started
              </p>
              <div className="flex gap-[16px] h-[138px]">
                {/* Add Data card */}
                <div
                  className="flex flex-1 flex-col gap-[16px] overflow-hidden rounded-[4px] border border-[var(--border)] relative py-[24px] cursor-pointer hover:border-[var(--primary)] transition-colors"
                  style={{ backgroundImage: "linear-gradient(128deg, white 44%, #FFF9EF 120%)" }}
                >
                  <AddDataIllustration />
                  <div className="pl-[24px] pr-[120px]">
                    <div className="flex flex-col gap-[16px] w-[280px]">
                      <p className="text-[14px] font-semibold text-[var(--foreground)] leading-[20px]"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        Add Data
                      </p>
                      <p className="text-[12px] font-normal text-[var(--secondary-foreground)] leading-[18px]"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        Upload a file or connect to an existing data source to make data accessible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explore with Sample Data card */}
                <div
                  className="flex flex-1 flex-col gap-[16px] overflow-hidden rounded-[4px] border border-[var(--border)] relative py-[24px] cursor-pointer hover:border-[var(--primary)] transition-colors"
                  style={{ backgroundImage: "linear-gradient(124deg, white 39%, #E7FBF9 114%)" }}
                >
                  <ExploreIllustration />
                  <div className="flex items-center pl-[24px] pr-[120px] h-full">
                    <div className="flex flex-col gap-[16px] w-[280px]">
                      <p className="text-[14px] font-semibold text-[var(--foreground)] leading-[20px]"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        Explore with Sample Data
                      </p>
                      <p className="text-[12px] font-normal text-[var(--secondary-foreground)] leading-[18px]"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        Go from data discovery and exploration to analysis within minutes using Dremio's AI Agent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Quick Actions ─────────────────────────────────────── */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] font-semibold text-[var(--foreground)] leading-[24px]"
                style={{ fontFamily: "Inter, sans-serif" }}>
                Quick Actions
              </p>
              <div className="flex gap-[16px]">
                <QuickActionCard
                  icon={<IconNavSqlRunner size={24} />}
                  title="Run Queries"
                  description="Write and execute SQL queries."
                />
                <QuickActionCard
                  icon={<IconAllUsers />}
                  title="Add Users"
                  description="Add team members."
                />
                <QuickActionCard
                  icon={<IconGradCap />}
                  title="Deep Dive with Dremio University"
                  description="Access tutorials and learning resources."
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
