import React, { useState } from "react";

const Collapsable_card = ({
  section_name,
  title,
  button_name,
  function_passed,
  isLast = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationShared, setLocationShared] = useState(false);

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        setLocationShared(true);
        if (function_passed) {
          function_passed();
        }
      });
    }
  };

  return (
    <div className="flex ">
      <div
        className={`flex flex-col items-center ${
          section_name ? "mr-4" : "mr-5 ml-[6px]"
        }`}
      >
        {section_name && (
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        )}
        {!isLast && (
          <div className="w-1 h-full bg-blue-300 !overflow-hidden"></div>
        )}
      </div>
      {/* -----Card----- */}
      <div className="pb-8 w-[90%]">
        <p className="text-lg text-[#00BFFF] animate-pulse  mb-2 -mt-1 ">
          {section_name}
        </p>
        <div className=" p-4  flex justify-between bg-gray-900 rounded-lg shadow-lg border border-blue-500">
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold text-[#00BFFF] font-['Orbitron'] tracking-wide ">
              {title || "This is title section"}
            </h3>
          </div>
          <button
            className={`px-4 text-white capitalize border-2 ${
              locationShared
                ? "bg-green-500  border-green-500"
                : "bg-black/30  border-blue-500"
            } shadow-lg  rounded-md py-1`}
            onClick={handleLocationAccess}
          >
            {locationShared ? "Done" : button_name || "Allow Location"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collapsable_card;
