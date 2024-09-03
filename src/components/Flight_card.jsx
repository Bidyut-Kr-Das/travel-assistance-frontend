import React from "react";

const Flight_card = () => {
  return (
    <section className="bg-white/10 w-full text-white px-4 rounded-lg pt-10">
      <div className="w-full flex px-2 font-bold text-2xl uppercase tracking-widest relative">
        <span className="flex-grow flex flex-col  gap-2">
          kol
          <span className="text-xs font-thin tracking-wide capitalize">
            Kolkata
          </span>
        </span>
        <h1 className="text-sm lowercase flex-grow text-center">2.17 hr</h1>
        <span className="flex-grow flex flex-col text-right gap-2">
          bng
          <span className="text-xs font-thin tracking-wide capitalize">
            Bangalore
          </span>
        </span>
        <span className="absolute -top-[4.5rem] w-full -left-2 flex flex-col justify-center items-center">
          <img
            src="/ui/dotted-plane.svg"
            alt=""
            className="flex justify-center items-center w-40"
          />
        </span>
        <img
          src="/ui/green-glow.svg"
          alt=""
          className="absolute top-1 left-[4.9rem]"
        />
        <img
          src="/ui/green-glow.svg"
          alt=""
          className="absolute top-1 right-[5.3rem]"
        />
      </div>
    </section>
  );
};

export default Flight_card;
