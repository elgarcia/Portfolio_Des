"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useRef, useLayoutEffect } from "react";
import * as THREE from "three";

function Model({ src }) {
  const { scene } = useGLTF(src);
  const ref = useRef();
  const { size, viewport } = useThree();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());
    const sizeBox = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(sizeBox.x, sizeBox.y, sizeBox.z);

    // Escala máxima para que el modelo quepa en el canvas visible
    const scaleFactor = Math.min(viewport.width, viewport.height) / maxDim * 0.9;
    ref.current.scale.setScalar(scaleFactor);

    // Centrar modelo
    ref.current.position.set(
      -center.x * scaleFactor,
      -center.y * scaleFactor,
      -center.z * scaleFactor
    );
  }, [scene, viewport]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelViewer({ src }) {
  return (
    <div className="w-full h-screen md:h-screen lg:h-screen">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} className="w-full h-full">
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />

        <Suspense fallback={<Html center>Loading 3D Model...</Html>}>
          <Model src={src} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          target={[0, 0, 0]}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
