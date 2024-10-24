import React from "react";
import "./App.css"; // Add CSS file reference

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Dockerized React App</h1>
        <p>This is a simple React app running inside a Docker container.</p>
        <div className="info-container">
          <h2>Mayank Kumar Shah</h2> {/* Your Name */}
          <p>Roll Number: 21BDS037</p>
          <p>Branch: Data Science and Artificial Intelligence</p>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
