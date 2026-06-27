import React, { useState } from 'react';

function Tooltip({ text, children }) {
  // State to manage visibility of the tooltip text
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div 
      className="tooltip" 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {/* Renders the element(s) over which the tooltip appears */}
      {children}

      {/* Conditionally render the tooltip text box based on visibility state */}
      {isVisible && (
        <span 
          className="tooltiptext" 
          style={{
            position: 'absolute',
            backgroundColor: '#333',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            bottom: '125%', // Places the tooltip above the text
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            zIndex: 1
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
