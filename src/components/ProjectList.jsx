"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="w-full">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          id={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // renderiza cuando 20% del proyecto está visible
          transition={{ duration: 0.6 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
