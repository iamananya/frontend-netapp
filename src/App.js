import React from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Charts from "./components/Charts";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import ListComp from "./components/List";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/" element={<Hero />} />
          <Route  path="/list" element={<ListComp />} />
          <Route  path="/charts" element={<Charts />} />
          <Route  path="/finances" element={<Insights />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
