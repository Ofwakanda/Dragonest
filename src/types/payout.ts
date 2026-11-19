/**
 * @file src/types/payout.ts
 * Single source of truth for Financial, Settlement, and Ledger models.
 */

export interface PayoutSplitBreakdown {
  grossUsd: number;
  ownerNetUsd: number; // 55%
  specialistNetUsd: number; // 30%+
  managementFeeUsd: number; // 15%
  optionalAddonsUsd: number;
  netPayoutUsd: number;
}

export interface SettlementLedgerEntry {
  id: string;
  statementPeriod: string; // e.g. "Nov 03 - Nov 09, 2026"
  settlementDate: string; // Every Friday
  platform: string;
  grossEarnedUsd: number;
  ownerShareUsd: number;
  taskerShareUsd: number;
  serviceFeeUsd: number;
  txHash: string;
  status: "settled" | "in_escrow" | "processing";
  downloadUrl?: string;
}

export interface PricingCalculatorInputs {
  grossMonthlyEarnings: number;
  extraAuditSampling: boolean; // +5%
  rapidAssignment: boolean; // +5%
  isFirstMonthOnboarding: boolean;
}
