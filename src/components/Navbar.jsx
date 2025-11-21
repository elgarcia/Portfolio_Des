import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-800 sticky top-0 bg-black backdrop-blur z-50">
      <Link href="/" className="text-2xl font-bold text-pink-300">Portfolio Dresler</Link>
      <div className="space-x-6">
        <Link href="#inicio" className="hover:text-pink-300">Inicio</Link>
        <Link href="#about" className="hover:text-pink-300">Sobre mi</Link>
        <Link href="#projects" className="hover:text-pink-300">Proyectos</Link>
        <Link href="#contact" className="hover:text-pink-300">Contacto</Link>
      </div>
    </nav>
  )
}
