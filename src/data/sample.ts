/**
 * SAMPLE DATA — FOR LAYOUT ONLY.
 * These are placeholders so the ratings and dashboard components can be
 * reviewed before launch. They are NOT real reviews or real results and
 * must be replaced with live data (or removed) before the site goes public.
 * Every component that renders this data shows a visible "Sample data" label.
 */

export const METRICS = ["Quality", "Reliability", "Communication", "Compliance", "Pay timeliness", "Accessibility"] as const;
export type Metric = (typeof METRICS)[number];
export type Audience = "agency" | "owners" | "taskers";

export const scorecards: Record<Audience, { title: string; ratedBy: string; count: number; scores: Record<Metric, number> }> = {
  agency: {
    title: "Middlemen (the agency)", ratedBy: "Rated by account owners and taskers", count: 0,
    scores: { Quality: 4.6, Reliability: 4.5, Communication: 4.4, Compliance: 4.9, "Pay timeliness": 4.8, Accessibility: 4.7 },
  },
  owners: {
    title: "Account owners (average)", ratedBy: "Rated by taskers and our QA team", count: 0,
    scores: { Quality: 4.3, Reliability: 4.4, Communication: 4.1, Compliance: 4.7, "Pay timeliness": 4.5, Accessibility: 4.2 },
  },
  taskers: {
    title: "Taskers (average)", ratedBy: "Rated by account owners and our QA team", count: 0,
    scores: { Quality: 4.5, Reliability: 4.4, Communication: 4.5, Compliance: 4.8, "Pay timeliness": 4.6, Accessibility: 4.6 },
  },
};

export type SocialPlatform = "x" | "linkedin" | "reddit" | "discord" | "trustpilot";

export type Review = { 
  id: string; 
  about: Audience; 
  from: string; 
  handle?: string;
  platform: SocialPlatform;
  rating: number; 
  date: string; 
  text: string; 
  engagement: string 
};

export const reviews: Review[] = [
  { 
    id: "r1", 
    about: "agency", 
    from: "Marcus V.", 
    handle: "@marcus_ml_eval",
    platform: "x",
    rating: 5, 
    date: "2026-08-30", 
    engagement: "3 months tasking",
    text: "The MM audit was blunt about where our account lacked qualifications rather than promising instant \$5k months. We hit a rough patch in week 2 when project rubrics changed overnight, but our tasker adapted and payouts stayed exact." 
  },
  { 
    id: "r2", 
    about: "agency", 
    from: "Elena Rostova", 
    handle: "in/elena-rostova-qa",
    platform: "linkedin",
    rating: 4, 
    date: "2026-08-22", 
    engagement: "Verified Specialist",
    text: "Screen-reader setup through the isolated VM took an entire afternoon to calibrate—remote desktop lag is real if your internet dips. But unlike direct platforms that just ban without explanation, MM support worked through the latency issue with me until shifts were stable." 
  },
  { 
    id: "r3", 
    about: "taskers", 
    from: "u/CodeBenchmark_Dev", 
    handle: "r/MachineLearning",
    platform: "reddit",
    rating: 4, 
    date: "2026-08-15", 
    engagement: "Python Evaluation",
    text: "Had a small friction point when a reviewer on our platform flagged a false positive on style conventions. The assigned tasker provided full git diff proofs from the session log within 3 hours and got the quality score restored." 
  },
  { 
    id: "r4", 
    about: "owners", 
    from: "Kaelen Chen", 
    handle: "@kaelenc_ai",
    platform: "x",
    rating: 5, 
    date: "2026-08-02", 
    engagement: "Account Owner",
    text: "My biggest worry was 2FA fatigue and tax tracking. Having scheduled 4-hour tasking windows means I only confirm login prompts during agreed hours, and the monthly split statements make my accountant's job straightforward." 
  },
  { 
    id: "r5", 
    about: "agency", 
    from: "David S. (STEM Annotator)", 
    handle: "discord: @davids_ai#4092",
    platform: "discord",
    rating: 4, 
    date: "2026-07-28", 
    engagement: "Tasker Lead",
    text: "Platform task queues dried up for 4 days in mid-July. Appreciated that MM didn't charge the account owner a shortfall fee and didn't leave taskers stranded without backup queues. The 30% floor is honoured even when projects fluctuate." 
  },
  { 
    id: "r6", 
    about: "owners", 
    from: "Tariq M.", 
    handle: "r/remotework",
    platform: "reddit",
    rating: 4, 
    date: "2026-07-20", 
    engagement: "Tasker · 4 months",
    text: "Had one owner who forgot their scheduled shift time and went offline during a 2FA re-auth. MM paused the timer immediately so my hourly metric wasn't penalized, and re-synced us the next morning." 
  },
  { 
    id: "r7", 
    about: "agency", 
    from: "Horizon Data Labs", 
    handle: "Trustpilot Verified",
    platform: "trustpilot",
    rating: 5, 
    date: "2026-07-14", 
    engagement: "Enterprise Host",
    text: "We run three specialized accounts. Replacing an underperforming tasker took 4 business days, which felt slow when volume was peaking, but the replacement was thoroughly vetted and brought our QA score back up to 98%." 
  },
  { 
    id: "r8", 
    about: "taskers", 
    from: "Sarah Jenkins, PhD", 
    handle: "in/sarah-jenkins-stem",
    platform: "linkedin",
    rating: 5, 
    date: "2026-07-02", 
    engagement: "Math & Reasoning QA",
    text: "The rubrics on high-tier STEM benchmarks are brutally subjective. It helps immenseley that MM has a peer QA review layer before final submission—saved us from at least three dispute penalties this month alone." 
  },
  { 
    id: "r9", 
    about: "agency", 
    from: "u/LateNightCoder_99", 
    handle: "r/sidehustle",
    platform: "reddit",
    rating: 4, 
    date: "2026-06-25", 
    engagement: "Tasker · Part-time",
    text: "Don't expect free money—the qualification modules are demanding and you will fail if you rush through the reading guidelines. But once cleared, weekly payouts have never been a day late." 
  },
  { 
    id: "r10", 
    about: "owners", 
    from: "Alex B.", 
    handle: "@alexb_ventures",
    platform: "x",
    rating: 5, 
    date: "2026-06-11", 
    engagement: "Account Owner",
    text: "I was skeptical about anyone touching my account given ban horror stories on Reddit. The virtual machine lockdown with zero clipboard/export permissions gave me the confidence to test. 4 months in, accounts are healthy and in top standing." 
  },
];

export const dashboard = {
  month: "August 2026",
  earnings: 2140, taskerPay: 1284, agencyFee: 428, qaScore: 94, hours: 118,
  weeklyHours: [
    { week: "Week 1", hours: 26 }, { week: "Week 2", hours: 31 }, { week: "Week 3", hours: 34 }, { week: "Week 4", hours: 27 },
  ],
  invoices: [
    { id: "INV-0826", period: "Aug 2026", amount: 1712, status: "Due 5 Sep" },
    { id: "INV-0726", period: "Jul 2026", amount: 1498, status: "Paid" },
    { id: "INV-0626", period: "Jun 2026", amount: 1150, status: "Paid" },
  ],
};
