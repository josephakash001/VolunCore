import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgLogNavbar from "../Components/OrgLoginNavBar";
import Footer from "../Components/Footer";
import OrgSidebar from "../Components/OrgSideBar";

const dummyConversations = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Looking forward to the event!",
    time: "2h ago",
    messages: [
      { sender: "Alice", content: "Hi, when is the next event?", time: "10:30 AM" },
      { sender: "Org", content: "This Saturday at 10 AM", time: "10:32 AM" },
      { sender: "Alice", content: "Looking forward to the event!", time: "10:35 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob Mathews",
    lastMessage: "Got it, thanks!",
    time: "1d ago",
    messages: [
      { sender: "Bob", content: "Can I volunteer this weekend?", time: "9:15 AM" },
      { sender: "Org", content: "Yes, you're confirmed!", time: "9:20 AM" },
      { sender: "Bob", content: "Got it, thanks!", time: "9:22 AM" },
    ],
  },
];

export default function OrgMessagePage() {
  const [selectedConversation, setSelectedConversation] = useState(dummyConversations[0]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSend = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...selectedConversation.messages, { sender: "Org", content: newMessage, time: "Now" }];
      const updatedConversation = { ...selectedConversation, messages: updatedMessages };
      setSelectedConversation(updatedConversation);
      setNewMessage("");
    }
  };

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
      <OrgLogNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container-fluid my-4">
          <div className="row">
            {/* Conversation List */}
            <div className="col-md-4 border-end" data-aos="fade-right">
              <h5 className="mb-3">Messages</h5>
              <ul className="list-group">
                {dummyConversations.map((conv) => (
                  <li
                    key={conv.id}
                    className={`list-group-item list-group-item-action ${
                      selectedConversation.id === conv.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedConversation(conv)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex justify-content-between">
                      <strong>{conv.name}</strong>
                      <small>{conv.time}</small>
                    </div>
                    <small className="text-muted">{conv.lastMessage}</small>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat Panel */}
            <div className="col-md-8 d-flex flex-column" data-aos="fade-left">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h5 className="mb-0">{selectedConversation.name}</h5>
                <span className="text-muted small">Conversation</span>
              </div>
              <div className="flex-grow-1 overflow-auto mb-3" style={{ maxHeight: "60vh" }}>
                {selectedConversation.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${msg.sender === "Org" ? "text-end" : "text-start"}`}
                  >
                    <div
                      className={`d-inline-block px-3 py-2 rounded-pill ${
                        msg.sender === "Org" ? "bg-primary text-white" : "bg-light"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <div className="text-muted small mt-1">{msg.time}</div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button className="btn btn-primary" onClick={handleSend}>
                  Send
                </button>
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
}
