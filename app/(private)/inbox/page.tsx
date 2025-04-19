"use client"

import {useEffect, useState} from "react"
import PageHeader from "@/components/page-header/page-header"
import axiosInstance from "@/utils/axiosInstance"
import useChatSocket from "@/hooks/useChatSocket"
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card"

import SentMessage from "./components/sent-message"
import ReceivedMessage from "./components/recieved-message"
import { useAuth } from "@/hooks/use-auth"

interface Conversation {
  id: number
  participants: number[]
}

interface Message {
  id: number
  sender_username: string
  content: string
  timestamp: string
}

const ChatPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState("")
  const user = useAuth()

  const {sendMessage} = useChatSocket(
    selectedConversation?.id ?? null,
    data => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender_username: data.sender,
          content: data.message,
          timestamp: new Date().toISOString(),
        },
      ])
    }
  )

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axiosInstance.get("/api/community/conversations/")
        setConversations(res.data)
      } catch (err) {
        console.error("Failed to fetch conversations", err)
      }
    }

    fetchConversations()
  }, [])

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedConversation) return
      try {
        const res = await axiosInstance.get(
          `/api/community/conversations/${selectedConversation.id}/history/`
        )
        setMessages(res.data)
      } catch (err) {
        console.error("Failed to fetch messages", err)
      }
    }

    fetchMessages()
  }, [selectedConversation])

  const handleSendMessage = () => {
    if (!message.trim()) return
    sendMessage(message)
    setMessage("")
  }

  return (
    <>
      <PageHeader title="Inbox" />
      <div className="h-[100dvh] w-full flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/3 md:w-1/4 border-r border-gray-800 bg-gray-900">
          <ul className="divide-y divide-gray-800 text-white">
            {conversations.map(conv => (
              <li
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`p-3 cursor-pointer hover:bg-gray-700 rounded-md mx-2 my-1 ${
                  selectedConversation?.id === conv.id ? "bg-gray-800" : ""
                }`}
              >
                Conversation #{conv.id}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Window */}
        <main className="flex-1 flex flex-col bg-gray-900 text-white">
          {selectedConversation ? (
            <Card className="flex-1 flex flex-col bg-gray-900 border-0 rounded-none">
              <CardHeader className="border-b border-gray-700 font-medium text-white">
                Conversation #{selectedConversation.id}
              </CardHeader>

              <CardBody className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages.map(msg =>
                  msg.sender_username === user.user?.username ? (
                    <SentMessage key={msg.id} message={msg} />
                  ) : (
                    <ReceivedMessage key={msg.id} message={msg} />
                  )
                )}
              </CardBody>

              <CardFooter className="border-t border-gray-700 p-4 bg-gray-900">
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 bg-black text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </CardFooter>
            </Card>
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
