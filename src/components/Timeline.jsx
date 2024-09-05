import React, { useEffect, useState } from "react";
import Flight_card from "./Flight_card";
import Collapsable_card from "./Collapsable_card";

const TimelineItem = ({
  section_name,
  title,
  description,
  enableButton,
  children,
  className,
  isLast = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex ">
      <div
        className={`flex flex-col items-center ${
          section_name ? "mr-4" : "mr-5 ml-1"
        }`}
      >
        {section_name && (
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        )}
        {!isLast && (
          <div className="w-1 h-full bg-gray-300 !overflow-hidden"></div>
        )}
      </div>
      <div className="pb-8 w-[90%]">
        <p className="text-lg text-white animate-pulse  mb-2 -mt-1 ">
          {section_name}
        </p>
        <div className="bg-gray-800 rounded-lg shadow p-4 mb-2">
          <div className="flex justify-between">
            <h3 className="font-bold text-white">
              {title || "This is title section"}
            </h3>
            {enableButton && (
              <button
                onClick={() => {
                  setIsOpen((prev) => {
                    return !prev;
                  });
                }}
              >
                <img
                  src="/ui/rightArrow.svg"
                  alt=""
                  className={`${
                    isOpen ? `rotate-90` : `-rotate-90`
                  } duration-500`}
                />
              </button>
            )}
          </div>
          <p className="text-sm text-gray-500 w-[95%]">
            {description || "Click to view the airlines"}
          </p>
          <section
            style={{ height: isOpen ? className || "30rem" : "0px" }}
            className={`content grid grid-cols-1  gap-4 overflow-auto ${
              isOpen ? "py-4" : "py-0"
            }`}
          >
            {children}
          </section>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ data }) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  useEffect(() => {}, [location]);

  const getLocaiton = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    alert("Location access granted");
  };

  // console.log(data);
  return (
    <>
      <TimelineItem
        section_name={`Prediction`}
        title={`Predicted Flight Fare is ${
          data.predicted_price || "na"
        } per person`}
        description="This is a predicted flight fare after analyzing history data original fare may vary"
      ></TimelineItem>

      <TimelineItem
        title={`Predicted Flight Delay is ${data.predicted_delay || "na"} mins`}
        description="This is a predicted delay after analyzing history data original delay may vary. "
      ></TimelineItem>

      <TimelineItem
        title="Predicted Top 3 Flights "
        description="Click the arrow to see the flights"
        enableButton={true}
      >
        {data.flights.map((element, index) => (
          <Flight_card
            key={index}
            airline={element.airline}
            source_city={element.source_city}
            destination_city={element.destination_city}
            departure_time={element.departure_time}
            duration={element.duration}
            flight_no={element.flight_number}
            price={element.price}
          />
        )) || "No data available"}
      </TimelineItem>
      <TimelineItem
        section_name={`Assistance`}
        title="Disclaimer"
        description={`Please provide further details to provide further assistance. Click the arrow to view the requirements.`}
        enableButton={true}
        className="9.5rem"
      >
        <ul className="list-disc ml-4 text-sky-600">
          <li className="list-item">
            If your ticket is booked, Please provide us details of your flight.
          </li>
          <li>
            Let us access your location for calculating nearest airport distance
            and time ro reach.
          </li>
        </ul>
      </TimelineItem>
      <Collapsable_card
        title={`Allow location access ${location.latitude} ${location.longitude}`}
        button_name={"Allow"}
        function_passed={getLocaiton}
      />
    </>
  );
};

export default Timeline;
