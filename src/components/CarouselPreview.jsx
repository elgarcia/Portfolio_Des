"use client";
import { useRef, useState, useEffect } from "react";

export default function CarouselPreview({ project }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detectar qué imagen está centrada en tiempo real
  useEffect(() => {
    const scroll = scrollRef.current;

    const onScroll = () => {
      const width = scroll.clientWidth;
      const scrollLeft = scroll.scrollLeft;

      // Índice aproximado en el centro
      const newIndex = Math.round(scrollLeft / width);

      setCurrentIndex(newIndex);
    };

    scroll.addEventListener("scroll", onScroll);

    return () => scroll.removeEventListener("scroll", onScroll);
  }, []);

  // Calcular imágenes laterales
  const prevImage =
    currentIndex > 0 ? project.images[currentIndex - 1] : null;
  const nextImage =
    currentIndex < project.images.length - 1
      ? project.images[currentIndex + 1]
      : null;

  return (
    <div className="relative w-full h-3/4 flex items-center justify-center">

      {/* --- Imagen izquierda de fondo --- */}
      {prevImage && (
        <img
          src={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-auto object-scale-down 
            opacity-80 scale-70 blur-sm pointer-events-none transition-all duration-500"/>
      )}

      {/* --- Imagen derecha de fondo --- */}
      {nextImage && (
        <img
          src={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-scale-down 
            opacity-80 scale-70 blur-sm pointer-events-none transition-all duration-500"/>
      )}

      {/* --- Carrusel principal con scroll horizontal --- */}
      <div ref={scrollRef} className="relative z-10 flex overflow-x-auto snap-x snap-mandatory w-full h-screen gap-4 scrollbar-none">
        {project.images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full flex items-center justify-center snap-start">
            <img src={img} className="h-2/3 w-auto object-scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
