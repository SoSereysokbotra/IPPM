"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Camera,
  Activity,
  Cpu,
  Wifi,
  Crosshair,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

export default function LiveTelemetry3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simulated live data state (static for display)
  const [telemetry] = useState({
    joints: [
      { name: "Base", angle: 45, target: 45 },
      { name: "Shoulder", angle: -30, target: -30 },
      { name: "Elbow", angle: 60, target: 60 },
      { name: "Wrist", angle: 0, target: 0 },
    ],
    latency: 42,
    fps: 60,
  });

  // --- THREE.JS INTEGRATION ---
  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0e14");
    scene.fog = new THREE.Fog("#0a0e14", 20, 100);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100,
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 1, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const bluePointLight = new THREE.PointLight(0x00d2ff, 5, 20);
    bluePointLight.position.set(-5, 5, 5);
    scene.add(bluePointLight);

    // 5. Grid
    const gridHelper = new THREE.GridHelper(20, 40, 0x00d2ff, 0x111111);
    (gridHelper.material as THREE.Material).opacity = 0.2;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    // 6. Controls (with auto-rotate for a nice view)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // 7. Load Model (static)
    const loader = new GLTFLoader();

    loader.load(
      "/models/industrial_robotic_arm_info.gltf",
      (gltf) => {
        const arm = gltf.scene;
        arm.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Center and scale the model using a pivot group
        const box = new THREE.Box3().setFromObject(arm);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        arm.position.set(-center.x, -center.y, -center.z);

        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = maxDim > 0 ? 10 / maxDim : 1;
        arm.scale.setScalar(scaleFactor);

        const pivot = new THREE.Group();
        pivot.add(arm);
        const scaledHalfHeight = (size.y / 2) * scaleFactor;
        pivot.position.set(0, scaledHalfHeight, 0);
        scene.add(pivot);

        // Adjust camera to look at the model
        const targetY = scaledHalfHeight;
        camera.position.set(18, targetY + 8, 18);
        camera.near = 0.1;
        camera.far = 1000;
        camera.updateProjectionMatrix();
        camera.lookAt(0, targetY, 0);
        controls.target.set(0, targetY, 0);
        controls.update();

        // No animation applied – the arm remains static.
      },
      undefined,
      (error) =>
        console.error(
          "Error loading model. Make sure industrial_robotic_arm_info.gltf/.bin are in the public/models folder.",
          error,
        ),
    );

    // 8. Animation Loop (only updates controls and render – no model movement)
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      controls.update(); // Handles damping and auto-rotation
      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      );
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[calc(100vh-140px)] min-h-[700px] flex flex-col lg:flex-row gap-4 bg-[#05080c] p-4 rounded-xl border border-gray-800 shadow-2xl overflow-hidden text-gray-300">
      {/* LEFT PANEL: Telemetry & Controls (Collapsible) */}
      <div
        className={`relative flex flex-col gap-4 transition-all duration-300 ease-in-out ${
          isLeftOpen ? "w-full lg:w-1/4" : "w-full lg:w-12 items-center"
        }`}
      >
        {/* Collapse/Expand Toggle Button */}
        <button
          onClick={() => setIsLeftOpen(!isLeftOpen)}
          className={`absolute z-50 top-4 bg-gray-800 border border-gray-600 rounded-full p-1 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors shadow-lg ${
            isLeftOpen ? "-right-3" : "-right-3 lg:right-auto lg:translate-x-12" // Adjusts button position when collapsed
          }`}
          title={isLeftOpen ? "Collapse Panel" : "Expand Panel"}
        >
          {isLeftOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {isLeftOpen ? (
          <>
            <div className="bg-[#0a0e14] border border-gray-800/60 p-4 rounded-lg shadow-lg relative overflow-hidden transition-opacity duration-300">
              <h2 className="text-cyan-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4" /> Arm Telemetry
              </h2>
              <div className="space-y-4">
                {telemetry.joints.map((joint) => (
                  <div key={joint.name} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">{joint.name} Joint</span>
                      <span className="text-cyan-300">
                        {joint.angle.toFixed(1)}°
                      </span>
                    </div>
                    <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden border border-gray-800">
                      <div
                        className="bg-cyan-500 h-full transition-all duration-300"
                        style={{
                          width: `${((joint.angle + 90) / 180) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0e14] border border-gray-800/60 p-4 rounded-lg shadow-lg flex-1 transition-opacity duration-300">
              <h2 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> End-Effector Space
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {["X", "Y", "Z", "W"].map((axis) => (
                  <div
                    key={axis}
                    className="bg-gray-900/50 border border-gray-800 p-2 rounded flex flex-col items-center justify-center"
                  >
                    <span className="text-[10px] text-gray-500 uppercase">
                      {axis}-Axis
                    </span>
                    <span className="text-sm font-mono text-gray-200">
                      {isMounted ? (Math.random() * 100).toFixed(2) : "0.00"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Collapsed State View */
          <div className="flex-1 flex flex-col items-center pt-16 bg-[#0a0e14] border border-gray-800/60 rounded-lg w-full">
            <Menu className="w-5 h-5 text-gray-500 mb-8" />
            <span
              className="text-gray-500 text-xs tracking-widest uppercase font-bold"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Telemetry Offline
            </span>
          </div>
        )}
      </div>

      {/* CENTER PANEL: 3D Digital Twin Viewport */}
      {/* The width now changes to flex-1 to fill all remaining space when the left panel collapses */}
      <div
        className={`flex flex-col bg-[#0a0e14] border border-gray-800/60 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,210,255,0.05)] relative transition-all duration-300 ease-in-out ${
          isLeftOpen ? "w-full lg:w-2/4" : "flex-1"
        }`}
      >
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded backdrop-blur-sm">
            Live View
          </span>
          <span className="bg-gray-900/60 text-gray-400 border border-gray-700 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded backdrop-blur-sm">
            Digital Twin
          </span>
        </div>

        <div
          ref={mountRef}
          className="w-full h-full min-h-[400px] outline-none cursor-move"
        ></div>

        <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-cyan-500/70">
          GRID_SCALE: 1.0 <br />
          RENDER_FPS: {telemetry.fps}
        </div>
      </div>

      {/* RIGHT PANEL: Vision & Status */}
      <div
        className={`w-full flex flex-col gap-4 transition-all duration-300 ease-in-out ${
          isLeftOpen ? "lg:w-1/4" : "lg:w-1/3"
        }`}
      >
        {/* Dynamic height added to the Vision System container */}
        <div
          className={`bg-[#0a0e14] border border-gray-800/60 p-3 rounded-lg shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
            isLeftOpen ? "h-[250px]" : "h-[320px]"
          }`}
        >
          <h2 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
            <Camera className="w-4 h-4" /> Vision System
          </h2>
          <div className="flex-1 bg-black rounded border border-gray-800 relative overflow-hidden">
            <img
              src="http://localhost:5000/video_feed"
              alt="Live Camera Feed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-[#0a0e14] border border-gray-800/60 p-4 rounded-lg shadow-lg flex-1 flex flex-col gap-4 relative overflow-hidden">
          <h2 className="text-gray-400 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
            <Cpu className="w-4 h-4" /> System Status
          </h2>

          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-green-400" /> Network
            </span>
            <span className="font-mono text-sm text-green-400">
              {telemetry.latency}ms
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> Edge Node
            </span>
            <span className="font-mono text-sm text-gray-200">ESP32-S3</span>
          </div>

          <div className="flex items-center justify-between pb-2">
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" /> Temp (Max)
            </span>
            <span className="font-mono text-sm text-amber-400">42.1°C</span>
          </div>

          <div className="mt-auto pt-4">
            <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 py-2 rounded text-xs font-bold tracking-widest uppercase transition-colors">
              Emergency Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
