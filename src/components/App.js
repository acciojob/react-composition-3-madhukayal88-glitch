@"
import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="app-container">
      <h1>🛠️ Tooltip Component</h1>
      <p className="subtitle">Hover over the elements to see tooltips</p>

      <div className="demo-grid">
        <Tooltip text="This is a helpful tooltip!">
          <button className="demo-btn">Hover me</button>
        </Tooltip>

        <Tooltip text="Learn about React Composition">
          <span className="demo-text">React Composition</span>
        </Tooltip>

        <Tooltip text="Tooltips can appear on any element">
          <p className="demo-paragraph">Hover over this paragraph</p>
        </Tooltip>

        <Tooltip text="✨ Welcome to the tooltip demo!">
          <div className="demo-box">Hover this box</div>
        </Tooltip>
      </div>

      <div className="footer">
        <p>💡 Tooltip appears on hover using React state</p>
      </div>
    </div>
  );
}

export default App;
"@ | Out-File -FilePath src\App.js -Encoding utf8
