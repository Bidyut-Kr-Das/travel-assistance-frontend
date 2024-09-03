import React, { useState } from "react";
import Flight_card from "./Flight_card";

const TimelineItem = ({
  section_name,
  title,
  description,
  enableButton,
  children,
  isLast = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        {!isLast && <div className="w-1 h-full bg-gray-300"></div>}
      </div>
      <div className="pb-8">
        <p className="text-sm text-gray-500 mb-2">{section_name}</p>
        <div className="bg-white rounded-lg shadow p-4 mb-2">
          <div className="flex justify-between w-full">
            <h3 className="font-semibold">
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
          <p className="text-sm text-gray-500">
            {!description || "Click to view the airlines"}
          </p>
          <section
            style={{ height: isOpen ? "auto" : "0px" }}
            className="content flex flex-col gap-4"
          >
            {children}
          </section>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => (
  <>
    <TimelineItem
      section_name={`Prediction`}
      title="Top 3 Predicted flight"
      description={`Click the arrow to see the flights`}
      enableButton={true}
    >
      <Flight_card
        source_city="Mumbai"
        destination_city="Delhi"
        departure_time="12:00"
        flight_no="AI-101"
        duration={`2.14 hr`}
        airline="Air India"
        price="4500"
      />
      <Flight_card
        source_city="Mumbai"
        destination_city="Delhi"
        departure_time="12:00"
        flight_no="AI-101"
        duration={`2.14 hr`}
        airline="Air India"
        price="4500"
      />
      <Flight_card
        source_city="Mumbai"
        destination_city="Delhi"
        departure_time="12:00"
        flight_no="AI-101"
        duration={`2.14 hr`}
        airline="Air India"
        price="4500"
      />
    </TimelineItem>
    <TimelineItem
      section_name={`Prediction`}
      title="Top 3 Predicted flight"
      description={`Click the arrow to see the flights`}
    >
      <Flight_card />
    </TimelineItem>
  </>
);

export default Timeline;
