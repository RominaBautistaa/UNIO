import Hero from './landing/Hero';
import About from './landing/About';
import Services from './landing/Services';
import Plans from './landing/Plans';
import Portfolio from './landing/Portfolio';
import Testimonials from './landing/Testimonials';
import Blog from './landing/Blog';
import Contact from './landing/Contact';
import Footer from './landing/Footer';

interface LandingPageProps {
  onOpenApp: () => void;
}

function LandingPage({ onOpenApp }: LandingPageProps) {
  return (
    <div className="w-full">
      <Hero onOpenApp={onOpenApp} />
      <About />
      <Services />
      <Plans />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
