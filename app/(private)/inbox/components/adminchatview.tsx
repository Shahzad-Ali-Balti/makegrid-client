// components/AdminChatView.tsx
import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import SentMessage from "./sent-message";
import ReceivedMessage from "./recieved-message";

interface Message {
  _id: string;
  text: string;
  sender: "user" | "bot";
  createdAt: string;
  audioUrl?: string;
}

const AdminChatView = ({ userId }: { userId: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!userId) return;

    axiosInstance
      .get(`/api/chat-data/messages/${userId}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Failed to fetch messages:", err));
  }, [userId]);

  return (
    <div className="space-y-4">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No chats available</p>
      ) : (
        messages.map((message) =>
          message.sender === "user" ? (
              <SentMessage key={message._id} text={message.text} />
            
          ) : (
            <ReceivedMessage key={message._id} text={message.text} />
          )
        )
      )}
    </div>
  );
  
};

export default AdminChatView;
