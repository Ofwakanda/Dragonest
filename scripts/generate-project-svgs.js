/**
 * Generator script for 20 SVG preview images.
 */
const fs = require("fs");
const path = require("path");

const projects = [
  {
    num: "01",
    platform: "Outlier.ai",
    brandColor: "#A855F7",
    name: "Project Flamingo RLHF",
    code: "FLAM-9281",
    track: "RLHF & Multiturn Reasoning",
    gross: "$18,450.00",
    owner: "$10,147.50",
    hours: "384 hrs",
    tasks: "1,420",
    rate: "$48/hr",
    qa: "4.93 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x8f2a...c391",
  },
  {
    num: "02",
    platform: "Outlier.ai",
    brandColor: "#A855F7",
    name: "Project Bulba Python Algorithms",
    code: "BLBA-4019",
    track: "Software Engineering & Algorithms",
    gross: "$24,320.00",
    owner: "$13,376.00",
    hours: "412 hrs",
    tasks: "1,180",
    rate: "$59/hr",
    qa: "4.96 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x3e17...8842",
  },
  {
    num: "03",
    platform: "Outlier.ai",
    brandColor: "#A855F7",
    name: "Project Ostrich Dialect QA",
    code: "OSTR-2194",
    track: "Multilingual Localization",
    gross: "$12,180.00",
    owner: "$6,699.00",
    hours: "290 hrs",
    tasks: "980",
    rate: "$42/hr",
    qa: "4.88 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x77ab...22d1",
  },
  {
    num: "04",
    platform: "Outlier.ai",
    brandColor: "#A855F7",
    name: "Project Crane LaTeX Proofs",
    code: "CRAN-7512",
    track: "Hard STEM & Mathematics",
    gross: "$15,900.00",
    owner: "$8,745.00",
    hours: "318 hrs",
    tasks: "740",
    rate: "$50/hr",
    qa: "4.95 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x44cd...91e3",
  },
  {
    num: "05",
    platform: "Alignerr",
    brandColor: "#10B981",
    name: "Rust & TypeScript Code Synthesis",
    code: "ALGN-6621",
    track: "Software Engineering & Algorithms",
    gross: "$21,400.00",
    owner: "$11,770.00",
    hours: "345 hrs",
    tasks: "860",
    rate: "$62/hr",
    qa: "4.97 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x11fa...bc44",
  },
  {
    num: "06",
    platform: "Alignerr",
    brandColor: "#10B981",
    name: "Chain-of-Thought Deduction Rubrics",
    code: "ALGN-8104",
    track: "Frontier Reasoning & RLHF",
    gross: "$17,850.00",
    owner: "$9,817.50",
    hours: "350 hrs",
    tasks: "1,120",
    rate: "$51/hr",
    qa: "4.91 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x992e...4410",
  },
  {
    num: "07",
    platform: "Alignerr",
    brandColor: "#10B981",
    name: "Advanced Differential Equations",
    code: "ALGN-3209",
    track: "Hard STEM & Mathematics",
    gross: "$13,600.00",
    owner: "$7,480.00",
    hours: "272 hrs",
    tasks: "610",
    rate: "$50/hr",
    qa: "4.94 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x66f1...003a",
  },
  {
    num: "08",
    platform: "Alignerr",
    brandColor: "#10B981",
    name: "Clinical Diagnostic Reasoning",
    code: "ALGN-9442",
    track: "Professional & Expert Domains",
    gross: "$19,250.00",
    owner: "$10,587.50",
    hours: "275 hrs",
    tasks: "490",
    rate: "$70/hr",
    qa: "4.98 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x88cd...bb12",
  },
  {
    num: "09",
    platform: "DataAnnotation",
    brandColor: "#0EA5E9",
    name: "Project Core Grounding & Search",
    code: "DA-CORE-551",
    track: "Frontier Reasoning & RLHF",
    gross: "$16,400.00",
    owner: "$9,020.00",
    hours: "410 hrs",
    tasks: "1,780",
    rate: "$40/hr",
    qa: "4.90 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x55ef...7781",
  },
  {
    num: "10",
    platform: "DataAnnotation",
    brandColor: "#0EA5E9",
    name: "Project CB Full-Stack Coding",
    code: "DA-CB-9082",
    track: "Software Engineering & Algorithms",
    gross: "$28,750.00",
    owner: "$15,812.50",
    hours: "479 hrs",
    tasks: "1,340",
    rate: "$60/hr",
    qa: "4.98 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x12dc...aa99",
  },
  {
    num: "11",
    platform: "DataAnnotation",
    brandColor: "#0EA5E9",
    name: "Thermodynamics & Mechanics",
    code: "DA-PHYS-140",
    track: "Hard STEM & Mathematics",
    gross: "$14,200.00",
    owner: "$7,810.00",
    hours: "284 hrs",
    tasks: "580",
    rate: "$50/hr",
    qa: "4.92 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x44ae...cc21",
  },
  {
    num: "12",
    platform: "DataAnnotation",
    brandColor: "#0EA5E9",
    name: "Complex Constraint Instruction",
    code: "DA-INST-882",
    track: "Frontier Reasoning & RLHF",
    gross: "$9,850.00",
    owner: "$5,417.50",
    hours: "246 hrs",
    tasks: "820",
    rate: "$40/hr",
    qa: "4.89 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x77ee...33bb",
  },
  {
    num: "13",
    platform: "Scale AI",
    brandColor: "#6366F1",
    name: "GenAI Red-Teaming & Safety Jailbreak",
    code: "SCL-RED-303",
    track: "Frontier Reasoning & RLHF",
    gross: "$22,600.00",
    owner: "$12,430.00",
    hours: "376 hrs",
    tasks: "910",
    rate: "$60/hr",
    qa: "4.95 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x22aa...dd88",
  },
  {
    num: "14",
    platform: "Scale AI",
    brandColor: "#6366F1",
    name: "Autonomous Spatial Geometry & Vision",
    code: "SCL-SPAT-711",
    track: "Hard STEM & Mathematics",
    gross: "$18,100.00",
    owner: "$9,955.00",
    hours: "362 hrs",
    tasks: "1,250",
    rate: "$50/hr",
    qa: "4.91 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x99dd...11ef",
  },
  {
    num: "15",
    platform: "Scale AI",
    brandColor: "#6366F1",
    name: "SEC Form 10-K Financial Analytics",
    code: "SCL-FIN-480",
    track: "Professional & Expert Domains",
    gross: "$26,400.00",
    owner: "$14,520.00",
    hours: "330 hrs",
    tasks: "710",
    rate: "$80/hr",
    qa: "4.99 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x33cc...55aa",
  },
  {
    num: "16",
    platform: "Remotasks",
    brandColor: "#F59E0B",
    name: "Temporal Video Action Reasoning",
    code: "RMT-VID-194",
    track: "Frontier Reasoning & RLHF",
    gross: "$11,300.00",
    owner: "$6,215.00",
    hours: "282 hrs",
    tasks: "1,140",
    rate: "$40/hr",
    qa: "4.88 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x55aa...4499",
  },
  {
    num: "17",
    platform: "Remotasks",
    brandColor: "#F59E0B",
    name: "3D LiDAR Point Cloud Segmentation",
    code: "RMT-LID-820",
    track: "Hard STEM & Mathematics",
    gross: "$13,750.00",
    owner: "$7,562.50",
    hours: "275 hrs",
    tasks: "890",
    rate: "$50/hr",
    qa: "4.92 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x88bb...66dd",
  },
  {
    num: "18",
    platform: "Mercor",
    brandColor: "#F43F5E",
    name: "Distributed Systems & Go Runtime",
    code: "MRC-DIST-901",
    track: "Software Engineering & Algorithms",
    gross: "$31,200.00",
    owner: "$17,160.00",
    hours: "390 hrs",
    tasks: "640",
    rate: "$80/hr",
    qa: "4.98 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x1133...99ee",
  },
  {
    num: "19",
    platform: "Invisible Tech",
    brandColor: "#06B6D4",
    name: "Cross-Border M&A Contract Review",
    code: "INV-LEG-402",
    track: "Professional & Expert Domains",
    gross: "$16,900.00",
    owner: "$9,295.00",
    hours: "241 hrs",
    tasks: "380",
    rate: "$70/hr",
    qa: "4.96 / 5.0",
    status: "ACTIVE EARNING",
    statusColor: "#C6FF3D",
    hash: "0x7733...11aa",
  },
  {
    num: "20",
    platform: "Mindrift / OneForma",
    brandColor: "#3B82F6",
    name: "Pan-European Idiomatic Benchmarks",
    code: "MND-EUR-606",
    track: "Multilingual Localization",
    gross: "$10,850.00",
    owner: "$5,967.50",
    hours: "271 hrs",
    tasks: "950",
    rate: "$40/hr",
    qa: "4.91 / 5.0",
    status: "QUEUE COMPLETED",
    statusColor: "#94A3B8",
    hash: "0x2288...44cc",
  },
];

const targetDir = path.join(__dirname, "public", "images", "projects");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

projects.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0E14" />
      <stop offset="50%" stop-color="#121620" />
      <stop offset="100%" stop-color="#090B0F" />
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C6FF3D" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#84CC16" stop-opacity="0.7" />
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1E293B" stroke-width="0.7" opacity="0.35"/>
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Outer background card with crisp 1px border -->
  <rect x="0" y="0" width="800" height="500" rx="16" fill="url(#bgGrad)" stroke="#222A38" stroke-width="2" />
  <!-- Subtle tech dot/grid overlay -->
  <rect x="0" y="0" width="800" height="500" rx="16" fill="url(#grid)" />

  <!-- Top Terminal Header Bar -->
  <rect x="0" y="0" width="800" height="54" rx="16" fill="#141923" stroke="#222A38" stroke-width="1.5" />
  <!-- Rect cover to square bottom corners of header -->
  <rect x="0" y="40" width="800" height="14" fill="#141923" />
  <line x1="0" y1="54" x2="800" y2="54" stroke="#222A38" stroke-width="1" />

  <!-- Window controls -->
  <circle cx="28" cy="27" r="5" fill="#EF4444" opacity="0.8" />
  <circle cx="44" cy="27" r="5" fill="#F59E0B" opacity="0.8" />
  <circle cx="60" cy="27" r="5" fill="#10B981" opacity="0.8" />

  <!-- Platform Badge Pill -->
  <rect x="85" y="15" width="130" height="24" rx="6" fill="#1E2533" stroke="${p.brandColor}" stroke-width="1.2" />
  <circle cx="98" cy="27" r="3.5" fill="${p.brandColor}" />
  <text x="110" y="31" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">${p.platform}</text>

  <!-- Project Code Breadcrumb -->
  <text x="230" y="32" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">${p.code}</text>

  <!-- Status Pill -->
  <rect x="645" y="16" width="135" height="23" rx="11.5" fill="#182218" stroke="${p.statusColor}" stroke-width="1" />
  <circle cx="660" cy="27.5" r="3.5" fill="${p.statusColor}" />
  <text x="672" y="31.5" fill="${p.statusColor}" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" letter-spacing="0.8">${p.status}</text>

  <!-- Project Title & Track -->
  <text x="36" y="98" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" letter-spacing="-0.5">${p.name}</text>
  <text x="36" y="122" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">${p.track}</text>

  <!-- Main Hero Callout: Client Gross Earnings Box -->
  <rect x="36" y="145" width="728" height="135" rx="12" fill="#101520" stroke="#1E2638" stroke-width="1.5" />
  <!-- Subtle accent edge on the left -->
  <rect x="36" y="145" width="5" height="135" rx="2" fill="#C6FF3D" />

  <text x="60" y="176" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">CLIENT EARNINGS GENERATED (GROSS)</text>
  <!-- Huge Earnings Figure with Glow -->
  <text x="60" y="235" fill="#C6FF3D" font-family="'JetBrains Mono', monospace" font-size="46" font-weight="800" letter-spacing="-1.5" filter="url(#glow)">${p.gross}</text>
  <text x="60" y="235" fill="#C6FF3D" font-family="'JetBrains Mono', monospace" font-size="46" font-weight="800" letter-spacing="-1.5">${p.gross}</text>

  <!-- Owner Payout Badge inside Gross Card -->
  <rect x="490" y="172" width="250" height="78" rx="8" fill="#182318" stroke="#C6FF3D" stroke-width="1.2" stroke-opacity="0.4" />
  <text x="508" y="196" fill="#C6FF3D" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" letter-spacing="1">CLIENT 55% NET PAYOUT</text>
  <text x="508" y="232" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="26" font-weight="800">${p.owner}</text>

  <!-- 4-Column Metric Telemetry Strip -->
  <!-- Box 1: Hours -->
  <rect x="36" y="300" width="170" height="92" rx="8" fill="#131824" stroke="#1E283A" stroke-width="1" />
  <text x="52" y="328" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" letter-spacing="0.5">HOURS LOGGED</text>
  <text x="52" y="362" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">${p.hours}</text>

  <!-- Box 2: Tasks -->
  <rect x="222" y="300" width="170" height="92" rx="8" fill="#131824" stroke="#1E283A" stroke-width="1" />
  <text x="238" y="328" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" letter-spacing="0.5">TASKS AUDITED</text>
  <text x="238" y="362" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">${p.tasks}</text>

  <!-- Box 3: Rate -->
  <rect x="408" y="300" width="170" height="92" rx="8" fill="#131824" stroke="#1E283A" stroke-width="1" />
  <text x="424" y="328" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" letter-spacing="0.5">BENCHMARK RATE</text>
  <text x="424" y="362" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">${p.rate}</text>

  <!-- Box 4: QA Score -->
  <rect x="594" y="300" width="170" height="92" rx="8" fill="#131824" stroke="#1E283A" stroke-width="1" />
  <text x="610" y="328" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" letter-spacing="0.5">FLEET QA SCORE</text>
  <text x="610" y="362" fill="#C6FF3D" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">${p.qa}</text>

  <!-- Bottom Verification & Security Audit Footer -->
  <rect x="36" y="414" width="728" height="52" rx="8" fill="#0E131C" stroke="#1A2230" stroke-width="1" />
  <!-- Shield icon -->
  <path d="M 54 433 L 61 430 L 68 433 L 68 441 C 68 446 61 449 61 449 C 61 449 54 446 54 441 Z" fill="none" stroke="#C6FF3D" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M 58 439 L 60.5 441.5 L 64.5 436.5" fill="none" stroke="#C6FF3D" stroke-width="1.6" stroke-linecap="round"/>
  <text x="78" y="444" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600">Verified Remote Session · Isolated Credentials · Zero Public Leak</text>

  <!-- Hash / Audit Stamp -->
  <text x="590" y="444" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11">Hash: <tspan fill="#CBD5E1">${p.hash}</tspan></text>
</svg>`;

  fs.writeFileSync(path.join(targetDir, `project-${p.num}.svg`), svg, "utf8");
});

console.log("Successfully generated all 20 project preview SVGs in public/images/projects/");
