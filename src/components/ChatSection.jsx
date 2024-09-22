import React, { useState } from "react";
// import axios from "axios";
import apiKey from "../api/apiKey";

const ChatSection = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!message) return;

    const userMessage = { sender: "user", text: message };

    setChatHistory([...chatHistory, userMessage]);

    try {
      const res = await apiKey.post("http://localhost:8080/chat", { message });
      const apiResponse = {
        sender: "api",
        text: res.data.reply || "No reply received",
      };

      setChatHistory((prevHistory) => [...prevHistory, apiResponse]);
    } catch (error) {
      const errorMessage = { sender: "api", text: "Error sending message" };
      setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
    }

    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-gray-800 w-full max-w-lg p-3 sm:p-6 rounded-lg shadow-lg text-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-blue-300">
          Ask your Queries
        </h2>

        <div className="h-[calc(100vh-20rem)] overflow-y-auto mb-4  rounded-lg p-4 bg-transparent chat-section">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-2 p-3 rounded-lg max-w-64 sm:max-w-xs shadow-md  ${
                chat.sender === "user"
                  ? "ml-auto bg-[#00BF9D] text-gray-100"
                  : "mr-auto bg-[#a671ea] text-gray-100"
              }`}
            >
              <div className={` font-bold`}>
                {chat.sender === "user" ? "You" : "Navifly"}
              </div>
              {chat.text}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center space-x-2 relative"
        >
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // rows={1}
            className="flex-grow bg-gray-700 text-gray-100 shadow-md rounded-lg p-2 focus:outline-none resize-none pr-16 "
            placeholder="Type your message"
          ></textarea>
          <button
            type="submit"
            className="absolute right-0 h-full aspect-square flex justify-center items-center b"
            onClick={handleSendMessage}
          >
            <img src="/ui/send.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSection;
