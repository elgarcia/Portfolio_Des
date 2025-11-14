import Footer from "./Footer"

export default function ContactSection() {
    return (
      <section id="contact" className="relative flex flex-col items-center justify-between h-screen w-full snap-start text-center">
        {/* Rosa */}
        <div className="absolute h-full w-full bg-pink-100 z-0"/>

        <div className="z-10 relative flex flex-col items-center justify-center flex-1 px-6">
          <h2 className="text-4xl font-bold text-black mb-6 z-10">Contacto</h2>
          <p className="text-gray-600 mb-4 z-10">
            Si te interesa colaborar o ver más trabajos, escríbeme:
          </p>
          <a
            href="mailto:contacto@portfolio3d.com"
            className="px-6 py-3  rounded-4xl border-black text-black border-2 hover:border-white hover:text-white transition z-10"
          >
            Enviar correo
          </a>
        </div>
        <Footer/>
      </section>
    )
  }
  