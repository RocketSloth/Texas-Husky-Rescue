import { cn } from "@/lib/utils";

export function Progress({
  className,
  value = 0,
}: {
  className?: string;
  value?: number;
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("relative w-full overflow-hidden rounded-full bg-slate-200", className)}>
      <div
        className="h-full rounded-full bg-sky-500 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
