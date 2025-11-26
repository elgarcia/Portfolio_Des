"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

function Model({ src }) {
    const { scene } = useGLTF(src);
    const modelRef = useRef();

    useEffect(() => {
        if (!modelRef.current) return;

        // Bounding box del modelo
        const box = new THREE.Box3().setFromObject(modelRef.current);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Escala automáticamente para que el modelo encaje
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 2 / maxDim; // siempre cabe en [-1, 1] por eje
        modelRef.current.scale.setScalar(scaleFactor);

        // Centra el modelo considerando la escala
        modelRef.current.position.x -= center.x * scaleFactor;
        modelRef.current.position.y -= center.y * scaleFactor;
        modelRef.current.position.z -= center.z * scaleFactor;
    }, [scene]);

    return <primitive ref={modelRef} object={scene} />;
}

export default function ModelViewer({ src }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            className="w-full h-[60vh] md:h-[80vh]"
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={<Html center>Loading 3D Model...</Html>}>
                <Model src={src} />
            </Suspense>
            <OrbitControls
                enablePan={false}     // desactiva el movimiento lateral
                enableZoom={false}    // desactiva el zoom
                enableRotate={true}   // permite rotación
                target={[0, 0, 0]}    // siempre rotará alrededor del centro
                rotateSpeed={0.5}     // velocidad de rotación
            />

        </Canvas>
    );
}
