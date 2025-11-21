"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="h-screen snap-none flex flex-col items-center justify-center p-6 bg-pink-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl text-black font-bold mb-4text-center">{project.title}</h2>
      <p className="text-gray-600 mb-6 text-center max-w-2xl">{project.description}</p>

      {/* Renderiza según layout */}
      {project.layout === "fullImage" && (
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-2/3 md:h-3/4 object-scale-down"
        />
      )}

      {project.layout === "threeColumns" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-screen">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i}`}
              className="w-full h-2/3 m:h-3/4 object-scale-down"
            />
          ))}
        </div>
      )}

      {project.layout === "carousel" && (
        <div className="flex overflow-x-auto w-full h-screen snap-x snap-mandatory">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i}`}
              className="w-full shrink-0 h-3/4 object-scale-down snap-start"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
