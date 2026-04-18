import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import Services from "@/components/Services";
import Process  from "@/components/Process";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
