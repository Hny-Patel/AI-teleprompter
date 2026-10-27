"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Focus, Sparkles } from "lucide-react";
import { useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EmptySection, StudioView } from "@/components/studio-view";
import {
  Brand,
  DesktopNavigationItems,
  MobileNavigationItem,
  navigation,
  sectionDescriptions,
  type SectionId,
} from "@/components/workspace-navigation";

export function AppShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("studio");
  const activeItem = navigation.find(({ id }) => id === activeSection);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="app-backdrop min-h-[100dvh] lg:flex">
      <aside className="safe-top glass-panel sticky top-0 z-30 hidden h-[100dvh] w-[248px] shrink-0 flex-col border-r border-border/70 px-5 pb-5 lg:flex">
        <div className="px-2 pb-10 pt-3">
          <Brand />
        </div>
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-muted-foreground/75">
          Workspace
        </p>
        <nav aria-label="Main navigation" className="space-y-1">
          <DesktopNavigationItems
            activeSection={activeSection}
            onNavigate={setActiveSection}
          />
        </nav>
        <div className="mt-auto">
          <div className="rounded-[20px] border border-border/70 bg-background/45 p-4">
            <div className="flex size-8 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Sparkles aria-hidden="true" className="size-4" />
            </div>
            <p className="mt-4 text-xs font-semibold">Your space, your pace.</p>
            <p className="mt-1 text-[11px] leading-[1.55] text-muted-foreground">
              Everything you need to feel at home on camera.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl px-2 py-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              HP
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium">Your workspace</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">Personal studio</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-0">
        <header className="safe-top sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-3 border-b border-border/50 bg-background/65 px-4 backdrop-blur-xl sm:px-7 lg:px-10">
          <div className="flex min-w-0 items-center gap-3 lg:hidden">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-[13px] bg-primary text-primary-foreground">
              <Focus aria-hidden="true" className="size-[18px]" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-[-0.03em]">
                teleprompt
              </p>
              <p className="text-[10px] text-muted-foreground">{activeItem?.label}</p>
            </div>
          </div>
          <div className="hidden min-w-0 lg:block">
            <p className="text-sm font-semibold">{activeItem?.label}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              {sectionDescriptions[activeSection]}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <ThemeSwitcher />
            <span aria-hidden="true" className="hidden h-7 w-px bg-border sm:block" />
            <div
              aria-label="Personal workspace"
              className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card text-[11px] font-semibold text-muted-foreground"
              title="Personal workspace"
            >
              HP
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-8 sm:px-7 sm:pb-12 sm:pt-10 lg:px-10 lg:pt-12">
          <AnimatePresence initial={false} mode="wait">
            <motion.section
              key={activeSection}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              className="min-h-[65vh]"
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }
              }
            >
              {activeSection === "studio" ? (
                <StudioView />
              ) : (
                <EmptySection section={activeSection} />
              )}
            </motion.section>
          </AnimatePresence>
          <footer className="mt-8 border-t border-border/50 pt-5 text-center text-[10px] text-muted-foreground sm:text-left">
            A little more ease in every take.
          </footer>
        </div>
      </main>

      <nav
        aria-label="Main navigation"
        className="safe-bottom glass-panel fixed inset-x-0 bottom-0 z-40 border-t border-border/70 px-2 pt-2 lg:hidden"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around">
          {navigation.map(({ id, label, icon: Icon }) => (
            <MobileNavigationItem
              key={id}
              active={activeSection === id}
              icon={Icon}
              label={label}
              onClick={() => setActiveSection(id)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
