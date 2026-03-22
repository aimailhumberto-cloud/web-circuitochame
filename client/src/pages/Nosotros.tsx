/* Circuito Chame — Nosotros */
import { Link } from "wouter";
import { ArrowRight, MapPin, Users, Globe, Shield, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, WHATSAPP } from "@/lib/data";

export default function Nosotros() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={IMAGES.cerroChame} alt="Cerro Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Sobre Circuito Chame
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            El primer circuito turístico integrado de Panamá Oeste. Aventura + estadía + gastronomía en un solo concepto.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mt-2 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Nació de una Pregunta Simple
              </h2>
              <p className="text-jungle-dark/70 leading-relaxed mb-4">
                ¿Por qué los turistas pasan por Chame sin detenerse? Tienen el cerro más impresionante de la costa, cascadas escondidas, islas vírgenes, las mejores olas del Pacífico... y un hotel de primera categoría frente a la playa.
              </p>
              <p className="text-jungle-dark/70 leading-relaxed mb-4">
                El problema no era la oferta. Era que nadie la había conectado. Circuito Chame nace para unir todos estos destinos en una experiencia integrada donde tu base es siempre la misma: Playa Caracol.
              </p>
              <p className="text-jungle-dark/70 leading-relaxed">
                Cada día es una misión diferente. Cada noche vuelves a la comodidad del Radisson Riviera. Así de simple. Así de poderoso.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={IMAGES.beachAerial} alt="Playa Caracol aérea" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Ecosistema</span>
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Parte del Ecosistema Mahana
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "ANS Surf", desc: "Academia Nacional de Surf. Clases, masterclasses, surf camps y retreats en Playa Caracol.", icon: "🏄" },
              { name: "Mahana Tours", desc: "45+ tours y actividades sueltas. Surf, kite, cascadas, islas, pesca, hiking y más.", icon: "🌴" },
              { name: "Circuito Chame", desc: "Experiencias con estadía. Paquetes de 2-7 noches con aventura + hotel + gastronomía.", icon: "🗺️" },
            ].map((brand) => (
              <div key={brand.name} className="bg-sand-light rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{brand.icon}</div>
                <h3 className="text-xl font-bold text-jungle-dark mb-2" style={{ fontFamily: "var(--font-heading)" }}>{brand.name}</h3>
                <p className="text-jungle-dark/60 text-sm mb-4">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Chame */}
      <section className="py-20 bg-jungle text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              ¿Por Qué Chame?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "1.5h de la Ciudad", desc: "A solo 90 minutos de Ciudad de Panamá. Cerca para escapar, lejos para desconectar." },
              { icon: <Globe className="w-6 h-6" />, title: "5 Destinos en 1", desc: "Cerro, cascadas, islas, playa y valle. Todo en un radio de 45 minutos." },
              { icon: <Shield className="w-6 h-6" />, title: "Seguro y Accesible", desc: "Carreteras pavimentadas, señalización, guías certificados y hotel de cadena internacional." },
              { icon: <Users className="w-6 h-6" />, title: "Para Todos", desc: "Familias, parejas, aventureros, nómadas digitales, corporativos. Hay algo para cada uno." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sunset/20 text-sunset flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Alianzas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-dark mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Trabajamos con los Mejores
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Radisson Riviera", role: "Alojamiento oficial" },
              { name: "Vento Beach Club", role: "Gastronomía" },
              { name: "ANS Surf", role: "Surf & deportes acuáticos" },
              { name: "Mahana Tours", role: "Tours & actividades" },
              { name: "Sthamas 39'", role: "Tours en bote premium" },
              { name: "Rampage 31'", role: "Tours en bote aventura" },
              { name: "Guías Certificados", role: "Seguridad & experiencia" },
              { name: "Transporte Local", role: "Traslados & logística" },
            ].map((partner) => (
              <div key={partner.name} className="bg-white rounded-xl p-4 text-center">
                <h4 className="font-bold text-jungle-dark text-sm">{partner.name}</h4>
                <p className="text-jungle-dark/40 text-xs mt-1">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.cerroSunrise} alt="Amanecer Cerro Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jungle-dark/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Listo Para Descubrir Chame?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Arma tu paquete con estadía y vive el circuito completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-lg flex items-center gap-2">
              <Phone className="w-5 h-5" /> Contacto
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
