import React, { useEffect, useState } from "react";
import Flight_card from "./Flight_card";
import Collapsable_card from "./Collapsable_card";
import Ticket_form from "./Ticket_form";
import apiKey from "../api/apiKey";

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

  const [ticket, toggleTicket] = useState(false);

  const [airport, updateAirport] = useState(false);

  const [details, update_Details] = useState({
    source_city: "",
    destination_city: "",
    departure_time: "",
    flight_no: "",
    passenger_no: "",
    airline: "",
    cabin: "",
    seat_number: "",
    gate_number: "",
    boarding_time: "",
    airport_name: "",
    ariport_distance: "",
    airport_time: "",
    mode_of_transport: "",
  });

  const get_ticket_data = async (data) => {
    // convert the city to capitalise
    const source_city =
      data.source_city.charAt(0).toUpperCase() + data.source_city.slice(1);
    update_Details({
      ...details,
      source_city: source_city,
      destination_city: data.destination_city,
      departure_time: data.departure_time,
      airport_code: data.airport_code,
      passenger_no: data.passenger_no,
      airline: data.airline,
    });
    let response;
    if (location.latitude && location.longitude) {
      response = await fetch_details_of_airport({
        airport_code: data.airport_code,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      update_Details({
        ...details,
        airport_name: response.airport_name,
        ariport_distance: response.distance,
        airport_time: response.duration,
      });
    }
    console.log(details);
    updateAirport(true);
  };

  const fetch_details_of_airport = async (data) => {
    const response = await apiKey.post("/location", data);
    const airport_data = response.data;
    return airport_data;
  };

  const getLocaiton = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  return (
    <>
      <TimelineItem
        section_name={`Prediction`}
        title={`Approximate Flight Fare is ${
          "na" || data.predicted_price
        } per person`}
        description="This is a approximate flight fare after analyzing history data original fare may vary"
      ></TimelineItem>

      <TimelineItem
        title={`Approximate Flight Delay is ${
          "na" || data.predicted_delay
        } mins`}
        description="This is a approximate delay after analyzing history data original delay may vary. "
      ></TimelineItem>

      <TimelineItem
        title="Top 3 flights"
        description="Click the arrow to see the flights"
        enableButton={true}
      >
        {"No data available" ||
          data.flights.map((element, index) => (
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
          ))}
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
        title={`Allow location access   ${
          location.latitude ? "**Granted**" : ""
        }`}
        button_name={"Allow"}
        function_passed={getLocaiton}
      />
      <Collapsable_card
        title={`Provide Ticket Details`}
        button_name={"Open"}
        function_passed={() => {
          toggleTicket((prev) => !prev);
        }}
      />
      {ticket && (
        <Ticket_form
          source_city={data.flights[0].source_city}
          destination_city={data.flights[0].destination_city}
          toggle={toggleTicket}
          send_ticket_data={get_ticket_data}
        />
      )}
      {airport && (
        <>
          <TimelineItem
            title="Nearest Airport Details"
            description={`The nearest airport is <span className="bg-blue-600">${details.airport_name}</span> at a distance of ${details.ariport_distance} and you can reach there in ${details.airport_time}`}
          ></TimelineItem>
          <TimelineItem
            title={`Documents Required`}
            description={`Please carry the following documents`}
            enableButton={true}
            className={"8rem"}
          >
            <ul className="list-disc ml-4 text-sky-600">
              <li className="list-item">Passport</li>
              <li>Visa</li>
              <li>Id card(Aadhar card, Driving license, Voter id")</li>
              <li>Covid-19 report</li>
            </ul>
          </TimelineItem>
          <TimelineItem
            title="Arrive at the Airport Early"
            description="Plan to arrive at least 2-3 hours before your flight to allow enough time for check-in, security, and other procedures. For international flights, arriving earlier is advisable"
          />
          <TimelineItem
            title="Locate Your Terminal"
            description="Check your ticket or the airport's information screens to find the correct terminal for your flight. Follow the signs to reach your terminal"
          />
          <TimelineItem
            title="Check-In"
            description="Go to your airline’s check-in counter or use self-service kiosks. Present your ID, and flight details, and choose your seat if not already assigned. You will receive a boarding pass"
          />
          <TimelineItem
            title="Drop Off Checked Luggage"
            description="If you have checked luggage, proceed to the baggage drop-off counter. Ensure your bags are properly tagged with your destination. Keep the baggage receipt safe"
          />
          <TimelineItem
            title="Security Check"
            description="Head to the security checkpoint. Remove electronics, liquids, and metal items from your carry-on. Follow instructions to pass through security scanners. Collect your items after the check"
          />
          <TimelineItem
            title="Navigate to Your Gate"
            description="After security, check the airport screens for your gate number and any updates on your flight. Follow signs to your departure gate, and note the boarding time."
          />
          <TimelineItem
            title="Wait at the Gate"
            description="Find a seat near your gate. Monitor announcements and screens for boarding updates or any changes to your flight. Use this time to relax, grab a snack, or use airport facilities"
          />
          <TimelineItem
            title="Board the Flight"
            description="Listen for boarding announcements, which often happen in groups (by seat rows or ticket class). Have your boarding pass and ID ready. Follow instructions to board the aircraft, find your seat, and stow your carry-on luggage in the overhead bin or under the seat in front of you"
          />
        </>
      )}
    </>
  );
};

export default Timeline;
