//module import
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

//page import
import LandingPage from "./pages/LandingPage";

import Prediction_page from "./pages/Prediction_page";
import Flight_card from "./components/Flight_card";

const App = () => {
  return (
    <main>
      <Toaster richColors position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prediction" element={<Prediction_page />} />
        <Route path="/Flight_card" element={<Flight_card />} />
        <Route path="*" element={<h1>You are not worthy</h1>} />
      </Routes>
    </main>
  );
};

export default App;
