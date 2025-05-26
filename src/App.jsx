// src/App.js
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Trabajos } from "./routes/Trabajos";
import { Contacto } from "./routes/Contacto";
import { SobreMi } from "./routes/SobreMi";
import Loader from "./components/Loader";
import { PortfolioContenedor } from "./routes/PortfolioContenedor";
import { PortfolioBebas } from "./routes/PortfolioBebas";
import { PortfolioEnviaMiCompra } from "./routes/PortfolioEnviaMiCompra";
import { PortfolioLucila } from "./routes/PortfolioLucila";
import { PortfolioREM } from "./routes/PortfolioREM";
import { PortfolioNovoid } from "./routes/PortfolioNovoid";
import { PortfolioVibrato } from "./routes/PortfolioVibrato";
import { PortfolioVideo } from "./routes/PortfolioVideo";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const previousLocation = useRef(location);

  useEffect(() => {
    // si cambió la ruta...
    if (location !== previousLocation.current) {
      setShowLoader(true);
      // espera 1.5s y luego renderiza la nueva ruta
      const timer = setTimeout(() => {
        setShowLoader(false);
        setDisplayLocation(location);
        previousLocation.current = location;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // mientras tanto, mostramos el loader
  if (showLoader) return <Loader />;

  // renderizamos las rutas basadas en displayLocation,
  // así evitamos que <Routes> cambie inmediatamente
  return (
    <Routes location={displayLocation} key={displayLocation.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/trabajos" element={<Trabajos />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/contenedor" element={<PortfolioContenedor />} />
      <Route path="/bebas" element={<PortfolioBebas />} />
      <Route path="/enviamicompra" element={<PortfolioEnviaMiCompra />} />
      <Route path="/novoid" element={<PortfolioNovoid />} />
      <Route path="/lucila" element={<PortfolioLucila />} />
      <Route path="/rem" element={<PortfolioREM />} />
      <Route path="/vibrato" element={<PortfolioVibrato />} />
      <Route path="/video" element={<PortfolioVideo />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
