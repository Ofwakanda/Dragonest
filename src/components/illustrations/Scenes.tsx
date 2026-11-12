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
function CleanNode({ x, y, w, title, sub, icon }: { x: number; y: number; w: number; title: string; sub: string; icon: React.ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="88" rx="8" fill={T.bg} stroke={T.line} strokeWidth="1" />
      <g transform="translate(16 16)">{icon}</g>
      <text x="16" y="62" fontSize="13" fontWeight="600" fill={T.ink}>{title}</text>
      <text x="16" y="78" fontSize="11" fill={T.muted}>{sub}</text>
    </g>
  );
}

function EngravedBlockedTile({ x, y, w = 125, h = 32, label }: { x: number; y: number; w?: number; h?: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="4" fill={T.s2} stroke={T.line} strokeWidth="1" />
      {/* Engraved plain blocked ring symbol */}
      <circle cx="16" cy={h / 2} r="6.5" fill="none" stroke={T.muted} strokeWidth="1.25" />
      <line x1="11.5" y1={h / 2 + 4.5} x2="20.5" y2={h / 2 - 4.5} stroke={T.muted} strokeWidth="1.25" />
      <text x="28" y={h / 2 + 3.5} fontSize="10.5" fontFamily="monospace" fill={T.ink}>{label}</text>
    </g>
  );
}

function FlowConnector({ x1, x2, y, label, reverse = false }: { x1: number; x2: number; y: number; label: string; reverse?: boolean }) {
  const tip = reverse ? x1 : x2;
  const dir = reverse ? -1 : 1;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={T.muted} strokeWidth="1" strokeDasharray="3 3" />
      <path d={`M${tip} ${y} l${-6 * dir} -4 v8z`} fill={T.muted} />
      <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" fontSize="9.5" fontFamily="monospace" fill={T.muted}>{label}</text>
    </g>
  );
}

export function SecureSessionDiagram({ className }: { className?: string }) {
  const desc = "Layered virtual isolation diagram. Account owner coordinates credentials via Telegram encrypted channel. Isolated VM runs with clipboard, USB, file transfer and printing disabled. Single lime dot indicates encrypted active core. Tasker views pixel stream only and never touches passwords.";

  return (
    <div className="w-full select-none">
      {/* Desktop wide diagram */}
      <svg viewBox="0 0 920 340" className={`hidden md:block w-full ${className ?? ""}`} role="img" aria-label={desc}>
        {/* Node 1: Account Owner */}
        <CleanNode
          x={10}
          y={40}
          w={160}
          title="Account Owner"
          sub="Retains 100% legal control"
          icon={
            <g>
              <rect width="24" height="24" rx="4" fill={T.s2} stroke={T.line} strokeWidth="1" />
              <circle cx="12" cy="9.5" r="4" fill={T.muted} />
              <path d="M5 20a7 6 0 0 1 14 0z" fill={T.muted} />
            </g>
          }
        />

        <FlowConnector x1={172} x2={238} y={84} label="E2EE SECRET CHAT" />

        {/* Node 2: Authentication Handshake */}
        <CleanNode
          x={240}
          y={40}
          w={160}
          title="Admin Gate"
          sub="Encrypted Credential Injection"
          icon={
            <g>
              <rect width="24" height="24" rx="4" fill={T.s2} stroke={T.line} strokeWidth="1" />
              <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke={T.muted} strokeWidth="2" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" fill={T.muted} />
            </g>
          }
        />

        <FlowConnector x1={402} x2={458} y={84} label="2FA VERIFIED" />

        {/* Centerpiece: Layered Virtual Isolation Chamber (The Sandbox) */}
        <g transform="translate(460 16)">
          {/* Outer outline enclosure */}
          <rect width="280" height="236" rx="10" fill={T.surface} stroke={T.line} strokeWidth="1" />
          
          {/* Top header bar */}
          <rect width="280" height="32" rx="10" fill={T.s2} />
          <path d="M0 32 h280" stroke={T.line} strokeWidth="1" />
          <text x="14" y="20" fontSize="11" fontFamily="monospace" fontWeight="600" fill={T.ink}>
            ISOLATED SANDBOX // VM-8491
          </text>
          
          {/* Active session lime indicator dot */}
          <circle cx="260" cy="16" r="4" fill="#C6FF3D" />

          {/* Inner frosted VM frame */}
          <rect x="14" y="44" width="252" height="96" rx="6" fill={T.bg} stroke={T.line} strokeWidth="1" />
          
          {/* Terminal prompt bars */}
          <rect x="26" y="56" width="120" height="8" rx="2" fill={T.line} />
          <rect x="26" y="70" width="228" height="6" rx="2" fill={T.s2} />
          <rect x="26" y="82" width="180" height="6" rx="2" fill={T.s2} />
          <rect x="26" y="94" width="200" height="6" rx="2" fill={T.s2} />
          
          <g transform="translate(26 112)">
            <rect width="76" height="16" rx="3" fill={T.s2} />
            <text x="38" y="11.5" textAnchor="middle" fontSize="9" fontFamily="monospace" fill={T.muted}>
              REC · AUDITED
            </text>
          </g>

          {/* 4 Engraved Blocked Base Tiles */}
          <EngravedBlockedTile x={14} y={152} w={120} label="NO CLIPBOARD" />
          <EngravedBlockedTile x={146} y={152} w={120} label="NO STORAGE / USB" />
          <EngravedBlockedTile x={14} y={192} w={120} label="NO FILE TRANSFER" />
          <EngravedBlockedTile x={146} y={192} w={120} label="NO PRINTING" />
        </g>

        <FlowConnector x1={742} x2={788} y={84} label="PIXEL STREAM" reverse />

        {/* Node 3: Specialist Tasker */}
        <CleanNode
          x={790}
          y={40}
          w={120}
          title="Tasker"
          sub="No password access"
          icon={
            <g>
              <rect width="24" height="24" rx="4" fill={T.s2} stroke={T.line} strokeWidth="1" />
              <rect x="4" y="5" width="16" height="11" rx="2" stroke={T.muted} strokeWidth="1.5" fill="none" />
              <line x1="8" y1="19" x2="16" y2="19" stroke={T.muted} strokeWidth="1.5" />
            </g>
          }
        />

        {/* Base Audit Footer Trail */}
        <rect x="10" y="274" width="900" height="44" rx="6" fill={T.s2} stroke={T.line} strokeWidth="1" />
        <g transform="translate(24 290)">
          <circle cx="6" cy="6" r="3" fill="#C6FF3D" />
          <text x="18" y="9.5" fontSize="11" fontFamily="monospace" fill={T.ink}>
            TAMPER-EVIDENT AUDIT TRAIL // ALL ACCESS EVENTS DIGITALLY SIGNED &amp; EXPORTABLE FOR 24 MONTHS
          </text>
        </g>
      </svg>

      {/* Mobile stacked diagram */}
      <svg viewBox="0 0 340 560" className={`md:hidden w-full ${className ?? ""}`} role="img" aria-label={desc}>
        <CleanNode x={20} y={10} w={300} title="Account Owner" sub="Retains 100% legal ownership" icon={<circle cx="12" cy="12" r="6" fill={T.muted} />} />
        
        <line x1="170" y1="100" x2="170" y2="136" stroke={T.muted} strokeWidth="1" strokeDasharray="3 3" />
        <path d="M170 140 l-4 -6 h8z" fill={T.muted} />
        <text x="178" y="122" fontSize="9" fontFamily="monospace" fill={T.muted}>ENCRYPTED HANDSHAKE</text>

        <CleanNode x={20} y={144} w={300} title="Admin Authentication Gate" sub="Credential injected to sandbox" icon={<rect x="6" y="6" width="12" height="12" rx="2" fill={T.muted} />} />

        <line x1="170" y1="234" x2="170" y2="268" stroke={T.muted} strokeWidth="1" strokeDasharray="3 3" />
        <path d="M170 272 l-4 -6 h8z" fill={T.muted} />

        {/* Sandbox */}
        <g transform="translate(20 276)">
          <rect width="300" height="136" rx="8" fill={T.surface} stroke={T.line} strokeWidth="1" />
          <rect width="300" height="26" rx="8" fill={T.s2} />
          <path d="M0 26 h300" stroke={T.line} strokeWidth="1" />
          <text x="12" y="17" fontSize="10" fontFamily="monospace" fontWeight="600" fill={T.ink}>
            LAYERED ISOLATION // VM CORE
          </text>
          <circle cx="284" cy="13" r="3.5" fill="#C6FF3D" />

          <EngravedBlockedTile x={12} y={38} w={132} label="NO CLIPBOARD" />
          <EngravedBlockedTile x={156} y={38} w={132} label="NO USB / STORAGE" />
          <EngravedBlockedTile x={12} y={78} w={132} label="NO FILE TRANSFER" />
          <EngravedBlockedTile x={156} y={78} w={132} label="NO PRINTING" />
          <text x="12" y="124" fontSize="9.5" fontFamily="monospace" fill={T.muted}>
            Display-only pixel stream. Recorded session.
          </text>
        </g>

        <line x1="170" y1="414" x2="170" y2="444" stroke={T.muted} strokeWidth="1" strokeDasharray="3 3" />
        <path d="M170 412 l-4 6 h8z" fill={T.muted} />

        <CleanNode x={20} y={448} w={300} title="Specialist Tasker" sub="Interacts with screen · never credentials" icon={<rect x="6" y="6" width="12" height="12" rx="2" fill={T.muted} />} />
      </svg>
    </div>
  );
}
