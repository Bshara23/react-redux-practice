import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box1 from "./components/box1";
import Box2 from "./components/box2";
import Deb from "./components/deb";
import Box3 from "./components/box3";
import Box4 from "./components/Box4";
function App() {
  return (
    <div className="App">
      <div className="upper">
        <Box3 />
        <Box2 />
      </div>
      <div className="lower">
        <Box4 />
        <Box1 />
      </div>
    </div>
  );
}

export default App;
