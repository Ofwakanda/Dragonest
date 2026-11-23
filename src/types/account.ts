/**
 * @file src/types/account.ts
 * Single source of truth for Account Owner domain models.
 */

export type PlatformId = 
  | "outlier"
  | "alignerr"
  | "scale-ai"
  | "data-annotation"
  | "remotasks"
  | "mercor"
  | "handshake"
  | "workada"
  | "other";

export type AccountStatus = 
  | "idle"
  | "stuck_test"
  | "active_managed"
  | "reviewing"
  | "onboarding";

export type ProjectTrackId =
  | "swe_algo"
  | "math_stem"
  | "reasoning_rlhf"
  | "multilingual"
  | "domain_expert";

export interface AccountOwnerSubmission {
  id: string;
  fullName: string;
  email: string;
  telegramHandle?: string;
  platform: PlatformId;
  status: AccountStatus;
  primaryDomain: ProjectTrackId;
  estimatedHistoricalEarnings?: number;
  submittedAt: string;
  notes?: string;
}

export interface AccountMetricSnapshot {
  ownerSharePercent: number; // e.g. 55
  taskerSharePercent: number; // e.g. 30
  platformFeePercent: number; // e.g. 15
  avgWeeklyGrossUsd: number;
  activeHoursWeekly: number;
  qaScore: number; // 0 - 5.0
}
