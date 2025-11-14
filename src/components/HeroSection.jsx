"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full snap-start flex flex-col items-center justify-center text-center py-24">

      {/* Rosa */}
        <div className="absolute top-0 left-0 h-full w-full bg-pink-100"/>

      {/* div con blur solo en la parte inferior */}
        <div className="absolute  w-full h-100 bg-pink-100/20 backdrop-blur-md" />

      {/* GRADIENTE SOPORTE */}
        <div className="absolute inset-0 -bg-linear-120 from-transparent to-black opacity-30 pointer-events-none" />
        
      {/* TITULO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight z-10"
      >
        PORTFOLIO <span className="text-accent">DRESLER</span>
      </motion.h1>

      {/* SUBTITULO */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-textSecondary max-w-2xl z-10"
      >
        DESCRIPCION/SUBTITULO
      </motion.p>

      {/* BOTON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 z-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-black transition-all duration-300"
        >
          Ver proyectos
        </a>
      </motion.div>

      
    </section>
  );
}

  