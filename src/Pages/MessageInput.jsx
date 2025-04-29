import React, { useState } from "react";
import { Paperclip, SendHorizonal, Smile } from "lucide-react";

export function MessageInput({ onSendMessage, disabled = false }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;
    onSendMessage(message.trim());
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="border-top p-3 bg-light">
      <div className="d-flex gap-2">
        <div className="flex-grow-1 position-relative">
          <textarea
            className={`form-control pe-5 ${disabled ? "opacity-50" : ""}`}
            placeholder="Type a message..."
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={disabled}
          ></textarea>
          <div className="position-absolute end-0 bottom-0 d-flex align-items-center pe-2 pb-2 gap-1">
            <button type="button" className="btn btn-light btn-sm" disabled={disabled}>
              <Paperclip size={16} />
            </button>
            <button type="button" className="btn btn-light btn-sm" disabled={disabled}>
              <Smile size={16} />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary d-flex align-items-center justify-content-center"
          style={{ width: "4rem", height: "4rem" }}
          disabled={disabled || !message.trim()}
        >
          <SendHorizonal size={20} />
        </button>
      </div>
    </form>
  );
}
