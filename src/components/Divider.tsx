import React from "react";

const Divider = () => {
  return (
    <div className="relative h-32 bg-white overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#fcd34d" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1f3e5a" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1f3e5a" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path
          d="M0,64 C240,32 480,96 720,64 C960,32 1200,96 1440,64 L1440,128 L0,128 Z"
          fill="url(#waveGradient1)"
        />

        <path
          d="M0,80 C240,48 480,112 720,80 C960,48 1200,112 1440,80 L1440,128 L0,128 Z"
          fill="url(#waveGradient2)"
        />

        <path
          d="M0,96 C240,64 480,128 720,96 C960,64 1200,128 1440,96 L1440,128 L0,128 Z"
          fill="url(#waveGradient3)"
        />
      </svg>
      {/* 
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-brand-200">
          <span className="text-xs font-semibold text-brand-800 uppercase tracking-widest">
            PropertyCraft
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Divider;
