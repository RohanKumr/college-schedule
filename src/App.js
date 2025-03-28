import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Schedule from "./schedule/index";
import Animation from "./animation/index";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */ }
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */ }
        <Route path="/college-schedule" element={ <Schedule /> } />
        <Route path="/animation" element={ <Animation /> } />
      </Routes>
    </BrowserRouter>
  );
}
