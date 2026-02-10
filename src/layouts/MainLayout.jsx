import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * MainLayout - Standard layout for public pages
 * Includes Navbar and Footer
 */
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
