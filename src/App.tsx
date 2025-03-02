import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Page/Home";
import Login from "./Components/Page/Login";
import DisCount from "./Components/Page/DisCount";
import About from "./Components/Page/About";
import Carayutyuner from "./Components/Page/Carayutyuner";
import Footer from "./Components/Footer/Footer";
import TopHeader from "./Components/Header/TopHeader";

const App: React.FC = () => {
  const [key, setKey] = useState<string | null>(localStorage.getItem("key"));

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={key ? <Home /> : <Login />} />
        <Route path="/services" element={<Carayutyuner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discount" element={<DisCount />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App; 
