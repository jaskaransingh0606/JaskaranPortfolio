import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../componentUtility/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sardarshinesingh12@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Jaskaran</p>
              <p className="grid-subtext">
                A passionate full-stack developer with a strong foundation in
                both frontend and backend technologies, including React and
                Spring Boot. I have honed my skills through various personal and
                college projects, creating scalable web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                In my tech stack, I primarily use React.js for frontend
                development, for backend development, I utilize Spring Boot,
                building robust and scalable APIs. Additionally, I have
                experience with Tailwind CSS for streamlined, utility-first
                styling, and React Three Fiber for creating 3D visuals in web
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                globeImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across the globe</p>
              <p className="grid-subtext">
                I'm based in India , with remote work available
              </p>
              <a href="#contact" className='w-fit'>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code .
                Coding isn't just my profession its my passion
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              className="w-full md:h-[126px] sm:h-[276px]  h-fit object-contain sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  devjaskaransingh12@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
