"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Geometry, Camera } from "ogl";

export interface GalaxyBackgroundProps {
  /** Speed multiplier for general star movement */
  starSpeed?: number;
  /** Particle density scaling factor */
  density?: number;
  /** Hue shift angle in degrees (0 - 360) */
  hueShift?: number;
  /** Animation timeline speed */
  speed?: number;
  /** Intensity multiplier for soft glow around stars */
  glowIntensity?: number;
  /** Saturation level for star colors (0 for monochrome white) */
  saturation?: number;
  /** Enable or disable mouse repulsion displacement */
  mouseRepulsion?: boolean;
  /** Strength of mouse repulsion force */
  repulsionStrength?: number;
  /** Intensity of random twinkle flickering */
  twinkleIntensity?: number;
  /** Rotation speed around Z axis */
  rotationSpeed?: number;
  /** Canvas background transparency */
  transparent?: boolean;
  /** Opacity of the fixed dark backdrop overlay */
  overlayOpacity?: number;
  /** Additional CSS class names for root container */
  className?: string;
}

const vertexShader = /* glsl */ `
  attribute vec3 position;
  attribute float aSize;
  attribute float aAlpha;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uStarSpeed;
  uniform float uRotationSpeed;
  uniform vec2 uMouse;
  uniform float uMouseRepulsion;
  uniform float uRepulsionStrength;
  uniform float uDensity;

  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Smooth Z-axis rotation
    float rotAngle = uTime * uRotationSpeed;
    float cosR = cos(rotAngle);
    float sinR = sin(rotAngle);
    mat2 rot = mat2(cosR, -sinR, sinR, cosR);
    pos.xy = rot * pos.xy;

    // Interactive mouse repulsion displacement
    if (uMouseRepulsion > 0.5) {
      vec2 dir = pos.xy - uMouse;
      float dist = length(dir);
      float maxDist = 0.5 * uRepulsionStrength;
      if (dist < maxDist && dist > 0.001) {
        float factor = (1.0 - dist / maxDist) * 0.18 * uRepulsionStrength;
        pos.xy += (dir / dist) * factor;
      }
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Calculate depth-based perspective point size (1-2px tiny average)
    gl_PointSize = aSize * (50.0 / -mvPosition.z) * uDensity;
    vAlpha = aAlpha;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uHueShift;
  uniform float uGlowIntensity;
  uniform float uSaturation;
  uniform float uTwinkleIntensity;

  varying float vAlpha;

  vec3 hsl2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    if (dist > 0.5) {
      discard;
    }

    // Sharp white star core with subtle tight halo (Zero bokeh blur)
    float core = smoothstep(0.12, 0.0, dist);
    float halo = smoothstep(0.45, 0.0, dist) * 0.18 * uGlowIntensity;
    float finalAlpha = (core * 0.9 + halo * 0.1) * vAlpha;

    // Twinkle flickering modulation
    if (uTwinkleIntensity > 0.0) {
      float twinkle = sin(uTime * 3.5) * 0.5 + 0.5;
      finalAlpha *= (1.0 - uTwinkleIntensity) + twinkle * uTwinkleIntensity;
    }

    // Color conversion (monochrome white / subtle hue shift)
    float hue = mod(uHueShift / 360.0, 1.0);
    vec3 color = hsl2rgb(vec3(hue, uSaturation, 0.98));

    gl_FragColor = vec4(color, finalAlpha);
  }
`;

export default function GalaxyBackground({
  starSpeed = 0.2,
  density = 0.7,
  hueShift = 170,
  speed = 1.4,
  glowIntensity = 0.15,
  saturation = 0,
  mouseRepulsion = true,
  repulsionStrength = 1.5,
  twinkleIntensity = 0.15,
  rotationSpeed = 0.05,
  transparent = true,
  overlayOpacity = 0.35,
  className = "",
}: GalaxyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = reducedMotionQuery.matches;
    const effectiveSpeed = isReducedMotion ? speed * 0.1 : speed;

    // Initialize WebGL Renderer
    const renderer = new Renderer({
      alpha: transparent,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      antialias: true,
    });
    const gl = renderer.gl;

    if (transparent) {
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0.035, 0.035, 0.043, 1);
    }

    container.appendChild(gl.canvas);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    gl.canvas.style.pointerEvents = "none";

    // Generate random uniform star positions (95% tiny 1-2px, 4% medium 3-4px, 1% bright 5-6px)
    const count = Math.floor(1000 * density);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 8.0;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8.0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.0 - 2.0;

      const rand = Math.random();
      if (rand < 0.95) {
        // 95% Tiny Stars (1-2px)
        sizes[i] = Math.random() * 0.35 + 0.35;
        alphas[i] = Math.random() * 0.35 + 0.2;
      } else if (rand < 0.99) {
        // 4% Medium Stars (3-4px)
        sizes[i] = Math.random() * 0.4 + 0.8;
        alphas[i] = Math.random() * 0.3 + 0.5;
      } else {
        // 1% Bright Stars (5-6px)
        sizes[i] = Math.random() * 0.4 + 1.3;
        alphas[i] = Math.random() * 0.2 + 0.8;
      }
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      aSize: { size: 1, data: sizes },
      aAlpha: { size: 1, data: alphas },
    });

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uStarSpeed: { value: starSpeed },
        uRotationSpeed: { value: rotationSpeed },
        uMouse: { value: [0, 0] },
        uMouseRepulsion: { value: mouseRepulsion ? 1.0 : 0.0 },
        uRepulsionStrength: { value: repulsionStrength },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uTwinkleIntensity: { value: twinkleIntensity },
      },
      transparent: true,
      depthTest: false,
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 5;

    // Normalized mouse position tracking
    const mouse = [9999, 9999];
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse[0] = x * 2.2;
      mouse[1] = y * 2.2;
    };

    const handleMouseLeave = () => {
      mouse[0] = 9999;
      mouse[1] = 9999;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    let animationId: number;
    let time = 0;
    let isPaused = false;

    // Pause rendering when tab is hidden to save battery & GPU
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        animationId = requestAnimationFrame(update);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const update = () => {
      if (isPaused) return;

      time += 0.016 * effectiveSpeed;
      program.uniforms.uTime.value = time;
      program.uniforms.uMouse.value = mouse;

      renderer.render({ scene: mesh, camera });
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    // Cleanup resources on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
    };
  }, [
    starSpeed,
    density,
    hueShift,
    speed,
    glowIntensity,
    saturation,
    mouseRepulsion,
    repulsionStrength,
    twinkleIntensity,
    rotationSpeed,
    transparent,
  ]);

  return (
    <>
      {/* 1. Galaxy WebGL Base Container (z-index: 0) */}
      <div
        ref={containerRef}
        className={`pointer-events-none fixed inset-0 h-screen w-screen bg-[#09090B] ${className}`}
        style={{ zIndex: 0 }}
      />
      {/* 2. Global Dark Overlay (z-index: 1) */}
      <div
        className="pointer-events-none fixed inset-0 h-screen w-screen"
        style={{
          zIndex: 1,
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />
    </>
  );
}
