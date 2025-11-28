"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects2D, projects3D } from "../data/projectsData";
import ProjectSelector from "./ProjectSelector";
import ProjectList from "./ProjectList";

export default function GallerySection() {
  const [selected2D, setSelected2D] = useState(projects2D[0].id);
  const [selected3D, setSelected3D] = useState(projects3D[0].id);

  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="gallery" className="w-full snap-start bg-pink-200">

      {/* 🔥 Pantalla completa con título + selectores */}
      <div className="w-full h-screen flex flex-col justify-center items-center px-6">

        {/* Título animado */}
        <motion.h2
          className="text-5xl font-bold text-black text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Proyectos
        </motion.h2>

        {/* Selectores animados */}
        <motion.div
          className="flex flex-col md:flex-row justify-around text-black items-center gap-12 w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProjectSelector
            title="Proyectos 2D"
            projects={projects2D}
            selected={selected2D}
            setSelected={setSelected2D}
            onNavigate={() => scrollToProject(selected2D)}
          />

          <ProjectSelector
            title="Proyectos 3D"
            projects={projects3D}
            selected={selected3D}
            setSelected={setSelected3D}
            onNavigate={() => scrollToProject(selected3D)}
          />
        </motion.div>
      </div>

      {/* 🔥 Lista completa de proyectos */}
      <ProjectList projects={[...projects2D, ...projects3D]} />
    </section>
  );
}
