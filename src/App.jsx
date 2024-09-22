//module import
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import ThreeD from "./pages/ThreeD.jsx";
//page import
import LandingPage from "./pages/LandingPage";

import Prediction_page from "./pages/Prediction_page";
import Flight_card from "./components/Flight_card";
import StarryBackground from "./pages/StarryBackground.jsx";
import Test_component from "./components/Test_component.jsx";
import Land from "./Land.jsx";
import ChatSection from "./components/ChatSection.jsx";

const App = () => {
  return (
    <main>
      <Toaster richColors position="bottom-center" />

      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/prediction" element={<Prediction_page />} />
        <Route path="/Testing" element={<ThreeD />} />
        {/* <Route path="/Flight_card" element={<Test_component />} /> */}
        <Route
          path="/developer_region"
          element={<ChatSection isOpen={true} />}
        />
        <Route path="*" element={<h1>You are not worthy</h1>} />
      </Routes>
    </main>
  );
};

export default App;
