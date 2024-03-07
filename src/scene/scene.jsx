import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../scene/loader";
import Island from "../models/island";
import Sky from "../models/sky";
import Plane from "../models/plane";

const Scene = () => {

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }

        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }

        return [screenScale, screenPosition]
    }

    const [planeScale, planePosition] = adjustPlaneForScreenSize()

    return (
        <Canvas 
            className={`w-full h-svh bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
        >
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Suspense fallback={<Loader/>}>
                <Sky isRotating={isRotating} />
                <Island
                    scale={islandScale}
                    position={islandPosition}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Plane
                    scale={planeScale}
                    position={planePosition}
                    rotation={[0, 20, 0]}
                    isRotating={isRotating}
                />
            </Suspense>
        </Canvas>
    );
}
 
export default Scene;