import React, { useState } from 'react';

function Tooltip({ text, children }) {
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
      {/* Render the wrapped children elements */}
      {children}

      {/* 
        Keep the element in the DOM at all times.
        Toggle visibility using inline styles or conditional classes 
        to ensure the testing library can locate the 'tooltiptext' class tag.
      */}
      <span 
        className="tooltiptext" 
        style={{
          display: isVisible ? 'block' : 'none',
          position: 'absolute',
          backgroundColor: '#333',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '4px',
          bottom: '125%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          zIndex: 1
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
