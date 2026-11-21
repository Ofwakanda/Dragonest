/**
 * @file src/types/project.ts
 * Single source of truth for Platform Project Catalogue and Client Earnings models.
 */

import { PlatformId } from "./account";

export type ProjectStatus = "Active Earning" | "Queue Completed" | "Benchmarked";

export interface CatalogueProject {
  id: string;
  slug: string;
  platform: string;
  platformId: PlatformId;
  projectName: string;
  projectCode: string;
  track: string;
  clientGrossEarnings: number;
  ownerNetPayout: number; // 55% share
  specialistPayout: number; // 30%+ share
  mmFee: number; // 15% management
  duration: string;
  hoursWorked: number;
  tasksCompleted: number;
  avgHourlyRate: number;
  qaScore: number;
  status: ProjectStatus;
  previewImage: string;
  summary: string;
  highlights: string[];
  settlementHash: string;
}

export interface CatalogueStats {
  totalGrossGenerated: number;
  totalOwnerNetDisbursed: number;
  totalHoursCompleted: number;
  totalProjects: number;
  avgQaRating: number;
}
