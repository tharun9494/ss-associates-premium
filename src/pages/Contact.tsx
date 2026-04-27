import Navbar from "@/components/site/Navbar";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
