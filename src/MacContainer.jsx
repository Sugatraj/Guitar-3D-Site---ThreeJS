import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const MacContainer = () => {
  // Load the GLTF model
  const model = useGLTF("./guitar.glb");

  // Load texture
  const tex = useTexture("./red.jpg");

  // Initialize an object to hold references to the meshes or groups in the model
  const meshes = {};

  // Traverse the scene graph and store each mesh or group in the meshes object
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  // Ensure the screen mesh exists before applying transformations
  if (meshes.screen) {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  }

  // Ensure the matte material exists before applying the texture
  if (meshes.matte && meshes.matte.material) {
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalmess = 0;
    meshes.matte.material.roughness = 1;

  }

  // Get the scroll data from the ScrollControls component (if used)
  const data = useScroll();

  // Use a single useFrame to handle all per-frame updates
  useFrame(() => {
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(
        180 - data.offset * 120
      );
    }
  });

  return (
    // Position the entire group (the model) in the scene
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
