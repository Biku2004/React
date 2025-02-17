import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import "./styles.css";

// ✅ Load the 3D Model
const BotModel = () => {
  const { scene } = useGLTF("/dodge_charger_srt_police.glb"); // Loads from `public/` folder
  const botRef = useRef();

  useFrame(({ mouse }) => {
    if (botRef.current) {
      gsap.to(botRef.current.rotation, {
        y: mouse.x * 0.5,
        x: -mouse.y * 0.5,
        duration: 0.5,
      });
    }
  });

  return <primitive ref={botRef} object={scene} scale={1.5} position={[0, -1, 0]} />;
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* ✅ Fix: Correct camelCase properties */}
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <BotModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
