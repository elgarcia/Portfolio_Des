import "../styles/global.css";
import {Poppins} from "next/font/google"
import Navbar from '../components/Navbar'

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"]});

export const metadata = {
  title: 'Portfolio Dresler',
  description: 'Portfolio 3d interactivo y responsive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white text-foreground`}>
        <Navbar />
        <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
