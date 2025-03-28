import React, { useState, useEffect } from "react";
import "./CustomerSupport.scss";

const CustomerSupport = () => {
    const [messages, setMessages] = useState([
      { text: "Welcome to Customer Support! How can I assist you?", sender: "bot" },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [chatData, setChatData] = useState({});
  
    // Load chat dataset dynamically
    useEffect(() => {
      fetch("/src/data/chatData.json")
        .then((res) => res.json())
        .then((data) => setChatData(data))
        .catch((error) => console.error("Error loading chat data:", error));
    }, []);
  
    const handleSendMessage = () => {
      if (inputMessage.trim() === "") return;
  
      const userMessage = { text: inputMessage, sender: "user" };
      setMessages([...messages, userMessage]);
  
      const lowerCaseMessage = inputMessage.toLowerCase();
      setIsTyping(true);
  
      setTimeout(() => {
        const botResponse = chatData[lowerCaseMessage] || "I'm not sure how to respond to that. Can you rephrase?";
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
  
      setInputMessage("");
    };

  return (
    <div className="customer-support">
      <h1>💬 Customer Support</h1>
      <p>We're here to help! Select a category and chat with us.</p>

      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="chat-message bot typing">Typing...</div>}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

      <div className="contact-options">
        <p>📞 Call us: <span>+91 98765 43210</span></p>
        <p>📧 Email: <span>support@example.com</span></p>
        <p>💻 Live Chat: Available 24/7</p>
      </div>
    </div>
  );
};

export default CustomerSupport;
