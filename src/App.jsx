import React, { useState } from "react";
import { FiCalendar, FiClock } from "react-icons/fi"; // Calendar and clock icons
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa"; // Airplane icons
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"; // Import time picker library
import Flight_card from "./components/Flight_card";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [fromLabel, setFromLabel] = useState("From");
  const [toLabel, setToLabel] = useState("To");
  const [selectedTime, setSelectedTime] = useState("10:00"); // Initialize selected time

  return (
    <>
      <img
        src="/mainbg1.jpg"
        alt="Background"
        className="w-full absolute top-0 left-0 z-0"
      />
      <Flight_card />
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-4 relative z-20">
        <div className="relative w-full">
          <h1 className="text-3xl font-bold text-black">Track Your Flight</h1>
          {/* Place your background design or image cutout here */}
        </div>
        <div className="w-full mt-16">
          {/* From Input */}
          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between mb-4">
            <span className="flex items-center">
              <FaPlaneDeparture className="w-6 h-6 mr-2" />
              {fromLabel}
            </span>
            <input
              type="text"
              placeholder="Gujarat"
              className="bg-transparent text-gray-400 outline-none w-24"
              onChange={(e) => setFromLabel(e.target.value)}
            />
          </div>
          {/* To Input */}
          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between mb-4">
            <span className="flex items-center">
              <FaPlaneArrival className="w-6 h-6 mr-2" />
              {toLabel}
            </span>
            <input
              type="text"
              placeholder="Mumbai"
              className="bg-transparent text-gray-400 outline-none w-24"
              onChange={(e) => setToLabel(e.target.value)}
            />
          </div>
          {/* Date and Time Pickers */}
          <div className="flex justify-between mb-6">
            <div className="bg-gray-800 rounded-lg p-4 flex items-center w-1/2 mr-2">
              <FiCalendar className="w-6 h-6 mr-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMMM"
                placeholderText="Select Date"
                className="bg-transparent text-gray-400 outline-none w-full"
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center w-1/2 ml-2">
              <FiClock className="w-6 h-6 mr-2" />
              <TimePicker
                value={selectedTime}
                onChange={setSelectedTime}
                className="react-time-picker"
              />
            </div>
          </div>
          {/* Predict Button */}
          <button className="bg-blue-500 rounded-full w-full py-4 text-white font-semibold hover:bg-blue-600">
            Predict best Flights
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
