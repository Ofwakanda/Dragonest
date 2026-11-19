/**
 * @file src/types/telemetry.ts
 * Single source of truth for Ratings, Audits, and Telemetry models.
 */

export interface RatingScorecard {
  id: string;
  contributorId: string; // Anonymous ID e.g. "OWN-9204" or "SPEC-3811"
  contributorType: "owner" | "tasker";
  qualityScore: number; // 1.0 - 5.0
  reliabilityScore: number;
  communicationScore: number;
  compositeAverage: number;
  totalTasksAudited: number;
  streakDays: number;
  lastActive: string;
}

export interface MetricDefinition {
  id: string;
  label: string;
  targetThreshold: string;
  auditFrequency: string;
  description: string;
}
