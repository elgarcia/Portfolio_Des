import HeroSection from '../components/HeroSection'
import GallerySection from '../components/GallerySection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <GallerySection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
