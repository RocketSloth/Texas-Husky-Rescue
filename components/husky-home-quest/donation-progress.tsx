import { Progress } from "@/components/ui/progress";

import { cx, formatCurrency } from "./utils";

export function DonationProgress({
  label,
  raised,
  goal,
  darkMode,
  compact = false,
}: {
  label: string;
  raised: number;
  goal: number;
  darkMode: boolean;
  compact?: boolean;
}) {
  const percent = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

  return (
    <div
      className={cx(
        "rounded-2xl border p-4",
        darkMode ? "border-slate-800 bg-slate-950/70" : "border-slate-200 bg-slate-50",
      )}
    >
      <div
        className={cx(
          "mb-2 flex items-center justify-between gap-3",
          compact ? "text-sm" : "text-base",
        )}
      >
        <span className={cx("font-medium", darkMode ? "text-slate-100" : "text-slate-800")}>
          {label}
        </span>
        <span className={cx("font-medium", darkMode ? "text-slate-300" : "text-slate-600")}>
          {percent}%
        </span>
      </div>
      <Progress
        value={percent}
        className={cx("h-3 rounded-full", darkMode ? "bg-slate-800" : "bg-slate-200")}
      />
      <div className="mt-3 flex items-center justify-between gap-3 text-sm">
        <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
          {formatCurrency(raised)} raised
        </span>
        <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
          Goal {formatCurrency(goal)}
        </span>
      </div>
    </div>
  );
}
