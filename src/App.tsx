//https://codesandbox.io/s/react-spring-typescript-968b1?file=/src/components/AnimatedRoutes.tsx

import styled from "styled-components"
import TCanvas from "./components/canvas/TCanvas/TCanvas"

export const App = () => {
   return (
      <CanvasWr>
         <TCanvas />
      </CanvasWr>
   )
}

const CanvasWr = styled.div`
   z-index: 0;
   position: fixed;
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`

export default App
