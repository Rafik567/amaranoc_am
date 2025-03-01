import { useState } from "react";
import "./App.css";
import AllBody from "./Components/ProjectBody/AllBody";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderTop from './Components/Header/HeaderTop';
import Home from "./Pages/Home";
import Mutq from "./Pages/Mutq"; 
import About from "./Pages/About"; 
import Help from "./Pages/Help"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/mutq" element={<Mutq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;