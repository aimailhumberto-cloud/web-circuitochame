/* Circuito Chame — Jungle Explorer Navbar */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Compass } from "lucide-react";
import { WHATSAPP } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/el-circuito", label: "El Circuito" },
  { href: "/circuitos", label: "Experiencias" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/tu-base", label: "Tu Base" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-sunset flex items-center justify-center">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`text-lg font-bold tracking-tight transition-colors ${
                scrolled ? "text-jungle-dark" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Circuito Chame
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-sunset" : "text-sunset-light"
              }`}
            >
              Aventura + Estadía
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-sunset ${
                location === link.href
                  ? scrolled ? "text-sunset" : "text-sunset-light"
                  : scrolled ? "text-jungle-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-sunset text-white text-sm font-semibold rounded-full hover:bg-sunset-light transition-colors"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-jungle-dark" : "text-white"
          }`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-sand">
          <div className="container py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 ${
                  location === link.href ? "text-sunset" : "text-jungle-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 bg-sunset text-white text-center font-semibold rounded-full"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
