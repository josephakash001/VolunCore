import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/LoginNavBar";
import ConversationList from "./ConversationList";

const dummyMessages = [
  {
    id: "m1",
    senderId: "user123",
    senderName: "You",
    senderAvatar: "",
    timestamp: new Date().toISOString(),
    content: "Hello, I’m interested in volunteering!",
  },
  {
    id: "m2",
    senderId: "org456",
    senderName: "Helping Hands Org",
    senderAvatar: "",
    timestamp: new Date().toISOString(),
    content: "Thanks for reaching out! We’d love your help.",
  },
];

const VolunMessagePage = () => {
  const [messages, setMessages] = useState(dummyMessages);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: `m${messages.length + 1}`,
      senderId: "user123",
      senderName: "You",
      senderAvatar: "",
      timestamp: new Date().toISOString(),
      content,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
        <ConversationList />
        <div className="flex-grow-1"></div>
        <div className="container py-4">
          <div className="mb-4">
            <h1 className="h3" data-aos="fade-up" data-aos-duration="800">
              Messages
            </h1>
            <p className="text-muted" data-aos="fade-up" data-aos-duration="1000">
              Communicate with organizations about volunteer opportunities
            </p>
          </div>
          <div
            className="card shadow-sm"
            style={{ height: "75vh" }}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="card-body d-flex flex-column p-0">
              {/* Header */}
              <div
                className="border-bottom p-3 d-flex align-items-center justify-content-between bg-light"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/placeholder.svg"
                    alt="avatar"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <div className="fw-bold">Helping Hands Org</div>
                    <div className="text-muted small">Organization</div>
                  </div>
                </div>
                <button className="btn btn-light btn-sm">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
              </div>

              {/* Messages */}
              <div
                className="flex-grow-1 overflow-auto px-3 pt-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <MessageList messages={messages} currentUserId="user123" />
              </div>

              {/* Input */}
              <div
                className="border-top bg-light"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <MessageInput onSendMessage={handleSendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
};

export default VolunMessagePage;
