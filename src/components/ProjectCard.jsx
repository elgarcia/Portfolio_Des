import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <img src={project.thumbnail} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>
      </div>
    </Link>
  )
}
