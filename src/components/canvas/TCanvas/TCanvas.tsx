import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Vector3 } from "three"
import SimpleShaderMaterial from "@canvas/SimpleShaderMaterial"

export const TCanvas = () => {
   return (
      <Canvas
         camera-position={new Vector3(0, 0, 5)}
         dpr={1.75}>
         <Suspense fallback={null}>
            <mesh>
               <planeGeometry args={[1, 1]} />
               <SimpleShaderMaterial />
            </mesh>
         </Suspense>
      </Canvas>
   )
}

export default TCanvas
