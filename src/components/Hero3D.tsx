"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight, performance-minded Three.js scene:
 * floating premium "paving stone" slabs with a gold rim light and
 * subtle parallax driven by the pointer. Falls back gracefully and
 * respects prefers-reduced-motion + WebGL availability.
 */
export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // No WebGL — hero gradient/image remains
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const pixelRatio = Math.min(window.devicePixelRatio, 1.8);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const goldKey = new THREE.DirectionalLight(0xe8c670, 2.2);
    goldKey.position.set(4, 6, 5);
    scene.add(goldKey);

    const rim = new THREE.DirectionalLight(0xffffff, 0.6);
    rim.position.set(-6, -2, 4);
    scene.add(rim);

    const fill = new THREE.PointLight(0xd4af37, 1.2, 30);
    fill.position.set(0, 0, 6);
    scene.add(fill);

    // Premium "stone slab" material
    const makeMaterial = (color: number, metal: number, rough: number) =>
      new THREE.MeshStandardMaterial({
        color,
        metalness: metal,
        roughness: rough,
      });

    const stoneMat = makeMaterial(0x1c1c20, 0.55, 0.45);
    const goldMat = makeMaterial(0xd4af37, 0.95, 0.25);

    const group = new THREE.Group();
    scene.add(group);

    type Slab = {
      mesh: THREE.Mesh;
      floatSpeed: number;
      floatAmp: number;
      rotSpeed: number;
      baseY: number;
    };
    const slabs: Slab[] = [];

    const slabGeo = new THREE.BoxGeometry(1.6, 0.18, 1.6);
    // soften edges
    slabGeo.translate(0, 0, 0);

    const positions: Array<[number, number, number, number]> = [
      // x, y, z, scale
      [-3.4, 1.2, -1, 1.1],
      [2.9, -0.6, -2, 1.3],
      [-1.6, -1.8, 0.5, 0.85],
      [3.6, 1.9, -3, 0.9],
      [0.4, 0.9, -1.5, 1.0],
      [-3.9, -1.4, -2.5, 0.95],
      [1.5, -2.1, -1.2, 0.8],
    ];

    positions.forEach((p, i) => {
      const [x, y, z, s] = p;
      const isGold = i === 2 || i === 4; // a couple of gold accent slabs
      const mesh = new THREE.Mesh(slabGeo, isGold ? goldMat : stoneMat);
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(s);
      mesh.rotation.set(
        Math.random() * 0.5 - 0.25,
        Math.random() * Math.PI,
        Math.random() * 0.4 - 0.2
      );
      group.add(mesh);
      slabs.push({
        mesh,
        floatSpeed: 0.4 + Math.random() * 0.5,
        floatAmp: 0.18 + Math.random() * 0.22,
        rotSpeed: (Math.random() - 0.5) * 0.18,
        baseY: y,
      });
    });

    // Pointer parallax
    const pointer = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const clock = new THREE.Clock();
    let frameId = 0;
    let running = true;

    const animate = () => {
      if (!running) return;
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      slabs.forEach((s) => {
        if (!reduceMotion) {
          s.mesh.position.y =
            s.baseY + Math.sin(t * s.floatSpeed) * s.floatAmp;
          s.mesh.rotation.y += s.rotSpeed * 0.01;
          s.mesh.rotation.x += s.rotSpeed * 0.004;
        }
      });

      // Smooth parallax
      targetRot.y += (pointer.x * 0.25 - targetRot.y) * 0.04;
      targetRot.x += (pointer.y * 0.18 - targetRot.x) * 0.04;
      group.rotation.y = targetRot.y;
      group.rotation.x = targetRot.x;
      group.position.x = targetRot.y * 0.6;

      renderer.render(scene, camera);
    };
    animate();

    // Pause when offscreen / tab hidden
    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) animate();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(mount);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      resizeObserver.disconnect();
      slabGeo.dispose();
      stoneMat.dispose();
      goldMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 opacity-80"
    />
  );
}
