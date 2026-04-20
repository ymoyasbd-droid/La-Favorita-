import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <About />
        <Testimonials />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
