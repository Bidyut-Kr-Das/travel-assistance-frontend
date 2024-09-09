import React from "react";

const Test_component = () => {
  return (
    <div className="w-64 h-48 bg-gray-200 relative">
      <div
        style={{
          WebkitMask: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.5) 30%)`,
          mask: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.5) 30%)`,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          WebkitMask: `radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.5) 30%)`,
          mask: `radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.5) 30%)`,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default Test_component;
