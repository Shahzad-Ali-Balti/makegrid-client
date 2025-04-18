import {Card, CardBody} from "@heroui/card"
import {Button} from "@heroui/button"
import {SpeakerWaveIcon} from "@heroicons/react/24/solid"

const SentMessage = ({text}: {text: string}) => {
  return (
    <div className="flex justify-end items-end">
      {/* <Button isIconOnly className="bg-transparent">
        <SpeakerWaveIcon height={20} width={20} />
      </Button> */}
      <Card
        isBlurred
        radius="sm"
        className="max-w-[280px] md:max-w-lg text-white bg-[#6909DD] dark:bg-cyan-500/25 border border-cyan-500/40 dark:border-cyan-500/40 rounded-tr-none"
      >
        <CardBody className="text-sm">
          {/* {text} */}
          <div dangerouslySetInnerHTML={{ __html: text }} />
          </CardBody>
      </Card>
    </div>
  )
}

export default SentMessage
