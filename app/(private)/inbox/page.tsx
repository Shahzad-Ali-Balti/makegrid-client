"use client"

import { useState } from "react"
import PageHeader from "@/components/page-header/page-header";

interface Conversation {
  id: number
  name: string
}

const mockConversations: Conversation[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "AI Assistant" },
]

const ChatPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [message, setMessage] = useState<string>("")

  const handleSendMessage = () => {
    if (!message.trim()) return
    console.log("Send:", message)
    setMessage("")
  }

  return (
    <>
      <PageHeader title="Inbox" />

      <div className="h-[100dvh] w-full flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/3 md:w-1/4 border-r border-gray-800 bg-gray-900">
          <ul className="divide-y divide-gray-800 text-white">
            {mockConversations.map((conv) => (
              <li
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`p-3 cursor-pointer hover:bg-gray-700 rounded-md mx-2 my-1 ${selectedConversation?.id === conv.id ? "bg-gray-800" : ""
                  }`}
              >
                {conv.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Window */}
        <main className="flex-1 flex flex-col bg-gray-900 text-white h-[90dvh]">
          {selectedConversation ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-gray-700 font-medium">
                {selectedConversation.name}
              </div>

              {/* Scrollable Message Area */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-sm text-gray-400">[Message history will appear here]</div>
              </div>

              {/* Fixed Input Area */}
              <div className="border-t border-gray-800 p-4 flex gap-2 bg-gray-900">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message"
                  className="flex-1 bg-black text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a conversation to start chatting
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export default ChatPage
