import React from 'react';

const SelectorBox = ({ children, className = "", isActive = false, borderColor = "border-custom-selectorBorder" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {/* 4 corner indicator dots */}
      <span className={`border ${borderColor} w-1.5 h-1.5 bg-white absolute -top-0.5 -left-0.5 z-20`}></span>
      <span className={`border ${borderColor} w-1.5 h-1.5 bg-white absolute -top-0.5 -right-0.5 z-20`}></span>
      <span className={`border ${borderColor} w-1.5 h-1.5 bg-white absolute -bottom-0.5 -left-0.5 z-20`}></span>
      <span className={`border ${borderColor} w-1.5 h-1.5 bg-white absolute -bottom-0.5 -right-0.5 z-20`}></span>
    </div>
  );
};

export default SelectorBox;
