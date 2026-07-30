import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="app-container">
      <h1>🛠️ React Composition 3 - Tooltip</h1>
      <p className="subtitle">Hover over the elements to see tooltips</p>

      <div className="tooltip-demo">
        {/* Tooltip 1 */}
        <Tooltip text="This is a helpful tooltip!">
          <button className="demo-btn">Hover over me</button>
        </Tooltip>

        {/* Tooltip 2 */}
        <Tooltip text="Click to learn more about React">
          <span className="demo-text">React Composition</span>
        </Tooltip>

        {/* Tooltip 3 */}
        <Tooltip text="This tooltip appears on the paragraph">
          <p className="demo-paragraph">
            Hover over this paragraph to see the tooltip.
          </p>
        </Tooltip>

        {/* Tooltip 4 */}
        <Tooltip text="🚀 Welcome to the tooltip demo!">
          <div className="demo-box">
            <span>✨ Hover me</span>
          </div>
        </Tooltip>

        {/* Tooltip 5 */}
        <Tooltip text="This is a long tooltip message that explains something in detail">
          <div className="demo-card">
            <h3>Card Title</h3>
            <p>Hover over this card</p>
          </div>
        </Tooltip>
      </div>

      <div className="footer">
        <p>💡 Tooltip appears on hover using React state and event handlers</p>
      </div>
    </div>
  );
}

export default App;
