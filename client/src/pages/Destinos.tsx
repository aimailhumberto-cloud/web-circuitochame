/* Circuito Chame — Destinos */
import { Link } from "wouter";
import { MapPin, ArrowRight, Clock, Mountain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, DESTINOS } from "@/lib/data";

export default function Destinos() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.cascadaFilipinas} alt="Destinos del Circuito Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="text-sunset text-sm font-semibold uppercase tracking-widest">5 Destinos Únicos</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Los Destinos del Circuito
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Cada destino es un mundo diferente. Todos a menos de 1 hora de tu base en Playa Caracol.
          </p>
        </div>
      </section>

      {/* Destinos */}
      <section className="py-20 bg-cream">
        <div className="container">
          {DESTINOS.map((d, i) => (
            <div key={d.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-sunset" />
                  <span className="text-sunset text-sm font-semibold uppercase tracking-widest">{d.timeFromBase}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {d.name}
                </h2>
                <p className="text-jungle-dark/70 leading-relaxed mb-6">{d.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {d.activities.map((a: string) => (
                    <span key={a} className="px-3 py-1.5 bg-white text-jungle-dark/60 text-sm rounded-full border border-jungle-dark/10">{a}</span>
                  ))}
                </div>
                <Link href="/circuitos" className="inline-flex items-center gap-2 text-sunset font-semibold hover:gap-3 transition-all">
                  Ver circuitos en {d.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-jungle text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Quieres Visitarlos Todos?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">El paquete Inmersión Total te lleva a todos los destinos en 5 noches con estadía incluida.</p>
          <Link href="/paquetes" className="inline-flex items-center gap-2 px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
            Ver Paquetes <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
