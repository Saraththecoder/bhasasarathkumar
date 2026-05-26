import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Model from "./Model";
import FloatingObjects from "./FloatingObjects";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import { useLoading } from "../../context/LoadingProvider";

function GsapIntegration({ character }: { character: THREE.Object3D | null }) {
  const { camera } = useThree();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (character && camera && !initialized) {
      setCharTimeline(character, camera as THREE.PerspectiveCamera);
      setAllTimeline();
      setInitialized(true);
    }
  }, [character, camera, initialized]);

  return null;
}

const Scene = () => {
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const [character, setCharacter] = useState<THREE.Object3D | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useLoading();

  useEffect(() => {
    const landing = document.getElementById("landingDiv");
    const about = document.querySelector(".about-section");
    const whatIdo = document.querySelector(".whatIDO");

    const visibilityMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target, entry.isIntersecting);
        });
        const isAnyVisible = Array.from(visibilityMap.values()).some((v) => v);
        setIsVisible(isAnyVisible);
      },
      {
        rootMargin: "300px", // High buffer to load character smoothly before scrolling in
        threshold: 0.01,
      }
    );

    if (landing) observer.observe(landing);
    if (about) observer.observe(about);
    if (whatIdo) observer.observe(whatIdo);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        className="character-container" 
        style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100vw", 
          height: "100vh", 
          zIndex: 10, 
          pointerEvents: "none",
          display: isVisible ? "block" : "none"
        }}
      >
        <div className="character-model" style={{ width: "100%", height: "100%", pointerEvents: "none" }}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef} style={{ pointerEvents: "auto" }}></div>
          <Canvas
            frameloop={isVisible ? "always" : "never"}
            gl={{ 
              antialias: true, 
              alpha: true, 
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
              stencil: false,
              powerPreference: "high-performance"
            }}
            dpr={[1, 1.5]}
          >
            <PerspectiveCamera makeDefault position={[0, 13.1, 24.7]} fov={14.5} zoom={1.1} />
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, 5, 10]} intensity={1.5} color="#d946ef" />
            <directionalLight position={[10, 10, 5]} intensity={2.0} color="#fbcfe8" castShadow />
            <Environment preset="city" environmentIntensity={0.6} />

            <Model hoverRef={hoverDivRef} onLoaded={(scene: THREE.Object3D) => setCharacter(scene)} />

            <EffectComposer>
              <Bloom 
                luminanceThreshold={1.0} 
                mipmapBlur 
                intensity={0.5} 
              />
            </EffectComposer>

            <GsapIntegration character={character} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Scene;
