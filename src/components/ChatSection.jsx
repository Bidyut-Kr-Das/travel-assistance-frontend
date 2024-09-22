import React, { useState } from "react";
import axios from "axios";
import apiKey from "../api/apiKey";
import ReactMarkdown from "react-markdown";

const ChatSection = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!message) return;

    const userMessage = { sender: "user", text: message };

    setChatHistory([...chatHistory, userMessage]);

    try {
      const res = await apiKey.post("/chat", {
        message,
      });
      // console.log(res.data);
      const apiResponse = {
        sender: "api",
        text: res.data || "No reply received",
      };

      apiResponse.text = apiResponse.text.replace(/ \* /g, "<br /> <br />");

      setChatHistory((prevHistory) => [...prevHistory, apiResponse]);
    } catch (error) {
      const errorMessage = { sender: "api", text: "Error sending message" };
      setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
    }

    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bottom-0 sm:bottom-4 right-0 sm:right-4 flex items-center justify-center z-50 ">
      <div className="relative bg-gray-800 w-full max-w-lg p-3 sm:p-6 rounded-lg shadow-lg text-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-blue-300 flex w-full justify-between">
          Ask your Queries
          <div className="cursor-pointer" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </div>
        </h2>

        <div className="h-[calc(100vh-20rem)] overflow-y-auto mb-4  rounded-lg p-4 bg-transparent chat-section">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-2 p-3 rounded-lg max-w-64 sm:max-w-xs shadow-md  ${
                chat.sender === "user"
                  ? "ml-auto bg-blue-500 text-gray-100"
                  : "mr-auto bg-gray-500 text-gray-100"
              }`}
            >
              <div className={` font-bold`}>
                {chat.sender === "user" ? "You" : "Navifly"}
              </div>
              <ReactMarkdown>{chat.text}</ReactMarkdown>
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
