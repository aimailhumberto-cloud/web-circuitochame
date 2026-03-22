/* Circuito Chame — Jungle Explorer Footer */
import { Link } from "wouter";
import { WHATSAPP, WHATSAPP_TEXT, EMAIL, INSTAGRAM, FACEBOOK } from "@/lib/data";
import { Compass, Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-jungle-dark text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sunset flex items-center justify-center">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Circuito Chame
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Despierta. Vive. Vuelve al Paraíso. Paquetes de aventura con estadía en Playa Caracol, Panamá.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sunset uppercase tracking-wider mb-4">Experiencias</h4>
            <div className="flex flex-col gap-2">
              <Link href="/circuitos/surf-chill" className="text-sm hover:text-sunset transition-colors">Surf & Chill</Link>
              <Link href="/circuitos/cascadas-pozos" className="text-sm hover:text-sunset transition-colors">Cascadas & Pozos</Link>
              <Link href="/circuitos/cerro-chame-circuito" className="text-sm hover:text-sunset transition-colors">Hiking Cerro Chame</Link>
              <Link href="/circuitos/isla-otoque" className="text-sm hover:text-sunset transition-colors">Islas Otoque & Boná</Link>
              <Link href="/circuitos/ballenas" className="text-sm hover:text-sunset transition-colors">Avistamiento de Ballenas</Link>
              <Link href="/circuitos/pesca-deportiva" className="text-sm hover:text-sunset transition-colors">Pesca Deportiva</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sunset uppercase tracking-wider mb-4">Explorar</h4>
            <div className="flex flex-col gap-2">
              <Link href="/el-circuito" className="text-sm hover:text-sunset transition-colors">El Circuito</Link>
              <Link href="/paquetes" className="text-sm hover:text-sunset transition-colors">Paquetes con Estadía</Link>
              <Link href="/tu-base" className="text-sm hover:text-sunset transition-colors">Tu Base en Caracol</Link>
              <Link href="/nosotros" className="text-sm hover:text-sunset transition-colors">Nosotros</Link>
              <a href="https://anspanama.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sunset transition-colors">ANS Surf →</a>
              <a href="https://toursmahana.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sunset transition-colors">Mahana Tours →</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sunset uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-sunset transition-colors">
                <Phone className="w-4 h-4" /> {WHATSAPP_TEXT}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-sunset transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-sunset transition-colors">
                <Instagram className="w-4 h-4" /> @circuitochame
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 shrink-0" /> Playa Caracol, Punta Chame, Panamá
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Circuito Chame — Ecosistema Mahana. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-sunset transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-sunset transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
