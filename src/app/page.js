import Image from "next/image";
import HeroSection from '../components/HeroSection'
import GallerySection from '../components/GallerySection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <HeroSection/>
      <AboutSection/>
      <GallerySection/>
      <ContactSection/>
    </main>
  );
}
