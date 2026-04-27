import Navbar from "@/components/site/Navbar";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
