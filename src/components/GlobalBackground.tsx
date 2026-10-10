"use client";

import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/Galaxy"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          background: "#09090B",
        }}
      >
        <Galaxy
          starSpeed={0.2}
          density={0.7}
          hueShift={170}
          speed={1.4}
          glowIntensity={0.15}
          saturation={0}
          mouseRepulsion
          repulsionStrength={1.5}
          twinkleIntensity={0.15}
          rotationSpeed={0.05}
          transparent
        />
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.35)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </>
  );
}
