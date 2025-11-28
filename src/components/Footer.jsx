export default function Footer() {
    return (
      <footer className="bg-black w-full border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Portfolio — Desarrollado por 
        <a
          href="https://github.com/elgarcia"
          target="_blank"
          className="group text-pink-200"
        > Elías García</a>
      </footer>
    )
  }
  