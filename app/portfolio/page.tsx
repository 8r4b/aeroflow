import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA    from "@/components/CTA";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio — AeroFlow AI Automation Agency",
  description:
    "See how AeroFlow has helped businesses automate with AI. Real case studies, real results.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioPageContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
