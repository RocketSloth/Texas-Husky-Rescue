import { motion } from "framer-motion";
import { Flag, PawPrint, Trophy, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { DogStatusBadge, MissionBadge } from "./badges";
import { DonationProgress } from "./donation-progress";
import { SectionHeader } from "./section-header";
import type { DogProfile, FoundationFund, Team } from "./ui-types";
import { cx, formatCurrency } from "./utils";

export function MissionControlTab({
  filteredDogs,
  selectedDogId,
  setSelectedDogId,
  selectedDog,
  teams,
  foundation,
  darkMode,
  outlineButton,
  primaryButton,
}: {
  filteredDogs: DogProfile[];
  selectedDogId: number;
  setSelectedDogId: (id: number) => void;
  selectedDog: DogProfile;
  teams: Team[];
  foundation: FoundationFund;
  darkMode: boolean;
  outlineButton: string;
  primaryButton: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
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
            icon={PawPrint}
            title="Huskies needing help now"
            subtitle="Surface urgent dogs and give supporters a clear next move."
            darkMode={darkMode}
            action={
              <Button variant="outline" className={outlineButton}>
                See all dogs
              </Button>
            }
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {filteredDogs.map((dog) => (
              <motion.button
                whileHover={{ y: -2 }}
                key={dog.id}
                onClick={() => setSelectedDogId(dog.id)}
                className={cx(
                  "overflow-hidden rounded-[24px] border text-left transition",
                  darkMode ? "bg-slate-950/80" : "bg-white",
                  selectedDogId === dog.id
                    ? darkMode
                      ? "border-sky-400 shadow-lg shadow-sky-950/20"
                      : "border-slate-900 shadow-md"
                    : darkMode
                      ? "border-slate-800 hover:border-slate-700"
                      : "border-slate-200 hover:border-slate-300",
                )}
              >
                <div className="h-44 w-full bg-slate-200">
                  <img src={dog.image} alt={dog.name} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-4 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight">{dog.name}</h4>
                      <p className={cx("mt-1 text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                        {dog.age} • {dog.location}
                      </p>
                    </div>
                    <DogStatusBadge status={dog.status} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dog.fit.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={cx(
                          "rounded-full",
                          darkMode
                            ? "border-slate-700 bg-slate-900 text-slate-300"
                            : "border-slate-200 bg-slate-50 text-slate-600",
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
                        Journey progress
                      </span>
                      <span className={cx("font-medium", darkMode ? "text-slate-200" : "text-slate-700")}>
                        {dog.progress}%
                      </span>
                    </div>
                    <Progress
                      value={dog.progress}
                      className={cx("h-2.5 rounded-full", darkMode ? "bg-slate-800" : "bg-slate-200")}
                    />
                  </div>

                  <DonationProgress
                    label="Rescue Goal"
                    raised={dog.raised}
                    goal={dog.rescueGoal}
                    darkMode={darkMode}
                    compact
                  />

                  <div className={cx("rounded-2xl p-3", darkMode ? "bg-slate-900" : "bg-slate-50")}>
                    <p className={cx("text-sm font-medium", darkMode ? "text-slate-200" : "text-slate-700")}>
                      Priority
                    </p>
                    <p className={cx("mt-1 text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                      {dog.urgency}
                    </p>
                  </div>
                </div>
              </motion.button>
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
          <CardContent className="p-5 sm:p-6">
            <SectionHeader
              icon={Flag}
              title="Today's missions"
              subtitle="Small actions that create measurable movement."
              darkMode={darkMode}
            />
            <div className="space-y-3">
              {selectedDog.missions.map((mission, idx) => (
                <div
                  key={idx}
                  className={cx(
                    "rounded-2xl border p-4",
                    darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <MissionBadge type={mission.type} />
                        {mission.verified ? (
                          <Badge className="border border-emerald-200 bg-emerald-50 text-emerald-700">
                            Staff verified
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className={cx(
                              darkMode ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-600",
                            )}
                          >
                            Quick action
                          </Badge>
                        )}
                      </div>
                      <p className="font-medium">{mission.title}</p>
                      <p className={cx("mt-1 text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                        Earn {mission.points} Impact Points
                      </p>
                    </div>
                    <Button size="sm" className={primaryButton}>
                      Take mission
                    </Button>
                  </div>
                </div>
              ))}
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
          <CardContent className="p-5 sm:p-6">
            <SectionHeader
              icon={Wallet}
              title="Give to a rescue goal"
              subtitle="Let supporters fund what each dog needs right now."
              darkMode={darkMode}
            />
            <DonationProgress
              label={`${selectedDog.name} Rescue Goal`}
              raised={selectedDog.raised}
              goal={selectedDog.rescueGoal}
              darkMode={darkMode}
            />
            <p className={cx("mt-4 text-sm leading-6", darkMode ? "text-slate-400" : "text-slate-600")}>
              {selectedDog.goalReason}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[25, 50, 100, 250].map((amount) => (
                <Button key={amount} variant="outline" className={outlineButton}>
                  {formatCurrency(amount)}
                </Button>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              <Button className={primaryButton}>Donate to {selectedDog.name}</Button>
              <Button variant="outline" className={outlineButton}>
                Donate to foundation
              </Button>
            </div>
            <div className="mt-4">
              <DonationProgress
                label="Foundation Fund"
                raised={foundation.raised}
                goal={foundation.goal}
                darkMode={darkMode}
                compact
              />
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
          <CardContent className="p-5 sm:p-6">
            <SectionHeader
              icon={Trophy}
              title="Pack leaderboard"
              subtitle="Collaboration first. Progress is shared."
              darkMode={darkMode}
            />
            <div className="space-y-3">
              {teams.slice(0, 3).map((team, idx) => (
                <div
                  key={team.name}
                  className={cx(
                    "rounded-2xl border p-4",
                    darkMode ? "border-slate-800 bg-slate-950/60" : "border-slate-200 bg-white",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cx(
                          "flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold",
                          darkMode ? "bg-slate-800" : "bg-slate-100",
                        )}
                      >
                        #{idx + 1}
                      </div>
                      <div>
                        <p className="font-medium">{team.name}</p>
                        <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                          {team.missions} missions • {team.helped} dogs helped
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{team.points}</p>
                      <p className={cx("text-sm", darkMode ? "text-slate-400" : "text-slate-500")}>
                        points
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
