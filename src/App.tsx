import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Home from "../src/pages/Home";
import theme from "../src/theme";
import Idealizadoras from "./components/Idealizadoras";
import VitrineProdutos from "./components/VitrineProdutos";
import BeneficiosPraticas from "./components/BeneficiosPraticas";
import ComoAdquirir from "./components/ComoAdquirir";
// Importe outros componentes de página conforme você os cria

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos" element={<Idealizadoras />} />
          <Route path="/vitrine" element={<VitrineProdutos />} />
          <Route path="/beneficiospraticas" element={<BeneficiosPraticas />} />
          <Route path="/comoadquirir" element={<ComoAdquirir />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
