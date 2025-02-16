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
      <div className="position-fixed top-0 end-0 translate-middle-x p-3 anker m-5"> <b>Check out my portfolio <a href="https://samcharles-sde.web.app/">Link</a></b></div>
    </div>
  );
}

export default App;
