import React from 'react';

/**
 * Intricate Baroque / Vintage Bond Corner Ornament
 */
export const CornerOrnament: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer right-angle frame lines */}
    <path
      d="M4 116V14C4 8.477 8.477 4 14 4H116"
      stroke="#8F6F2E"
      strokeWidth="2"
    />
    <path
      d="M10 116V18C10 13.582 13.582 10 18 10H116"
      stroke="#B39046"
      strokeWidth="1"
    />
    {/* Corner acanthus & geometric medallion */}
    <rect x="14" y="14" width="22" height="22" stroke="#8F6F2E" strokeWidth="1.2" fill="#FBF8F1" />
    <rect x="18" y="18" width="14" height="14" stroke="#B39046" strokeWidth="0.8" />
    <circle cx="25" cy="25" r="4" fill="#8F6F2E" />
    <circle cx="25" cy="25" r="2" fill="#FBF8F1" />

    {/* Scrollwork along top axis */}
    <path
      d="M36 16C48 16 52 26 64 26C72 26 76 18 84 18C90 18 94 22 98 22"
      stroke="#8F6F2E"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M36 22C44 22 48 32 58 32C65 32 68 25 74 25"
      stroke="#B39046"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <circle cx="84" cy="23" r="1.8" fill="#8F6F2E" />
    <circle cx="104" cy="16" r="1.5" fill="#8F6F2E" />

    {/* Scrollwork along vertical left axis */}
    <path
      d="M16 36C16 48 26 52 26 64C26 72 18 76 18 84C18 90 22 94 22 98"
      stroke="#8F6F2E"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M22 36C22 44 32 48 32 58C32 65 25 68 25 74"
      stroke="#B39046"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <circle cx="23" cy="84" r="1.8" fill="#8F6F2E" />
    <circle cx="16" cy="104" r="1.5" fill="#8F6F2E" />

    {/* Diagonal inner flourish */}
    <path
      d="M36 36L54 54M36 42C42 42 46 46 46 52M42 36C42 42 46 46 52 46"
      stroke="#8F6F2E"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <polygon points="56,56 51,54 54,51" fill="#8F6F2E" />
  </svg>
);

/**
 * Top Crest of the International Larping Certification Board
 */
export const BoardCrest: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left & Right Horizontal Filigree Wings */}
    <path d="M8 42H54" stroke="#8F6F2E" strokeWidth="1.2" />
    <path d="M18 46H54" stroke="#B39046" strokeWidth="0.8" />
    <circle cx="8" cy="42" r="2" fill="#8F6F2E" />
    <polygon points="34,38 38,42 34,46 30,42" fill="#B39046" />

    <path d="M126 42H172" stroke="#8F6F2E" strokeWidth="1.2" />
    <path d="M126 46H162" stroke="#B39046" strokeWidth="0.8" />
    <circle cx="172" cy="42" r="2" fill="#8F6F2E" />
    <polygon points="146,38 150,42 146,46 142,42" fill="#B39046" />

    {/* Laurel Wreath Left */}
    <path
      d="M66 64C54 56 50 40 56 24C59 17 65 12 72 9"
      stroke="#8F6F2E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <ellipse cx="55" cy="46" rx="4.5" ry="2" transform="rotate(-50 55 46)" fill="#B39046" />
    <ellipse cx="53" cy="36" rx="4.5" ry="2" transform="rotate(-30 53 36)" fill="#8F6F2E" />
    <ellipse cx="56" cy="26" rx="4.5" ry="2" transform="rotate(-10 56 26)" fill="#B39046" />
    <ellipse cx="62" cy="17" rx="4.5" ry="2" transform="rotate(15 62 17)" fill="#8F6F2E" />
    <ellipse cx="69" cy="11" rx="4" ry="1.8" transform="rotate(35 69 11)" fill="#B39046" />

    {/* Laurel Wreath Right */}
    <path
      d="M114 64C126 56 130 40 124 24C121 17 115 12 108 9"
      stroke="#8F6F2E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <ellipse cx="125" cy="46" rx="4.5" ry="2" transform="rotate(50 125 46)" fill="#B39046" />
    <ellipse cx="127" cy="36" rx="4.5" ry="2" transform="rotate(30 127 36)" fill="#8F6F2E" />
    <ellipse cx="124" cy="26" rx="4.5" ry="2" transform="rotate(10 124 26)" fill="#B39046" />
    <ellipse cx="118" cy="17" rx="4.5" ry="2" transform="rotate(-15 118 17)" fill="#8F6F2E" />
    <ellipse cx="111" cy="11" rx="4" ry="1.8" transform="rotate(-35 111 11)" fill="#B39046" />

    {/* Ribbon Tie at Base */}
    <path d="M64 62C78 68 102 68 116 62" stroke="#8F6F2E" strokeWidth="1.4" />
    <path d="M90 66L82 73M90 66L98 73" stroke="#8F6F2E" strokeWidth="1.4" strokeLinecap="round" />

    {/* Central Shield / Celestial Sphere with Basketball Seam */}
    <circle cx="90" cy="38" r="20" fill="#F6F0E0" stroke="#8F6F2E" strokeWidth="1.8" />
    <circle cx="90" cy="38" r="17" stroke="#B39046" strokeWidth="0.8" strokeDasharray="2 2" />
    {/* Basketball / Globe Seams */}
    <path d="M70 38H110" stroke="#8F6F2E" strokeWidth="1.1" />
    <path d="M90 18V58" stroke="#8F6F2E" strokeWidth="1.1" />
    <path d="M76 24C84 31 84 45 76 52" stroke="#8F6F2E" strokeWidth="1.1" />
    <path d="M104 24C96 31 96 45 104 52" stroke="#8F6F2E" strokeWidth="1.1" />

    {/* Tiny Crown / Star above Shield */}
    <polygon points="90,4 92,9 97,9 93,12 94.5,17 90,14 85.5,17 87,12 83,9 88,9" fill="#8F6F2E" />
  </svg>
);

/**
 * Official Seal saying "CERTIFIED INSANE"
 */
export const OfficialSeal: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Generate 36 serrated seal points
  const points: string[] = [];
  const totalTeeth = 40;
  const cx = 100;
  const cy = 100;
  for (let i = 0; i < totalTeeth * 2; i++) {
    const r = i % 2 === 0 ? 86 : 79;
    const angle = (i * Math.PI) / totalTeeth;
    const x = (cx + r * Math.cos(angle)).toFixed(2);
    const y = (cy + r * Math.sin(angle)).toFixed(2);
    points.push(`${x},${y}`);
  }

  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="goldFoilGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F9ECC7" />
          <stop offset="40%" stopColor="#D8B86A" />
          <stop offset="78%" stopColor="#9B7832" />
          <stop offset="100%" stopColor="#6E521C" />
        </radialGradient>
        <linearGradient id="sealInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B89446" />
          <stop offset="50%" stopColor="#EBD394" />
          <stop offset="100%" stopColor="#7D5E22" />
        </linearGradient>
        <path id="sealTopArc" d="M 38,100 A 62,62 0 1,1 162,100" />
        <path id="sealBottomArc" d="M 162,100 A 62,62 0 1,1 38,100" />
      </defs>

      {/* Hanging Ribbons at Bottom */}
      <path
        d="M72 162L56 212L75 202L86 216L94 168"
        fill="#7B5D22"
        stroke="#5A4214"
        strokeWidth="1"
      />
      <path
        d="M128 162L144 212L125 202L114 216L106 168"
        fill="#8F6F2E"
        stroke="#5A4214"
        strokeWidth="1"
      />

      {/* Serrated Metallic Gold Foil Base */}
      <polygon
        points={points.join(' ')}
        fill="url(#goldFoilGrad)"
        stroke="#6B511E"
        strokeWidth="1.5"
      />

      {/* Outer & Inner Embossed Rings */}
      <circle cx="100" cy="100" r="73" fill="url(#sealInnerGrad)" stroke="#5A4214" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="69" fill="#F9F2DF" stroke="#8F6F2E" strokeWidth="1" />
      <circle cx="100" cy="100" r="51" fill="url(#goldFoilGrad)" stroke="#6B511E" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="47" fill="none" stroke="#FFF8E7" strokeWidth="0.8" strokeDasharray="3 2" />

      {/* Circular Typography */}
      <text
        fill="#4A3610"
        fontSize="10.5"
        fontWeight="800"
        fontFamily="Cinzel, Georgia, serif"
        letterSpacing="2.2"
      >
        <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
          ★ CERTIFIED INSANE ★
        </textPath>
      </text>

      <text
        fill="#5A4214"
        fontSize="8.5"
        fontWeight="700"
        fontFamily="Cinzel, Georgia, serif"
        letterSpacing="1.8"
      >
        <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
          DELUSION GRADE • A+
        </textPath>
      </text>

      {/* Center Stamp Emblem */}
      <g transform="translate(100, 100)">
        {/* Starburst lines */}
        <path
          d="M-34 0H34M0 -34V34M-24 -24L24 24M-24 24L24 -24"
          stroke="#7D5E22"
          strokeWidth="0.7"
          opacity="0.45"
        />
        <rect
          x="-40"
          y="-13"
          width="80"
          height="26"
          rx="2"
          fill="#231C12"
          stroke="#F9ECC7"
          strokeWidth="1.2"
        />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fill="#F5DF9E"
          fontSize="8.5"
          fontWeight="800"
          fontFamily="Cinzel, Georgia, serif"
          letterSpacing="1.4"
        >
          CERTIFIED
        </text>
        <text
          x="0"
          y="9"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="900"
          fontFamily="Cinzel, Georgia, serif"
          letterSpacing="2"
        >
          INSANE
        </text>
      </g>
    </svg>
  );
};

/**
 * BASKETBALL THROWN FROM THE MOON MEME — Celestial Vintage Engraving
 * Features:
 * - Cratered Moon at top-left/origin
 * - Exaggerated orbital parabolic trajectory toward Earth
 * - Detailed foreground Basketball with dramatic motion trails & shockwave rings
 * - Small Earth illustration at target destination
 */
export const LunarBasketballEngraving: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 380 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <radialGradient id="moonGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FBF8F1" />
        <stop offset="65%" stopColor="#E5D8B9" />
        <stop offset="100%" stopColor="#B89B5E" />
      </radialGradient>
      <radialGradient id="bballGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#F7E7C4" />
        <stop offset="45%" stopColor="#D6B060" />
        <stop offset="85%" stopColor="#9B752B" />
        <stop offset="100%" stopColor="#634814" />
      </radialGradient>
      <radialGradient id="earthGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FAF5E8" />
        <stop offset="60%" stopColor="#D9C79E" />
        <stop offset="100%" stopColor="#8F6F2E" />
      </radialGradient>
    </defs>

    {/* Subtle Engraving Coordinate Grid */}
    <g opacity="0.28" stroke="#8F6F2E" strokeWidth="0.6" strokeDasharray="2 3">
      <line x1="20" y1="40" x2="360" y2="40" />
      <line x1="20" y1="115" x2="360" y2="115" />
      <line x1="20" y1="190" x2="360" y2="190" />
      <line x1="70" y1="15" x2="70" y2="230" />
      <line x1="200" y1="15" x2="200" y2="230" />
      <line x1="320" y1="15" x2="320" y2="230" />
    </g>

    {/* Constellation / Astrometry Star Marks */}
    <g fill="#8F6F2E" opacity="0.65">
      <path d="M150 28L152 33L157 35L152 37L150 42L148 37L143 35L148 33Z" />
      <path d="M295 45L296.5 49L300.5 50.5L296.5 52L295 56L293.5 52L289.5 50.5L293.5 49Z" />
      <path d="M48 160L49.5 164L53.5 165.5L49.5 167L48 171L46.5 167L42.5 165.5L46.5 164Z" />
      <circle cx="115" cy="24" r="1.3" />
      <circle cx="245" cy="30" r="1.5" />
      <circle cx="345" cy="95" r="1.2" />
      <circle cx="95" cy="195" r="1.3" />
      <circle cx="185" cy="215" r="1.1" />
    </g>

    {/* ================= 1. THE MOON (ORIGIN) ================= */}
    <g transform="translate(56, 56)">
      {/* Lunar Halo */}
      <circle cx="0" cy="0" r="36" stroke="#B39046" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="0" cy="0" r="29" fill="url(#moonGrad)" stroke="#6B511E" strokeWidth="1.5" />
      {/* Engraving hatching & craters on Moon */}
      <ellipse cx="-9" cy="-8" rx="6" ry="4.5" transform="rotate(-20 -9 -8)" stroke="#6B511E" strokeWidth="1" fill="#DFC99B" />
      <ellipse cx="8" cy="-12" rx="4" ry="3" transform="rotate(15 8 -12)" stroke="#6B511E" strokeWidth="0.9" fill="#E4D2AA" />
      <ellipse cx="-4" cy="11" rx="7.5" ry="5" transform="rotate(10 -4 11)" stroke="#6B511E" strokeWidth="1" fill="#D8C08E" />
      <ellipse cx="12" cy="6" rx="4.5" ry="3.5" stroke="#6B511E" strokeWidth="0.9" fill="#DEC898" />
      <circle cx="-16" cy="4" r="2.5" stroke="#6B511E" strokeWidth="0.8" />
      {/* Tiny silhouette of shooter launching from lunar surface */}
      <path d="M18 -18L22 -24M22 -24L26 -20M22 -24L20 -29" stroke="#4A3610" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="20" cy="-31" r="1.8" fill="#4A3610" />
      {/* Launch burst on Moon */}
      <path d="M25 -26L33 -32M27 -22L36 -24M23 -29L28 -37" stroke="#8F6F2E" strokeWidth="1" strokeLinecap="round" />
      <text
        x="-28"
        y="42"
        fill="#5A4214"
        fontSize="6.5"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
        letterSpacing="0.8"
      >
        ORIGIN: LUNA (384,400 KM)
      </text>
    </g>

    {/* ================= 2. ORBITAL TRAJECTORY & MOTION TRAILS ================= */}
    {/* High-arc orbital path from Moon through the giant foreground Basketball to Earth */}
    <path
      d="M 80 32 C 135 -5, 185 35, 212 95"
      stroke="#6B511E"
      strokeWidth="1.8"
      strokeDasharray="5 3"
      strokeLinecap="round"
    />
    <path
      d="M 78 36 C 128 8, 172 45, 198 102"
      stroke="#B39046"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M 84 28 C 142 -12, 192 25, 224 86"
      stroke="#B39046"
      strokeWidth="0.9"
      strokeDasharray="2 4"
    />

    {/* Forward Trajectory from Basketball into Earth's hoop/atmosphere */}
    <path
      d="M 244 134 C 272 162, 298 178, 322 184"
      stroke="#6B511E"
      strokeWidth="2"
      strokeDasharray="4 3"
    />
    <polygon points="325,185 317,181 319,188" fill="#6B511E" />

    {/* Speed Lines & Re-entry Shockwave Cones around Basketball */}
    <path d="M135 45L178 78" stroke="#8F6F2E" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M122 62L168 94" stroke="#8F6F2E" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M148 36L190 66" stroke="#B39046" strokeWidth="1" strokeLinecap="round" />
    <path d="M138 88L170 110" stroke="#B39046" strokeWidth="0.9" strokeLinecap="round" />

    {/* Supersonic Mach Ring */}
    <ellipse
      cx="196"
      cy="88"
      rx="14"
      ry="36"
      transform="rotate(42 196 88)"
      stroke="#8F6F2E"
      strokeWidth="1"
      strokeDasharray="3 2"
    />

    {/* ================= 3. EXAGGERATED PERSPECTIVE BASKETBALL ================= */}
    <g transform="translate(216, 112)">
      {/* Outer Aura Ring */}
      <circle cx="0" cy="0" r="46" stroke="#B39046" strokeWidth="0.9" strokeDasharray="2 3" />
      <circle cx="0" cy="0" r="41" stroke="#8F6F2E" strokeWidth="1.2" opacity="0.6" />

      {/* Main Basketball Sphere (Comically large vs Moon & Earth) */}
      <circle cx="0" cy="0" r="36" fill="url(#bballGrad)" stroke="#3D2B0B" strokeWidth="2.2" />

      {/* Classic Basketball Ribs / Seams in Perspective */}
      {/* Equator seam */}
      <path d="M-35 -6C-12 10 14 10 35 -6" stroke="#3D2B0B" strokeWidth="2" strokeLinecap="round" />
      {/* Vertical meridian seam */}
      <path d="M-6 -35C10 -12 10 14 -6 35" stroke="#3D2B0B" strokeWidth="2" strokeLinecap="round" />
      {/* Left horseshoe seam */}
      <path d="M-27 -23C-8 -10 -8 14 -25 26" stroke="#3D2B0B" strokeWidth="1.8" strokeLinecap="round" />
      {/* Right horseshoe seam */}
      <path d="M24 -26C10 -8 10 16 27 23" stroke="#3D2B0B" strokeWidth="1.8" strokeLinecap="round" />

      {/* Vintage Engraving Stipple / Shading Lines on Basketball */}
      <path d="M-28 12L-18 22M-22 18L-12 28M-14 24L-4 32" stroke="#4A3610" strokeWidth="0.9" opacity="0.55" />
      <path d="M12 18L22 26M18 12L28 20" stroke="#4A3610" strokeWidth="0.9" opacity="0.55" />
    </g>

    {/* ================= 4. SMALL EARTH (TARGET) ================= */}
    <g transform="translate(338, 190)">
      {/* Orbital Ring around Earth */}
      <ellipse
        cx="0"
        cy="0"
        rx="28"
        ry="10"
        transform="rotate(-18)"
        stroke="#8F6F2E"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      {/* Miniature Earth Globe */}
      <circle cx="0" cy="0" r="17" fill="url(#earthGrad)" stroke="#4A3610" strokeWidth="1.5" />
      {/* Continents & Latitude/Longitude */}
      <path
        d="M-8 -10C-3 -8 -2 -3 -6 1C-9 4 -5 9 -1 12"
        stroke="#5A4214"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M5 -7C9 -5 11 0 8 5C6 8 9 11 11 12"
        stroke="#5A4214"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="0" cy="0" rx="17" ry="6" stroke="#6B511E" strokeWidth="0.6" opacity="0.6" />
      <line x1="0" y1="-17" x2="0" y2="17" stroke="#6B511E" strokeWidth="0.6" opacity="0.6" />

      <text
        x="-42"
        y="29"
        fill="#5A4214"
        fontSize="6.5"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
        letterSpacing="0.8"
      >
        TARGET: TERRA
      </text>
    </g>

    {/* Engraving Plate Caption */}
    <g>
      <rect x="78" y="226" width="212" height="15" rx="2" fill="#F6F0E0" stroke="#B39046" strokeWidth="0.8" />
      <text
        x="184"
        y="236"
        textAnchor="middle"
        fill="#4A3610"
        fontSize="6.8"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
        letterSpacing="1.1"
      >
        FIG IV. LUNAR JUMPER TELEMETRY • RANGE: ∞
      </text>
    </g>
  </svg>
);

/**
 * Calligraphic Fountain-Pen Signature of Board Chair
 */
export const OfficialSignature: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 260 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 48C32 24 48 10 54 16C60 22 40 48 46 52C52 56 72 26 80 26C86 26 76 46 84 46C90 46 98 34 104 34C109 34 106 45 114 45C122 45 136 18 144 16C150 14 136 48 145 48C152 48 162 32 169 34C175 36 170 46 178 45C186 44 198 28 206 30C214 32 208 44 218 42C228 40 238 30 246 28"
      stroke="#1F1A14"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 58C95 46 168 44 236 50"
      stroke="#8F6F2E"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M128 22L156 14"
      stroke="#1F1A14"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);
