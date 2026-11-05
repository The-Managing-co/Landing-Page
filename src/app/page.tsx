import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Products from '../components/landing/Products';
import Stats from '../components/landing/Stats';
import ClientProject from '../components/landing/ClientProject';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';
import CommingSoon from '../components/landing/Commingsoon';
import Services from '../components/landing/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-neutral-100 selection:bg-blue-600 selection:text-white font-sans">
      {/* <Navbar />
      <Hero />
      <Services />
      <Products />
      <Stats />
      <ClientProject />
      <CTA />
      <Footer /> */}
      <CommingSoon/>
    </main>
  );
}