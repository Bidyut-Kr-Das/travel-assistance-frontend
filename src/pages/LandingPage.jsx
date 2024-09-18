import React, { useState, useEffect, useRef } from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { toast } from "sonner";
import apiKey from "../api/apiKey";
import { useNavigate } from "react-router-dom";

// Import new assets (you'll need to create or source these)
import { heroBackground } from "../assets";

const LandingPage = () => {
  // ... (keep all existing state and functions)

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
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating planets/orbs */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-500 rounded-full opacity-40"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-white text-xl font-bold">NaviFly</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            AIM
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            How to use
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About us
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-300">
            Get Started
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Premium
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white">
            Guiding you through every step
            <br />
            of your journey with <span className="underline">NaviFly</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unleash the power of MI within NaviFly. Upgrade your journey
            smoother with
            <br />
            NaviFly, the open MI travel assistant.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold">
            LETS READY FOR TAKE OFF
          </button>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-3xl">
            <div className="bg-[#0D1425] rounded-3xl p-8">
              <div className="h-8 bg-[#1C2331] rounded-t-2xl mb-4"></div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.promise(sendData, {
                    loading: "Predicting...",
                    success: "Prediction Successful",
                    error: "Prediction Failed, Cannot connect to the server",
                  });
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* From */}
                  <div className="relative" ref={sourceRef}>
                    <label
                      htmlFor="from"
                      className="text-sm text-gray-400 mb-1 block"
                    >
                      From
                    </label>
                    <div className="flex items-center bg-[#1C2331] rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500">
                      <FaPlaneDeparture className="w-5 h-5 mr-3 text-purple-500" />
                      <input
                        id="from"
                        type="text"
                        value={form.source}
                        onChange={handleSourceChange}
                        placeholder="Enter origin"
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full"
                        autoComplete="off"
                      />
                    </div>
                    {/* Source suggestions */}
                  </div>

                  {/* To */}
                  <div className="relative" ref={destRef}>
                    <label
                      htmlFor="to"
                      className="text-sm text-gray-400 mb-1 block"
                    >
                      To
                    </label>
                    <div className="flex items-center bg-[#1C2331] rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500">
                      <FaPlaneArrival className="w-5 h-5 mr-3 text-purple-500" />
                      <input
                        id="to"
                        type="text"
                        value={form.destination}
                        onChange={handleDestChange}
                        placeholder="Enter destination"
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full"
                        autoComplete="off"
                      />
                    </div>
                    {/* Destination suggestions */}
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <label
                      htmlFor="date"
                      className="text-sm text-gray-400 mb-1 block"
                    >
                      Date
                    </label>
                    <div className="flex items-center bg-[#1C2331] rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500">
                      <FiCalendar className="w-5 h-5 mr-3 text-purple-500" />
                      <DatePicker
                        id="date"
                        selected={form.date}
                        onChange={(date) => setForm({ ...form, date })}
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full"
                        placeholderText="Select date"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <label
                      htmlFor="time"
                      className="text-sm text-gray-400 mb-1 block"
                    >
                      Time
                    </label>
                    <div className="flex items-center bg-[#1C2331] rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500">
                      <FiClock className="w-5 h-5 mr-3 text-purple-500" />
                      <input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-105"
                  >
                    Predict
                  </button>
                </div>
              </form>

              {/* MI is generating... */}
              <div className="mt-4 bg-[#1C2331] rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-white">MI is generating</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plane image */}
        {/* <img
          src={planeImage}
          alt="Plane"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-3xl"
        /> */}
      </div>
    </div>
  );
};

export default LandingPage;
