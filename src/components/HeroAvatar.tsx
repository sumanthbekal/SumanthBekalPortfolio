"use client";

import { Environment, Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";

function CurlyHair() {
  const curls = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const angle = (index / 34) * Math.PI * 2;
        const radius = 1.03 + Math.sin(index * 1.7) * 0.09;
        return {
          position: [
            Math.cos(angle) * radius,
            0.86 + Math.sin(index * 0.9) * 0.18,
            Math.sin(angle) * 0.34 - 0.1,
          ] as [number, number, number],
          scale: 0.18 + (index % 5) * 0.012,
        };
      }),
    [],
  );

  return (
    <group>
      {curls.map((curl, index) => (
        <mesh key={index} position={curl.position} scale={curl.scale}>
          <sphereGeometry args={[1, 18, 18]} />
          <meshStandardMaterial color="#080604" roughness={0.76} metalness={0.08} />
        </mesh>
      ))}
      <mesh position={[0, 0.82, -0.08]} scale={[0.98, 0.36, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#070504" roughness={0.8} />
      </mesh>
    </group>
  );
}

function AvatarFace() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.24, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.14, 0.08);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.05;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.28}>
      <group ref={groupRef} position={[0, -0.08, 0]}>
        <mesh position={[0, 0.04, 0]} scale={[0.86, 1.02, 0.78]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#c98b63" roughness={0.46} metalness={0.02} />
        </mesh>
        <CurlyHair />
        <mesh position={[0, -0.55, 0.66]} scale={[0.45, 0.18, 0.11]}>
          <sphereGeometry args={[1, 32, 18]} />
          <meshStandardMaterial color="#16100d" roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.36, 0.71]} scale={[0.28, 0.08, 0.035]}>
          <sphereGeometry args={[1, 24, 12]} />
          <meshStandardMaterial color="#1a0f0b" roughness={0.55} />
        </mesh>
        <mesh position={[0, -0.08, 0.79]} scale={[0.13, 0.22, 0.08]}>
          <sphereGeometry args={[1, 24, 16]} />
          <meshStandardMaterial color="#b97b58" roughness={0.52} />
        </mesh>
        {[-0.31, 0.31].map((x) => (
          <group key={x} position={[x, 0.2, 0.72]}>
            <mesh scale={[0.19, 0.09, 0.024]}>
              <torusGeometry args={[1, 0.055, 12, 48]} />
              <MeshTransmissionMaterial
                color="#ffffff"
                thickness={0.08}
                roughness={0.08}
                transmission={0.8}
                transparent
                opacity={0.55}
              />
            </mesh>
            <mesh position={[0, 0, 0.015]} scale={0.035}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#19120f" />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0.2, 0.72]} scale={[0.16, 0.025, 0.018]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#151515" metalness={0.45} roughness={0.28} />
        </mesh>
        <mesh position={[-0.29, 0.42, 0.71]} rotation={[0, 0, 0.08]} scale={[0.24, 0.035, 0.025]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#15100d" roughness={0.65} />
        </mesh>
        <mesh position={[0.29, 0.42, 0.71]} rotation={[0, 0, -0.08]} scale={[0.24, 0.035, 0.025]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#15100d" roughness={0.65} />
        </mesh>
      </group>
    </Float>
  );
}

function AvatarScene() {
  return (
    <Canvas camera={{ position: [0, 0.08, 4.3], fov: 34 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.72} />
      <pointLight position={[2.2, 1.8, 2.5]} intensity={95} color="#ff8a1c" />
      <pointLight position={[-2.4, -0.4, 2.2]} intensity={30} color="#4f85ff" />
      <spotLight position={[0, 3, 4]} angle={0.42} penumbra={0.9} intensity={70} color="#fff1df" />
      <Sparkles count={38} scale={[4.8, 3.3, 1.8]} size={1.4} speed={0.28} color="#ff9d35" opacity={0.38} />
      <AvatarFace />
      <Environment preset="city" />
    </Canvas>
  );
}

export default memo(AvatarScene);
