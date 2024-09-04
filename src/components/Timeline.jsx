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
    <div className="flex backdrop-blur-xl">
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
        <p className="text-sm text-gray-500 mb-2">{section_name}</p>
        <div className="bg-white rounded-lg shadow p-4 mb-2">
          <div className="flex justify-between">
            <h3 className="font-bold">{title || "This is title section"}</h3>
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
          <p className="text-sm text-gray-500 ">
            {description || "Click to view the airlines"}
          </p>
          <section
            style={{ height: isOpen ? "30rem" : "0px" }}
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

const Timeline = ({ items }) => (
  <>
    <TimelineItem
      section_name={`Prediction`}
      title={`Predicted Flight Fare is ${"4000"} per person`}
      description="This is a predicted flight fare after analyzing history data original fare may vary"
    ></TimelineItem>

    <TimelineItem
      title={`Predicted Flight Delay is ${"40"} mins`}
      description="This is a predicted delay after analyzing history data original delay may vary. "
    ></TimelineItem>

    <TimelineItem
      title="Predicted Top 3 Flights "
      description="Click the arrow to see the flights"
      enableButton={true}
    >
      <Flight_card
        airline={"Air India"}
        source_city={"Delhi"}
        destination_city={"Mumbai"}
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
