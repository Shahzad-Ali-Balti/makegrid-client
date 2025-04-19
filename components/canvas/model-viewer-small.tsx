import {Canvas} from "@react-three/fiber"
import {useGLTF} from "@react-three/drei"
import {Suspense, useState, useEffect} from "react"
import {Leva, useControls} from "leva"
import * as THREE from "three"
import classNames from "classnames" // Import classnames

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

export default function ModelViewerSmall({
  modelPath,
  height,
}: {
  modelPath: string
  height: string
}) {
  const [loadedModel, setLoadedModel] = useState<THREE.Object3D | null>(null)
  const {bgColor, intensity} = useControls({
    bgColor: {value: "#101929"},
    intensity: {value: 1.2, min: 0, max: 3, step: 0.1},
  })

  const Base_url = "http://localhost:8001"
  const model_url = "/media/assets/model_1743722687995.glb"

  return (
    <div className={classNames("w-full rounded-lg relative overflow-hidden", height)}>
      <Leva hidden collapsed />
      <Canvas
        camera={{position: [0, 3, 10], fov: 50, near: 0.1, far: 100}}
        style={{background: bgColor}}
        shadows
      >
        <Suspense fallback={<img src={`${Base_url}${model_url}`}alt="Loading" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={intensity} castShadow />
          {loadedModel && <Model modelPath={modelPath} onLoad={setLoadedModel} />}
        </Suspense>
      </Canvas>
    </div>
  )
}
