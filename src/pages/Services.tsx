import Navbar from "@/components/site/Navbar";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicesPage;
