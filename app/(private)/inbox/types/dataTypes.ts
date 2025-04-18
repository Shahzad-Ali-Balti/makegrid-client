export type MessageType = {
    _id: string
    createdAt: string
    updatedAt: string
    text: string
    sender: "user" | "bot"
    audioUrl?: string // ✅ Optional field for voice messages
  }