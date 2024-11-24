import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 50]} />
      <primitive object={new THREE.AxesHelper(10)} />
      <mesh>
        <boxGeometry attach="geometry" args={[3, 2, 1]} />
        <meshPhongMaterial attach="material" color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
