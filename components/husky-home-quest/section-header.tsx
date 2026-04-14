import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { cx } from "./utils";

export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  action,
  darkMode,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  darkMode: boolean;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <div className={cx("rounded-xl p-2", darkMode ? "bg-slate-800" : "bg-slate-100")}>
            <Icon className={cx("h-4 w-4", darkMode ? "text-slate-200" : "text-slate-700")} />
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        {subtitle ? (
          <p className={cx("mt-1 text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
