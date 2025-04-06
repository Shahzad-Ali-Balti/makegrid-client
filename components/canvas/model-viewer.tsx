"use client"

import {Canvas} from "@react-three/fiber"
import {downloadSTL,getSTLFilename,getGLBFilename,downloadGLB} from "@/utils/downloadSTL"
import {
  Bounds,
  ContactShadows,
  Environment,
  Grid,
  OrbitControls,
  useGLTF,
} from "@react-three/drei"
import {Suspense, useState, useEffect} from "react"
import {Leva, useControls} from "leva"
import {cn} from "@/lib/utils"
import * as THREE from "three"

function Model({
  modelPath,
  onLoad,
}: {
  modelPath: string
  onLoad: (model: THREE.Object3D) => void
}) {
  const {scene} = useGLTF(modelPath)

  useEffect(() => {
    if (scene) {
      onLoad(scene)
    }
  }, [scene, onLoad])

  return <primitive object={scene} />
}

export default function ModelViewer({
  modelPath,
  height,
}: {
  modelPath: string
  height: string
}) {
  const [showGrid, setShowGrid] = useState(false)
  const [loadedModel, setLoadedModel] = useState<THREE.Object3D | null>(null)

  // UI Controls
  const {bgColor, intensity, showShadow} = useControls({
    bgColor: {value: "#101929"},
    intensity: {value: 1.2, min: 0, max: 3, step: 0.1},
    showShadow: true,
  })

  return (
    <div className={cn("w-full rounded-lg relative overflow-hidden", height)}>
      <Leva hidden collapsed />
      <Canvas
        camera={{position: [0, 3, 10], fov: 50, near: 0.1, far: 100}}
        style={{background: bgColor}}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={intensity}
            castShadow
          />

          {showShadow && <ContactShadows opacity={0.4} blur={1} scale={10} />}

          {/* Automatically adjust camera to fit model */}
          <Bounds fit clip observe margin={1.5}>
            <Model modelPath={modelPath} onLoad={setLoadedModel} />
          </Bounds>

          <OrbitControls
            makeDefault
            enableZoom={true}
            enablePan={true}
            minDistance={1}
            maxDistance={20}
            dampingFactor={0.05}
          />

          {showGrid && (
            <Grid args={[100, 100]} position={[0, 0, 0]} cellColor="white" />
          )}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      {/* UI Controls */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 p-2 rounded-md shadow-md">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className="px-3 py-1 text-sm font-medium bg-gray-800 text-white rounded"
        >
          {showGrid ? "Hide Grid" : "Show Grid"}
        </button>

        <button
          onClick={() => {
            if (loadedModel) {
              downloadSTL(loadedModel, getSTLFilename())
            } else {
              alert("Model not loaded yet.")
            }
          }}
          className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded"
        >
          Download STL
        </button>
        <button
          onClick={() => {
            if (loadedModel) {
                downloadGLB(modelPath,getGLBFilename())
            } else {
              alert("Model not loaded yet.")
            }
          }}
          className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded"
        >
          Download GLB
        </button>
      </div>
    </div>
  )
}
