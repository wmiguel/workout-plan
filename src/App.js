import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AllWorks from "./pages/AllWorks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allworks" element={<AllWorks />} />
    </Routes>
  );
}

export default App;
