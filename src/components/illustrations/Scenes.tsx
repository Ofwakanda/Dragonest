import { SKIN, SeatedPerson, StandingPerson, WheelchairPerson } from "./People";

/* Original illustrations, drawn with theme tokens so they work in light and dark mode.
   Platform screens are generic and do not depict any real company's product. */

const T = {
  bg: "rgb(var(--bg))", surface: "rgb(var(--surface))", s2: "rgb(var(--surface-2))", line: "rgb(var(--line))",
  ink: "rgb(var(--ink))", muted: "rgb(var(--muted))", primary: "rgb(var(--primary))", onPrimary: "rgb(var(--on-primary))",
  accent: "rgb(var(--accent))", accentInk: "rgb(var(--accent-ink))", accentSoft: "rgb(var(--accent-soft))", danger: "rgb(var(--danger))",
};

function Lines({ x, y, widths, gap = 10, h = 5, fill = T.line }: { x: number; y: number; widths: number[]; gap?: number; h?: number; fill?: string }) {
  return <g>{widths.map((w, i) => <rect key={i} x={x} y={y + i * gap} width={w} height={h} rx={h / 2} fill={fill} />)}</g>;
}

function Monitor({ x, y, w = 96, h = 64 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x + w / 2 - 5} y={y + h} width={10} height={16} fill={T.muted} />
      <rect x={x + w / 2 - 20} y={y + h + 14} width={40} height={5} rx={2} fill={T.muted} />
      <rect x={x} y={y} width={w} height={h} rx={6} fill={T.ink} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx={3} fill={T.bg} />
      <rect x={x + 10} y={y + 10} width={(w - 26) / 2} height={h - 26} rx={2} fill={T.s2} />
      <rect x={x + 14 + (w - 26) / 2} y={y + 10} width={(w - 26) / 2} height={h - 26} rx={2} fill={T.s2} />
      <rect x={x + 10} y={y + h - 13} width={24} height={5} rx={2.5} fill={T.primary} />
      <rect x={x + 38} y={y + h - 13} width={14} height={5} rx={2.5} fill={T.accent} />
    </g>
  );
}

function Plant({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0,0 C-26,-10 -30,-40 -18,-58 C-10,-40 -6,-22 0,0Z" fill={T.accent} />
      <path d="M0,0 C22,-12 30,-44 16,-66 C8,-44 4,-24 0,0Z" fill={T.accentInk} />
      <path d="M0,0 C-6,-24 -2,-56 6,-76 C10,-50 8,-24 0,0Z" fill={T.accent} opacity={0.85} />
      <path d="M-16,0 H16 L12,30 H-12Z" fill={T.primary} />
    </g>
  );
}

/* ---------------- Home hero: AI-training task screen ---------------- */
export function PlatformIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 460" className={className} role="img" aria-label="Illustration of an AI-training task screen: a tasker compares two AI responses, scores them on accuracy, helpfulness and safety, and a QA check shows 96%.">
      <rect x="8" y="12" width="544" height="404" rx="18" fill={T.bg} stroke={T.line} strokeWidth="2" />
      <path d="M8 30a18 18 0 0 1 18-18h508a18 18 0 0 1 18 18v22H8z" fill={T.s2} />
      <circle cx="32" cy="32" r="5" fill={T.muted} opacity=".5" /><circle cx="50" cy="32" r="5" fill={T.muted} opacity=".5" /><circle cx="68" cy="32" r="5" fill={T.muted} opacity=".5" />
      <rect x="170" y="21" width="220" height="22" rx="11" fill={T.bg} />
      <text x="280" y="36" textAnchor="middle" fontSize="11" fill={T.muted}>Rating task · 14 of 40</text>
      <circle cx="516" cy="32" r="5" fill={T.danger} /><text x="506" y="36" textAnchor="end" fontSize="10" fontWeight="700" fill={T.ink}>REC</text>

      {/* prompt */}
      <text x="32" y="80" fontSize="12" fontWeight="700" fill={T.ink}>Prompt</text>
      <rect x="32" y="90" width="496" height="46" rx="10" fill={T.surface} />
      <Lines x={46} y={102} widths={[360, 250]} gap={14} h={6} fill={T.muted} />

      {/* responses */}
      {[{ x: 32, label: "Response A", sel: true }, { x: 286, label: "Response B", sel: false }].map((r) => (
        <g key={r.label}>
          <rect x={r.x} y="150" width="242" height="118" rx="10" fill={T.bg} stroke={r.sel ? T.primary : T.line} strokeWidth={r.sel ? 3 : 2} />
          <text x={r.x + 14} y="172" fontSize="12" fontWeight="700" fill={T.ink}>{r.label}</text>
          {r.sel && <g><rect x={r.x + 168} y="160" width="62" height="18" rx="9" fill={T.primary} /><text x={r.x + 199} y="173" textAnchor="middle" fontSize="10" fontWeight="700" fill={T.onPrimary}>Preferred</text></g>}
          <Lines x={r.x + 14} y={186} widths={[200, 180, 206, 150, 190, 120]} gap={12} h={5} />
        </g>
      ))}

      {/* rubric */}
      {["Accuracy", "Helpfulness", "Safety"].map((m, i) => (
        <g key={m} transform={`translate(32 ${292 + i * 30})`}>
          <text x="0" y="12" fontSize="12" fill={T.ink}>{m}</text>
          {[0, 1, 2, 3, 4].map((d) => <circle key={d} cx={120 + d * 24} cy="8" r="8" fill={d < [5, 4, 5][i] ? T.primary : T.s2} />)}
        </g>
      ))}
      <rect x="386" y="340" width="142" height="44" rx="10" fill={T.primary} />
      <text x="457" y="367" textAnchor="middle" fontSize="14" fontWeight="700" fill={T.onPrimary}>Submit</text>
      <text x="386" y="316" fontSize="11" fill={T.muted}>Guideline v3.2 · 6 min</text>

      {/* floating cards */}
      <g>
        <rect x="300" y="384" width="236" height="66" rx="14" fill={T.bg} stroke={T.line} strokeWidth="2" />
        <circle cx="332" cy="417" r="16" fill={T.accentSoft} />
        <path d="M324 417l6 6 11-12" fill="none" stroke={T.accentInk} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="358" y="411" fontSize="12" fontWeight="700" fill={T.ink}>QA check passed</text>
        <text x="358" y="430" fontSize="12" fill={T.muted}>Weekly sample · 96%</text>
      </g>
      <g>
        <rect x="0" y="392" width="200" height="58" rx="14" fill={T.bg} stroke={T.line} strokeWidth="2" />
        <circle cx="30" cy="421" r="16" fill={T.s2} />
        <circle cx="30" cy="416" r="6" fill={SKIN.b} /><path d="M19 431a11 9 0 0 1 22 0z" fill={T.primary} />
        <text x="54" y="416" fontSize="12" fontWeight="700" fill={T.ink}>Tasker T-1042</text>
        <text x="54" y="434" fontSize="11" fill={T.muted}>Verified · secure session</text>
      </g>
    </svg>
  );
}

/* ---------------- Account owners: office team ---------------- */
export function OfficeScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" className={className} role="img" aria-label="Illustration of a small office team at work: two people at desks reviewing AI-training tasks on monitors while a quality lead checks results on a tablet.">
      <clipPath id="office-clip"><rect width="560" height="420" rx="20" /></clipPath>
      <g clipPath="url(#office-clip)">
      <rect x="0" y="0" width="560" height="420" rx="20" fill={T.s2} />
      {/* window */}
      <rect x="36" y="36" width="190" height="130" rx="8" fill={T.bg} stroke={T.line} strokeWidth="4" />
      <path d="M40 162 V122 h22 V98 h18 v24 h14 V80 h24 v42 h16 V104 h20 v18 h14 V92 h22 v70Z" fill={T.primary} opacity=".25" />
      <line x1="131" y1="36" x2="131" y2="166" stroke={T.line} strokeWidth="4" />
      {/* wall board */}
      <rect x="300" y="44" width="200" height="108" rx="8" fill={T.bg} stroke={T.line} strokeWidth="2" />
      <text x="316" y="68" fontSize="12" fontWeight="700" fill={T.ink}>This week</text>
      {[38, 52, 46, 64, 58].map((h, i) => <rect key={i} x={318 + i * 32} y={140 - h} width="18" height={h} rx="4" fill={i === 3 ? T.accent : T.primary} opacity={i === 3 ? 1 : 0.8} />)}
      {/* floor */}
      <rect x="0" y="380" width="560" height="40" fill={T.line} opacity=".7" />
      {/* desk 1 */}
      <rect x="104" y="288" width="140" height="10" rx="3" fill={T.muted} />
      <rect x="112" y="298" width="8" height="82" fill={T.muted} opacity=".7" /><rect x="228" y="298" width="8" height="82" fill={T.muted} opacity=".7" />
      <Monitor x={132} y={208} />
      <SeatedPerson x={70} y={318} look={{ skin: SKIN.a, hair: "#1b1b1b", shirt: T.primary, pants: "#334155", hairStyle: "curly" }} />
      {/* desk 2 */}
      <rect x="324" y="288" width="140" height="10" rx="3" fill={T.muted} />
      <rect x="332" y="298" width="8" height="82" fill={T.muted} opacity=".7" /><rect x="448" y="298" width="8" height="82" fill={T.muted} opacity=".7" />
      <Monitor x={352} y={208} />
      <rect x="440" y="270" width="14" height="18" rx="3" fill={T.accent} />
      <SeatedPerson x={290} y={318} headset look={{ skin: SKIN.d, hair: "#6b3f1d", shirt: T.accentInk, pants: "#1e293b", hairStyle: "bun" }} />
      {/* standing QA lead */}
      <StandingPerson x={516} y={305} look={{ skin: SKIN.e, hair: "#111", shirt: "#7c3aed", pants: "#374151", hairStyle: "short" }} />
      <Plant x={26} y={350} s={0.8} />
      </g>
    </svg>
  );
}

/* ---------------- Taskers: remote, rural home workspace ---------------- */
export function RemoteScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 420" className={className} role="img" aria-label="Illustration of a tasker working from home in a wheelchair, wearing a headset, at a laptop, with green hills visible through the window.">
      <clipPath id="remote-clip"><rect width="560" height="420" rx="20" /></clipPath>
      <g clipPath="url(#remote-clip)">
      <rect x="0" y="0" width="560" height="420" rx="20" fill={T.s2} />
      {/* window with hills */}
      <rect x="300" y="40" width="220" height="150" rx="10" fill={T.bg} stroke={T.line} strokeWidth="4" />
      <clipPath id="win"><rect x="302" y="42" width="216" height="146" rx="8" /></clipPath>
      <g clipPath="url(#win)">
        <circle cx="470" cy="84" r="18" fill="#F5C451" />
        <path d="M300 160 Q360 110 420 150 T520 130 V190 H300Z" fill={T.accent} opacity=".8" />
        <path d="M300 180 Q380 140 460 172 T540 160 V190 H300Z" fill={T.accentInk} opacity=".85" />
      </g>
      <line x1="410" y1="40" x2="410" y2="190" stroke={T.line} strokeWidth="4" />
      {/* shelf */}
      <rect x="44" y="96" width="150" height="8" rx="3" fill={T.muted} />
      {[{ x: 58, h: 38, c: T.primary }, { x: 72, h: 44, c: T.accentInk }, { x: 86, h: 34, c: "#b45309" }, { x: 100, h: 40, c: T.primary }].map((b, i) => <rect key={i} x={b.x} y={96 - b.h} width="12" height={b.h} rx="2" fill={b.c} opacity=".85" />)}
      <circle cx="160" cy="80" r="14" fill={T.bg} stroke={T.line} strokeWidth="3" /><path d="M160 72v8l6 4" stroke={T.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* floor */}
      <rect x="0" y="372" width="560" height="48" fill={T.line} opacity=".7" />
      {/* desk */}
      <rect x="222" y="282" width="230" height="10" rx="3" fill={T.muted} />
      <rect x="232" y="292" width="8" height="80" fill={T.muted} opacity=".7" /><rect x="434" y="292" width="8" height="80" fill={T.muted} opacity=".7" />
      {/* laptop */}
      <rect x="250" y="206" width="112" height="72" rx="6" fill={T.ink} />
      <rect x="255" y="211" width="102" height="62" rx="3" fill={T.bg} />
      <rect x="262" y="218" width="88" height="10" rx="3" fill={T.s2} />
      <rect x="262" y="234" width="42" height="30" rx="3" fill={T.s2} /><rect x="308" y="234" width="42" height="30" rx="3" fill={T.s2} stroke={T.primary} strokeWidth="2" />
      <path d="M240 278 H372 L366 284 H246Z" fill={T.muted} />
      {/* lamp + mug */}
      <path d="M420 282 v-50 l-24 -24" stroke={T.ink} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M380 200 l26 -10 6 18 z" fill={T.primary} />
      <rect x="410" y="276" width="24" height="6" rx="3" fill={T.ink} />
      <rect x="378" y="262" width="18" height="20" rx="3" fill={T.accent} /><path d="M396 267 h5 a4 4 0 0 1 0 9 h-5" stroke={T.accent} strokeWidth="3" fill="none" />
      <WheelchairPerson x={176} y={312} headset look={{ skin: SKIN.c, hair: "#3b2a1a", shirt: T.primary, pants: "#475569", hairStyle: "long" }} />
      <Plant x={500} y={342} s={0.9} />
      </g>
    </svg>
  );
}

/* ---------------- Trust & safety: secure session diagram ---------------- */
function Node({ x, y, w, title, sub, icon }: { x: number; y: number; w: number; title: string; sub: string; icon: React.ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="92" rx="14" fill={T.bg} stroke={T.line} strokeWidth="2" />
      <g transform="translate(16 18)">{icon}</g>
      <text x="16" y="70" fontSize="14" fontWeight="700" fill={T.ink}>{title}</text>
      <text x="16" y="86" fontSize="12" fill={T.muted}>{sub}</text>
    </g>
  );
}
const PersonIcon = <g><circle cx="14" cy="12" r="8" fill={T.primary} /><path d="M0 34a14 12 0 0 1 28 0z" fill={T.primary} /></g>;
const LockIcon = <g><path d="M6 16v-5a8 8 0 0 1 16 0v5" stroke={T.primary} strokeWidth="3.5" fill="none" /><rect x="2" y="16" width="24" height="18" rx="4" fill={T.primary} /></g>;
function Blocked({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="10" cy="10" r="10" fill="none" stroke={T.danger} strokeWidth="2.5" /><line x1="3" y1="17" x2="17" y2="3" stroke={T.danger} strokeWidth="2.5" />
      <text x="26" y="14" fontSize="12" fill={T.ink}>{label}</text>
    </g>
  );
}
function Arrow({ x1, x2, y, label, dir = 1 }: { x1: number; x2: number; y: number; label: string; dir?: 1 | -1 }) {
  const tip = dir === 1 ? x2 : x1;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={T.muted} strokeWidth="2.5" />
      <path d={`M${tip} ${y} l${-8 * dir} -6 v12z`} fill={T.muted} />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" fontSize="11" fill={T.muted}>{label}</text>
    </g>
  );
}

export function SecureSessionDiagram({ className }: { className?: string }) {
  const desc = "Diagram of how a work session is protected. The account owner coordinates login via Telegram's end-to-end encrypted secret chat. Verified admins sign in to an isolated virtual machine, which is recorded and has clipboard, USB and file transfer blocked. The tasker sees only the screen of that machine and never the password. Every step is written to the audit log.";
  return (
    <>
      {/* wide layout */}
      <svg viewBox="0 0 900 330" className={`hidden md:block ${className ?? ""}`} role="img" aria-label={desc}>
        <Node x={0} y={40} w={150} title="Account owner" sub="Coordinates login" icon={PersonIcon} />
        <Arrow x1={152} x2={218} y={86} label="encrypted" />
        <Node x={220} y={40} w={150} title="Telegram Encrypted" sub="End-to-end secret chat" icon={LockIcon} />
        <Arrow x1={372} x2={426} y={86} label="logs in" />
        <g transform="translate(428 10)">
          <rect width="250" height="210" rx="16" fill={T.surface} stroke={T.primary} strokeWidth="2.5" strokeDasharray="7 5" />
          <text x="16" y="26" fontSize="14" fontWeight="700" fill={T.ink}>Isolated virtual machine</text>
          <circle cx="222" cy="21" r="5" fill={T.danger} /><text x="212" y="25" textAnchor="end" fontSize="10" fontWeight="700" fill={T.ink}>REC</text>
          <rect x="16" y="40" width="218" height="80" rx="8" fill={T.bg} stroke={T.line} strokeWidth="2" />
          <rect x="16" y="40" width="218" height="16" rx="8" fill={T.s2} />
          <rect x="28" y="66" width="92" height="42" rx="4" fill={T.s2} /><rect x="130" y="66" width="92" height="42" rx="4" fill={T.s2} stroke={T.primary} strokeWidth="2" />
          <Blocked x={16} y={134} label="No clipboard" />
          <Blocked x={134} y={134} label="No USB" />
          <Blocked x={16} y={170} label="No file transfer" />
          <Blocked x={134} y={170} label="No printing" />
        </g>
        <Arrow x1={680} x2={748} y={86} label="screen only" dir={-1} />
        <Node x={750} y={40} w={150} title="Tasker" sub="Never sees password" icon={PersonIcon} />
        <rect x="0" y="262" width="900" height="50" rx="12" fill={T.accentSoft} />
        <text x="450" y="292" textAnchor="middle" fontSize="14" fontWeight="600" fill={T.ink}>Every admin login, session start and stop is written to a tamper-evident audit log</text>
      </svg>
      {/* narrow layout */}
      <svg viewBox="0 0 340 700" className={`md:hidden ${className ?? ""}`} role="img" aria-label={desc}>
        <Node x={20} y={0} w={300} title="Account owner" sub="Coordinates login" icon={PersonIcon} />
        <line x1="170" y1="94" x2="170" y2="130" stroke={T.muted} strokeWidth="2.5" /><path d="M170 138 l-6 -9 h12z" fill={T.muted} />
        <Node x={20} y={140} w={300} title="Telegram Encrypted Chat" sub="End-to-end secret chat" icon={LockIcon} />
        <line x1="170" y1="234" x2="170" y2="270" stroke={T.muted} strokeWidth="2.5" /><path d="M170 278 l-6 -9 h12z" fill={T.muted} />
        <g transform="translate(20 280)">
          <rect width="300" height="170" rx="16" fill={T.surface} stroke={T.primary} strokeWidth="2.5" strokeDasharray="7 5" />
          <text x="16" y="28" fontSize="15" fontWeight="700" fill={T.ink}>Isolated virtual machine</text>
          <circle cx="272" cy="23" r="5" fill={T.danger} /><text x="262" y="27" textAnchor="end" fontSize="11" fontWeight="700" fill={T.ink}>REC</text>
          <Blocked x={16} y={52} label="No clipboard" /><Blocked x={160} y={52} label="No USB" />
          <Blocked x={16} y={92} label="No file transfer" /><Blocked x={160} y={92} label="No printing" />
          <text x="16" y="148" fontSize="12" fill={T.muted}>Recorded for QA and disputes</text>
        </g>
        <line x1="170" y1="460" x2="170" y2="496" stroke={T.muted} strokeWidth="2.5" /><path d="M170 452 l-6 9 h12z" fill={T.muted} />
        <Node x={20} y={500} w={300} title="Tasker" sub="Sees the screen, never the password" icon={PersonIcon} />
        <rect x="20" y="614" width="300" height="72" rx="12" fill={T.accentSoft} />
        <text x="170" y="644" textAnchor="middle" fontSize="13" fontWeight="600" fill={T.ink}>Every step is written to a</text>
        <text x="170" y="664" textAnchor="middle" fontSize="13" fontWeight="600" fill={T.ink}>tamper-evident audit log</text>
      </svg>
    </>
  );
}
