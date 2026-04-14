import { Badge } from "@/components/ui/badge";

export function DogStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Needs Foster": "bg-amber-100 text-amber-900 border-amber-200",
    "Adoption Ready": "bg-emerald-100 text-emerald-900 border-emerald-200",
    "Meeting Applicants": "bg-sky-100 text-sky-900 border-sky-200",
  };

  return (
    <Badge
      className={`border ${
        map[status] || "bg-slate-100 text-slate-900 border-slate-200"
      }`}
    >
      {status}
    </Badge>
  );
}

export function MissionBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    Awareness: "bg-violet-100 text-violet-900 border-violet-200",
    Foster: "bg-amber-100 text-amber-900 border-amber-200",
    Event: "bg-sky-100 text-sky-900 border-sky-200",
    Care: "bg-rose-100 text-rose-900 border-rose-200",
    Training: "bg-indigo-100 text-indigo-900 border-indigo-200",
    Match: "bg-emerald-100 text-emerald-900 border-emerald-200",
  };

  return (
    <Badge
      className={`border ${
        styles[type] || "bg-slate-100 text-slate-900 border-slate-200"
      }`}
    >
      {type}
    </Badge>
  );
}
