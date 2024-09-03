import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col text-white absolute top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
      <h3 className="text-7xl tracking-tighter font-[700]">macbook pro</h3>
      <h5 className="">Oh so pro</h5>
      <p className="text-center w-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, amet.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 300] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
