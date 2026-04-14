import { Flag, Heart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import type { Supporter } from "./ui-types";
import { cx, formatCurrency } from "./utils";

export function SupporterTab({
  supporter,
  darkMode,
  primaryButton,
}: {
  supporter: Supporter;
  darkMode: boolean;
  primaryButton: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <Card
        className={cx(
          "rounded-[28px] border shadow-sm",
          darkMode
            ? "border-slate-800 bg-slate-900/80 shadow-black/20"
            : "border-slate-200 bg-white",
        )}
      >
        <CardContent className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                Supporter profile
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">{supporter.name}</h2>
              <p className={cx("mt-1", darkMode ? "text-slate-400" : "text-slate-500")}>
                {supporter.role} • {supporter.team}
              </p>
            </div>
            <div className={cx("rounded-2xl p-3", darkMode ? "bg-slate-800" : "bg-slate-100")}>
              <Star className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className={cx("rounded-2xl p-4", darkMode ? "bg-slate-950/70" : "bg-slate-50")}>
              <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                Impact Points
              </p>
              <p className="mt-1 text-2xl font-semibold">{supporter.points}</p>
            </div>
            <div className={cx("rounded-2xl p-4", darkMode ? "bg-slate-950/70" : "bg-slate-50")}>
              <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                Mission streak
              </p>
              <p className="mt-1 text-2xl font-semibold">{supporter.streak} days</p>
            </div>
            <div className={cx("rounded-2xl p-4", darkMode ? "bg-slate-950/70" : "bg-slate-50")}>
              <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                Dogs helped
              </p>
              <p className="mt-1 text-2xl font-semibold">{supporter.dogsHelped}</p>
            </div>
            <div className={cx("rounded-2xl p-4", darkMode ? "bg-slate-950/70" : "bg-slate-50")}>
              <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                Donations given
              </p>
              <p className="mt-1 text-2xl font-semibold">
                {formatCurrency(supporter.donationsGiven)}
              </p>
            </div>
          </div>

          <div className={cx("mt-6 rounded-[24px] p-5 text-white", darkMode ? "bg-slate-950" : "bg-slate-900")}>
            <p className="text-sm text-slate-300">Next unlock</p>
            <p className="mt-1 text-lg font-medium">
              Complete 2 more verified missions to unlock Matchmaker review.
            </p>
            <Progress value={78} className="mt-4 h-3 rounded-full bg-slate-700" />
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
              <Flag className="h-5 w-5" />
              Current missions
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Give supporters a crisp next step whenever they log in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {supporter.currentMissions.map((mission) => (
              <div
                key={mission}
                className={cx(
                  "flex items-center justify-between gap-4 rounded-2xl border p-4",
                  darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                )}
              >
                <p className="font-medium">{mission}</p>
                <Button size="sm" className={primaryButton}>
                  Open
                </Button>
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
              <Heart className="h-5 w-5" />
              Your impact
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Feedback loop that keeps people coming back.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {supporter.recentImpact.map((item) => (
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
