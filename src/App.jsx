// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Trabajos } from "./routes/Trabajos";
import { Contacto } from "./routes/Contacto";
import { SobreMi } from "./routes/SobreMi";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setLoading(false), 0);
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="*" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
