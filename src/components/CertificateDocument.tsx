import React from 'react';
import { motion } from 'framer-motion';
import {
  BoardCrest,
  CornerOrnament,
  LunarBasketballEngraving,
  OfficialSeal,
  OfficialSignature,
} from './CertificateArtwork';

export interface CertificateData {
  recipientName: string;
  certificateId: string;
  issueDate: string;
  classification: string;
}

interface CertificateDocumentProps {
  data: CertificateData;
  stampKey?: number;
  isExporting?: boolean;
}

export const CERTIFICATE_WIDTH = 1123; // A4 Landscape @ 96 DPI (297mm)
export const CERTIFICATE_HEIGHT = 794; // A4 Landscape @ 96 DPI (210mm)

export const CertificateDocument = React.forwardRef<HTMLDivElement, CertificateDocumentProps>(
  ({ data, stampKey = 0, isExporting = false }, ref) => {
    const trimmedName = data.recipientName.trim();
    const displayName = trimmedName.length > 0 ? trimmedName : 'YOUR NAME HERE';
    const isPlaceholder = trimmedName.length === 0;

    // Dynamic typography sizing to gracefully support short, medium, and very long names
    const getNameFontSize = (len: number): string => {
      if (len <= 16) return '48px';
      if (len <= 24) return '40px';
      if (len <= 34) return '32px';
      if (len <= 48) return '25px';
      return '20px';
    };

    const nameFontSize = getNameFontSize(displayName.length);

    return (
      <div
        ref={ref}
        style={{
          width: `${CERTIFICATE_WIDTH}px`,
          height: `${CERTIFICATE_HEIGHT}px`,
          background:
            'radial-gradient(ellipse at 50% 45%, #FCF9F2 0%, #F6EFE0 58%, #EBE0C8 100%)',
          color: '#1C1610',
        }}
        className="relative overflow-hidden select-none shadow-2xl box-border p-[28px]"
      >
        {/* Subtle Parchment Grain / Fine Paper Fibre Pattern (Pure Inline SVG) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.32]"
           xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="parchmentWeave" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M0 12H24M12 0V24"
                stroke="#C8A962"
                strokeWidth="0.25"
                strokeOpacity="0.35"
              />
              <circle cx="6" cy="6" r="0.4" fill="#8F6F2E" fillOpacity="0.25" />
              <circle cx="18" cy="18" r="0.4" fill="#8F6F2E" fillOpacity="0.25" />
            </pattern>
            <radialGradient id="centerGlow" cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D5C195" stopOpacity="0.12" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#parchmentWeave)" />
          <rect width="100%" height="100%" fill="url(#centerGlow)" />
        </svg>

        {/* Central Guilloché Security Rosette Watermark */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.045]"
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="#6B511E" strokeWidth="1" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="#6B511E" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#6B511E" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="#6B511E" strokeWidth="0.8" />
          <path
            d="M200 20 L235 165 L380 200 L235 235 L200 380 L165 235 L20 200 L165 165 Z"
            fill="none"
            stroke="#6B511E"
            strokeWidth="1.2"
          />
          <path
            d="M73 73 L175 155 L327 73 L245 175 L327 327 L225 245 L73 327 L155 225 Z"
            fill="none"
            stroke="#6B511E"
            strokeWidth="0.9"
          />
        </svg>

        {/* ================= DOUBLE-LINE ORNAMENTAL BORDER ================= */}
        <div className="relative w-full h-full border-[2.5px] border-[#8F6F2E] p-[6px] box-border">
          {/* Second Inner Gold Line */}
          <div className="relative w-full h-full border border-[#B39046] p-[10px] box-border">
            {/* Third Hairline Architectural Frame */}
            <div className="relative w-full h-full border-[0.75px] border-[#8F6F2E]/50 flex flex-col justify-between px-[54px] pt-[22px] pb-[16px] box-border">
              
              {/* Four Symmetrical Ornamental Corners */}
              <CornerOrnament className="pointer-events-none absolute -top-[11px] -left-[11px] w-[108px] h-[108px]" />
              <CornerOrnament className="pointer-events-none absolute -top-[11px] -right-[11px] w-[108px] h-[108px] scale-x-[-1]" />
              <CornerOrnament className="pointer-events-none absolute -bottom-[11px] -left-[11px] w-[108px] h-[108px] scale-y-[-1]" />
              <CornerOrnament className="pointer-events-none absolute -bottom-[11px] -right-[11px] w-[108px] h-[108px] scale-x-[-1] scale-y-[-1]" />

              {/* Side Filigree Midpoint Accents */}
              <div className="pointer-events-none absolute top-1/2 -left-[7px] -translate-y-1/2 w-[12px] h-[44px] bg-[#FAF6EE] border border-[#8F6F2E] flex items-center justify-center">
                <div className="w-[4px] h-[28px] bg-[#B39046]" />
              </div>
              <div className="pointer-events-none absolute top-1/2 -right-[7px] -translate-y-1/2 w-[12px] h-[44px] bg-[#FAF6EE] border border-[#8F6F2E] flex items-center justify-center">
                <div className="w-[4px] h-[28px] bg-[#B39046]" />
              </div>

              {/* ================= BASKETBALL THROWN FROM THE MOON MEME (DECORATIVE PLATE) ================= */}
              <div
                className="pointer-events-none absolute right-[24px] bottom-[56px] w-[315px] h-[208px] opacity-[0.88] z-0"
                title="Celestial Telemetry: Basketball Thrown From The Moon"
              >
                <LunarBasketballEngraving className="w-full h-full" />
              </div>

              {/* Subtle Balanced Left Archival Stamp */}
              <div className="pointer-events-none absolute left-[38px] top-[156px] opacity-[0.22] z-0">
                <div className="border border-[#6B511E] px-2.5 py-1.5 text-center">
                  <div className="font-mono text-[7.5px] tracking-[0.22em] text-[#4A3610] uppercase font-semibold">
                    FORM 99-DELUSION • REV. IV
                  </div>
                  <div className="font-mono text-[6.5px] tracking-[0.18em] text-[#6B511E] uppercase mt-0.5">
                    LUNAR BALLISTICS VERIFIED
                  </div>
                </div>
              </div>

              {/* ================= 1. TOP INSTITUTIONAL HEADER ================= */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <BoardCrest className="w-[148px] h-[62px] -mb-1" />

                <div
                  style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                  className="text-[13px] font-bold tracking-[0.28em] text-[#4A3610] uppercase mt-1"
                >
                  THE INTERNATIONAL LARPING CERTIFICATION BOARD™
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <span className="w-12 h-[1px] bg-[#B39046]" />
                  <span
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    className="text-[9.5px] font-semibold tracking-[0.24em] text-[#7D5E22] uppercase"
                  >
                    OFFICIAL RECOGNITION OF UNHINGED BEHAVIOUR
                  </span>
                  <span className="w-12 h-[1px] bg-[#B39046]" />
                </div>

                {/* Main Title */}
                <div className="mt-3">
                  <h1
                    style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                    className="text-[44px] leading-[1.02] font-black tracking-[0.14em] text-[#18130D] uppercase"
                  >
                    CERTIFICATE
                  </h1>
                  <div
                    style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                    className="text-[19px] leading-[1.2] font-bold tracking-[0.34em] text-[#7A5B21] uppercase mt-1"
                  >
                    OF INSANE LARPING
                  </div>
                </div>
              </div>

              {/* ================= 2. RECIPIENT & CITATION BODY ================= */}
              <div className="relative z-10 flex flex-col items-center text-center my-auto pt-1">
                <p
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                  className="italic text-[21px] text-[#4C3D28] font-medium tracking-wide"
                >
                  This certificate is proudly presented to
                </p>

                {/* Recipient Name Block with Ornamental Underline */}
                <div className="w-full max-w-[780px] mt-1.5 mb-2 px-4">
                  <div
                    style={{
                      fontFamily: 'Cinzel, Georgia, serif',
                      fontSize: nameFontSize,
                      lineHeight: 1.15,
                    }}
                    className={`font-bold tracking-[0.06em] uppercase break-words ${
                      isPlaceholder ? 'text-[#8F6F2E]/55' : 'text-[#14100B]'
                    }`}
                  >
                    {displayName}
                  </div>

                  {/* Classical Double Gold Divider under Recipient Name */}
                  <div className="relative mt-2 flex items-center justify-center">
                    <div className="w-full max-w-[620px] h-[1.5px] bg-gradient-to-r from-transparent via-[#8F6F2E] to-transparent" />
                    <div className="absolute w-3 h-3 rotate-45 border border-[#8F6F2E] bg-[#FAF6EE]" />
                    <div className=" -z-0 absolute w-1.5 h-1.5 rotate-45 bg-[#8F6F2E]" />
                  </div>
                </div>

                {/* Citation Body Copy */}
                <p
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                  className="max-w-[690px] text-[19.5px] leading-[1.38] text-[#2A2117] font-medium mt-1"
                >
                  For demonstrating an exceptional and frankly concerning commitment to the art of
                  larping, unmatched levels of delusion, and an unwavering dedication to the craft.
                </p>

                {/* ================= PROMINENT MAIN STATEMENT ================= */}
                <div className="mt-4 relative inline-flex flex-col items-center">
                  <div className="relative px-8 py-2.5 bg-[#F4EBDA]/90 border-y-2 border-x border-[#8F6F2E] shadow-sm">
                    {/* Corner Pin Studs */}
                    <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-[#8F6F2E]" />
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#8F6F2E]" />
                    <span className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-[#8F6F2E]" />
                    <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#8F6F2E]" />

                    <div
                      style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                      className="text-[26px] font-black tracking-[0.18em] text-[#18120B] uppercase"
                    >
                      &ldquo;KEEP SHOOTING, MY GUY.&rdquo;
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= 3. BOTTOM METADATA, SEAL & SIGNATURE ================= */}
              <div className="relative z-10 pt-2">
                <div className="grid grid-cols-12 items-end gap-4">
                  {/* Left Column: Official Registry Metadata */}
                  <div className="col-span-4 flex flex-col gap-1.5 text-left pb-2">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 border-l-2 border-[#8F6F2E] pl-3 py-0.5 bg-[#FAF6EE]/80">
                      <div>
                        <div
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                          className="text-[8.5px] uppercase tracking-[0.18em] text-[#7D5E22] font-semibold"
                        >
                          CERTIFICATE ID
                        </div>
                        <div
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                          className="text-[11.5px] font-semibold text-[#1C1610] tracking-[0.06em]"
                        >
                          {data.certificateId}
                        </div>
                      </div>

                      <div>
                        <div
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                          className="text-[8.5px] uppercase tracking-[0.18em] text-[#7D5E22] font-semibold"
                        >
                          DATE OF ISSUANCE
                        </div>
                        <div
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                          className="text-[11.5px] font-semibold text-[#1C1610] tracking-[0.06em]"
                        >
                          {data.issueDate}
                        </div>
                      </div>

                      <div className="col-span-2 pt-0.5 border-t border-[#8F6F2E]/30">
                        <div
                          style={{ fontFamily: '"JetBrains Mono", monospace' }}
                          className="text-[8.5px] uppercase tracking-[0.18em] text-[#7D5E22] font-semibold"
                        >
                          CLASSIFICATION
                        </div>
                        <div
                          style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                          className="text-[13px] font-extrabold text-[#6E4F17] tracking-[0.16em]"
                        >
                          {data.classification}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Official Embossed Gold Seal ("CERTIFIED INSANE") */}
                  <div className="col-span-4 flex flex-col items-center justify-center -mb-2">
                    {isExporting ? (
                      <div className="w-[142px] h-[156px]">
                        <OfficialSeal className="w-full h-full drop-shadow-md" />
                      </div>
                    ) : (
                      <motion.div
                        key={stampKey}
                        initial={
                          stampKey > 0
                            ? { scale: 1.75, opacity: 0, rotate: -12 }
                            : { scale: 1, opacity: 1, rotate: 0 }
                        }
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 340,
                          damping: 18,
                        }}
                        className="w-[142px] h-[156px]"
                      >
                        <OfficialSeal className="w-full h-full drop-shadow-md" />
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column: Official Signature */}
                  <div className="col-span-4 flex flex-col items-end text-right pb-2">
                    <div className="w-[240px] flex flex-col items-center bg-[#FAF6EE]/85 px-3 pt-1 pb-1.5 rounded-sm border border-[#B39046]/40">
                      <OfficialSignature className="w-[210px] h-[54px] -mb-2" />
                      <div className="w-full h-[1px] bg-[#6B511E] my-1" />
                      <div
                        style={{ fontFamily: 'Cinzel, Georgia, serif' }}
                        className="text-[11px] font-bold tracking-[0.16em] text-[#1C1610] uppercase"
                      >
                        LORD JULIAN VANCE-STERLING
                      </div>
                      <div
                        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                        className="italic text-[13px] text-[#5C461E] font-semibold"
                      >
                        High Commissioner of Delusional Studies
                      </div>
                    </div>
                  </div>
                </div>

                {/* Humorous Legal Disclaimer Footer */}
                <div className="mt-2 pt-1.5 border-t border-[#8F6F2E]/35 text-center">
                  <p
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    className="text-[8.5px] tracking-[0.14em] text-[#6B5530] uppercase font-medium"
                  >
                    This document carries absolutely no legal, academic, professional, or social
                    authority.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificateDocument.displayName = 'CertificateDocument';
