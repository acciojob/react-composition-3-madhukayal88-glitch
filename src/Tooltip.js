import React, { useState } from 'react';

function Tooltip({ text, children }) {
  // State to control tooltip visibility
  const [isVisible, setIsVisible] = useState(false);

  // Event handlers
  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
