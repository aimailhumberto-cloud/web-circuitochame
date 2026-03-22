/* Circuito Chame — Tu Base: Radisson Riviera, Vento, Spa, Beach Club */
import { Link } from "wouter";
import { Bed, UtensilsCrossed, Sparkles, Waves, Wifi, Wind, Dumbbell, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, BASE_SECTIONS, WHATSAPP } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  hotel: <Bed className="w-6 h-6" />,
  restaurant: <UtensilsCrossed className="w-6 h-6" />,
  spa: <Sparkles className="w-6 h-6" />,
  surfShack: <Waves className="w-6 h-6" />,
};

export default function TuBase() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.radissonAerial} alt="Radisson Riviera Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Sales a la Aventura, Vuelves al Paraíso</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Tu Base en Caracol
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Después de escalar cerros, nadar en cascadas o surfear olas perfectas, vuelves a piscina infinity, cena gourmet y spa. Así es el Circuito Chame.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-jungle-dark mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              La Diferencia Está en Dónde Descansas
            </h2>
            <p className="text-jungle-dark/70 text-lg leading-relaxed">
              Cualquiera puede ofrecerte un tour. Nosotros te ofrecemos un tour + un hotel de primera + gastronomía de nivel + spa + beach club. Todo en un mismo lugar, a pasos de la playa. Eso es lo que hace al Circuito Chame diferente a cualquier otra experiencia en Panamá.
            </p>
          </div>
        </div>
      </section>

      {/* Sections alternating */}
      {BASE_SECTIONS.map((section, i) => (
        <section key={section.id} className={`py-20 ${i % 2 === 0 ? "" : "bg-sand-light"}`}>
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={section.image} alt={section.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sunset/10 text-sunset flex items-center justify-center">
                    {iconMap[section.id]}
                  </div>
                  <span className="text-sunset text-sm font-semibold uppercase tracking-widest">{section.name}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  {section.name === "Radisson Riviera" ? "Tu Hotel de Primera" :
                   section.name === "Vento Beach Club" ? "Gastronomía con Vista al Mar" :
                   section.name === "Spa & Wellness" ? "Recarga Cuerpo y Alma" :
                   "Tu Centro de Aventuras"}
                </h2>
                <p className="text-jungle-dark/70 leading-relaxed mb-6">{section.description}</p>
                <div className="flex flex-wrap gap-2">
                  {section.features.map((a: string) => (
                    <span key={a} className="px-3 py-1.5 bg-white text-jungle-dark/60 text-sm rounded-full border border-jungle-dark/10">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Photo Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[IMAGES.radissonPool, IMAGES.ventoClub, IMAGES.spaMassage, IMAGES.beachClubSunset].map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img} alt="Playa Caracol" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </section>

      {/* Tipos de Alojamiento */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Opciones</span>
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Elige Tu Tipo de Alojamiento
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Radisson Estándar", desc: "Habitación con vista parcial al mar, A/C, Wi-Fi, desayuno incluido", price: "Desde $120/noche" },
              { name: "Radisson Jr. Suite", desc: "Suite con balcón privado, vista al mar, sala de estar, minibar", price: "Desde $180/noche" },
              { name: "Radisson Suite Premium", desc: "La mejor vista, jacuzzi privado, servicio de concierge, amenidades premium", price: "Desde $250/noche" },
              { name: "Apartamento Privado", desc: "2-3 habitaciones, cocina equipada, ideal para familias y grupos largos", price: "Desde $150/noche" },
            ].map((room) => (
              <div key={room.name} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-jungle-dark mb-2">{room.name}</h3>
                <p className="text-sm text-jungle-dark/60 mb-4">{room.desc}</p>
                <p className="text-sunset font-bold">{room.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jungle-dark/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            La Aventura Empieza Donde Descansas
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Arma tu paquete con estadía y vive el Circuito Chame como se debe: con comodidad, con estilo, con todo incluido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes con Estadía
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-lg flex items-center gap-2">
              <Phone className="w-5 h-5" /> Hablar con un Asesor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
