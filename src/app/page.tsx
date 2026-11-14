import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import About from '../components/landing/About';
import Work from '../components/landing/Work';
import Testimonials from '../components/landing/Testimonials';
import Planes from '../components/landing/Planes';
import Footer from '../components/landing/Footer';
import Products from '../components/landing/Products';
import Research from '../components/landing/Research';

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#020617] text-neutral-100 selection:bg-cyan-500 selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products/>
      <Services />
      <Work/>
      <Testimonials/>
      <Planes/>
      <Research/>
      <Footer/>
    </main>
  );
}
