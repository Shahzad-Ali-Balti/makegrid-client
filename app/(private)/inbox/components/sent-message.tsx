import {Card, CardBody} from "@heroui/card"
import type { Message } from "../types/messageType" // If you have types globally


const SentMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex justify-end items-end">
      <Card
        isBlurred
        radius="sm"
        className="max-w-[280px] md:max-w-lg text-white bg-[#6909DD] dark:bg-cyan-500/25 border border-cyan-500/40 dark:border-cyan-500/40 rounded-tr-none"
      >
        <CardBody className="text-sm">
          <div dangerouslySetInnerHTML={{ __html: message.content }} />
        </CardBody>
      </Card>
    </div>
  )
}


export default SentMessage
