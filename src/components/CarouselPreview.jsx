"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CarouselPreview({ project }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(containerRef.current?.clientWidth || 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDragEnd = (e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    let newIndex = currentIndex;

    if (offset < -50 || velocity < -500) {
      newIndex = Math.min(currentIndex + 1, project.images.length - 1);
    } else if (offset > 50 || velocity > 500) {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);
    controls.start({
      x: -newIndex * width,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Imagen lateral izquierda */}
{currentIndex > 0 && width > 768 && ( // solo en desktop/tablet
  <img
    src={project.images[currentIndex - 1]}
    className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-auto object-scale-down 
      opacity-60 scale-75 blur-sm pointer-events-none transition-all duration-500 z-0"
  />
)}

{/* Imagen lateral derecha */}
{currentIndex < project.images.length - 1 && width > 768 && ( // solo en desktop/tablet
  <img
    src={project.images[currentIndex + 1]}
    className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-scale-down 
      opacity-60 scale-75 blur-sm pointer-events-none transition-all duration-500 z-0"
  />
)}


      {/* Carrusel principal draggable */}
      <motion.div
        ref={containerRef}
        className="flex w-full h-full cursor-grab z-10"
        drag="x"
        dragConstraints={{ left: -(project.images.length - 1) * width, right: 0 }}
        onDragEnd={onDragEnd}
        animate={controls}
        whileTap={{ cursor: "grabbing" }}
      >
        {project.images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
          >
            <motion.img
  src={img}
  className="rounded-lg shadow-lg object-scale-down"
  style={{
    width: width < 768 ? "90%" : "auto",
    height: width < 768 ? "60vh" : "75%",
    scale: i === currentIndex ? 1 : 0.75,
    opacity: i === currentIndex ? 1 : 0.6,
    zIndex: i === currentIndex ? 20 : 0, 
  }}
  drag={false}
  draggable={false}
/>

          </div>
        ))}
      </motion.div>
    </div>
  );
}
