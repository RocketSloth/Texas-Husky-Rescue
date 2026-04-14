import { CheckCircle2, ClipboardList, Users, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { DogStatusBadge, MissionBadge } from "./badges";
import { DonationProgress } from "./donation-progress";
import type { DogProfile, FoundationFund } from "./ui-types";
import { cx, formatCurrency } from "./utils";

export function DogProfileTab({
  selectedDog,
  foundation,
  darkMode,
  outlineButton,
  primaryButton,
}: {
  selectedDog: DogProfile;
  foundation: FoundationFund;
  darkMode: boolean;
  outlineButton: string;
  primaryButton: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card
        className={cx(
          "overflow-hidden rounded-[28px] border shadow-sm",
          darkMode
            ? "border-slate-800 bg-slate-900/80 shadow-black/20"
            : "border-slate-200 bg-white",
        )}
      >
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[360px] bg-slate-200">
            <img
              src={selectedDog.image}
              alt={selectedDog.name}
              className="h-full w-full object-cover"
            />
          </div>

          <CardContent className="p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <DogStatusBadge status={selectedDog.status} />
              <Badge className="border border-rose-200 bg-rose-50 text-rose-700">
                {selectedDog.urgency}
              </Badge>
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {selectedDog.name}
            </h2>
            <p className={cx("mt-1", darkMode ? "text-slate-400" : "text-slate-500")}>
              {selectedDog.age} • {selectedDog.location}
            </p>
            <p className={cx("mt-4 leading-7", darkMode ? "text-slate-300" : "text-slate-600")}>
              {selectedDog.story}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedDog.fit.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={cx(
                    "rounded-full px-3 py-1",
                    darkMode
                      ? "border-slate-700 bg-slate-900 text-slate-300"
                      : "border-slate-200 bg-slate-50 text-slate-600",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className={cx("mt-6 rounded-[24px] p-4", darkMode ? "bg-slate-950/70" : "bg-slate-50")}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  Adoption journey
                </span>
                <span className="font-medium">{selectedDog.progress}% complete</span>
              </div>
              <Progress
                value={selectedDog.progress}
                className={cx("h-3 rounded-full", darkMode ? "bg-slate-800" : "bg-slate-200")}
              />

              <div className="mt-4 grid gap-2">
                {selectedDog.milestones.map((milestone) => (
                  <div
                    key={milestone.label}
                    className={cx(
                      "flex items-center gap-3 rounded-2xl px-3 py-2",
                      darkMode ? "bg-slate-900" : "bg-white",
                    )}
                  >
                    <div
                      className={cx(
                        "rounded-full p-1",
                        milestone.done
                          ? "bg-emerald-100 text-emerald-700"
                          : darkMode
                            ? "bg-slate-800 text-slate-500"
                            : "bg-slate-100 text-slate-400",
                      )}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span
                      className={
                        milestone.done
                          ? darkMode
                            ? "text-slate-100"
                            : "text-slate-900"
                          : darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                      }
                    >
                      {milestone.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className={primaryButton}>Take a mission</Button>
              <Button variant="outline" className={outlineButton}>
                Apply to adopt
              </Button>
            </div>
          </CardContent>
        </div>
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
              <Wallet className="h-5 w-5" />
              Rescue Goal
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Donate directly to this dog or give to the foundation as a whole.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DonationProgress
              label={`${selectedDog.name} Rescue Goal`}
              raised={selectedDog.raised}
              goal={selectedDog.rescueGoal}
              darkMode={darkMode}
            />
            <div className="rounded-2xl border border-dashed border-sky-500/40 bg-sky-500/10 p-4">
              <p className="text-sm font-medium text-sky-300">What this goal covers</p>
              <p className="mt-1 text-sm leading-6 text-sky-100/80">
                {selectedDog.goalReason}
              </p>
            </div>
            <div className="space-y-2">
              {selectedDog.sponsorNeeds.map((need) => (
                <div
                  key={need}
                  className={cx(
                    "rounded-2xl p-3 text-sm",
                    darkMode ? "bg-slate-950/70 text-slate-300" : "bg-slate-50 text-slate-700",
                  )}
                >
                  {need}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[25, 50, 100, 250].map((amount) => (
                <Button key={amount} variant="outline" className={outlineButton}>
                  {formatCurrency(amount)}
                </Button>
              ))}
            </div>
            <div className="grid gap-3">
              <Button className={primaryButton}>Donate to {selectedDog.name}</Button>
              <Button variant="outline" className={outlineButton}>
                Give to Texas Husky Rescue Foundation
              </Button>
            </div>
            <DonationProgress
              label="Foundation Fund"
              raised={foundation.raised}
              goal={foundation.goal}
              darkMode={darkMode}
              compact
            />
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
              <ClipboardList className="h-5 w-5" />
              Active missions
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Support actions for this dog right now.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedDog.missions.map((mission, idx) => (
              <div
                key={idx}
                className={cx(
                  "rounded-2xl border p-4",
                  darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                )}
              >
                <div className="mb-2 flex flex-wrap gap-2">
                  <MissionBadge type={mission.type} />
                  <Badge
                    variant="outline"
                    className={cx(
                      darkMode ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-600",
                    )}
                  >
                    +{mission.points} points
                  </Badge>
                </div>
                <p className="font-medium">{mission.title}</p>
                <Button className={cx("mt-3 rounded-xl", primaryButton)} size="sm">
                  Complete mission
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
              <Users className="h-5 w-5" />
              Supporters helping now
            </CardTitle>
            <CardDescription className={darkMode ? "text-slate-400" : "text-slate-500"}>
              Show momentum without turning the dog into a popularity contest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                `Taylor is creating a better intro reel for ${selectedDog.name}`,
                `Jordan staffed Saturday event check-in for ${selectedDog.name}`,
                `Sam sponsored a supply need for ${selectedDog.name}`,
              ].map((item) => (
                <div
                  key={item}
                  className={cx(
                    "rounded-2xl p-3 text-sm",
                    darkMode ? "bg-slate-950/70 text-slate-300" : "bg-slate-50 text-slate-600",
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
