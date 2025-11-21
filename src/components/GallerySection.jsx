import { projects } from '../data/projectsData'
import ProjectCard from './ProjectCard'

export default function GallerySection() {
  return (
    <section id='projects' className="h-screen snap-start w-full py-20 bg-pink-100">

      <div className="h-screen w-full snap-y snap-mandatory overflow-y-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

