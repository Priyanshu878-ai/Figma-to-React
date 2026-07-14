import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src="/avatars/Rectangle 657.png"
        alt=""
        className="absolute -left-8 top-[18%] w-24 opacity-80 sm:w-32 lg:w-40"
      />
      <img
        src="/avatars/Rectangle 658.png"
        alt=""
        className="absolute -right-6 top-[42%] w-20 opacity-80 sm:w-28 lg:w-36"
      />
      <img
        src="/avatars/Vector2516.png"
        alt=""
        className="absolute left-1/2 top-[8%] w-[min(70vw,28rem)] -translate-x-1/2 opacity-30"
      />
      <img
        src="/avatars/Ellipse736.png"
        alt=""
        className="absolute right-[12%] top-[62%] w-10 sm:w-14"
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundDecor />
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
