import { useEffect, useRef } from "react"

const useChatSocket = (
  conversationId: number | null,
  onMessage: (data: { sender: string; message: string; timestamp: string }) => void
) => {
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    if (!conversationId) return

    const token = sessionStorage.getItem("access_token")
    const socket = new WebSocket(`ws://localhost:8000/ws/chat/${conversationId}/?token=${token}`)
    socketRef.current = socket

    socket.onopen = () => {
      console.log("✅ WebSocket connected")
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.message) {
        onMessage(data)
      } else if (data.error) {
        console.error("WebSocket error:", data.error)
      }
    }

    socket.onerror = (error) => {
      console.error("❌ WebSocket error:", error)
    }

    socket.onclose = () => {
      console.log("🔌 WebSocket disconnected")
    }

    return () => {
      socket.close()
    }
  }, [conversationId])

  const sendMessage = (message: string) => {
    if (!message.trim()) return
    socketRef.current?.send(JSON.stringify({ message }))
  }

  return { sendMessage }
}

export default useChatSocket
