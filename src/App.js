import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import Contact from "./contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
