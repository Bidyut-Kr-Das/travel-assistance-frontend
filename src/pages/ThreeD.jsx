import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);

  // Adjust model's position to center it vertically
  scene.position.y = 0; // Adjust as needed

  return <primitive object={scene} />;
}

function ThreeD() {
  return (
    <Canvas
      className="h-screen w-full"
      camera={{ fov: 80, near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Model url="/bordiac_b40.glb" />
    </Canvas>
  );
}

export default ThreeD;
