import React, { useState } from "react";
import { toast } from "sonner";

const Ticket_form = ({
  source_city = "",

  destination_city = "",
  departure_time = "",
  flight_number = "",
  passenger_number = 1,

  airline = "",
  boarding_pass_enabled = false,
  toggle,
  send_ticket_data,
  send_boarding_data,
  ticket_done = false,
}) => {
  // Helper function to safely get the first 3 characters
  const getShortCode = (city) =>
    city && typeof city === "string" ? city.slice(0, 3).toUpperCase() : "";

  const [ticket, updateTicket] = useState({
    source_city: source_city,
    short_code_source: getShortCode(source_city),
    short_code_destination: getShortCode(destination_city),
    destination_city: destination_city,
    departure_time: departure_time,
    flight_number: flight_number,
    passenger_number: passenger_number,
    airline: airline,
    airport_code: "",
    // boarding pass section
    cabin: "",
    seat_number: "",
    gate_number: "",
    boarding_time: "",
  });

  const confirm_ticket_submission = () => {
    if (
      ticket.source_city.length < 1 ||
      ticket.destination_city.length < 1 ||
      ticket.departure_time.length < 1 ||
      ticket.airport_code.length < 1 ||
      ticket.airline.length < 1
    ) {
      toast.error("Please fill all the fields");
    } else {
      toast.success("Ticket details updated");
      send_ticket_data({ ...ticket, ticket_done: true });

      toggle((prev) => !prev);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen py-20 px-8 flex justify-center items-center flex-col backdrop-blur-sm">
      <div
        className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] w-full max-w-md mx-auto text-white px-6 rounded-3xl pb-8 pt-12 flex flex-col gap-6 relative transition-all duration-300 h-auto"
        style={{
          WebkitMask:
            "radial-gradient(circle at 0% 55%, transparent 3%, black 0%)",
          mask: "radial-gradient(circle at 0% 55%, transparent 3%, black 0%)",
        }}
      >
        <img
          src="/ui/close.svg"
          alt=""
          className=" absolute top-4 right-4 cursor-pointer"
          onClick={() => {
            toggle((prev) => !prev);
          }}
        />
        <div className="w-full flex font-bold text-3xl md:text-4xl uppercase tracking-wide relative gap-4">
          <span className="flex-grow flex flex-col gap-1">
            <span className="transition-all duration-300 hover:scale-105">
              {ticket.short_code_source}
            </span>
            <input
              type="text"
              className={`text-xs font-light bg-transparent outline-none text-left  w-20 tracking-wide ${
                ticket.source_city.length < 1 ? "border-b-2 animate-pulse" : ""
              } border-gray-500 pb-1 capitalize text-[#45EA69]`}
              value={ticket.source_city}
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  source_city: e.target.value,
                  short_code_source: getShortCode(e.target.value),
                });
              }}
              placeholder="Source"
            />
          </span>
          <span className="w-36 text-sm lowercase flex-grow text-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-dashed border-white/30"></div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45EA69] absolute"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg> */}
            </div>
          </span>
          <span className="flex-grow flex flex-col text-right gap-1 w-20">
            <span className="">{ticket.short_code_destination}</span>
            <input
              type="text"
              className={`text-xs  font-light w-full bg-transparent outline-none text-right  tracking-wide ${
                ticket.destination_city.length < 1
                  ? "border-b-2 animate-pulse"
                  : ""
              } border-gray-500 pb-1 capitalize text-[#45EA69]`}
              value={ticket.destination_city}
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  destination_city: e.target.value,
                  short_code_destination: getShortCode(e.target.value),
                });
              }}
              placeholder="Destination"
            />
          </span>
        </div>
        <div className="flex justify-between text-sm md:text-base">
          <span>
            <div className="uppercase text-white/50">Departure</div>
            <input
              type="text"
              className={`text-xs font-light bg-transparent outline-none text-left  w-20 tracking-wide ${
                ticket.departure_time.length < 1
                  ? "border-b-2 animate-pulse"
                  : ""
              } border-gray-500 pb-1 capitalize text-[#45EA69]`}
              value={ticket.departure_time}
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  departure_time: e.target.value,
                });
              }}
              placeholder="eg: hh:mm"
            />
          </span>
          <span className="text-right">
            <div className="uppercase text-white/50">Airport Code</div>
            <input
              type="text"
              className={`text-xs font-light bg-transparent outline-none text-right  w-20 tracking-wide ${
                ticket.airport_code.length < 1 ? "border-b-2 animate-pulse" : ""
              } border-gray-500 pb-1 capitalize text-[#45EA69]`}
              value={ticket.airport_code}
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  airport_code: e.target.value,
                });
              }}
              placeholder="eg: CCU"
            />
          </span>
        </div>
        <hr className="border-white/20" />
        <div className="w-full flex justify-between items-end">
          <span className="text-sm md:text-base">
            <span className="text-[#45EA69] font-medium">Airline </span>
            <input
              type="text"
              className={`text-xs font-light bg-transparent outline-none text-center  w-20 tracking-wide ${
                ticket.airline.length < 1 ? "border-b-2 animate-pulse" : ""
              } border-gray-500 pb-1 capitalize text-[#45EA69]`}
              value={ticket.airline}
              placeholder="Indigo"
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  airline: e.target.value,
                });
              }}
            />
          </span>
          <span className="text-right">
            <span className="text-[#45EA69] font-medium">Passenger</span>

            <input
              type="number"
              className={`text-xs  font-light bg-transparent outline-none text-right  w-8 tracking-wide leading- ${
                ticket.passenger_number.length < 1
                  ? "border-b-2 animate-pulse"
                  : ""
              } border-gray-500 pb-1 capitalize text-gray-400`}
              value={ticket.passenger_number}
              onChange={(e) => {
                updateTicket({
                  ...ticket,
                  passenger_number: e.target.value,
                });
              }}
            />
          </span>
        </div>

        <div className="absolute top-1/2 -right-3 w-6 h-6 bg-blend-multiply bg-black  rounded-full"></div>

        {!ticket_done && (
          <button
            className="px-4 text-white capitalize border-2 animate-pulse bg-black/30 rounded-lg py-1 font-bold cursor-pointer "
            onClick={() => {
              confirm_ticket_submission();
            }}
          >
            Update Details
          </button>
        )}
        <hr className="border-white/20" />
        <section className="relative  flex flex-col gap-4">
          {!boarding_pass_enabled && (
            <span className="h-full absolute top-0 left-0 backdrop-blur-sm w-full flex justify-center items-center z-10 scale-110">
              Unlocks after getting boarding pass
            </span>
          )}
          <h2 className="w-full text-center text-[#45EA69] font-medium text-lg underline underline-offset-2 ">
            Boarding Pass
          </h2>
          <div className="flex w-full justify-between">
            <span className="flex flex-col">
              <label htmlFor="Cabin">Cabin</label>
              <input
                type="text"
                className={`text-xs  font-light bg-transparent outline-none text-left text-[#45EA69]  w-20 tracking-wide leading- ${
                  ticket.cabin.length < 1 ? "border-b-2 animate-pulse" : ""
                } border-gray-500 pb-1 capitalize `}
                value={ticket.cabin}
                placeholder="eg: Economy"
                onChange={(e) => {
                  updateTicket({
                    ...ticket,
                    cabin: e.target.value,
                  });
                }}
              />
            </span>
            <span className="flex flex-col">
              <label className="text-right" htmlFor="gate">
                Gate
              </label>
              <input
                type="text"
                className={`text-xs  font-light bg-transparent outline-none text-right text-[#45EA69]  w-20 tracking-wide leading- ${
                  ticket.gate_number.length < 1
                    ? "border-b-2 animate-pulse"
                    : ""
                } border-gray-500 pb-1 capitalize `}
                value={ticket.gate_number}
                placeholder="eg: 6E"
                onChange={(e) => {
                  updateTicket({
                    ...ticket,
                    gate_number: e.target.value,
                  });
                }}
              />
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="flex flex-col">
              <label htmlFor="boarding_time">Boarding Time</label>
              <input
                type="text"
                className={`text-xs  font-light bg-transparent outline-none text-left text-[#45EA69]  w-20 tracking-wide leading- ${
                  ticket.boarding_time.length < 1
                    ? "border-b-2 animate-pulse"
                    : ""
                } border-gray-500 pb-1 capitalize `}
                value={ticket.boarding_time}
                placeholder="Hh:mm(24hr)"
                onChange={(e) => {
                  updateTicket({
                    ...ticket,
                    boarding_time: e.target.value,
                  });
                }}
              />
            </span>
            <span className="flex flex-col">
              <label className="text-right" htmlFor="seat">
                Seat
              </label>
              <input
                type="text"
                className={`text-xs  font-light bg-transparent outline-none text-right text-[#45EA69]  w-20 tracking-wide leading- ${
                  ticket.seat_number.length < 1
                    ? "border-b-2 animate-pulse"
                    : ""
                } border-gray-500 pb-1 capitalize `}
                value={ticket.seat_number}
                placeholder="eg: 6E"
                onChange={(e) => {
                  updateTicket({
                    ...ticket,
                    seat_number: e.target.value,
                  });
                }}
              />
            </span>
          </div>
          <button
            className="px-4 text-white capitalize border-2 animate-pulse bg-black/30 rounded-lg py-1 font-bold cursor-pointer "
            onClick={() => {
              send_boarding_data(ticket);
            }}
          >
            Update Details
          </button>
        </section>
      </div>
    </div>
  );
};

export default Ticket_form;
