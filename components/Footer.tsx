import { Mail, Camera, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/7 bg-navy">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image src="/aeroflow-wing-white-512.png" alt="AeroFlow icon" width={30} height={30} className="object-contain" />
          <span className="font-heading font-700 text-white text-lg tracking-tight">AeroFlow</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted">
          {["#services", "#process", "#contact"].map((href) => (
            <a key={href} href={href} className="hover:text-white transition-colors duration-200 capitalize">
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[
            { href: "https://mail.google.com/mail/?view=cm&to=mohammed.abd21131a@coeng.uobaghdad.edu.iq", icon: Mail },
            { href: "https://wa.me/9647736360937",                       icon: MessageCircle  },
            { href: "https://instagram.com/8r4b",                        icon: Camera         },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/50 hover:text-cyan transition-colors duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="text-center text-xs text-muted/40 py-4">
          © {new Date().getFullYear()} AeroFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
