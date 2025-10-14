import React from "react";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightText = ({ children, className = "" }: HighlightTextProps) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span
        className="absolute inset-0"
        style={{
          left: "-10px",
          right: "-10px",
          top: "-4px",
          bottom: "-4px",
          width: "calc(100% + 20px)",
          height: "calc(100% + 8px)",
          zIndex: 0,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M2,30 Q8,5 28,7 T58,11 Q78,9 98,13 T138,15 Q158,13 178,17 Q188,19 195,24 L198,50 Q192,56 178,54 Q158,51 138,53 T98,56 Q78,58 58,54 T28,51 Q8,56 2,51 Z"
            fill="#FFE66D"
            opacity="0.95"
          />
        </svg>
      </span>
      <span
        className="relative px-2"
        style={{ color: "#1a1a1a", fontWeight: "inherit", zIndex: 1 }}
      >
        {children}
      </span>
    </span>
  );
};

export default HighlightText;
