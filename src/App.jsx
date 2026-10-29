// One-Page Scrolling Portfolio with Animations
import ScrollNavbar from './components/ScrollNavbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ScrollFooter from './components/ScrollFooter';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="theme-shell min-h-screen bg-[var(--page-bg)] transition-colors duration-500">
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
    </ThemeProvider>
  );
}

export default App;
