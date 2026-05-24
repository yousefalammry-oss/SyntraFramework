import React from "react";

// Icon 1 (Image 2): Hand holding a growing plant -> "Predictive Sentry"
export const PredictiveSentryIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hand drawing matching the uploaded image */}
      {/* Lower supporting hand base/wrist curve */}
      <path d="M 15 72 C 15 62, 22 58, 32 58 C 42 58, 48 65, 58 64 L 74 64 C 78 64, 82 60, 85 55 C 88 50, 85 46, 80 46 C 74 46, 68 52, 60 56 L 45 56" />
      
      {/* Upper hand line/thumb */}
      <path d="M 38 58 Q 50 51, 62 50 C 68 50, 71 52, 71 54 C 71 56, 65 58, 54 58" />
      
      {/* Sleeve/Cuff boundary */}
      <path d="M 22 58 C 21 64, 21 70, 22 76" />

      {/* Growing plant stem sprouting from the hand */}
      <path d="M 45 50 Q 48 30, 42 12" strokeWidth={strokeWidth + 0.2} />
      
      {/* Left Leaf */}
      <path
        d="M 46 36 C 36 36, 26 28, 22 18 C 32 16, 42 24, 45 30 Z"
        fill="none"
        strokeWidth={strokeWidth}
      />
      
      {/* Right Leaf */}
      <path
        d="M 46 25 C 56 25, 66 21, 70 12 C 60 14, 50 18, 47 22 Z"
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

// Icon 2 (Image 3): Calendar with checkmarks next to a gear with a wrench -> "Automated Response"
export const AutomatedResponseIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Background Gear to the right */}
      <circle cx="68" cy="50" r="15" />
      <circle cx="68" cy="50" r="6" />
      {/* Gear teeth */}
      <path d="M 65 31 L 71 31 L 70 35 L 66 35 Z" />
      <path d="M 65 69 L 71 69 L 70 65 L 66 65 Z" />
      <path d="M 49 47 L 49 53 L 53 52 L 53 48 Z" strokeDasharray="1 1" className="opacity-40" />
      <path d="M 83 47 L 83 53 L 80 52 L 80 48 Z" />
      <path d="M 55 37 L 59 41 L 57 43 L 53 39 Z" />
      <path d="M 77 61 L 81 65 L 79 67 L 75 63 Z" />
      <path d="M 79 37 L 75 41 L 77 43 L 81 39 Z" />
      <path d="M 57 61 L 61 65 L 59 67 L 55 63 Z" />

      {/* Overlapping Wrench inside the gear */}
      <path d="M 62 56 Q 66 52, 71 47 C 73 45, 76 45, 78 47 C 80 49, 80 52, 78 54 L 73 59 Q 68 64, 64 68 Z" strokeWidth={strokeWidth + 0.1} />

      {/* Foreground Calendar to the left */}
      {/* White background so it visually hides the background gear */}
      <rect x="15" y="24" width="34" height="34" rx="3" fill="white" stroke="currentColor" strokeWidth={strokeWidth} />
      
      {/* Hang loops / Binder rings */}
      <path d="M 23 18 L 23 26" strokeWidth={strokeWidth + 0.3} />
      <path d="M 41 18 L 41 26" strokeWidth={strokeWidth + 0.3} />
      
      {/* Calendar header horizontal line */}
      <path d="M 15 34 L 49 34" strokeWidth={strokeWidth} />
      
      {/* Small dots representing other days */}
      <circle cx="21" cy="40" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="28" cy="40" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="35" cy="40" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="42" cy="40" r="1.2" fill="currentColor" stroke="none" />
      
      <circle cx="21" cy="47" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="28" cy="47" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="35" cy="47" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="42" cy="47" r="1.2" fill="currentColor" stroke="none" />

      {/* Clear checkmarks from the uploaded drawings */}
      {/* First checkmark */}
      <path d="M 20 40 L 22 42 L 25 38" strokeWidth={strokeWidth + 0.3} />
      {/* Second checkmark */}
      <path d="M 34 47 L 36 49 L 39 45" strokeWidth={strokeWidth + 0.3} />
    </svg>
  );
};

// Icon 3 (Image 1): Fist inside gear with 3 wave-support/energy lines -> "Enterprise Resilience"
export const EnterpriseResilienceIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 3 Wavy support lines at the bottom */}
      <path d="M 12 76 Q 50 80, 88 76" strokeWidth={strokeWidth + 0.2} />
      <path d="M 12 84 Q 50 88, 88 84" strokeWidth={strokeWidth + 0.2} />
      <path d="M 12 92 Q 50 96, 88 92" strokeWidth={strokeWidth + 0.2} />

      {/* Main Gear Outline Center at (50, 42) */}
      <circle cx="50" cy="42" r="19" strokeWidth={strokeWidth} />
      <circle cx="50" cy="42" r="14" strokeWidth={strokeWidth} className="opacity-30" />
      
      {/* Gear Teeth (Square-ish matching the image) */}
      <path d="M 45 19 L 55 19 L 54 23 L 46 23 Z" />
      <path d="M 45 61 L 55 61 L 54 57 L 46 57 Z" />
      <path d="M 27 37 L 27 47 L 31 46 L 31 38 Z" />
      <path d="M 69 37 L 69 47 L 73 46 L 73 38 Z" />
      <path d="M 33 25 L 40 32 L 37 35 L 30 28 Z" />
      <path d="M 67 25 L 60 32 L 63 35 L 70 28 Z" />
      <path d="M 30 56 L 37 49 L 40 52 L 33 59 Z" />
      <path d="M 70 56 L 63 49 L 60 52 L 67 59 Z" />

      {/* Fist raising up (Center of gear) */}
      {/* Wrist sleeve block */}
      <rect x="42" y="55" width="16" height="7" rx="1" strokeWidth={strokeWidth} fill="white" />
      
      {/* Fist fingers & thumb */}
      <path d="M 45 55 L 45 42 C 45 37, 55 37, 55 42 L 55 55" strokeWidth={strokeWidth} />
      {/* Thumb on left wrapping around */}
      <path d="M 45 49 C 41 49, 41 43, 45 43" strokeWidth={strokeWidth} />
      {/* Knuckle arches/creases */}
      <path d="M 47 40 A 1.5 1.5 0 0 1 50 40" strokeWidth={strokeWidth} />
      <path d="M 50 40 A 1.5 1.5 0 0 1 53 40" strokeWidth={strokeWidth} />
      <path d="M 53 40 A 1.5 1.5 0 0 1 55 41" strokeWidth={strokeWidth} />
    </svg>
  );
};
