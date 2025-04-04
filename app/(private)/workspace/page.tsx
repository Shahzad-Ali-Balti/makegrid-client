"use client"
import React, {useState} from "react"
import PageHeader from "@/components/page-header/page-header"
import {axiosInstance} from "@/utils/axiosInstance"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {Input} from "@/components/ui/input"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group"
import {
  BoxIcon,
  CalendarArrowDown,
  CalendarArrowUpIcon,
  ExpandIcon,
  FilterIcon,
  FolderIcon,
  Grid2X2Icon,
  GripIcon,
  PaintbrushIcon,
  PlayIcon,
  SparklesIcon,
  UploadIcon,
  WandSparklesIcon,
} from "lucide-react"
import image1 from "@/assets/models/model-1-b.jpg"
import {AspectRatio} from "@/components/ui/aspect-ratio"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {cn} from "@/lib/utils"
import Tooltip from "@/components/tooltip/tooltip"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import promptImagePlaceholder from "@/assets/placeholder 1.png"
import ModelViewer from "@/components/canvas/model-viewer"
// import {string} from "zod"

const LEFT_PANEL_DEFAULT_SIZE = 25
const MODEL_PREVIEW_PANEL_DEFAULT_SIZE = 60
const PROMPT_PANEL_DEFAULT_SIZE = 25

const ImageTo3DPage = () => {
  const [myGenerationsPanelSize, setMyGenerationsPanelSize] = useState(
    LEFT_PANEL_DEFAULT_SIZE
  )
  const [modelPreviewPanelSize, setModelPreviewPanelSize] = useState(
    MODEL_PREVIEW_PANEL_DEFAULT_SIZE
  )
  const [promptPanelSize, setPromptPanelSize] = useState(
    PROMPT_PANEL_DEFAULT_SIZE
  )
  const [prompt, setPrompt] = useState("")
  const [filePath, setFilePath] = useState<string | null>('/models/model_1743722687995.glb')
  const [loading, setLoading] = useState(false)
  const baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'https://server-makegrid-3d-production.up.railway.app';

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setLoading(true)
    try {
      const response = await axiosInstance.post("/api/model/text-to-model", {
        prompt,
      })

      if (response.data.success) {
        setFilePath(response.data.modelUrl)
        console.log("✅ Model path saved:", response.data.modelUrl)
      } else {
        console.error("❌ Generation failed:", response.data.error)
      }
    } catch (error) {
      console.error("❌ API error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader title="Workspace" />
      <div className="h-full w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-full rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel
            onResize={size => setMyGenerationsPanelSize(size)}
            defaultSize={LEFT_PANEL_DEFAULT_SIZE}
            minSize={5}
            maxSize={100}
          >
            {myGenerationsPanelSize > 17 ? (
              <MyGenerationsPanel panelSize={myGenerationsPanelSize} />
            ) : (
              <div className="flex items-center justify-center text-center bg-muted h-[calc(100vh-140px)]">
                <p className="text-xs font-medium text-muted-foreground">
                  Please expand to see more
                </p>
              </div>
            )}
          </ResizablePanel>
          <ResizableHandle
            className="hover:bg-primary hover:w-[2px]"
            withHandle
          />
          <ResizablePanel
            onResize={size => setModelPreviewPanelSize(size)}
            defaultSize={MODEL_PREVIEW_PANEL_DEFAULT_SIZE}
            minSize={0}
          >
            {modelPreviewPanelSize > 10 ? (
              <ModelPreviewPanel panelSize={modelPreviewPanelSize} modelPath={filePath} baseURL={baseURL}/>
            ) : (
              <div className="flex items-center justify-center text-center bg-muted h-[calc(100vh-140px)]">
                <p className="text-xs font-medium text-muted-foreground">
                  Please expand to see more
                </p>
              </div>
            )}
          </ResizablePanel>
          <ResizableHandle
            className="hover:bg-primary hover:w-[2px]"
            withHandle
          />
          <ResizablePanel
            onResize={size => setPromptPanelSize(size)}
            defaultSize={PROMPT_PANEL_DEFAULT_SIZE}
            maxSize={50}
            minSize={0}
          >
            {promptPanelSize > 10 ? (
              <PromptPanel
                prompt={prompt}
                setPrompt={setPrompt}
                loading={loading}
                onGenerate={handleGenerate}
              />
            ) : (
              <div className="flex items-center justify-center text-center bg-muted h-[calc(100vh-140px)]">
                <p className="text-xs font-medium text-muted-foreground">
                  Please expand to see more
                </p>
              </div>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}

const PromptPanel = ({
    prompt,
    setPrompt,
    loading,
    onGenerate,
  }: {
    prompt: string
    setPrompt: (val: string) => void
    loading: boolean
    onGenerate: () => void
  }) => {
  return (
    <ScrollArea className="h-[calc(100vh-140px)]">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex">
          <Button className="w-full">
            Upload your model
            <UploadIcon />
          </Button>
        </div>
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="flex gap-2 items-center">
              <BoxIcon className="stroke-gray-500" height={20} width={20} />
              New Model
            </div>
          </CardHeader>

          <CardContent className="p-4 pt-2">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="flex">
                <TabsTrigger className="flex flex-grow" value="text">
                  Text to 3D
                </TabsTrigger>
                <TabsTrigger className="flex flex-grow" value="image">
                  Image to 3D
                </TabsTrigger>
              </TabsList>
              <TabsContent value="text">
                <div className="flex flex-col gap-4 pt-2">
                  <div className="grid w-full gap-2">
                    <Label htmlFor="prompt">Prompt</Label>
                    <Textarea
                      id="prompt"
                      rows={5}
                      placeholder="Describe the object you want to generate."
                      value={prompt}
                      onChange={e => setPrompt(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={onGenerate}
                    disabled={loading}
                  >
                    <SparklesIcon />
                    {loading ? "Generating..." : "Generate"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="image">
                <div className="flex flex-col gap-4 pt-2">
                  <div className="grid w-full gap-2">
                    <Label htmlFor="picture">Picture</Label>
                    <Input type="file" id="picture" />
                  </div>
                  <div>
                    <AspectRatio ratio={1 / 1}>
                      <img
                        src={promptImagePlaceholder.src}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </AspectRatio>
                  </div>
                  <Button className="w-full">
                    <SparklesIcon />
                    Generate
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

const ModelPreviewPanel = ({
    panelSize,
    modelPath,
    baseURL
  }: {
    panelSize: number
    modelPath: string | null
    baseURL:string | null
  })  => {
  console.log(panelSize)
  return (
    <div className="flex items-center justify-center text-center bg-muted h-[calc(100vh-140px)]">
      {/*<p className="text-xs font-medium text-muted-foreground">*/}
      {/*    Please select a model to continue.*/}
      {/*</p>*/}
      {/*<img src={canvas.src} alt="canvas"*/}
      {/*     className="h-full w-full object-cover"/>*/}
      <ModelViewer
        height="h-[calc(100vh-140px)]"
        modelPath={`${baseURL}${modelPath}`}
      />
    </div>
  )
}

const MyGenerationsPanel = ({panelSize}: {panelSize: number}) => {
  return (
    <ScrollArea className="h-[calc(100vh-140px)]">
      <div className="px-4 pt-4 pb-2">
        <Input type="search" placeholder="Search" />
      </div>
      <div className="flex flex-wrap justify-between px-4 py-2">
        <div className="flex gap-2">
          <ToggleGroup type="single">
            <ToggleGroupItem value="folder" aria-label="Toggle bold">
              <FolderIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Grid2X2Icon />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single">
            <ToggleGroupItem title="All" value="all" aria-label="Toggle bold">
              <GripIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              title="Models"
              value="models"
              aria-label="Toggle italic"
            >
              <BoxIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              title="Texture"
              value="texture"
              aria-label="Toggle italic"
            >
              <PaintbrushIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              title="Animations"
              value="animations"
              aria-label="Toggle italic"
            >
              <WandSparklesIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex">
          <FiltersMenu />
          <Tooltip text="Show all assets">
            <Button size="icon" variant="ghost">
              <ExpandIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 py-2">
        <MyGenerationSection panelSize={panelSize} />
        <MyGenerationSection panelSize={panelSize} />
        <MyGenerationSection panelSize={panelSize} />
      </div>
    </ScrollArea>
  )
}

const MyGenerationSection = ({panelSize}: {panelSize: number}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between gap-1">
        <p className="text-sm line-clamp-1 ">
          A very long prompt used to generate the model
        </p>
        <Button variant="ghost" size="sm">
          All 2 assets
          <PlayIcon
            className="fill-foreground"
            style={{height: "0.5rem", width: "0.5rem"}}
          />
        </Button>
      </div>
      <div
        className={cn(
          "grid gap-2",
          panelSize > 50
            ? "grid-cols-6"
            : panelSize > 36
            ? "grid-cols-3"
            : panelSize > 22
            ? "grid-cols-2"
            : "grid-cols-1"
        )}
      >
        <MyGenerationCard />
        <MyGenerationCard />
        <MyGenerationCard />
      </div>
    </div>
  )
}

const MyGenerationCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-muted cursor-pointer rounded-xl max-h-56 max-w-56 border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary grid grid-rows-2 gap-1 transition-all duration-200 p-1 overflow-hidden">
        <div className="grid grid-cols-2 gap-1">
          <AspectRatio className="bg-muted">
            <Image
              src={image1.src}
              fill
              alt="Image"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
          <AspectRatio className="bg-muted">
            <Image
              src={image1.src}
              fill
              alt="Image"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <AspectRatio className="bg-muted">
            <Image
              src={image1.src}
              fill
              alt="Image"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
          <AspectRatio className="bg-muted">
            <Image
              src={image1.src}
              fill
              alt="Image"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      {/*<Button className="w-full">*/}
      {/*    Publish*/}
      {/*</Button>*/}
    </div>
  )
}

function FiltersMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <FilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="flex flex-col justify-between gap-4 p-4">
          <div className="flex gap-2 flex-col">
            <p className="text-sm font-semibold">Status</p>
            <StatusToggleGroup />
          </div>
          <div className="flex gap-2 flex-col">
            <p className="text-sm font-semibold">My Labels</p>
            <LabelToggleGroup />
          </div>
          <div className="flex gap-2 flex-col">
            <p className="text-sm font-semibold">Order</p>
            <OrderToggleGroup />
          </div>
          <div className="flex">
            <Button className="w-full">Reset</Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const StatusToggleGroup = () => {
  return (
    <ToggleGroup className="flex gap-2 flex-wrap justify-start" type="single">
      <ToggleGroupItem value="all" aria-label="Toggle bold">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="downloaded" aria-label="Toggle bold">
        Downloaded
      </ToggleGroupItem>
      <ToggleGroupItem value="not-downloaded" aria-label="Toggle bold">
        Not downloaded
      </ToggleGroupItem>
      <ToggleGroupItem value="published" aria-label="Toggle bold">
        Published
      </ToggleGroupItem>
      <ToggleGroupItem value="not-published" aria-label="Toggle bold">
        Not published
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

const LabelToggleGroup = () => {
  return (
    <ToggleGroup className="flex gap-2 flex-wrap justify-start" type="single">
      <ToggleGroupItem className="flex " value="all" aria-label="Toggle bold">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="unlabeled" aria-label="Toggle bold">
        Unlabeled
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

const OrderToggleGroup = () => {
  return (
    <ToggleGroup className="flex gap-2 flex-wrap justify-start" type="single">
      <ToggleGroupItem
        className="flex "
        value="new-first"
        aria-label="Toggle bold"
      >
        <CalendarArrowDown />
        New first
      </ToggleGroupItem>
      <ToggleGroupItem value="old-first" aria-label="Toggle bold">
        <CalendarArrowUpIcon />
        Old first
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ImageTo3DPage
