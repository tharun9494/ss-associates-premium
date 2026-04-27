import Navbar from "@/components/site/Navbar";
import Testimonials from "@/components/site/Testimonials";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TestimonialsPage;
