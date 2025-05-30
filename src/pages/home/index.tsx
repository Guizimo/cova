import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/layout/hero';
import { Features } from '@/components/layout/features';
import { CTA } from '@/components/layout/cta';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );   
}
