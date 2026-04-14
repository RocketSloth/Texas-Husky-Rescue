"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs />.");
  }

  return context;
}

export function Tabs({
  defaultValue,
  className,
  children,
}: HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
  children: ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center gap-1", className)} {...props} />;
}

export function TabsTrigger({
  className,
  value,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
}) {
  const context = useTabsContext();
  const active = context.value === value;

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
        active ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900",
        className,
      )}
      onClick={() => context.setValue(value)}
      data-state={active ? "active" : "inactive"}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  value,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  value: string;
  children: ReactNode;
}) {
  const context = useTabsContext();

  if (context.value !== value) {
    return null;
  }

  return (
    <div className={className} data-state="active" {...props}>
      {children}
    </div>
  );
}
