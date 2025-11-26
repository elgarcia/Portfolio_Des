"use client";
import { motion } from "framer-motion";
import CarouselPreview from "./CarouselPreview";

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

      {/* Renderiza según layout */}
      {project.layout === "fullImage" && (
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-2/3 md:h-3/4 object-scale-down p-12"
          loading="lazy"
        />
      )}

      {project.layout === "threeColumns" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i}`}
              className="w-full h-2/3 md:h-3/4 object-scale-down"
              loading="lazy"
            />
          ))}
        </div>
      )}

      {project.layout === "carousel" && <CarouselPreview project={project} />}
    </motion.div>
  );
}
