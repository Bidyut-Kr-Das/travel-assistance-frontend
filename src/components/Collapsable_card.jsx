import React, { useState } from "react";

const Collapsable_card = ({
  section_name,
  title,
  button_name,
  function_passed,
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
      {/* -----Card----- */}
      <div className="pb-8 w-[90%]">
        <p className="text-lg text-white animate-pulse  mb-2 -mt-1 ">
          {section_name}
        </p>
        <div className="bg-gray-800 rounded-lg shadow p-4  flex justify-between">
          <div className="flex justify-center items-center">
            <h3 className="font-bold text-white">
              {title || "This is title section"}
            </h3>
          </div>
          <button
            className="px-4 text-white capitalize border-2 animate-pulse bg-black/30 rounded-md py-1"
            onClick={function_passed || ""}
          >
            {button_name || "yes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collapsable_card;
