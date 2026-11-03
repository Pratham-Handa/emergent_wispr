import { useEffect, Component } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/components/LanguageContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Station from "@/pages/Station";
import Engineering from "@/pages/Engineering";
import Community from "@/pages/Community";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { scrollToLocation } from "@/lib/routeScroll";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    let frame = 0;
    if (pathname === "/" && hash === "#booking") {
      frame = requestAnimationFrame(() => scrollToLocation(pathname, hash));
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function LenisSetup() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    let lenis = null;
    let raf = 0;
    let cancelled = false;
    (async () => {
      try {
        const Lenis = (await import("lenis")).default;
        if (cancelled) return;
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        window.__lenis = lenis;
        const loop = (time) => {
          lenis.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {
        window.__lenis = null;
      }
    })();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
      window.__lenis = null;
    };
  }, [reduce]);
  return null;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { err: false };
  }
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F4F1EA] p-8 text-center">
          <p className="font-display text-3xl font-semibold text-[#1A1A1A]">Signal failure.</p>
          <a href="/" className="font-semibold text-[#B3352B] underline decoration-2 underline-offset-4">
            Back to the station
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <LenisSetup />
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Station />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/events" element={<Community />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-right" richColors closeButton />
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
