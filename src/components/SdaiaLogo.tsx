import React from "react";

interface SdaiaLogoProps {
  className?: string;
  size?: number;
}

export const SdaiaLogo: React.FC<SdaiaLogoProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
    >
      {/* 
        SDAIA Styled Dynamic Star & Intersecting Digital AI Net.
        Features sharp Islamic geometry blended with modern node networks.
      */}
      <defs>
        <linearGradient id="sdaia-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="sdaia-teal-grad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>

      {/* Outer elegant star/polygon shield outline */}
      <polygon 
        points="50,6 88,28 88,72 50,94 12,72 12,28" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeOpacity="0.15"
      />

      {/* Intersecting dynamic geo-ribbons forming the stylized "SDAIA" network */}
      <path
        d="M 50,15 L 78,31 L 78,69 L 50,85 L 22,69 L 22,31 Z"
        stroke="url(#sdaia-green-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Internal crystal facets forming Arabic architectural peaks & AI pathways */}
      <path
        d="M 50,15 L 50,85 M 22,31 L 78,69 M 22,69 L 78,31"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.30"
        strokeDasharray="2 2"
      />

      {/* Central core emblem symbol (Saudi digital Palm-and-Swords inspired high-tech node) */}
      <path
        d="M 50,30 C 53,38 58,42 62,45 C 55,46 50,52 50,60 C 50,52 45,46 38,45 C 42,42 47,38 50,30 Z"
        fill="url(#sdaia-teal-grad)"
      />

      {/* High-tech AI Vertex Nodes */}
      <circle cx="50" cy="15" r="4" fill="#0D9488" />
      <circle cx="78" cy="31" r="3.5" fill="#10B981" />
      <circle cx="78" cy="69" r="3.5" fill="#10B981" />
      <circle cx="50" cy="85" r="4" fill="#0D9488" />
      <circle cx="22" cy="69" r="3.5" fill="#10B981" />
      <circle cx="22" cy="31" r="3.5" fill="#10B981" />
      <circle cx="50" cy="50" r="4.5" fill="#059669" stroke="white" strokeWidth="1" />
    </svg>
  );
};
