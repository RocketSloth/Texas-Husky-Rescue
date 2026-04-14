import { Calendar, Dog, DollarSign, Flag } from "lucide-react";

import type { DogProfile, FoundationFund, Supporter, Team } from "./ui-types";

export const dogs: DogProfile[] = [
  {
    id: 1,
    name: "Luna",
    age: "3 years",
    status: "Adoption Ready",
    location: "Dallas, TX",
    urgency: "Needs visibility",
    fit: ["High energy", "Good with adults", "Needs yard"],
    progress: 74,
    rescueGoal: 1200,
    raised: 860,
    goalReason: "Grooming, transport, booster vet visit",
    sponsorNeeds: [
      "Grooming appointment",
      "Event transport fuel",
      "Starter leash kit",
    ],
    image:
      "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=1200&q=80",
    story:
      "Friendly, smart, and playful. Luna thrives with structure, exercise, and a home ready for husky energy.",
    missions: [
      {
        title: "Share Luna in 3 local groups",
        points: 5,
        type: "Awareness",
        verified: false,
      },
      {
        title: "Recruit 1 possible foster backup",
        points: 40,
        type: "Foster",
        verified: true,
      },
      {
        title: "Staff Saturday meet-and-greet",
        points: 20,
        type: "Event",
        verified: true,
      },
      {
        title: "Sponsor grooming session",
        points: 25,
        type: "Care",
        verified: true,
      },
    ],
    milestones: [
      { label: "Medical complete", done: true },
      { label: "Bio upgraded", done: true },
      { label: "Visibility boost", done: true },
      { label: "Meeting applicants", done: false },
      { label: "Home found", done: false },
    ],
  },
  {
    id: 2,
    name: "Ghost",
    age: "2 years",
    status: "Needs Foster",
    location: "Fort Worth, TX",
    urgency: "Foster critical",
    fit: ["Dog selective", "Very active", "Escape artist"],
    progress: 36,
    rescueGoal: 1800,
    raised: 620,
    goalReason: "Crate setup, eval support, emergency foster supplies",
    sponsorNeeds: ["Heavy-duty crate", "Cooling mat", "Evaluation transport"],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    story:
      "Ghost needs a calm, secure foster setup while the rescue completes evaluation and training support.",
    missions: [
      {
        title: "Refer 1 foster candidate",
        points: 40,
        type: "Foster",
        verified: true,
      },
      {
        title: "Donate crate + leash kit",
        points: 25,
        type: "Care",
        verified: true,
      },
      {
        title: "Complete foster FAQ training",
        points: 30,
        type: "Training",
        verified: false,
      },
    ],
    milestones: [
      { label: "Intake", done: true },
      { label: "Medical eval", done: true },
      { label: "Foster secured", done: false },
      { label: "Adoption ready", done: false },
      { label: "Home found", done: false },
    ],
  },
  {
    id: 3,
    name: "Koda",
    age: "5 years",
    status: "Meeting Applicants",
    location: "Plano, TX",
    urgency: "Needs advocate answers",
    fit: ["Good with kids", "Calmer energy", "House trained"],
    progress: 88,
    rescueGoal: 900,
    raised: 900,
    goalReason: "Training refreshers and adoption event support",
    sponsorNeeds: [
      "Training tune-up",
      "Adoption event booth",
      "Post-adoption starter bag",
    ],
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
    story:
      "Koda is a more mellow husky who is drawing interest from families and needs well-informed advocates.",
    missions: [
      {
        title: "Answer adopter FAQ in chat",
        points: 15,
        type: "Match",
        verified: true,
      },
      {
        title: "Invite 2 friends to Koda's page",
        points: 10,
        type: "Awareness",
        verified: false,
      },
      {
        title: "Attend adoption event check-in",
        points: 20,
        type: "Event",
        verified: true,
      },
    ],
    milestones: [
      { label: "Medical complete", done: true },
      { label: "Foster in place", done: true },
      { label: "Adoption ready", done: true },
      { label: "Meeting applicants", done: true },
      { label: "Home found", done: false },
    ],
  },
];

export const foundation: FoundationFund = {
  name: "Texas Husky Rescue Foundation Fund",
  raised: 18420,
  goal: 25000,
  purpose:
    "Medical care, emergency boarding, transport, and foster starter supplies across the rescue.",
};

export const teams: Team[] = [
  { name: "Dallas Pack", points: 1280, missions: 62, helped: 7, progress: 84 },
  {
    name: "Fort Worth Pack",
    points: 1125,
    missions: 55,
    helped: 5,
    progress: 71,
  },
  {
    name: "Weekend Warriors",
    points: 890,
    missions: 41,
    helped: 4,
    progress: 63,
  },
  {
    name: "Foster Force",
    points: 860,
    missions: 29,
    helped: 6,
    progress: 77,
  },
];

export const supporter: Supporter = {
  name: "Alex",
  role: "Advocate",
  points: 340,
  streak: 6,
  team: "Dallas Pack",
  dogsHelped: 8,
  verifiedMissions: 14,
  donationsGiven: 215,
  currentMissions: [
    "Share Luna's profile in 3 North Texas groups",
    "Complete Ghost foster FAQ training",
    "RSVP for Saturday meet-and-greet",
  ],
  recentImpact: [
    "Your post drove 41 visits to Koda's page.",
    "A foster lead you referred for Luna is in review.",
    "Dallas Pack completed 84% of this week's challenge.",
  ],
};

export const adminQueue = [
  {
    user: "Taylor",
    mission: "Refer foster candidate for Ghost",
    proof: "1 submission",
    status: "Needs review",
  },
  {
    user: "Jordan",
    mission: "Staff Saturday meet-and-greet",
    proof: "Check-in logged",
    status: "Ready to verify",
  },
  {
    user: "Sam",
    mission: "Sponsor grooming session for Luna",
    proof: "Donation matched",
    status: "Ready to verify",
  },
];

export const quickStats = [
  { label: "Dogs needing boost", value: 12, icon: Dog },
  { label: "Active missions", value: 47, icon: Flag },
  { label: "Upcoming events", value: 4, icon: Calendar },
  { label: "Raised this month", value: "$18.4k", icon: DollarSign },
];
