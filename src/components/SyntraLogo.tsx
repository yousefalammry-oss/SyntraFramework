/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface SyntraLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtitleColor?: string;
  isDark?: boolean;
}

export default function SyntraLogo({
  className = "",
  size = 40,
  showText = false,
  textColor = "text-neutral-900",
  subtitleColor = "text-neutral-400",
  isDark = false,
}: SyntraLogoProps) {
  // Use custom colors if dark mode requested
  const actualTextColor = isDark ? "text-white" : textColor;
  const actualSubtitleColor = isDark ? "text-neutral-400" : subtitleColor;
  const strokeColor = isDark ? "rgb(240, 240, 240)" : "rgb(64, 64, 64)";
  const arrowFill = isDark ? "rgb(250, 250, 250)" : "rgb(40, 40, 40)";

  const logoSvg = (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block select-none"
    >
      {/* Elegantly Traced Sovereign Shield Outline */}
      <path
        d="M 50,15 C 57.5,15 72.5,17 78.5,20 C 78.5,42.5 72.5,65 50,78.5 C 27.5,65 21.5,42.5 21.5,20 C 27.5,17 42.5,15 50,15 Z"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* 
        Sovereign Up-right Arrow:
        Starts elegant and wide at the bottom-left (piercing through the shield border limit),
        sweeps up and inside, terminating in a precise, neat aeronautic arrowhead pointing top-right.
      */}
      <path
        d="M 12,65 C 21,63 35,52 44.5,40.5 L 39,35 L 68,21 L 54,50 L 48.5,44.5 C 41,54.5 26.5,62.5 12,65 Z"
        fill={arrowFill}
      />
    </svg>
  );

  if (!showText) {
    return logoSvg;
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {logoSvg}
      <div className="flex flex-col justify-center text-start">
        <span className={`text-xl font-bold tracking-tight leading-none ${actualTextColor} font-sans`}>
          Syntra
        </span>
        <span className={`text-[10px] uppercase font-mono font-bold tracking-[0.25em] mt-1 ${actualSubtitleColor}`}>
          Framework
        </span>
      </div>
    </div>
  );
}
