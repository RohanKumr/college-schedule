import './App.css';
import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Schedule from "./schedule/index";
import Animation from "./animation/index";



export default function App() {
  return (
    <Router basename="/college-schedule">  {/* Ensures routing works inside GitHub Pages */ }
      <Routes>
        <Route path="/" element={ <Schedule /> } />
        <Route path="animation" element={ <Animation /> } />  {/* No leading slash */ }
      </Routes>
    </Router>
  );
}
