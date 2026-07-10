import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
}

export default Tooltip;