"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="h-screen flex flex-col justify-center items-center bg-pink-200 snap-start">

      <motion.h2
        className="text-5xl font-bold mb-12 text-black"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Proyectos
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Link
          href="/proyectos/2d"
          className="px-6 sm:px-8 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white text-black transition-all duration-300 text-center"
        >
          Proyectos 2D
        </Link>

        <Link
          href="/proyectos/3d"
          className="px-6 sm:px-8 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white text-black transition-all duration-300 text-center"
        >
          Proyectos 3D
        </Link>
      </motion.div>

    </section>
  );
}