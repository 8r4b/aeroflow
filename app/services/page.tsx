import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA    from "@/components/CTA";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — AeroFlow AI Automation Agency",
  description:
    "Explore our full range of AI automation services: voice agents, chatbots, website development, CRM setup, and social media automation.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
