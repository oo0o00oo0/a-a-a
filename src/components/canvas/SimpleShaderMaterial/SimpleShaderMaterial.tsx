import shaderMaterial from "@src/lib/dreiShaderMaterial"
//@ts-ignore
import vertex from "./glsl/vertex.glsl"
//@ts-ignore
import fragment from "./glsl/fragment.glsl"
import { extend } from "@react-three/fiber"

type Props = {}

const SimpleShader = shaderMaterial(
   {
      uTime: { value: 0 }
   },
   vertex,
   fragment,
   () => console.log("init")
)

extend({ SimpleShader })

// @ts-ignore

const SimpleShaderMaterial = (props: Props) => {
   // @ts-ignore
   return <simpleShader />
}

export default SimpleShaderMaterial
