import {
  FileText,
  Focus,
  LayoutDashboard,
  Settings2,
  Video,
  type LucideIcon,
} from "lucide-react";

export const navigation = [
  { id: "studio", label: "Studio", icon: LayoutDashboard },
  { id: "scripts", label: "Scripts", icon: FileText },
  { id: "recordings", label: "Recordings", icon: Video },
  { id: "settings", label: "Settings", icon: Settings2 },
] as const;

export type SectionId = (typeof navigation)[number]["id"];

export const sectionDescriptions: Record<SectionId, string> = {
  studio: "Your quiet space to find your flow.",
  scripts: "Your scripts will have a home here.",
  recordings: "Your recordings will be collected here.",
  settings: "Make the studio feel like yours.",
};

export function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-[14px] bg-primary text-primary-foreground shadow-sm">
        <Focus aria-hidden="true" className="size-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[15px] font-semibold tracking-[-0.04em]">teleprompt</p>
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Your creative studio
        </p>
      </div>
    </div>
  );
}

export function DesktopNavigationItems({
  activeSection,
  onNavigate,
}: {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}) {
  return (
    <>
      {navigation.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          aria-current={activeSection === id ? "page" : undefined}
          className="group flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground aria-[current=page]:bg-primary/8 aria-[current=page]:text-foreground"
          onClick={() => onNavigate(id)}
          type="button"
        >
          <Icon
            aria-hidden="true"
            className="size-[17px] shrink-0 transition-colors group-aria-[current=page]:text-primary"
            strokeWidth={1.8}
          />
          {label}
          {id === "scripts" && (
            <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              03
            </span>
          )}
        </button>
      ))}
    </>
  );
}

export function MobileNavigationItem({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-current={active ? "page" : undefined}
      className="relative flex min-h-12 min-w-16 flex-col items-center justify-center gap-1 rounded-xl px-3 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
      onClick={onClick}
      type="button"
    >
      <Icon
        aria-hidden="true"
        className={`size-[18px] transition-transform ${active ? "-translate-y-0.5" : ""}`}
        strokeWidth={active ? 2 : 1.8}
      />
      <span>{label}</span>
      {active && <span className="absolute bottom-1 size-1 rounded-full bg-[var(--brand-strong)]" />}
    </button>
  );
}
