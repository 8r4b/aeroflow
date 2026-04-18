import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — AeroFlow AI Automation Agency",
  description:
    "Get in touch with AeroFlow. Book a free discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
