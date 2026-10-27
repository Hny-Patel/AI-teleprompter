"use client";

import { useTheme } from "next-themes";
import { Circle, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const themes = [
  { name: "light", label: "Light theme", icon: Sun },
  { name: "dark", label: "Dark theme", icon: Moon },
  { name: "oled", label: "OLED theme", icon: Circle },
] as const;

const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getClientSnapshot,
    getServerSnapshot,
  );

  const activeTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : undefined;

  return (
    <div
      aria-label="Color theme"
      className="flex items-center gap-0.5 rounded-xl border border-border/70 bg-card/70 p-1"
      role="group"
    >
      {themes.map(({ name, label, icon: Icon }) => (
        <button
          key={name}
          aria-label={label}
          aria-pressed={activeTheme === name}
          className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm"
          onClick={() => setTheme(name)}
          title={label}
          type="button"
        >
          <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </button>
      ))}
    </div>
  );
}
