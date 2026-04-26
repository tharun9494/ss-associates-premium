import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Stats from "@/components/site/Stats";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Projects from "@/components/site/Projects";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
