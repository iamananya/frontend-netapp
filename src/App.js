import React from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/companies" element={<Companies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
