/* Circuito Chame — Experiencias (Circuitos as INGREDIENTS, not standalone products)
   No prices shown — these are part of packages
   Reframed as "what you'll experience" not "what you'll buy" */
import { Link } from "wouter";
import { Clock, Mountain, ArrowRight, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, CIRCUITOS, WHATSAPP } from "@/lib/data";

export default function Circuitos() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.cascadaFilipinas} alt="Cascadas del circuito" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Incluidas en Tu Paquete</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Las Aventuras Que Te Esperan
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Cada paquete incluye experiencias del circuito. Estas son las aventuras que vivirás durante tu estadía en Playa Caracol.
          </p>
        </div>
      </section>

      {/* Intro — reframing */}
      <section className="py-12 bg-jungle text-white">
        <div className="container text-center">
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Todas las experiencias incluyen <strong className="text-sunset">transporte, guías certificados y equipo</strong>. 
            Cada mañana sales a la aventura y cada tarde vuelves a tu base en el Radisson Riviera.
          </p>
        </div>
      </section>

      {/* Experiencias — visual cards without prices */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CIRCUITOS.map((c, i) => (
              <Link key={c.id} href={`/circuitos/${c.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative aspect-square sm:aspect-auto overflow-hidden">
                    <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-sunset text-white text-xs font-bold uppercase rounded-full">
                        Experiencia {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-jungle-dark mb-2" style={{ fontFamily: "var(--font-heading)" }}>{c.name}</h3>
                    <p className="text-jungle-dark/60 text-sm mb-4 leading-relaxed">{c.tagline}</p>
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-jungle-dark/50">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.duration}</span>
                      <span className="flex items-center gap-1"><Mountain className="w-3 h-3" /> {c.difficulty}</span>
                      {c.groupSize && <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {c.groupSize}</span>}
                    </div>
                    {/* Ideal for instead of price */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {c.idealFor.slice(0, 3).map((h: string, j: number) => (
                        <span key={j} className="px-2 py-0.5 bg-sand text-jungle-dark/60 text-[10px] rounded-full">{h}</span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-sunset text-sm font-semibold group-hover:gap-2 transition-all">
                      Ver la Experiencia <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Split: After adventure → comfort */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
            <img src={IMAGES.cerroChameHike} alt="Aventura" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-sunset text-xs font-bold uppercase tracking-widest">Mañana</span>
              <h3 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>La Aventura</h3>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
            <img src={IMAGES.radissonPool} alt="Comfort" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-sunset text-xs font-bold uppercase tracking-widest">Tarde</span>
              <h3 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: "var(--font-heading)" }}>El Paraíso</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA → Paquetes */}
      <section className="py-16 bg-jungle-dark text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Estas Experiencias Están Incluidas en Tu Paquete</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Estadía en el Radisson Riviera + aventuras del circuito + gastronomía en Vento Beach Club. Todo en un solo paquete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes con Estadía
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20">
              Armar Paquete Personalizado
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
