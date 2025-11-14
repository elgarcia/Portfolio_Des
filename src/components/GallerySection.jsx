import projects from '../data/projectsData'
import ProjectCard from './ProjectCard'

export default function GallerySection() {
  return (
    <section id="projects" className="h-screen w-full snap-start py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Proyectos destacados</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        Aqui van los proyectos
      </div>
    </section>
  )
}
