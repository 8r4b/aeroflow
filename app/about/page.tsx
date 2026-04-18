import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA    from "@/components/CTA";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About — AeroFlow AI Automation Agency",
  description:
    "Meet the team behind AeroFlow. We're AI automation specialists helping businesses across the globe run smarter.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
