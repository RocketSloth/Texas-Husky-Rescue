"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Moon, Search, Sparkles, Sun } from "lucide-react";

import { AdminTab } from "@/components/husky-home-quest/admin-tab";
import {
  adminQueue,
  dogs,
  foundation,
  quickStats,
  supporter,
  teams,
} from "@/components/husky-home-quest/data";
import { DogProfileTab } from "@/components/husky-home-quest/dog-profile-tab";
import { DonationProgress } from "@/components/husky-home-quest/donation-progress";
import { MissionControlTab } from "@/components/husky-home-quest/mission-control-tab";
import { StatCard } from "@/components/husky-home-quest/stat-card";
import { SupporterTab } from "@/components/husky-home-quest/supporter-tab";
import { TeamsTab } from "@/components/husky-home-quest/teams-tab";
import { getThemeClasses } from "@/components/husky-home-quest/theme";
import { cx } from "@/components/husky-home-quest/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HuskyHomeQuestPage() {
  const [selectedDogId, setSelectedDogId] = useState(1);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const theme = getThemeClasses(darkMode);

  const filteredDogs = useMemo(() => {
    if (!search.trim()) {
      return dogs;
    }

    const lowerSearch = search.toLowerCase();

    return dogs.filter(
      (dog) =>
        dog.name.toLowerCase().includes(lowerSearch) ||
        dog.status.toLowerCase().includes(lowerSearch) ||
        dog.urgency.toLowerCase().includes(lowerSearch),
    );
  }, [search]);

  const selectedDog = useMemo(() => {
    return (
      filteredDogs.find((dog) => dog.id === selectedDogId) ??
      dogs.find((dog) => dog.id === selectedDogId) ??
      filteredDogs[0] ??
      dogs[0]
    );
  }, [filteredDogs, selectedDogId]);

  return (
    <div className={cx(theme.page, "transition-colors duration-300")}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={cx("mb-6 overflow-hidden rounded-[28px] border shadow-sm", theme.panel)}
        >
          <div className="grid gap-4 p-6 md:grid-cols-[1.35fr_0.95fr] md:p-8">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge
                  className={cx(
                    "rounded-full px-3 py-1",
                    darkMode
                      ? "border border-slate-700 bg-slate-800 text-slate-200"
                      : "border border-slate-200 bg-slate-100 text-slate-700",
                  )}
                >
                  North Texas rescue pilot
                </Badge>
                <Badge
                  className={cx(
                    "rounded-full px-3 py-1",
                    darkMode
                      ? "border border-sky-500/40 bg-sky-500/10 text-sky-300"
                      : "border border-emerald-200 bg-emerald-50 text-emerald-700",
                  )}
                >
                  Mission control wireframe
                </Badge>
              </div>

              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Husky Home Quest
              </h1>
              <p className={cx("mt-3 max-w-2xl text-base leading-7", darkMode ? "text-slate-300" : "text-slate-600")}>
                Join the pack. Complete missions. Help huskies get home. This version uses
                dark mode plus per-dog Rescue Goals and a general foundation donation flow.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button className={theme.primaryButton}>Launch mission</Button>
                <Button variant="outline" className={theme.outlineButton}>
                  Donate to foundation
                </Button>
              </div>
            </div>

            <Card className={cx("rounded-[24px] border shadow-none", theme.softPanel)}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={theme.textMuted}>Rescue-wide progress</p>
                    <p className="mt-1 text-2xl font-semibold">31 lives moved forward</p>
                  </div>
                  <div className={cx("rounded-2xl p-3 shadow-sm", darkMode ? "bg-slate-900" : "bg-white")}>
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 space-y-4">
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
          </div>
        </motion.div>

        <Tabs defaultValue="mission-control" className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <TabsList
              className={cx(
                "h-auto flex-wrap rounded-2xl border p-1 shadow-sm",
                darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white",
              )}
            >
              <TabsTrigger value="mission-control" className="rounded-xl px-4 py-2">
                Mission Control
              </TabsTrigger>
              <TabsTrigger value="dog-profile" className="rounded-xl px-4 py-2">
                Dog Mission Page
              </TabsTrigger>
              <TabsTrigger value="supporter" className="rounded-xl px-4 py-2">
                Supporter Dashboard
              </TabsTrigger>
              <TabsTrigger value="teams" className="rounded-xl px-4 py-2">
                Team Hub
              </TabsTrigger>
              <TabsTrigger value="admin" className="rounded-xl px-4 py-2">
                Admin Console
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-full lg:w-80">
                <Search
                  className={cx(
                    "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
                    darkMode ? "text-slate-500" : "text-slate-400",
                  )}
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search dogs, statuses, urgent needs"
                  className={cx(
                    "rounded-2xl pl-9",
                    darkMode
                      ? "border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500"
                      : "border-slate-200 bg-white",
                  )}
                />
              </div>

              <Button variant="outline" size="icon" className={theme.outlineButton}>
                <Bell className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className={theme.outlineButton}
                onClick={() => setDarkMode((value) => !value)}
              >
                {darkMode ? (
                  <Sun className="mr-2 h-4 w-4" />
                ) : (
                  <Moon className="mr-2 h-4 w-4" />
                )}
                {darkMode ? "Light mode" : "Dark mode"}
              </Button>
            </div>
          </div>

          <TabsContent value="mission-control" className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {quickStats.map((stat) => (
                <StatCard key={stat.label} {...stat} darkMode={darkMode} />
              ))}
            </div>

            <MissionControlTab
              filteredDogs={filteredDogs}
              selectedDogId={selectedDogId}
              setSelectedDogId={setSelectedDogId}
              selectedDog={selectedDog}
              teams={teams}
              foundation={foundation}
              darkMode={darkMode}
              outlineButton={theme.outlineButton}
              primaryButton={theme.primaryButton}
            />
          </TabsContent>

          <TabsContent value="dog-profile">
            <DogProfileTab
              selectedDog={selectedDog}
              foundation={foundation}
              darkMode={darkMode}
              outlineButton={theme.outlineButton}
              primaryButton={theme.primaryButton}
            />
          </TabsContent>

          <TabsContent value="supporter">
            <SupporterTab
              supporter={supporter}
              darkMode={darkMode}
              primaryButton={theme.primaryButton}
            />
          </TabsContent>

          <TabsContent value="teams">
            <TeamsTab
              teams={teams}
              darkMode={darkMode}
              outlineButton={theme.outlineButton}
              primaryButton={theme.primaryButton}
            />
          </TabsContent>

          <TabsContent value="admin">
            <AdminTab
              adminQueue={adminQueue}
              darkMode={darkMode}
              outlineButton={theme.outlineButton}
              primaryButton={theme.primaryButton}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
