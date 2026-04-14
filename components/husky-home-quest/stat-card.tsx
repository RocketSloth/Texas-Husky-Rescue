import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { cx } from "./utils";

export function StatCard({
  label,
  value,
  icon: Icon,
  darkMode,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  darkMode: boolean;
}) {
  return (
    <Card
      className={cx(
        "rounded-2xl border shadow-sm transition-colors",
        darkMode
          ? "border-slate-800 bg-slate-900/80 text-slate-100 shadow-black/20"
          : "border-slate-200/80 bg-white text-slate-900",
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
              {label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
          </div>
          <div className={cx("rounded-2xl p-3", darkMode ? "bg-slate-800" : "bg-slate-100")}>
            <Icon className={cx("h-5 w-5", darkMode ? "text-slate-200" : "text-slate-700")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
