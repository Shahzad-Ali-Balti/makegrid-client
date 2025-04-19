"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardBody} from "@heroui/card"
import {Button} from "@heroui/button"
import {Skeleton} from "@heroui/skeleton"
import {Copy} from "lucide-react"
import type { Message } from "../types/messageType" // If you have types globally


const ReceivedMessage = ({
  message,
  isLoading,
}: {
  message: Message
  isLoading?: boolean
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [message, isLoading])

  return (
    <div className="relative flex justify-start items-end">
      {/* Message bubble */}
      <Card
        radius="sm"
        className="rounded-tl-none max-w-[280px] md:max-w-md border dark:border-default/50"
      >
        <CardBody>
          {isLoading ? (
            <div className="flex flex-col gap-3">
              <Skeleton className="w-full rounded-full">
                <div className="h-3 w-[250px] rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-full rounded-full">
                <div className="h-3 w-[250px] rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-full rounded-full">
                <div className="h-3 w-[250px] md:w-[600px] rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          ) : (
            <div className="text-sm" dangerouslySetInnerHTML={{__html: message}} />
          )}

          <div ref={bottomRef} />
        </CardBody>
      </Card>      
    </div>
  )
}

export default ReceivedMessage
