import React, { useEffect, useRef } from "react";
import { format } from "date-fns";

export function MessageList({ messages, currentUserId }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Prevent auto scroll on first mount
    const hasMounted = messagesEndRef.current?.dataset?.mounted === "true";
    
    if (hasMounted) {
    //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      messagesEndRef.current.dataset.mounted = "true";
    }
  }, [messages])

  const groupedMessages = messages.reduce((groups, message) => {
    const messageDate = new Date(message.timestamp);
    const dateString = format(messageDate, "MMMM d, yyyy");

    const existingGroup = groups.find((group) => group.date === dateString);
    if (existingGroup) {
      existingGroup.messages.push(message);
    } else {
      groups.push({ date: dateString, messages: [message] });
    }

    return groups;
  }, []);

  return (
    <div className="flex-grow-1 overflow-auto p-3 bg-white" style={{ maxHeight: "80vh" }}>
      {groupedMessages.map((group) => (
        <div key={group.date} className="mb-4">
          <div className="text-center position-relative mb-3">
            <span className="bg-white px-2 text-muted small position-relative z-1">
              {group.date}
            </span>
            <div className="position-absolute top-50 start-0 end-0 border-bottom" style={{ zIndex: 0 }}></div>
          </div>

          {group.messages.map((message) => {
            const isOwn = message.senderId === currentUserId;
            return (
              <div
                key={message.id}
                className={`d-flex mb-3 ${isOwn ? "flex-row-reverse" : ""}`}
              >
                <img
                  src={message.senderAvatar || ""}
                  alt={message.senderName}
                  className="rounded-circle me-2"
                  style={{ width: 32, height: 32 }}
                />
                <div
                  className={`p-2 rounded ${
                    isOwn ? "bg-primary text-white" : "bg-light"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  <div>{message.content}</div>
                  <div
                    className={`small mt-1 ${
                      isOwn ? "text-white-50" : "text-muted"
                    }`}
                  >
                    {format(new Date(message.timestamp), "p")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div ref={messagesEndRef} data-mounted="false" />
    </div>
  );
}
