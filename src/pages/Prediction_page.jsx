import React from "react";
import Flight_card from "../components/Flight_card";
import Collapsable_card from "../components/Collapsable_card";

const Prediction_page = () => {
  return (
    <main className="bg-[#1D1D1F] h-screen px-4 pt-20">
      <h1 className="text-white text-4xl font-bold">Travel Assistant</h1>
      <Collapsable_card />
      <Collapsable_card />
      <Collapsable_card />
    </main>
  );
};

export default Prediction_page;
