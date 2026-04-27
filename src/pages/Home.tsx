import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import WhatWeDo from "@/components/site/WhatWeDo";
import Ticker from "@/components/site/Ticker";
import Stats from "@/components/site/Stats";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const Home = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Ticker />
        <Stats />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
