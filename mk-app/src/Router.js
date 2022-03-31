import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Lessons from "./components/Lessons";
import Metronome from "./components/Metronome";

export default function Router() {
  return (
    <div className="l-page-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/metronome" element={<Metronome />} />
      </Routes>
    </div>
  );
}
