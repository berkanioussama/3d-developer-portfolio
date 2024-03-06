import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../scene/loader";
import Island from "../models/island";

const Scene = () => {

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screnPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }

        return [screenScale, screnPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

    return (
        <Canvas 
            className="w-full h-svh bg-transparent"
            camera={{ near: 0.1, far: 1000 }}
        >
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Suspense fallback={<Loader/>}>
                <Island
                    scale={islandScale}
                    position={islandPosition}
                    rotation={islandRotation}
                />
            </Suspense>
        </Canvas>
    );
}
 
export default Scene;