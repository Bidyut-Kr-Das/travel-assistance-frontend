import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { heroBackground } from "../assets";
import Timeline from "../components/Timeline";

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

      <main className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-20 min-h-screen overflow-auto">
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
        className="fixed right-4 bottom-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg z-50 sm:hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Prediction_page;
