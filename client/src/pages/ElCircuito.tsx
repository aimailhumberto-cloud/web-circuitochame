/* Circuito Chame — El Circuito (Concept Page)
   Reframed: journey-based, no "misiones", visual concentric rings map
   Focus: "Sales a la aventura, vuelves al paraíso" */
import { Link } from "wouter";
import { Clock, ArrowRight, Compass, Sun, Waves, Mountain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, DESTINOS, CIRCUITOS, SEASONS, WHATSAPP } from "@/lib/data";

export default function ElCircuito() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.cascadaFilipinas} alt="Cascadas de Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="text-sunset text-sm font-semibold uppercase tracking-widest">El Concepto</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Un Destino, Mil Aventuras
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Playa Caracol es tu base. Desde aquí, cada día es una aventura diferente — y cada noche vuelves al paraíso.
          </p>
        </div>
      </section>

      {/* Cómo funciona — journey-based */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Así Se Vive el Circuito
            </h2>
            <p className="text-lg text-jungle-dark/70 mb-12 max-w-2xl mx-auto">
              Llegas a Playa Caracol, te instalas en el Radisson Riviera, y desde ahí cada día es una nueva experiencia. 
              Nosotros nos encargamos de todo: transporte, guías, equipo y logística.
            </p>
          </div>

          {/* Visual journey steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Sun className="w-8 h-8" />, time: "7:00 AM", title: "Despierta", desc: "Desayuno en Vento Beach Club con vista al Pacífico" },
              { icon: <Mountain className="w-8 h-8" />, time: "8:30 AM", title: "La Aventura", desc: "Te recogemos en el lobby. Hoy toca cascadas, mañana islas, pasado cerro..." },
              { icon: <Waves className="w-8 h-8" />, time: "3:00 PM", title: "Vuelves al Paraíso", desc: "Piscina infinity, spa, o simplemente descansar en tu habitación" },
              { icon: <Compass className="w-8 h-8" />, time: "7:00 PM", title: "Cena & Relax", desc: "Cena en Vento con el atardecer. Mañana, otra aventura te espera" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-sunset/10 text-sunset flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <span className="text-xs text-sunset font-bold uppercase tracking-widest">{step.time}</span>
                <h3 className="text-lg font-bold text-jungle-dark mt-1 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                <p className="text-sm text-jungle-dark/60 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block mt-4">
                    <ArrowRight className="w-5 h-5 text-sunset/30 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Concentric Rings Map */}
      <section className="py-20 bg-jungle-dark text-white overflow-hidden">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            El Mapa del Circuito
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Tres anillos de aventura alrededor de tu base en Playa Caracol. Cuanto más lejos, más épica la aventura.
          </p>

          {/* CSS Concentric Rings */}
          <div className="relative max-w-3xl mx-auto" style={{ aspectRatio: "1/1" }}>
            {/* Outer ring - C */}
            <div className="absolute inset-0 rounded-full border-2 border-ocean/30 flex items-start justify-center pt-6">
              <div className="text-center">
                <span className="text-xs font-bold text-ocean uppercase tracking-widest">Cinturón C — 30-60 min</span>
                <div className="flex flex-wrap gap-1 justify-center mt-2 max-w-xs">
                  {["Cerro Chame", "Cascadas", "Valle de Antón"].map(d => (
                    <span key={d} className="px-2 py-0.5 bg-ocean/20 text-ocean text-[10px] rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle ring - B */}
            <div className="absolute rounded-full border-2 border-sunset/40 flex items-start justify-center pt-6"
              style={{ top: "15%", left: "15%", right: "15%", bottom: "15%" }}>
              <div className="text-center">
                <span className="text-xs font-bold text-sunset uppercase tracking-widest">Cinturón B — 15-45 min</span>
                <div className="flex flex-wrap gap-1 justify-center mt-2 max-w-[200px]">
                  {["Islas Otoque", "Punta Chame", "Pesca"].map(d => (
                    <span key={d} className="px-2 py-0.5 bg-sunset/20 text-sunset text-[10px] rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inner ring - A (Base) */}
            <div className="absolute rounded-full border-2 border-white/60 flex items-center justify-center bg-white/5 backdrop-blur-sm"
              style={{ top: "30%", left: "30%", right: "30%", bottom: "30%" }}>
              <div className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-sunset flex items-center justify-center mx-auto mb-2">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Tu Base</span>
                <p className="text-[10px] text-white/60 mt-1">Playa Caracol<br />Radisson Riviera</p>
              </div>
            </div>

            {/* Decorative dots on rings */}
            <div className="absolute w-3 h-3 rounded-full bg-ocean" style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }} />
            <div className="absolute w-3 h-3 rounded-full bg-ocean" style={{ bottom: "8%", right: "20%" }} />
            <div className="absolute w-3 h-3 rounded-full bg-sunset" style={{ top: "20%", right: "18%" }} />
            <div className="absolute w-3 h-3 rounded-full bg-sunset" style={{ bottom: "25%", left: "18%" }} />
            <div className="absolute w-2 h-2 rounded-full bg-white" style={{ top: "35%", left: "32%" }} />
            <div className="absolute w-2 h-2 rounded-full bg-white" style={{ bottom: "35%", right: "32%" }} />
          </div>
        </div>
      </section>

      {/* 3 Cinturones — detailed */}
      <section className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mb-12 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Los 3 Cinturones de Aventura
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                belt: "A",
                name: "Tu Base — Playa Caracol",
                time: "0-15 min",
                color: "border-l-white bg-jungle text-white",
                tagColor: "bg-white/20 text-white",
                description: "Tu hogar durante toda la estadía. Radisson Riviera con piscina infinity, Vento Beach Club con gastronomía de primer nivel, spa para relajarte después de cada aventura, y la playa a pasos de tu habitación.",
                destinations: ["Radisson Riviera", "Vento Beach Club", "Spa & Wellness", "Surf en Playa Caracol"],
                image: IMAGES.radissonPool,
              },
              {
                belt: "B",
                name: "Aventuras de Medio Día",
                time: "15-45 min",
                color: "border-l-sunset bg-white",
                tagColor: "bg-sunset/10 text-sunset",
                description: "Sales por la mañana, vuelves para almorzar. Islas vírgenes con aguas cristalinas, kitesurf en Punta Chame, pesca deportiva, y sunset cruises con cóctel incluido.",
                destinations: ["Islas Otoque & Boná", "Punta Chame (Kitesurf)", "Pesca Deportiva", "Sunset Cruise"],
                image: IMAGES.islaOtoque,
              },
              {
                belt: "C",
                name: "Expediciones de Día Completo",
                time: "30-60 min",
                color: "border-l-ocean bg-white",
                tagColor: "bg-ocean/10 text-ocean",
                description: "Sales temprano, vuelves para la cena. Cerro Chame con vistas de 360°, cascadas escondidas en la selva, y el mágico Valle de Antón. Siempre con regreso garantizado a tu base.",
                destinations: ["Cerro Chame", "Cascadas El Harino", "Cascadas Filipinas", "Valle de Antón"],
                image: IMAGES.cerroChame,
              },
            ].map((belt) => (
              <div key={belt.belt} className={`rounded-2xl overflow-hidden shadow-sm border-l-4 ${belt.color}`}>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${belt.tagColor}`}>
                        Cinturón {belt.belt} — {belt.time}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{belt.name}</h3>
                    <p className={`leading-relaxed mb-4 ${belt.belt === "A" ? "text-white/70" : "text-jungle-dark/70"}`}>{belt.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {belt.destinations.map((d) => (
                        <span key={d} className={`px-3 py-1 text-xs rounded-full ${belt.belt === "A" ? "bg-white/10 text-white/80" : "bg-sand text-jungle-dark/60"}`}>{d}</span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2 relative min-h-[200px]">
                    <img src={belt.image} alt={belt.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estacionalidad */}
      <section className="py-20 bg-sand-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mb-4 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Cuándo Venir?
          </h2>
          <p className="text-center text-jungle-dark/60 mb-12 max-w-2xl mx-auto">
            Cada temporada tiene su magia. Siempre hay algo increíble que vivir.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SEASONS.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  s.color === "sunset" ? "bg-sunset/10 text-sunset" : s.color === "jungle" ? "bg-jungle/10 text-jungle" : "bg-ocean/10 text-ocean"
                }`}>
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-jungle-dark mb-1" style={{ fontFamily: "var(--font-heading)" }}>{s.name}</h3>
                <p className="text-sunset font-semibold text-sm mb-4">{s.months}</p>
                <ul className="space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-jungle-dark/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sunset shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-sand">
                  <p className="text-xs text-jungle-dark/40 uppercase tracking-wider mb-2">Experiencias estrella</p>
                  <div className="flex flex-wrap gap-1">
                    {s.heroCircuits.map((id) => {
                      const c = CIRCUITOS.find(ci => ci.id === id);
                      return c ? (
                        <Link key={id} href={`/circuitos/${id}`} className="px-2 py-0.5 bg-sand text-jungle-dark/60 text-xs rounded-full hover:bg-sunset hover:text-white transition-colors">
                          {c.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.cerroChame} alt="Cerro Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jungle-dark/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Listo Para Tu Aventura?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Elige tu paquete con estadía y vive la experiencia completa del Circuito Chame.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes con Estadía
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-lg">
              Hablar con un Asesor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
