import {
  AudioLines,
  Check,
  ChevronRight,
  CircleHelp,
  Clapperboard,
  Clock3,
  FileText,
  Plus,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, sectionDescriptions, type SectionId } from "@/components/workspace-navigation";

function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/65 px-3 py-1.5 text-[11px] font-medium text-muted-foreground backdrop-blur">
        <Icon aria-hidden="true" className="size-3.5 text-primary" />
        {eyebrow}
      </div>
      <h1 className="text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.06em]">
        {title}
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}

function ScriptPreview() {
  return (
    <div
      aria-label="Preview of a sample script"
      className="script-stage relative flex min-h-[286px] flex-col overflow-hidden rounded-[22px] border border-white/10 px-6 py-7 text-white sm:min-h-[326px] sm:px-10 sm:py-9"
      role="img"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
          <span className="size-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]" />
          Script preview
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/60">
          Sample
        </span>
      </div>
      <div className="relative my-auto py-7 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <p className="mb-5 text-[13px] leading-6 text-white/40 sm:text-[15px]">
          Every great idea begins with a moment of clarity.
        </p>
        <p className="mx-auto max-w-xl text-[21px] font-medium leading-[1.55] tracking-[-0.035em] text-white sm:text-[27px] sm:leading-[1.5]">
          Give yourself a little room to pause,
          <span className="text-[var(--brand)]"> breathe, </span>
          and let the next thought arrive.
        </p>
        <p className="mt-5 text-[13px] leading-6 text-white/40 sm:text-[15px]">
          You don&apos;t have to rush to be understood.
        </p>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="flex items-center justify-between text-[10px] text-white/50">
        <span>Sample script · 32 words</span>
        <span className="flex items-center gap-1.5">
          <AudioLines aria-hidden="true" className="size-3.5 text-[var(--brand)]" />
          Teleprompter preview
        </span>
      </div>
    </div>
  );
}

export function StudioView() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          description="A little less pressure. A lot more you. Take a breath and make this moment yours."
          eyebrow="A fresh start"
          icon={Sparkles}
          title="Find your flow."
        />
        <Button
          className="h-11 w-fit gap-2 rounded-xl px-4 shadow-sm"
          disabled
          title="Script creation will be added in a later step."
        >
          <Plus aria-hidden="true" className="size-4" />
          New script
        </Button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(250px,0.8fr)]">
        <section className="glass-panel min-w-0 rounded-[26px] border border-border/70 p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-[-0.02em]">A moment to begin</p>
              <p className="mt-1 text-xs text-muted-foreground">
                A sample of what your studio can become
              </p>
            </div>
            <button
              aria-label="More about the script preview"
              className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              title="This is a visual preview, not an editable script."
              type="button"
            >
              <CircleHelp aria-hidden="true" className="size-4" />
            </button>
          </div>
          <ScriptPreview />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Check aria-hidden="true" className="size-3.5" />
              </span>
              Your workspace is ready to grow
            </div>
            <span className="text-[11px] text-muted-foreground">More tools are coming next</span>
          </div>
        </section>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <section className="glass-panel rounded-[26px] border border-border/70 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-[14px] bg-accent text-accent-foreground">
                <Clapperboard aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                Getting started
              </span>
            </div>
            <h2 className="mt-6 text-base font-semibold tracking-[-0.03em]">Your next take, your way.</h2>
            <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
              Scripts, recording, and thoughtful tools will all have a place here.
            </p>
            <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 text-[11px] text-muted-foreground">
              <Clock3 aria-hidden="true" className="size-3.5" />
              Set up at your own pace
            </div>
          </section>

          <section className="rounded-[26px] border border-[color-mix(in_oklch,var(--brand)_35%,var(--border))] bg-[color-mix(in_oklch,var(--brand)_10%,var(--card))] p-5 sm:p-6">
            <div className="flex size-10 items-center justify-center rounded-[14px] bg-[color-mix(in_oklch,var(--brand)_22%,transparent)] text-[var(--brand-strong)]">
              <Sparkles aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 text-base font-semibold tracking-[-0.03em]">Make it feel like you.</h2>
            <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
              Choose the light, dark, or OLED theme from the controls above.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[11px] font-medium text-[var(--brand-strong)]">
              A comfortable view, anywhere
              <ChevronRight aria-hidden="true" className="size-3.5" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function EmptySection({ section }: { section: SectionId }) {
  const item = navigation.find(({ id }) => id === section);
  const Icon = item?.icon ?? FileText;

  return (
    <div className="flex min-h-[55vh] flex-col justify-center">
      <SectionHeading
        description={sectionDescriptions[section]}
        eyebrow="Your studio"
        icon={Icon}
        title={item?.label ?? "Studio"}
      />
      <div className="glass-panel mt-9 flex max-w-xl items-start gap-4 rounded-[24px] border border-border/70 p-5 sm:p-6">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-accent text-accent-foreground">
          <Sparkles aria-hidden="true" className="size-[18px]" />
        </span>
        <div>
          <p className="text-sm font-medium">This space is ready for its next step.</p>
          <p className="mt-1.5 text-[13px] leading-5 text-muted-foreground">
            The project setup is in place. We&apos;ll bring this area to life one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
