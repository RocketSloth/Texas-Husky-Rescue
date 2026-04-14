import {
  ArrowRight,
  Clock3,
  Home,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SectionHeader } from "./section-header";
import { cx } from "./utils";

export function AdminTab({
  adminQueue,
  darkMode,
  outlineButton,
  primaryButton,
}: {
  adminQueue: Array<{
    user: string;
    mission: string;
    proof: string;
    status: string;
  }>;
  darkMode: boolean;
  outlineButton: string;
  primaryButton: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <Card
        className={cx(
          "rounded-[24px] border shadow-sm",
          darkMode
            ? "border-slate-800 bg-slate-900/80 shadow-black/20"
            : "border-slate-200 bg-white",
        )}
      >
        <CardContent className="p-5 sm:p-6">
          <SectionHeader
            icon={ShieldCheck}
            title="Mission verification queue"
            subtitle="Keep the rescue-first guardrails strong with staff review for higher-trust actions."
            darkMode={darkMode}
            action={<Button className={primaryButton}>Create mission</Button>}
          />

          <div className="space-y-3">
            {adminQueue.map((item) => (
              <div
                key={`${item.user}-${item.mission}`}
                className={cx(
                  "rounded-[24px] border p-4",
                  darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                )}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-semibold">{item.mission}</p>
                    <p className={cx("mt-1 text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                      Submitted by {item.user} • Proof: {item.proof}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className="border border-amber-200 bg-amber-50 text-amber-700">
                      {item.status}
                    </Badge>
                    <Button size="sm" variant="outline" className={outlineButton}>
                      Review
                    </Button>
                    <Button size="sm" className={primaryButton}>
                      Verify
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card
          className={cx(
            "rounded-[24px] border shadow-sm",
            darkMode
              ? "border-slate-800 bg-slate-900/80 shadow-black/20"
              : "border-slate-200 bg-white",
          )}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <MapPinned className="h-5 w-5" />
              Rescue ops snapshot
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Make the dashboard feel operational, not just social.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: Home, label: "Foster critical", value: 4 },
              { icon: Truck, label: "Transport slots open", value: 3 },
              { icon: Stethoscope, label: "Medical follow-ups", value: 6 },
              { icon: Clock3, label: "Events this week", value: 4 },
            ].map((item) => (
              <div
                key={item.label}
                className={cx(
                  "flex items-center justify-between rounded-2xl p-4",
                  darkMode ? "bg-slate-950/70" : "bg-slate-50",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cx("rounded-xl p-2 shadow-sm", darkMode ? "bg-slate-900" : "bg-white")}>
                    <item.icon className={cx("h-4 w-4", darkMode ? "text-slate-200" : "text-slate-700")} />
                  </div>
                  <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
                    {item.label}
                  </span>
                </div>
                <span className="text-xl font-semibold">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card
          className={cx(
            "rounded-[24px] border shadow-sm",
            darkMode
              ? "border-slate-800 bg-slate-900/80 shadow-black/20"
              : "border-slate-200 bg-white",
          )}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <ArrowRight className="h-5 w-5" />
              Suggested next automation
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Keep staff load low in the MVP by automating only the highest-leverage steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6">
            {[
              "Auto-create awareness missions when a dog enters Adoption Ready.",
              "Boost low-visibility dogs that have not received meaningful action in 7 days.",
              "Queue only verified, high-trust actions for manual staff approval.",
            ].map((item) => (
              <div
                key={item}
                className={cx(
                  "rounded-2xl p-4",
                  darkMode ? "bg-slate-950/70 text-slate-300" : "bg-slate-50 text-slate-700",
                )}
              >
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
