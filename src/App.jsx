// One-Page Scrolling Portfolio with Animations
import ScrollNavbar from './components/ScrollNavbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ScrollFooter from './components/ScrollFooter';

function App() {
  return (
    <div className="bg-black">
      {/* Sticky Navbar with Scroll Progress */}
      <ScrollNavbar />

      {/* All Sections in One Page */}
      <main>
        <HeroSection />
        <EducationSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <ScrollFooter />
    </div>
  );
}

export default App;
