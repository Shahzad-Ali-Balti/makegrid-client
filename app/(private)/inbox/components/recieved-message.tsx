"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardBody} from "@heroui/card"
import {Button} from "@heroui/button"
import {Skeleton} from "@heroui/skeleton"
import {Copy} from "lucide-react"

const ReceivedMessage = ({
  text,
  isLoading,
}: {
  text: string
  isLoading?: boolean
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [text, isLoading])

  const copyToClipboard = () => {
    const tempEl = document.createElement("div")
    tempEl.innerHTML = text
    const plainText = tempEl.innerText

    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

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
            <div className="text-sm" dangerouslySetInnerHTML={{__html: text}} />
          )}

          <div ref={bottomRef} />
        </CardBody>
      </Card>

      {/* Floating copy button */}
      <div className="absolute bottom-1 right-1">
        {copied ? (
          <div className="text-xs bg-white border rounded px-2 py-1 shadow">
            Copied!
          </div>
        ) : (
          <Button
            onClick={copyToClipboard}
            isIconOnly
            size="sm"
            variant="light"
            className="shadow-md"
            title="Copy message"
          >
            <Copy size={14} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ReceivedMessage
