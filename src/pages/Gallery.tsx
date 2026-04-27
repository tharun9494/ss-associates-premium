import Navbar from "@/components/site/Navbar";
import Projects from "@/components/site/Projects";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default GalleryPage;
