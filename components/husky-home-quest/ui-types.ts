export type MissionType =
  | "Awareness"
  | "Foster"
  | "Event"
  | "Care"
  | "Training"
  | "Match";

export type Mission = {
  title: string;
  points: number;
  type: MissionType;
  verified: boolean;
};

export type Milestone = {
  label: string;
  done: boolean;
};

export type DogProfile = {
  id: number;
  name: string;
  age: string;
  status: string;
  location: string;
  urgency: string;
  fit: string[];
  progress: number;
  rescueGoal: number;
  raised: number;
  goalReason: string;
  sponsorNeeds: string[];
  image: string;
  story: string;
  missions: Mission[];
  milestones: Milestone[];
};

export type Team = {
  name: string;
  points: number;
  missions: number;
  helped: number;
  progress: number;
};

export type Supporter = {
  name: string;
  role: string;
  points: number;
  streak: number;
  team: string;
  dogsHelped: number;
  verifiedMissions: number;
  donationsGiven: number;
  currentMissions: string[];
  recentImpact: string[];
};

export type FoundationFund = {
  name: string;
  raised: number;
  goal: number;
  purpose: string;
};
