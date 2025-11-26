"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100svh] snap-start flex justify-start md:justify-between items-start py-24 px-6 md:px-12 lg:px-20"
    >
      {/* --- Fondos --- */}
      <div className="absolute inset-0 bg-pink-200 z-0" />
      <div className="absolute bottom-0 w-full h-32 bg-pink-200/20 backdrop-blur-md z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none z-0" />

      {/* --- Textos laterales / arriba --- */}
      <div className="relative z-10 flex flex-col items-start max-w-full text-black">
        {/* Línea 1: Título profesional */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-textSecondary"
        >
          3D DESIGNER
        </motion.p>

        {/* Línea 2: Años de experiencia */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-sm sm:text-base text-textSecondary mt-2"
        >
          2024 – 2025
        </motion.p>

        {/* Línea 3: Tipos de trabajos */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-sm sm:text-base text-textSecondary mt-2 break-word"
        >
          Modelado 3D • Renderizado • Diseño de entornos • Animación
        </motion.p>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-6"
        >
          <a
            href="#gallery"
            className="px-6 sm:px-8 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>

      {/* --- Título grande --- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute bottom-10 left-6 md:left-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold tracking-tight z-10 text-black 
        "
      >
        PORTFOLIO <span className="text-accent">DRESLER</span>
      </motion.h1>
    </section>
  );
}
