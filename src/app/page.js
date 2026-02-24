import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from "@/components/Footer";
import ProjectsSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
