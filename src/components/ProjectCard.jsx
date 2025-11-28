"use client";
import { motion } from "framer-motion";
import CarouselPreview from "./CarouselPreview";
import dynamic from "next/dynamic";

const Model3D = dynamic(() => import("./Model3D"), { ssr: false });

export default function ProjectCard({ project }) {
  return (
    <div
      className="min-h-screen md:h-screen snap-none flex flex-col items-center justify-center px-4 md:px-0"
    >
      {/* Título animado */}
      <motion.h2
        className="text-4xl text-black font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {project.title}
      </motion.h2>

      {/* Renderiza Carousel */}
      {project.layout === "carousel" && <CarouselPreview project={project} />}

      {/* Renderiza 3D, siempre visible */}
      {project.layout === "3dModel" && (
        <div className="w-full h-[80vh] md:h-[100vh] flex justify-center py-6">
          <Model3D src={project.modelUrl} />
        </div>
      )}
    </div>
  );
}
