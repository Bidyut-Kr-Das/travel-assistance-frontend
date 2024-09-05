import React, { useEffect } from "react";
import Timeline from "../components/Timeline";
import { useLocation } from "react-router-dom";
const Prediction_page = () => {
  const location = useLocation();

  const jsonData = location.state;
  // console.log(jsonData);

  return (
    <>
      <main className=" px-4 py-20 z-10 relative h-screen overflow-auto">
        <h1 className="text-white text-4xl font-bold oldenburg-regular">
          Travel Assistant
        </h1>
        {/* <Collapsable_card /> */}
        <Timeline data={jsonData} />
      </main>
    </>
  );
};

export default Prediction_page;
