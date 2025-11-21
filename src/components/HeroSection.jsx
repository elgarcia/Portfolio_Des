"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full snap-start flex items-center justify-center py-24">

      {/* Rosa */}
      <div className="absolute top-0 left-0 h-full w-full bg-pink-200" />

      {/* div con blur solo en la parte inferior */}
      <div className="absolute  w-full h-100 bg-pink-200/20 backdrop-blur-md" />

      {/* GRADIENTE */}
      <div className="absolute inset-0 -bg-linear-120 from-transparent to-black opacity-30 pointer-events-none" />

      {/* TITULO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-10 text-5xl md:text-7xl font-bold tracking-tight z-10"
      >
        PORTFOLIO <span className="text-accent">DRESLER</span>
      </motion.h1>

      <div className="absolute top-20 left-10 text-left z-10">
        {/* Línea 1: Título */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl font-semibold text-textSecondary"
        >
          3D DESIGNER
        </motion.p>

        {/* Línea 2: Años */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-sm md:text-base text-textSecondary mt-2"
        >
          2024 – 2025
        </motion.p>

        {/* Línea 3: Tipos de trabajos */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-sm md:text-base text-textSecondary mt-2 max-w-sm whitespace-nowrap"
        >
          Modelado 3D • Renderizado • Diseño de entornos • Animación
        </motion.p>

        {/* BOTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-15"
        >
          <a
            href="#projects"
            className="px-8 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-black transition-all duration-300"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>


    </section>
  );
}

