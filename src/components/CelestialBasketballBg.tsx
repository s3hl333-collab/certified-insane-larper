import React from 'react';
import { motion } from 'framer-motion';

export const CelestialBasketballBg: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Subtle Ambient Radial Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 18%, rgba(200, 169, 98, 0.07) 0%, rgba(12, 12, 14, 0.02) 45%, transparent 75%)',
        }}
      />

      {/* Faint Celestial Origin Marker (Upper Left Moon) */}
      <div className="hidden md:flex items-center gap-2.5 absolute top-24 left-10 opacity-20">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="#C8A962" strokeWidth="1" />
          <circle cx="12" cy="12" r="2.5" stroke="#C8A962" strokeWidth="0.8" />
          <circle cx="19" cy="18" r="3.2" stroke="#C8A962" strokeWidth="0.8" />
          <circle cx="13" cy="20" r="1.5" stroke="#C8A962" strokeWidth="0.8" />
        </svg>
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#C8A962] uppercase">
          APOGEE // LUNA-01
        </div>
      </div>

      {/* Faint Celestial Target Marker (Lower Right Earth) */}
      <div className="hidden md:flex items-center gap-2.5 absolute bottom-16 right-10 opacity-20">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#C8A962] uppercase text-right">
          PERIGEE // TERRA COURT
        </div>
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="11" stroke="#C8A962" strokeWidth="1" />
          <ellipse cx="16" cy="16" rx="15" ry="5" transform="rotate(-20 16 16)" stroke="#C8A962" strokeWidth="0.7" strokeDasharray="2 2" />
          <path d="M11 10C14 12 14 16 11 19C9 21 12 24 15 25" stroke="#C8A962" strokeWidth="1" />
        </svg>
      </div>

      {/* Subtle Diagonal Trajectory Guide Line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M -60 80 Q 680 280 1500 820"
          fill="none"
          stroke="#C8A962"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Periodic Diagonal Basketball Shot from Moon to Earth */}
      <motion.div
        initial={{ x: '-10vw', y: '8vh', opacity: 0, scale: 0.7 }}
        animate={{
          x: ['-10vw', '110vw'],
          y: ['8vh', '86vh'],
          opacity: [0, 0.28, 0.28, 0],
          scale: [0.65, 1.05, 0.8],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 7,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 will-change-transform"
      >
        <div className="relative flex items-center">
          {/* Motion Comet Trail */}
          <div
            className="w-28 h-[1.5px] -mr-3 origin-right"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(200, 169, 98, 0.65) 100%)',
              transform: 'rotate(24deg) translateY(-10px)',
            }}
          />
          {/* Rotating Basketball Wireframe */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            className="text-[#C8A962]"
          >
            <circle cx="18" cy="18" r="15" fill="#121216" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 18H33" stroke="currentColor" strokeWidth="1.3" />
            <path d="M18 3V33" stroke="currentColor" strokeWidth="1.3" />
            <path d="M7 7.5C13 13 13 23 7 28.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M29 7.5C23 13 23 23 29 28.5" stroke="currentColor" strokeWidth="1.3" />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};
