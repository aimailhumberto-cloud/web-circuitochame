/* Circuito Chame — Paquetes con Estadía (Gateway to individual landing pages) */
import { Link } from "wouter";
import { Check, ArrowRight, Clock, Users, Star, ChevronRight, Coffee, Sun, Sunset, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, PAQUETES, WHATSAPP } from "@/lib/data";

// Journey preview snippets for each tier
const JOURNEY_PREVIEWS: Record<string, { moments: { icon: React.ReactNode; text: string }[] }> = {
  escapada: {
    moments: [
      { icon: <Sunset className="w-4 h-4" />, text: "Viernes: Llegas al Radisson Riviera. Piscina infinity. Cena en Vento." },
      { icon: <Sun className="w-4 h-4" />, text: "Sábado: Desayuno + tu primera aventura. Surf, cascadas o cerro." },
      { icon: <Coffee className="w-4 h-4" />, text: "Domingo: Segunda aventura + check-out con ganas de volver." },
    ],
  },
  explorador: {
    moments: [
      { icon: <Sunset className="w-4 h-4" />, text: "Día 1: Bienvenida al Radisson. Piscina. Cena de bienvenida en Vento." },
      { icon: <Sun className="w-4 h-4" />, text: "Día 2: Cascadas o Cerro Chame. Regreso a la piscina. Cena libre." },
      { icon: <Moon className="w-4 h-4" />, text: "Día 3: Yoga al amanecer. Surf o islas. Spa. Última noche con fogata." },
      { icon: <Coffee className="w-4 h-4" />, text: "Día 4: Último desayuno. Check-out con otra energía." },
    ],
  },
  inmersion: {
    moments: [
      { icon: <Sunset className="w-4 h-4" />, text: "Día 1: Llegada VIP. Tour de bienvenida. Cena degustación en Vento." },
      { icon: <Sun className="w-4 h-4" />, text: "Día 2: Hiking Cerro Chame al amanecer. Piscina. Video del día." },
      { icon: <Sun className="w-4 h-4" />, text: "Día 3: Circuito de cascadas. Spa y masaje deportivo." },
      { icon: <Sun className="w-4 h-4" />, text: "Día 4: Islas Otoque & Boná. Snorkel. Cena de mariscos." },
      { icon: <Sun className="w-4 h-4" />, text: "Día 5: Surf con ANS. Pesca deportiva. Cena con tu captura." },
      { icon: <Coffee className="w-4 h-4" />, text: "Día 6: Yoga final. Desayuno de despedida. Check-out." },
    ],
  },
};

export default function Paquetes() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.radissonAerial} alt="Radisson Riviera" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Estadía + Aventura + Comodidad</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Paquetes con Estadía
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Cada paquete es un viaje completo: alojamiento en el Radisson Riviera, gastronomía en Vento, aventuras organizadas y relax en la piscina y el spa. Tú solo llegas y vives.
          </p>
        </div>
      </section>

      {/* Regla de Oro */}
      <section className="py-10 bg-[#1D4C40] text-white text-center">
        <div className="container">
          <p className="text-lg md:text-xl font-semibold max-w-3xl mx-auto">
            <span className="text-[#FF7E47]">Regla de oro:</span> Todo paquete incluye mínimo 2 noches de alojamiento, desayunos, actividades y acceso a todas las comodidades de Playa Caracol.
          </p>
        </div>
      </section>

      {/* Paquetes — Each as a journey preview card linking to full landing page */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {PAQUETES.map((p, i) => {
              const preview = JOURNEY_PREVIEWS[p.tier];
              const isReversed = i % 2 !== 0;
              return (
                <div key={p.id} className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}>
                  {/* Image side */}
                  <div className="w-full lg:w-1/2">
                    <Link href={`/paquete/${p.id}`} className="block group">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-4 py-1.5 bg-[#FF7E47] text-white text-sm font-bold rounded-full">
                            {p.nights} NOCHES · {p.days} DÍAS
                          </span>
                          {i === 2 && <span className="px-3 py-1.5 bg-white text-[#FF7E47] text-sm font-bold rounded-full">Más Completo</span>}
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-[#1D4C40] font-bold">
                            Desde ${Math.min(...p.pricing.map(pr => pr.pricePerPerson))}/persona
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2">
                    <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">
                      {p.tier === "escapada" ? "Fin de Semana" : p.tier === "explorador" ? "3 Noches" : "4-7 Noches"}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mt-2 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {p.name}
                    </h2>
                    <p className="text-lg text-[#3D3D3D]/70 mb-6">{p.description}</p>

                    {/* Journey Preview */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8DDD3] mb-6">
                      <h4 className="text-sm font-bold text-[#1D4C40] uppercase tracking-wider mb-4">Tu Viaje en Resumen</h4>
                      <div className="space-y-3">
                        {preview?.moments.map((m, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47] shrink-0 mt-0.5">
                              {m.icon}
                            </div>
                            <p className="text-sm text-[#3D3D3D]/80">{m.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key includes */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.includes.slice(0, 5).map((item, j) => (
                        <span key={j} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1D4C40]/5 text-[#1D4C40] text-xs font-medium rounded-full">
                          <Check className="w-3 h-3 text-green-600" /> {item}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/paquete/${p.id}`} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF7E47] hover:bg-[#E86D3A] text-white font-bold rounded-full transition-colors">
                        Ver el Viaje Completo <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a href={`${WHATSAPP}?text=Hola! Me interesa el paquete ${p.name} del Circuito Chame`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#1D4C40] text-[#1D4C40] font-bold rounded-full hover:bg-[#1D4C40] hover:text-white transition-colors">
                        Reservar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1D4C40] text-center mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Compara los Paquetes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#E8DDD3]">
                  <th className="py-4 pr-4 text-sm font-semibold text-[#1D4C40]">Característica</th>
                  {PAQUETES.map((p) => (
                    <th key={p.id} className="py-4 px-4 text-sm font-semibold text-[#1D4C40] text-center">{p.name.split(" ")[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm text-[#3D3D3D]">
                {[
                  { feature: "Noches", values: PAQUETES.map(p => `${p.nights}`) },
                  { feature: "Desayunos", values: PAQUETES.map(p => p.nights.toString()) },
                  { feature: "Cenas incluidas", values: ["0", "1", "Todas"] },
                  { feature: "Actividades", values: ["2", "2-3", "Todas"] },
                  { feature: "Yoga", values: ["—", "1 sesión", "Diario"] },
                  { feature: "Spa", values: ["15% desc.", "20% desc.", "1 incluida"] },
                  { feature: "Fotos profesionales", values: ["—", "—", "Incluidas"] },
                  { feature: "Concierge", values: ["—", "—", "Dedicado"] },
                  { feature: "Desde (por persona)", values: PAQUETES.map(p => `$${Math.min(...p.pricing.map(pr => pr.pricePerPerson))}`) },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#E8DDD3]/50">
                    <td className="py-3 pr-4 font-medium">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-3 px-4 text-center">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.beachClubSunset} alt="Atardecer Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1D4C40]/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Necesitas Algo Personalizado?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Armamos paquetes a medida: luna de miel, retiros corporativos, familias, grupos de amigos. Cuéntanos qué sueñas y lo hacemos realidad.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF7E47] hover:bg-[#E86D3A] text-white font-bold rounded-full transition-all text-lg">
            Hablar con un Asesor <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
