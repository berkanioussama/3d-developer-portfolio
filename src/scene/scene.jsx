import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../scene/loader";
import Island from "../models/island";

const Scene = () => {
    return (
        <Canvas 
            className="w-full h-svh bg-transparent"
            camera={{ near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader/>}>
                <Island/>
            </Suspense>
        </Canvas>
    );
}
 
export default Scene;