// import logo from './logo.svg';
import './App.scss';
import './responsive.scss';
import Home from './screens/Home.js';
import About from './screens/About.js';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}