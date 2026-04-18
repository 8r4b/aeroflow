import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroFlow — AI Automation Agency",
  description:
    "We build AI voice agents, automation workflows, and intelligent websites that work 24/7 so you don't have to. Automate Everything. Flow Faster.",
  keywords: [
    "AI automation",
    "voice agents",
    "n8n",
    "GoHighLevel",
    "Vapi",
    "chatbots",
    "CRM setup",
    "social media automation",
    "Next.js",
    "web development",
  ],
  authors: [{ name: "AeroFlow" }],
  openGraph: {
    title: "AeroFlow — AI Automation Agency",
    description: "Automate Everything. Flow Faster.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroFlow — AI Automation Agency",
    description: "Automate Everything. Flow Faster.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
