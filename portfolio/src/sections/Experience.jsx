import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { workExperiences } from "../constants";
import * as THREE from "three";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useTexture,
} from "@react-three/drei";

const Robot = () => {
  const { scene } = useGLTF("models/robot.glb");
  
  return <primitive object={scene} position={[0, 2, 0]} scale={1.5} />;
};

const Experience = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text"> Eduction and Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <PerspectiveCamera
                position={[0, -10, 0]}
                fov={50}
              ></PerspectiveCamera>
              <ambientLight intensity={0.1} />
              <directionalLight position={[10, 0, 10]} intensity={1.5} />
              <OrbitControls enableZoom={false} />
              <Robot />
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, icon, duration, title, animation }) => (
                  <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} className="h-full w-full" />
                      </div>
                      <div className="work-content_bar"></div>
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800"> {name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
