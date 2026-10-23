/* Flat-style people used by the scene illustrations.
   Coordinates are relative to the hip joint at (0,0); figures face right. */

export type Look = { skin: string; hair: string; shirt: string; pants: string; shoe?: string; hairStyle?: "short" | "bun" | "long" | "curly" };

export const SKIN = { a: "#8D5524", b: "#C68642", c: "#E0AC69", d: "#F1C27D", e: "#5C3A21" };

function Head({ look, cx, cy }: { look: Look; cx: number; cy: number }) {
  const { hair, skin, hairStyle = "short" } = look;
  return (
    <g>
      {hairStyle === "long" && <path d={`M${cx - 20},${cy - 4} q-2,26 10,34 h14 q-6,-14 -2,-30 z`} fill={hair} />}
      <circle cx={cx - 4} cy={cy - 4} r={17} fill={hair} />
      {hairStyle === "curly" && (
        <g fill={hair}>
          <circle cx={cx - 14} cy={cy - 14} r={9} /><circle cx={cx - 2} cy={cy - 20} r={9} /><circle cx={cx + 9} cy={cy - 15} r={8} /><circle cx={cx - 18} cy={cy - 2} r={8} />
        </g>
      )}
      {hairStyle === "bun" && <circle cx={cx - 17} cy={cy - 16} r={8} fill={hair} />}
      <circle cx={cx + 2} cy={cy} r={15} fill={skin} />
      <path d={`M${cx - 12},${cy - 6} q6,-14 26,-8 q-6,-9 -14,-10 q-10,0 -14,8 z`} fill={hair} />
      <circle cx={cx + 9} cy={cy - 2} r={1.6} fill="#1b1b1b" />
    </g>
  );
}

/** Seated on an office chair, arms forward to a desk at y = -30. */
export function SeatedPerson({ x, y, look, chair = "rgb(var(--ink))", headset = false }: { x: number; y: number; look: Look; chair?: string; headset?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* chair */}
      <rect x={-36} y={-72} width={10} height={80} rx={5} fill={chair} opacity={0.85} />
      <rect x={-30} y={4} width={52} height={8} rx={4} fill={chair} opacity={0.85} />
      <rect x={-5} y={12} width={6} height={40} fill={chair} opacity={0.7} />
      <rect x={-30} y={52} width={56} height={5} rx={2.5} fill={chair} opacity={0.7} />
      <circle cx={-26} cy={60} r={4} fill={chair} /><circle cx={22} cy={60} r={4} fill={chair} />
      <Body look={look} headset={headset} />
    </g>
  );
}

/** Seated in a manual wheelchair, same pose. */
export function WheelchairPerson({ x, y, look, headset = false }: { x: number; y: number; look: Look; headset?: boolean }) {
  const frame = "rgb(var(--ink))";
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-30,-66 L-30,6 L30,6" fill="none" stroke={frame} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M-30,-66 l-12,-4" stroke={frame} strokeWidth={5} strokeLinecap="round" />
      <path d="M22,8 L44,48 L60,48" fill="none" stroke={frame} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34,20 L40,58" stroke={frame} strokeWidth={3} />
      <circle cx={40} cy={62} r={6} fill="none" stroke={frame} strokeWidth={3} />
      <Body look={look} headset={headset} legs="footrest" />
      <circle cx={-8} cy={24} r={36} fill="none" stroke={frame} strokeWidth={5} />
      <circle cx={-8} cy={24} r={30} fill="none" stroke={frame} strokeWidth={1.5} opacity={0.6} />
      {[0, 45, 90, 135].map((a) => (
        <line key={a} x1={-8} y1={24} x2={-8 + 30 * Math.cos((a * Math.PI) / 180)} y2={24 + 30 * Math.sin((a * Math.PI) / 180)} stroke={frame} strokeWidth={1.2} opacity={0.5} transform={`rotate(0)`} />
      ))}
      {[0, 45, 90, 135].map((a) => (
        <line key={`b${a}`} x1={-8} y1={24} x2={-8 - 30 * Math.cos((a * Math.PI) / 180)} y2={24 - 30 * Math.sin((a * Math.PI) / 180)} stroke={frame} strokeWidth={1.2} opacity={0.5} />
      ))}
      <circle cx={-8} cy={24} r={4} fill={frame} />
    </g>
  );
}

function Body({ look, headset, legs = "floor" }: { look: Look; headset: boolean; legs?: "floor" | "footrest" }) {
  const shoe = look.shoe ?? "#1f2937";
  return (
    <g>
      {/* legs */}
      <rect x={-12} y={-8} width={58} height={16} rx={8} fill={look.pants} />
      {legs === "floor" ? (
        <>
          <rect x={34} y={0} width={14} height={52} rx={7} fill={look.pants} />
          <rect x={34} y={50} width={26} height={10} rx={5} fill={shoe} />
        </>
      ) : (
        <>
          <rect x={34} y={0} width={14} height={40} rx={7} fill={look.pants} />
          <rect x={36} y={38} width={24} height={9} rx={4.5} fill={shoe} />
        </>
      )}
      {/* torso */}
      <path d="M-16,6 L-14,-58 Q-13,-72 0,-72 L6,-72 Q20,-72 20,-58 L18,6 Z" fill={look.shirt} />
      {/* neck + head */}
      <rect x={-1} y={-82} width={10} height={14} rx={3} fill={look.skin} />
      <Head look={look} cx={4} cy={-96} />
      {headset && (
        <g fill="none" stroke="rgb(var(--ink))" strokeWidth={3} strokeLinecap="round">
          <path d="M-12,-100 a17 17 0 0 1 30,-8" />
          <rect x={-10} y={-100} width={8} height={12} rx={3} fill="rgb(var(--ink))" />
        </g>
      )}
      {/* arm */}
      <path d="M8,-60 L24,-34" stroke={look.shirt} strokeWidth={13} strokeLinecap="round" />
      <path d="M24,-34 L56,-38" stroke={look.skin} strokeWidth={10} strokeLinecap="round" />
    </g>
  );
}

/** Standing figure holding a tablet, facing left. */
export function StandingPerson({ x, y, look }: { x: number; y: number; look: Look }) {
  const shoe = look.shoe ?? "#1f2937";
  return (
    <g transform={`translate(${x} ${y}) scale(-1 1)`}>
      <rect x={-6} y={-8} width={14} height={78} rx={7} fill={look.pants} />
      <rect x={8} y={-8} width={14} height={78} rx={7} fill={look.pants} />
      <rect x={-6} y={66} width={22} height={9} rx={4.5} fill={shoe} />
      <rect x={8} y={66} width={24} height={9} rx={4.5} fill={shoe} />
      <path d="M-10,0 L-10,-58 Q-9,-72 4,-72 L12,-72 Q26,-72 26,-58 L26,0 Z" fill={look.shirt} />
      <rect x={3} y={-82} width={10} height={14} rx={3} fill={look.skin} />
      <Head look={look} cx={8} cy={-96} />
      <path d="M16,-60 L24,-30" stroke={look.shirt} strokeWidth={12} strokeLinecap="round" />
      <path d="M24,-30 L40,-42" stroke={look.skin} strokeWidth={9} strokeLinecap="round" />
      <rect x={34} y={-66} width={8} height={40} rx={2} fill="rgb(var(--ink))" transform="rotate(12 38 -46)" />
    </g>
  );
}
