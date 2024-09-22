import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { heroBackground } from "../assets";
import Timeline from "../components/Timeline";
import ChatSection from "../components/ChatSection";

// const TimelineItem = ({ item }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="mb-8 relative"
//   >
//     <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
//     <div className="ml-8 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl">
//       <div className="bg-[#0D1425] p-4 rounded-lg">
//         <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//         <p className="text-gray-300">{item.description}</p>
//         {item.time && (
//           <p className="text-sm text-gray-400 mt-2">Time: {item.time}</p>
//         )}
//       </div>
//     </div>
//   </motion.div>
// );

// const Timeline = ({ data }) => (
//   <div className="space-y-6">
//     {data.map((item, index) => (
//       <TimelineItem key={index} item={item} />
//     ))}
//   </div>
// );

const Prediction_page = () => {
  const [open, toggleOpen] = useState(false);
  const location = useLocation();
  const jsonData = location.state;
  console.log(jsonData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Glowing orbs - hidden on small screens for better performance */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden sm:block">
        <motion.div
          className="absolute w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -75, 0],
            y: [0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-0 sm:px-4 py-8 sm:py-12 md:py-20 min-h-screen overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center font-['Orbitron'] leading-tight">
            Your Travel Assistant
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-0.5 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="bg-[#0D1425] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm bg-opacity-90">
            <Timeline data={jsonData} />
          </div>
        </motion.div>
      </main>

      {/* Floating action button for mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed right-4 bottom-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg z-50 "
        onClick={() => toggleOpen(!open)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H17.379C18.1746 16.5002 18.9375 16.8164 19.5 17.379L22.5 20.379V3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H3ZM21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V22.1895C24 22.3379 23.9559 22.483 23.8734 22.6063C23.7909 22.7297 23.6737 22.8258 23.5365 22.8825C23.3994 22.9392 23.2485 22.9539 23.1029 22.9248C22.9574 22.8957 22.8238 22.8241 22.719 22.719L18.4395 18.4395C18.1583 18.1582 17.7768 18.0001 17.379 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7957 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0Z"
            fill="white"
          />
          <path
            d="M4.5 5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71967C19.421 4.86032 19.5 5.05109 19.5 5.25C19.5 5.44891 19.421 5.63968 19.2803 5.78033C19.1397 5.92098 18.9489 6 18.75 6H5.25C5.05109 6 4.86032 5.92098 4.71967 5.78033C4.57902 5.63968 4.5 5.44891 4.5 5.25ZM4.5 9C4.5 8.80109 4.57902 8.61032 4.71967 8.46967C4.86032 8.32902 5.05109 8.25 5.25 8.25H18.75C18.9489 8.25 19.1397 8.32902 19.2803 8.46967C19.421 8.61032 19.5 8.80109 19.5 9C19.5 9.19891 19.421 9.38968 19.2803 9.53033C19.1397 9.67098 18.9489 9.75 18.75 9.75H5.25C5.05109 9.75 4.86032 9.67098 4.71967 9.53033C4.57902 9.38968 4.5 9.19891 4.5 9ZM4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12H12.75C12.9489 12 13.1397 12.079 13.2803 12.2197C13.421 12.3603 13.5 12.5511 13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75Z"
            fill="white"
          />
        </svg>
      </motion.button>
      <ChatSection isOpen={open} onClose={() => toggleOpen(false)} />
    </div>
  );
};

export default Prediction_page;
