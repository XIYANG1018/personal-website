
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#eef]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        
      </div>

      <Footer />
      
      
    </main>
      
  
    

  );
}
