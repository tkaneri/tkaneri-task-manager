import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main DC Symbol */}
      <path
        d="M40 15C50 15 60 20 65 30C70 40 70 50 65 60C60 70 50 75 40 75H20V15H40Z"
        fill="#00A3E0"
        className="text-cyan-500"
      />
      
      {/* Stylized Info Symbol */}
      <path
        d="M85 30L95 30L105 20L125 40L145 20"
        stroke="#00A3E0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Tech Circuit Pattern */}
      <path
        d="M160 40H180M190 40H210"
        stroke="#00A3E0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="185" cy="40" r="2" fill="#00A3E0" />
      
      {/* Decorative Elements */}
      <path
        d="M220 30L230 40L220 50"
        stroke="#00A3E0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Text Path */}
      <text x="240" y="45" fill="#00A3E0" className="text-lg font-bold">
        INFOTECH
      </text>
      
      {/* Tagline */}
      <text x="240" y="60" fill="#666666" className="text-xs">
        Enhancing the Future
      </text>
    </svg>
  );
}