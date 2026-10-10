"use client";

import dynamic from "next/dynamic";

const GalaxyBackground = dynamic(
  () => import("@/components/background/GalaxyBackground"),
  { ssr: false }
);

export default function ClientBackground() {
  return <GalaxyBackground />;
}
