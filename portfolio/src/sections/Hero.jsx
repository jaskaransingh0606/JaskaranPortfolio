import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import Button from "../componentUtility/Button";

// Importing the 3D computer model
const Model = () => {
  // Using the useGLTF hook to load the .glb model
  const { scene } = useGLTF("models/hacker-room.glb"); // Path to your .glb file
  const screenTexture = useTexture("/textures/desk/codeTexture.jpg"); // Load the new screen texture

  scene.traverse((child) => {
    if (child.isMesh && child.name === "screen_screens_0") {
      // Replace with the actual mesh name
      console.log("Found the screen mesh:", child);

      // Dispose of the previous material
      if (child.material) {
        child.material.dispose();
      }

      // Create a new material with the new texture
      const newMaterial = new THREE.MeshBasicMaterial({ map: screenTexture });
      child.material = newMaterial; // Assign the new material to the mesh
      child.material.needsUpdate = true; // Ensure the material updates with the new texture

      console.log("Applied new texture:", screenTexture);
    }
  });
  return (
    <primitive
      object={scene}
      position={[1, -7, 0]}
      scale={0.1}
      rotation={[0, Math.PI, 0]}
    />
  );
};

// Importing the react icon model
const Rect = () => {
  const { scene } = useGLTF("models/react.glb");
  useFrame(
    () => (
      (scene.rotation.y += 0.01),
      (scene.rotation.x += 0.01),
      (scene.rotation.z += 0.01)
    )
  );
  return <primitive object={scene} position={[20, -10, 0]} scale={0.7} />;
};

const Cube = () => {
  const { scene } = useGLTF("models/cube.glb");
  useFrame(() => ((scene.rotation.y += 0.01), (scene.rotation.x += 0.01)));

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#F500DC"); // Change the color to red (or any other color)
    }
  });
  return <primitive object={scene} position={[15, 2, 0]} scale={0.7} />;
};

const Headphones = () => {
  const { scene } = useGLTF("models/target.glb");
  useFrame(() => ((scene.rotation.y += 0.01), (scene.rotation.x += 0.01)));

  return <primitive object={scene} position={[-20, -10, 0]} scale={1.5} />;
};

const Lamp = () => {
  const { scene } = useGLTF("models/old_lamp.glb");
  useFrame(() => ((scene.rotation.z += 0.01), (scene.rotation.x += 0.01)));

  return <primitive object={scene} position={[-20, 5, 0]} scale={2} />;
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Jaskaran Singh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building FullStack Web applications
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-vh">
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 30]}
            fov={50}></PerspectiveCamera>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Model />
          <Rect />
          <Cube />
          <Headphones />
          <Lamp />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's Work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
