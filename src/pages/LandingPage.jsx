import React, { useState, useEffect } from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { toast } from "sonner";

//import apikey
import apiKey from "../api/apiKey";

const LandingPage = () => {
  const [form, setForm] = useState({
    source: "",
    destination: "",
    date: null,
    time: "",
  });

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    // Trigger the background transition after a short delay
    const timer = setTimeout(() => setBackgroundLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  //method to send the data to server(flask)
  const sendData = async () => {
    await apiKey.post("/predict", {
      source: form.source,
      destination: form.destination,
      date: form.date.toString(),
      time: form.time,
    });
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden transition-all duration-2000 ease-in-out ${
        backgroundLoaded
          ? "bg-gradient-to-b from-blue-900 to-black"
          : "bg-black"
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(form);
          toast.promise(sendData, {
            loading: "Predicting...",
            success: "Prediction Successful",
            error: "Prediction Failed, Can not connect to the server",
          });
        }}
      >
        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1 }} // Delay the content fade-in
        >
          <motion.h1
            className="text-4xl font-bold mb-8 text-center text-blue-300"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Track Your Flight
          </motion.h1>
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="space-y-4">
              {/* From Input */}
              <motion.div
                className="relative"
                variants={fadeIn}
                transition={{ duration: 0.3, delay: 1.6 }}
              >
                <label
                  htmlFor="from"
                  className="text-sm text-blue-300 mb-1 block"
                >
                  From
                </label>
                <div className="flex items-center bg-gray-700 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
                  <FaPlaneDeparture className="w-5 h-5 mr-3 text-blue-400" />
                  <input
                    id="from"
                    type="text"
                    value={form.source}
                    onChange={(e) =>
                      setForm({ ...form, source: e.target.value })
                    }
                    placeholder="Enter origin"
                    className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                  />
                </div>
              </motion.div>
              {/* To Input */}
              <motion.div
                className="relative"
                variants={fadeIn}
                transition={{ duration: 0.3, delay: 1.8 }}
              >
                <label
                  htmlFor="to"
                  className="text-sm text-blue-300 mb-1 block"
                >
                  To
                </label>
                <div className="flex items-center bg-gray-700 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
                  <FaPlaneArrival className="w-5 h-5 mr-3 text-blue-400" />
                  <input
                    id="to"
                    type="text"
                    value={form.destination}
                    onChange={(e) =>
                      setForm({ ...form, destination: e.target.value })
                    }
                    placeholder="Enter destination"
                    className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                  />
                </div>
              </motion.div>
              {/* Date and Time Pickers */}
              <motion.div
                className="flex space-x-4"
                variants={fadeIn}
                transition={{ duration: 0.3, delay: 2 }}
              >
                <div className="w-1/2">
                  <label
                    htmlFor="date"
                    className="text-sm text-blue-300 mb-1 block"
                  >
                    Date
                  </label>
                  <div className="flex items-center bg-gray-700 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
                    <FiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                    <DatePicker
                      id="date"
                      selected={form.date}
                      onChange={(date) => setForm({ ...form, date })}
                      dateFormat="dd MMM yyyy"
                      placeholderText="Select Date"
                      className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="time"
                    className="text-sm text-blue-300 mb-1 block"
                  >
                    Time
                  </label>
                  <div className="relative bg-gray-700 rounded-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiClock className="w-5 h-5 text-blue-400" />
                    </div>
                    <input
                      id="time"
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className="bg-transparent text-white placeholder-gray-400 outline-none w-full pl-10 pr-3 py-3 rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Predict Button */}
            <motion.button
              className="mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg w-full py-3 text-white font-semibold text-lg shadow-md relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: 2.2 }}
              type="submit"
            >
              <span className="relative z-10">Find Best Flights</span>
              <span className="absolute inset-0 h-full w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </motion.button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default LandingPage;
