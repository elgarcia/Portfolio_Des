"use client";
import { motion } from "framer-motion";
import CarouselPreview from "./CarouselPreview";
import dynamic from "next/dynamic";

const Model3D = dynamic(() => import("./Model3D"), { ssr: false });

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="min-h-screen md:h-screen snap-none flex flex-col items-center justify-center px-4 md:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl text-pink-300 font-bold mb-4 text-center">{project.title}</h2>
      {/*<p className="text-gray-600 mb-6 text-center max-w-2xl">{project.description}</p>*/}

      {/* Renderiza 2D */}
      {project.layout === "fullImage" && (
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-2/3 md:h-3/4 object-scale-down p-12"
          loading="lazy"
        />
      )}

      {project.layout === "carousel" && <CarouselPreview project={project} />}

      {/* Renderiza 3D */}
      {project.layout === "3dModel" && (
        <div className="w-full flex justify-center py-6">
          <Model3D src={project.modelUrl} />
        </div>
      )}

    </motion.div>
  );
}
