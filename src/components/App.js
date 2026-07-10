import React from "react";
import "../styles/App.css";
import Tooltip from "./Tooltip";
function App() {
  return (
    <div id="main" style={{ padding: '5px', textAlign: 'center' }}>
      <h2>React Composition: Tooltip Demo</h2>
      
      <div style={{ margin: '50px 0' }}>
        {/* Wrapping a button element with a tooltip */}
        <Tooltip text="This is a top tooltip!">
          <button style={{ padding: '10px 20px' }}>Hover over me</button>
        </Tooltip>
      </div>

      <div style={{ margin: '50px 0' }}>
        {/* Wrapping a text paragraph element with a tooltip */}
        <Tooltip text="Secondary Info text!">
          <span style={{ borderBottom: '1px dashed #333', cursor: 'pointer' }}>
            Hover here instead
          </span>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
