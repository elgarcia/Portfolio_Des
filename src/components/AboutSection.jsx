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
                className="w-full flex flex-row justify-between gap-8 sm:gap-12 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {/* Columna Izquierda */}
                <div className="flex flex-row space-x-6 min-w-[220px] flex-1">
                    <div>
                        <p className="text-sm sm:text-base text-gray-300">Dresler Muñoz</p>
                        <p className="text-sm sm:text-base text-gray-300">Barcelona, Spain</p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="flex flex-row space-x-6 min-w-[220px] text-right">
                    <div>
                        <p className="text-sm sm:text-base text-gray-300">Buscando colaborar en producciones creativas</p>
                        <p className="text-sm sm:text-base text-gray-300">Aprendiendo tendencias digitales</p>
                        <p className="text-sm sm:text-base text-gray-300">Buscando experimentar con estilos visuales únicos</p>
                    </div>

                </div>
            </motion.div>

            {/* Estudios / habilidades */}
            <motion.div
                className="w-full flex flex-col justify-end py-8 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-2">

                    {/* Columna Izquierda */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-4 sm:space-x-6 min-w-[220px]">

                        {/* 3DS Max */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">3DS Max</h3>
                            <p className="text-sm sm:text-base text-gray-300">Modelado 3D avanzado</p>
                            <p className="text-sm sm:text-base text-gray-300">Renderizado fotorrealista</p>
                            <p className="text-sm sm:text-base text-gray-300">Rigging y animación básica</p>
                        </div>

                        {/* Maya */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">Maya</h3>
                            <p className="text-sm sm:text-base text-gray-300">Animación 3D profesional</p>
                            <p className="text-sm sm:text-base text-gray-300">Sistemas de control</p>
                            <p className="text-sm sm:text-base text-gray-300">Simulación</p>
                        </div>

                        {/* Photoshop */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">Photoshop</h3>
                            <p className="text-sm sm:text-base text-gray-300">Edición fotográfica</p>
                            <p className="text-sm sm:text-base text-gray-300">Diseño gráfico y compositing</p>
                            <p className="text-sm sm:text-base text-gray-300">Pintura digital / texturizado</p>
                        </div>

                        {/* Substance */}
                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">Substance</h3>
                            <p className="text-sm sm:text-base text-gray-300">Materiales PBR</p>
                            <p className="text-sm sm:text-base text-gray-300">Texturizado avanzado</p>
                            <p className="text-sm sm:text-base text-gray-300">Procedural workflow</p>
                        </div>

                    </div>

                    {/* Columna Derecha */}
                    <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6 min-w-[220px] text-right justify-end mt-auto mb-8">

                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">Diseño Gráfico</h3>
                            <p className="text-sm sm:text-base text-gray-300">Composición y diseño visual</p>
                            <p className="text-sm sm:text-base text-gray-300">Creatividad y pensamiento visual</p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2 sm:mb-4">Animación 3D</h3>
                            <p className="text-sm sm:text-base text-gray-300">Modelado</p>
                            <p className="text-sm sm:text-base text-gray-300">Rigging</p>
                            <p className="text-sm sm:text-base text-gray-300">Texturizado</p>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>

    );
}
