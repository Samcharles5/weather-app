import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="App">
       <ParticlesBackground/>
       <div style={{ position: "relative", zIndex: 1 }}>
        <Weather />
      </div>
    </div>
  );
}

export default App;
