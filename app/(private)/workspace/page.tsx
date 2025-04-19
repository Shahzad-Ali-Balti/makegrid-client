"use client"
import React, {useState} from "react"
import PageHeader from "@/components/page-header/page-header"
import axiosInstance from "@/utils/axiosInstance"
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
import ModelViewerSmall from "@/components/canvas/model-viewer-small"
// import {string} from "zod"

const LEFT_PANEL_DEFAULT_SIZE = 25
const MODEL_PREVIEW_PANEL_DEFAULT_SIZE = 60
const PROMPT_PANEL_DEFAULT_SIZE = 25

interface Asset {
  id: string
  model_url: string
  prompt: string
}

interface SelectedModel {
  id: string
  prompt: string
  model_url: string
}

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
  const [filePath, setFilePath] = useState<string | null>(
    "/media/assets/model_1743722687995.glb"
  )
  const [loading, setLoading] = useState(false)
  const baseURL: string =
    process.env.NEXT_PUBLIC_API_URL_2 || "http://localhost:8001"
  // const baseURL: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const [image, setImage] = useState<File | null>(null) // State for the uploaded image
  const [previewUrl, setPreviewUrl] = useState<string | null>(null) // State for image preview URL
  const [error, setError] = useState<string | null>(null) // Error message if the wrong file is uploaded
  const [assets, setAssets] = useState<Asset[]>([
    {
      id: "1",
      model_url: "/media/assets/model_1743722687995.glb",
      prompt: "Lion",
    },
  ])
  const [selectedModel, setSelectedModel] = useState<SelectedModel | null>(null)
  // Handle image file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file)) // Create a preview URL for the image
      setError(null) // Clear any previous errors
    } else {
      setError("Please upload a valid JPEG or PNG image.")
    }
  }
  const handleImageToGenerate = async () => {
    if (!image) {
      setError("Please upload an image before generating.")
      return
    }

    setLoading(true)
    const formData = new FormData()
    formData.append("image", image) // Append the image file to FormData

    try {
      const response = await axiosInstance.post(
        "api/makers/image-to-model",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the request is sent as FormData
          },
        }
      )

      if (response.data.success) {
        setFilePath(response.data.modelUrl) // Assuming the backend returns the model URL
        console.log("✅ Model path saved:", response.data.modelUrl)
      } else {
        console.error("❌ Generation failed:", response.data.error)
        setError("Failed to generate model from image.")
      }
    } catch (error) {
      console.error("❌ API error:", error)
      setError("An error occurred while generating the model.")
    } finally {
      setLoading(false)
    }
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setLoading(true)
    try {
      const response = await axiosInstance.post("/api/makers/text-to-model/", {
        prompt,
      })

      if (response.data.success) {
        setFilePath(response.data.model_file)
        console.log("✅ Model path saved:", response.data.model_file)
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
              // <MyGenerationsPanel
              //   panelSize={myGenerationsPanelSize}
              //   assets={assets}
              //   selectModel={setSelectedModel}
              // />
              <> </>
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
            { true ? (
              <ModelPreviewPanel
                panelSize={modelPreviewPanelSize}
                modelPath={filePath}
                baseURL={baseURL}
              />
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
                onImageGenerate={handleImageToGenerate}
                handleFileChange={handleFileChange} // Pass handleFileChange
                previewUrl={previewUrl} // Pass previewUrl
                error={error}
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
  onImageGenerate,
  handleFileChange,
  previewUrl,
  error,
}: {
  prompt: string
  setPrompt: (val: string) => void
  loading: boolean
  onGenerate: () => void
  onImageGenerate: () => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void // Corrected the type here
  previewUrl: string | null
  error: string | null
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
                    <Label htmlFor="picture">Upload Image</Label>
                    <Input
                      type="file"
                      id="picture"
                      accept="image/jpeg, image/png"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div>
                    <AspectRatio ratio={1 / 1}>
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Image Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <img
                          src={promptImagePlaceholder.src}
                          alt="Placeholder"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </AspectRatio>
                  </div>

                  {error && <p className="text-red-500">{error}</p>}

                  <Button
                    className="w-full"
                    onClick={onImageGenerate}
                    disabled={loading}
                  >
                    <SparklesIcon />
                    {loading ? "Generating" : "Upload and Generate"}
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
  baseURL,
}: {
  panelSize: number
  modelPath: string | null
  baseURL: string | null
}) => {
  const fullPath =
    baseURL && modelPath
      ? `${baseURL.replace(/\/$/, "")}/${modelPath.replace(/^\//, "")}`
      : ""
  const dummyPath = `${baseURL}/media/assets/model_1743722687995.glb`

  return (
    <div className="flex items-center justify-center text-center bg-muted h-[calc(100vh-140px)]">
      {fullPath ? (
        <ModelViewer height="h-[calc(100vh-140px)]" modelPath={fullPath} />
      ) : (
        <p className="text-xs font-medium text-muted-foreground">
        <ModelViewer height="h-[calc(100vh-140px)]" modelPath={dummyPath} />
        </p>
      )}
    </div>
  )
}

const MyGenerationsPanel = ({
  panelSize,
  assets,
  selectModel,
}: {
  panelSize: number
  assets: Asset[]
  selectModel: (model: SelectedModel) => void
}) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      {assets.map(asset => (
        <MyGenerationSection
          key={asset.id}
          panelSize={panelSize}
          assets={[asset]} // render one section per asset
          onSelect={selectModel} // ✅ use selectModel prop
        />
      ))}
    </div>
  )
}

const MyGenerationSection = ({
  panelSize,
  assets,
  onSelect,
}: {
  panelSize: number
  assets: Asset[]
  onSelect: (model: SelectedModel) => void
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between gap-1">
        <p className="text-sm line-clamp-1">
          {/* {assets[0]?.prompt || "No prompt"} */}
        </p>

        <Button variant="ghost" size="sm">
          All {assets.length || 0} Assets
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
        {assets.map(asset => (
          <MyGenerationCard key={asset.id} asset={asset} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

//
const MyGenerationCard = ({
  asset,
  onSelect,
}: {
  asset: Asset
  onSelect: (model: SelectedModel) => void
}) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL_2 || "http://localhost:8001"

  const fullPath =
    baseURL && asset.model_url
      ? `${baseURL.replace(/\/$/, "")}/${asset.model_url.replace(/^\//, "")}`
      : ""
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer"
      onClick={() =>
        onSelect({
          id: asset.id,
          prompt: asset.prompt,
          model_url: asset.model_url, // This must be available in `asset`
        })
      }
    >
      <div className="bg-muted rounded-xl max-h-56 max-w-56 border hover:border-primary p-1 overflow-hidden transition-all duration-200">
        {/* <AspectRatio className="bg-muted"> */}
        <ModelViewerSmall height="h-auto" modelPath={`http://localhost:8001/media/assets/model_1743722687995.glb`} />
        {/* </AspectRatio> */}
      </div>
      <Button className="w-full" variant="secondary">
        Publish
      </Button>
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
