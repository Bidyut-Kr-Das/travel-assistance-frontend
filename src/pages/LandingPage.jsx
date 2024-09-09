import React, { useState, useEffect, useRef } from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { toast } from "sonner";

import apiKey from "../api/apiKey";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [form, setForm] = useState({
    source: "",
    destination: "",
    date: null,
    time: "",
    stops: "zero",
    class: "Economy",
    airline: "Air_India",
  });

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [showSourceSuggestions, setShowSourceSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);

  const sourceRef = useRef(null);
  const destRef = useRef(null);

  const navigate = useNavigate();

  const states = [
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Bhopal",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setBackgroundLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sourceRef.current && !sourceRef.current.contains(event.target)) {
        setShowSourceSuggestions(false);
      }
      if (destRef.current && !destRef.current.contains(event.target)) {
        setShowDestSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sendData = async () => {
    const response = await apiKey.post("/predict", {
      source_city: form.source,
      destination_city: form.destination,
      date: form.date.toString(),
      time: form.time,
      stops: form.stops,
      class: form.class,
      airline: form.airline,
    });
    navigate("/prediction", { state: response.data });
  };

  const handleSourceChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, source: value });
    const filteredSuggestions = states.filter((state) =>
      state.toLowerCase().startsWith(value.toLowerCase())
    );
    setSourceSuggestions(filteredSuggestions);
    setShowSourceSuggestions(true);
  };

  const handleDestChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, destination: value });
    const filteredSuggestions = states.filter((state) =>
      state.toLowerCase().startsWith(value.toLowerCase())
    );
    setDestSuggestions(filteredSuggestions);
    setShowDestSuggestions(true);
  };

  const handleSuggestionClick = (suggestion, field) => {
    setForm({ ...form, [field]: suggestion });
    if (field === "source") {
      setShowSourceSuggestions(false);
    } else {
      setShowDestSuggestions(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 transition-all duration-2000 ease-in-out">
        <form
          onSubmit={(e) => {
            sendData();
            e.preventDefault();
            toast.promise(sendData, {
              loading: "Predicting...",
              success: "Prediction Successful",
              error: "Prediction Failed, Cannot connect to the server",
            });
          }}
        >
          <motion.div
            className="w-full max-w-md"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.h1
              className="text-4xl font-bold mb-8 text-center text-white animate-pulse oldenburg-regular"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Track Your Flight
            </motion.h1>
            <motion.div
              className="bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white border-opacity-30"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="relative"
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: 1.6 }}
                  ref={sourceRef}
                >
                  <label
                    htmlFor="from"
                    className="text-sm text-white mb-1 block"
                  >
                    From
                  </label>
                  <div className="flex items-center bg-gray-900 bg-opacity-50 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-white hover:bg-opacity-70">
                    <FaPlaneDeparture className="w-5 h-5 mr-3 text-white" />
                    <input
                      id="from"
                      type="text"
                      value={form.source}
                      onChange={handleSourceChange}
                      placeholder="Enter origin"
                      className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                      autoComplete="off"
                    />
                  </div>
                  {showSourceSuggestions && sourceSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-gray-900 mt-1 rounded-lg shadow-lg overflow-y-auto max-h-40">
                      {sourceSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                          onClick={() =>
                            handleSuggestionClick(suggestion, "source")
                          }
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div
                  className="relative"
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: 1.8 }}
                  ref={destRef}
                >
                  <label htmlFor="to" className="text-sm text-white mb-1 block">
                    To
                  </label>
                  <div className="flex items-center bg-gray-900 bg-opacity-50 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-white hover:bg-opacity-70">
                    <FaPlaneArrival className="w-5 h-5 mr-3 text-white" />
                    <input
                      id="to"
                      type="text"
                      value={form.destination}
                      onChange={handleDestChange}
                      placeholder="Enter destination"
                      className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                      autoComplete="off"
                    />
                  </div>
                  {showDestSuggestions && destSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-gray-900 mt-1 rounded-lg shadow-lg overflow-y-auto max-h-40">
                      {destSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                          onClick={() =>
                            handleSuggestionClick(suggestion, "destination")
                          }
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div
                  className="flex space-x-4"
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: 2 }}
                >
                  <div className="relative w-full">
                    <label
                      htmlFor="date"
                      className="text-sm text-white mb-1 block"
                    >
                      Date
                    </label>
                    <div className="flex items-center bg-gray-900 bg-opacity-50 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-white hover:bg-opacity-70">
                      <FiCalendar className="w-5 h-5 mr-3 text-white" />
                      <DatePicker
                        id="date"
                        selected={form.date}
                        onChange={(date) => setForm({ ...form, date })}
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                        placeholderText="Select date"
                      />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="time"
                      className="text-sm text-white mb-1 block"
                    >
                      Time
                    </label>
                    <div className="flex items-center bg-gray-900 bg-opacity-50 rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-white hover:bg-opacity-70">
                      <FiClock className="w-5 h-5 mr-3 text-white" />
                      <input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8"
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: 2.8 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-white/80 text-black py-3 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-blue-400 transform hover:scale-105"
                  >
                    Predict
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
