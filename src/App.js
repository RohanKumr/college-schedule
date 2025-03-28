import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Schedule from "./schedule/index";
import Animation from "./animation/index";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/college-schedule" element={ <Schedule /> }>

        </Route>
        <Route path="/college-schedule/animation" element={ <Animation /> } />
      </Routes>
    </BrowserRouter>
  );
}
