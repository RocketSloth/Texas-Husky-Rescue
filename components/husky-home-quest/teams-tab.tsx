import { Gift, Trophy, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { SectionHeader } from "./section-header";
import type { Team } from "./ui-types";
import { cx } from "./utils";

export function TeamsTab({
  teams,
  darkMode,
  outlineButton,
  primaryButton,
}: {
  teams: Team[];
  darkMode: boolean;
  outlineButton: string;
  primaryButton: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
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
            icon={Users}
            title="Pack standings"
            subtitle="Show shared momentum, not just individual clout."
            darkMode={darkMode}
            action={
              <Button variant="outline" className={outlineButton}>
                Create challenge
              </Button>
            }
          />

          <div className="space-y-4">
            {teams.map((team, idx) => (
              <div
                key={team.name}
                className={cx(
                  "rounded-[24px] border p-4",
                  darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={cx(
                        "flex h-12 w-12 items-center justify-center rounded-2xl text-base font-semibold",
                        darkMode ? "bg-slate-800" : "bg-slate-100",
                      )}
                    >
                      #{idx + 1}
                    </div>
                    <div>
                      <p className="text-lg font-semibold tracking-tight">{team.name}</p>
                      <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                        {team.missions} missions completed • {team.helped} dogs supported
                      </p>
                    </div>
                  </div>

                  <div className="min-w-[220px]">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
                        Weekly team goal
                      </span>
                      <span className="font-medium">{team.progress}%</span>
                    </div>
                    <Progress
                      value={team.progress}
                      className={cx("h-3 rounded-full", darkMode ? "bg-slate-800" : "bg-slate-200")}
                    />
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
              <Trophy className="h-5 w-5" />
              Weekly challenge
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Fort Worth Pack needs 8 more missions to unlock a supply drive spotlight.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={cx("rounded-[24px] p-5 text-white", darkMode ? "bg-slate-950" : "bg-slate-900")}>
              <p className="text-sm text-slate-300">Challenge theme</p>
              <p className="mt-1 text-xl font-semibold">Foster Critical Week</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Prioritize foster leads, crate donations, and weekend event staffing for dogs
                waiting on safe placement.
              </p>
              <Button className={cx("mt-5 rounded-2xl", primaryButton)}>
                Join this challenge
              </Button>
            </div>
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
              <Gift className="h-5 w-5" />
              Team spotlight
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Recognition should feel warm and mission-driven.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Dallas Pack helped 3 huskies move from visibility boost to meeting applicants.",
                "Foster Force filled 2 urgent backup placements this week.",
                "Weekend Warriors brought 11 new people to the Saturday event.",
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
