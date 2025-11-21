export default function AboutSection() {
    return (
      <section id="about" className="relative h-screen w-full snap-start flex flex-col py-24 px-6 bg-neutral-900">
        <div className="flex items-start w-full px-6">
            {/*Sobre mi*/}
            <h2 className="text-2xl text-gray-300 mb-4 ml-4">
                About Me
            </h2>
            {/*Correo/numero*/}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex  items-center">
                <div className="px-2 py-1 text-gray-300 mb-4">Dorani2306@gmail.com</div>
                <div className="px-2 py-1 text-gray-400">/</div>
                <div className="px-2 py-1 text-gray-300 -mb-4">+34 658 75 30 50</div>
            </div>
            {/*Imagen/icono*/}
        </div>
        
       {/* Apartado con info personal*/}
        <div className="px-6 mt-16 ml-4 flex flex-col space-y-4 max-w-sm">
            <p className="text-gray-300 text-lg">Barcelona, Spain</p>
            <p className="text-gray-300 text-lg">Fecha nacimiento</p>
            <p className="text-gray-300 text-lg">Personalidad</p>
        </div>

       {/* Apartado Experiencia Laboral */}
        <div className="mt-24 px-6 ml-4">
            <h3 className="text-xl text-white mb-8">Estudios</h3>
            
            <div className="flex flex-wrap gap-6">
                {/* Experiencia 1 */}
                <div className="mb-5">
                <h4 className="text-xl mb-5 font-semibold text-white">Diseño Grafico</h4>
                <p className="text-gray-300">
                    Aptitud o habilidad 1
                </p>
                <p className="text-gray-300">
                    Aptitud o habilidad 2
                </p>
                <p className="text-gray-300">
                    Aptitud o habilidad 3
                </p>
                </div>

                {/* Experiencia 2 */}
                <div className="mb-5">
                <h4 className="text-xl mb-5 font-semibold text-white">Animación 3D</h4>
                <p className="text-gray-300">
                    Aptitud o habilidad 1
                </p>
                <p className="text-gray-300">
                    Aptitud o habilidad 2
                </p>
                <p className="text-gray-300">
                    Aptitud o habilidad 3
                </p>
                </div>
                {/* Puedes añadir más experiencias aquí */}
            </div>
        </div>
      </section>
    );
  }
  