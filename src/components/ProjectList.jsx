import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="w-full">
      {projects.map((project) => (
        <div key={project.id} id={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
