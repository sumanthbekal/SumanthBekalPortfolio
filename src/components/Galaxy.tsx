"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Geometry } from "ogl";

export interface GalaxyProps {
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  transparent?: boolean;
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

    // Rotation around Z axis
    float rotAngle = uTime * uRotationSpeed;
    float cosR = cos(rotAngle);
    float sinR = sin(rotAngle);
    mat2 rot = mat2(cosR, -sinR, sinR, cosR);
    pos.xy = rot * pos.xy;

    // Mouse repulsion calculation
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

    // Calculate Point size with depth perspective
    gl_PointSize = aSize * (300.0 / -mvPosition.z) * uDensity;
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

    // Soft glowing star point
    float glow = smoothstep(0.5, 0.0, dist);
    float core = smoothstep(0.25, 0.0, dist) * uGlowIntensity;
    float finalAlpha = (glow + core) * vAlpha;

    // Twinkle flickering
    if (uTwinkleIntensity > 0.0) {
      float twinkle = sin(uTime * 3.5) * 0.5 + 0.5;
      finalAlpha *= (1.0 - uTwinkleIntensity) + twinkle * uTwinkleIntensity;
    }

    // Color conversion
    float hue = mod(uHueShift / 360.0, 1.0);
    vec3 color = hsl2rgb(vec3(hue, uSaturation, 0.96));

    gl_FragColor = vec4(color, finalAlpha);
  }
`;

export default function Galaxy({
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
  className = "",
}: GalaxyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

    const count = Math.floor(1000 * density);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 5.0;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.0 - 1.5;

      sizes[i] = Math.random() < 0.9 ? Math.random() * 1.6 + 0.8 : Math.random() * 2.8 + 1.8;
      alphas[i] = Math.random() * 0.6 + 0.4;
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId: number;
    let time = 0;

    const update = () => {
      time += 0.016 * speed;
      program.uniforms.uTime.value = time;
      program.uniforms.uMouse.value = mouse;

      renderer.render({ scene: mesh });
      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
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
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
