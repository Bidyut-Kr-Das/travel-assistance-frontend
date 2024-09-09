import React from "react";

const Flight_card = ({
  source_city,
  destination_city,
  duration,
  departure_time,
  flight_no,
  airline,
  price,
}) => {
  // Helper function to safely get the first 3 characters
  const getShortCode = (city) =>
    city && typeof city === "string" ? city.slice(0, 3).toUpperCase() : "";

  return (
    <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] w-full max-w-md mx-auto text-white px-6 rounded-3xl py-8 flex flex-col gap-6 relative transition-all duration-300 overflow-hidden transform hover:-translate-y-1 h-64">
      <div className="w-full flex font-bold text-3xl md:text-4xl uppercase tracking-wide relative">
        <span className="flex-grow flex flex-col gap-1">
          <span className="transition-all duration-300 hover:scale-105">
            {getShortCode(source_city)}
          </span>
          <span className="text-xs font-light tracking-wide capitalize text-[#45EA69]">
            {source_city || "N/A"}
          </span>
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
          <span className="absolute left-0 right-0 top-8 text-[#45EA69] font-medium">
            {duration || "N/A"} hrs
          </span>
        </span>
        <span className="flex-grow flex flex-col text-right gap-1">
          <span className="transition-all duration-300 hover:scale-105">
            {getShortCode(destination_city)}
          </span>
          <span className="text-xs font-light tracking-wide capitalize text-[#45EA69]">
            {destination_city || "N/A"}
          </span>
        </span>
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <span>
          <div className="uppercase text-white/50">Departure</div>
          <div className="font-semibold">{departure_time || "N/A"}</div>
        </span>
        <span className="text-right">
          <div className="uppercase text-white/50">Flight-no</div>
          <div className="font-semibold">{flight_no || "N/A"}</div>
        </span>
      </div>
      <hr className="border-white/20" />
      <div className="w-full flex justify-between items-end">
        <span className="text-sm md:text-base">
          <span className="text-[#45EA69] font-medium">Airline </span>
          <span className="font-semibold">{airline || "N/A"}</span>
        </span>
        <span className="text-right">
          <span className="text-2xl md:text-3xl font-bold">
            {price ? `₹${price}` : "N/A"}
          </span>
        </span>
      </div>
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-gray-800 rounded-full"></div>
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gray-800 rounded-full"></div>
    </div>
  );
};

export default Flight_card;
