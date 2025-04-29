import React from "react";
import { Search } from "lucide-react";


const dummyConversations = [
    {
      id: "1",
      name: "Helping Hands Org",
      avatar: "/placeholder.svg", // Replace with an actual avatar image path
      lastMessage: "Thanks for reaching out! We’d love your help.",
      timeAgo: "5 minutes ago",
    },
    {
      id: "2",
      name: "Wildlife Alliance",
      avatar: "/placeholder.svg", // Replace with an actual avatar image path
      lastMessage: "When can you start volunteering with us?",
      timeAgo: "2 hours ago",
    },
    {
      id: "3",
      name: "Literacy First",
      avatar: "/placeholder.svg", // Replace with an actual avatar image path
      lastMessage: "Thanks for your application. We’ll review it soon.",
      timeAgo: "1 day ago",
    },
    {
      id: "4",
      name: "Community Food Network",
      avatar: "/placeholder.svg", // Replace with an actual avatar image path
      lastMessage: "Can you make it to our volunteer orientation tomorrow?",
      timeAgo: "3 days ago",
    },
    {
      id: "5",
      name: "Animal Rescue Team",
      avatar: "/placeholder.svg", // Replace with an actual avatar image path
      lastMessage: "We’re excited to have you help with the rescue operations.",
      timeAgo: "1 week ago",
    },
  ];

const ConversationList = ({ conversations, selectedId, onSelectConversation }) => {
  return (
    <div
      className="border-end bg-white d-flex flex-column"
      style={{ width: "300px", height: "100vh" }}
    >
      {/* Header & Search */}
      <div className="p-3 border-bottom">
       
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <Search size={16} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search conversations"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="overflow-auto flex-grow-1">
        {dummyConversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`w-100 text-start border-0 px-3 py-3 d-flex align-items-start gap-3 ${
              selectedId === conv.id ? "bg-light" : "bg-white"
            }`}
            style={{ cursor: "pointer" }}
          >
            <img
              src={conv.avatar || "/placeholder.svg"}
              alt={conv.name}
              className="rounded-circle"
              width={40}
              height={40}
            />
            <div className="flex-grow-1">
              <div className="fw-semibold">{conv.name}</div>
              <div className="text-muted small text-truncate" style={{ maxWidth: "180px" }}>
                {conv.lastMessage}
              </div>
            </div>
            <div className="small text-muted">{conv.timeAgo}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
