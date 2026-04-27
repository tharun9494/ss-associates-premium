import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-8xl lg:text-9xl font-display text-brand-red mb-4">404</h1>
          <p className="text-xl text-brand-muted mb-8">Page not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-brand-black hover:text-brand-red transition-colors"
          >
            <span>Back to studio</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
