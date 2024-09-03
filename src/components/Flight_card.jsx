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
  return (
    <section className="bg-[#5E645F] w-full text-white px-4 rounded-3xl py-10 flex flex-col gap-5 relative">
      <div className="w-full flex  font-bold text-4xl uppercase tracking-wide relative">
        <span className="flex-grow flex flex-col gap-2">
          kol
          <span className="text-sm font-thin tracking-wide capitalize text-[#45EA69]">
            Kolkata
          </span>
        </span>
        <h1 className="w-36 text-sm lowercase flex-grow text-center relative">
          <img
            src="/ui/dotted-line.svg"
            alt=""
            className="right-0 -mt-4"
            width={400}
          />
          <span className="absolute left-0 right-0 top-4">2.17 hr</span>
        </h1>
        <span className="flex-grow flex flex-col text-right gap-2">
          bng
          <span className="text-sm font-thin tracking-wide capitalize text-[#45EA69]">
            Bangalore
          </span>
        </span>
      </div>
      <div className=" flex justify-between ">
        <span>
          <div className="uppercase text-white/40">Departure</div>
          <div>Evening</div>
        </span>
        <span className="text-right">
          <div className="uppercase text-white/30">Flight-no</div>
          <div>6E-634</div>
        </span>
      </div>
      <hr />
      <span className="bg-[#1D1D1F] aspect-square w-6 rounded-full absolute top-44 -left-3"></span>
      <span className="bg-[#1D1D1F] aspect-square w-6 rounded-full absolute top-44 -right-3"></span>
      <div className="w-full flex justify-between">
        <span className="">
          <span className="text-[#45EA69]">Airline </span>SpiceJet
        </span>
        <span>
          {/* price */}
          <span className="text-2xl font-bold">₹6134</span>
        </span>
      </div>
    </section>
  );
};

export default Flight_card;
