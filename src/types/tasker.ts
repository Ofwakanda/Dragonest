/**
 * @file src/types/tasker.ts
 * Single source of truth for Tasker and Specialist domain models.
 */

import { ProjectTrackId } from "./account";

export type SpecialistSeniority = "junior" | "mid" | "senior" | "principal";

export interface SpecialistTrack {
  id: ProjectTrackId;
  name: string;
  minHourlyRateUsd: number;
  maxHourlyRateUsd: number;
  description: string;
  primaryTools: string[];
  evaluationCriteria: string[];
}

export interface SpecialistProfile {
  id: string;
  anonymousHandle: string; // e.g. "Specialist #4812"
  track: ProjectTrackId;
  seniority: SpecialistSeniority;
  qaScore: number; // e.g. 4.92
  totalHoursCompleted: number;
  activeQueues: number;
  verifiedCredentials: string[];
  joinedAt: string;
}

export interface TaskerApplication {
  id: string;
  fullName: string;
  email: string;
  telegramHandle: string;
  track: ProjectTrackId;
  yearsExperience: number;
  githubOrPortfolio?: string;
  weeklyAvailabilityHours: number;
  submittedAt: string;
}
