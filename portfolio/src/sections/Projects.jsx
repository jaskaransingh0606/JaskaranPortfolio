import React, { useEffect, useState } from "react";
import { myProjects } from "../constants";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Center, OrbitControls, useGLTF, useTexture } from "@react-three/drei";

const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const Computer = () => {
    const { scene } = useGLTF("models/computer.glb");

    const screenTexture = useTexture(myProjects[selectedProjectIndex].image);
    screenTexture.flipY = false;

    scene.traverse((child) => {
      if (child.isMesh && child.name === "monitor-screen") {
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
    return <primitive object={scene} position={[0, 0, 0]} scale={2} />;
  };

  return (
    <section id="work" className="c-space my-20">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-10 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={myProjects[selectedProjectIndex].spotlight}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {myProjects[selectedProjectIndex].title}
            </p>
            <p className="animatedText ">
              {myProjects[selectedProjectIndex].desc}
            </p>
            <p className="animatedText ">
              {myProjects[selectedProjectIndex].subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {myProjects[selectedProjectIndex].tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path}></img>
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={myProjects[selectedProjectIndex].href}
              target="_blank"
              rel="noreferrer"
            >
              <p>check link</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3"></img>
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" className="w-4 h-4"></img>
            </button>

            <button onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" className="w-4 h-4"></img>
            </button>
          </div>
        </div>

        <div
          className="bg-blend-overlay border border-black-300 bg-black-200 rounded-2xl h-96 md:h-full"
          style={{
            backgroundImage: `url(${myProjects[selectedProjectIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Canvas>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Computer />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
