// GENERATED from src/pages/index.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import Hero from '@/components/sections/Hero';
import HomeAbout from '@/components/sections/HomeAbout';
import Services from '@/components/sections/Services';
import Listings from '@/components/sections/Listings';
import Testimonials from '@/components/sections/Testimonials';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Faq from '@/components/sections/Faq';

export default function Index() {
  return (
    <>
      <Base route="/"
        title="Stuff  — The Tan Corner"
        description="A visual diary of my life and art. Here, I blend my passion for digital creation with real-world experiences and inspiring discoveries."
      >
        <Hero />
        <HomeAbout />
        <Services />
        <Listings />
        <Testimonials />
        <Features />
        <Team />
        <Faq />
      </Base>
    </>
  );
}
