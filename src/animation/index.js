"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ScrollControls, useScroll, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { a } from "@react-spring/three";
import coffe_model from "../images/coffee_cup.glb";
import { div } from "three/tsl";

function TeaCup() {
  // const { scene } = useGLTF("/tea_cup.glb"); // Load your tea cup model
  const { scene } = useGLTF(coffe_model); // Load your tea cup model
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if(ref.current) {
      ref.current.rotation.y = scroll.offset * Math.PI * 2; // Rotate based on scroll
      ref.current.position.y = -scroll.offset * 5; // Move up on scroll
    }
  });

  return <primitive object={ scene } ref={ ref } scale={ 1 } />;
}

export default function Animation() {
  return (
    <div style={ { height: "100vh", width: "100vw", overflowY: "auto" } } id="scroll-container">
      <Canvas camera={ { position: [0, 5, 8], fov: 60 } }>
        <ambientLight intensity={ 1.2 } />
        <directionalLight position={ [5, 5, 5] } intensity={ 1 } />

        {/* ScrollControls enable scrolling */ }
        <ScrollControls pages={ 2 } damping={ 0.25 }>
          <TeaCup />
        </ScrollControls>

        <OrbitControls enableZoom={ false } />
      </Canvas>
    </div>
  );
}
