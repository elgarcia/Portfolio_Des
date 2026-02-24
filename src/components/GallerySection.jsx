"use client";
import { motion } from "framer-motion";
import { projects2D, projects3D } from "../data/projectsData";
import ProjectList from "./ProjectList";

export default function GallerySection({ category }) {

  const projects =
    category === "2d"
      ? projects2D
      : category === "3d"
      ? projects3D
      : [];

  return (
    <section className="w-full bg-pink-200 py-24 px-6">

      <motion.h2
        className="text-5xl font-bold text-black text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {category === "2d" ? "Proyectos 2D" : "Proyectos 3D"}
      </motion.h2>

      <ProjectList projects={projects} />

    </section>
  );
}