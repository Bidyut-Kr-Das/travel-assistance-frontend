import React from "react";
import Flight_card from "../components/Flight_card";
import Collapsable_card from "../components/Collapsable_card";
import Timeline from "../components/Timeline";
import StarryBackground from "./StarryBackground.jsx";
const Prediction_page = () => {
  return (
    <>
      <StarryBackground className="absolute inset-0 z-0" />
      <main className=" px-4 py-20 z-10 relative">
        <h1 className="text-white text-4xl font-bold oldenburg-regular">
          Travel Assistant
        </h1>
        {/* <Collapsable_card /> */}
        <Timeline />
      </main>
    </>
  );
};

export default Prediction_page;
