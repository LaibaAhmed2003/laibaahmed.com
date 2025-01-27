import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import Navbar from "../Nav/navbar"; // Import your Navbar component
import Home from "../Home/Home.jsx";
import Projectdesc from "../Project-description/Project-desc.jsx";
import Footer from "../Footer/Footer.jsx";

const router = () => {
  return (
    <Router>
      <div className="Router-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/Projectdesc" element={<Projectdesc />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default router;
