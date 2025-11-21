"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative w-full snap-start flex flex-col sm:py-24 px-4 sm:px-6 lg:px-20 bg-neutral-900
             min-h-svh md:min-h-screen"
        >
            {/* Header con título e info de contacto */}
            <motion.div
                className="flex flex-col mt-24 md:mt-0 md:flex-row md:items-start w-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Sobre mi */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4 md:mb-0">
                    About Me
                </h2>

                {/* Contacto */}
                <div className="relative flex flex-col items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex-row md:items-center">
                    <div className="px-2 text-gray-300 md:mb-4">Dorani2306@gmail.com</div>
                    <div className="px-2 text-gray-400 hidden md:block">/</div>
                    <div className="px-2 text-gray-300 md:-mb-4">+34 658 75 30 50</div>
                </div>
            </motion.div>

            {/* Info personal */}
            <motion.div
                className="flex flex-col md:flex-row md:space-x-12 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="flex flex-col space-y-2 max-w-full md:max-w-sm text-gray-300">
                    <p>Barcelona, Spain</p>
                    <p>Fecha nacimiento</p>
                    <p>Personalidad</p>
                </div>
            </motion.div>

            {/* Estudios / habilidades */}
            <motion.div
                className="absolute bottom-12 md:space-x-12 mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-4">
                            Diseño Gráfico
                        </h3>
                        <p className="text-gray-300">Aptitud o habilidad 1</p>
                        <p className="text-gray-300">Aptitud o habilidad 2</p>
                        <p className="text-gray-300">Aptitud o habilidad 3</p>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl md:text-2xl text-white font-semibold mb-2 md:mb-4">
                            Animación 3D
                        </h3>
                        <p className="text-gray-300">Aptitud o habilidad 1</p>
                        <p className="text-gray-300">Aptitud o habilidad 2</p>
                        <p className="text-gray-300">Aptitud o habilidad 3</p>
                    </div>
                </div>
            </motion.div>
        </section>

    );
}
