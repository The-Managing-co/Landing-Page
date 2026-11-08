import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import CommingSoon from '../components/landing/Commingsoon';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-neutral-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />
      <Hero />
      {/* <CommingSoon/> */}
    </main>
  );
}