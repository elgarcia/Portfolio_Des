"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative 
        flex flex-col items-center justify-between
        h-[calc(100vh-80px)] w-full 
        snap-start
        px-4 sm:px-6 md:px-10
      "
    >
      {/* Fondo rosa */}
      <div className="absolute inset-0 bg-pink-200 z-0" />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 pointer-events-none z-0" />

      {/* Contenido animado */}
      <motion.div
        className="z-10 relative flex flex-col items-center justify-center flex-1 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Contacto
        </h2>

        <p className="text-gray-700 text-base sm:text-lg max-w-md mb-6 px-2">
          Si te interesa colaborar o ver más trabajos, escríbeme:
        </p>

        <motion.a
          href="mailto:Dorani2306@gmail.com"
          className="
            px-5 sm:px-6 md:px-8 
            py-3 sm:py-3.5 
            rounded-3xl 
            border-black text-black border-2 
            hover:border-white hover:text-white 
            transition
            text-sm sm:text-base
          "
        >
          Enviar correo
        </motion.a>
      </motion.div>

      {/* Icono Instagram con animación */}
      <motion.div
        className="z-10 pb-4 sm:pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.instagram.com/dorani.design"
          target="_blank"
          className="group"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 sm:w-10 sm:h-10 text-black group-hover:text-white transition"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5c2.35 0 4.25 1.9 4.25 4.25v8.5c0 2.35-1.9 4.25-4.25 4.25h-8.5A4.25 4.25 0 013 16.25v-8.5C3 5.4 4.9 3.5 7.25 3.5h8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8a3.2 3.2 0 110 6.4 3.2 3.2 0 010-6.4zM17.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}
