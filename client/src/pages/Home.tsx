/* Circuito Chame — Home Page
   DIFFERENTIATED from Mahana Tours:
   - Dual hero (adventure + comfort)
   - "Imagina Tu Día" visual timeline
   - Paquetes FIRST (the product), Circuitos as ingredients
   - Split layouts: adventure | comfort side by side
   - No standalone prices on circuitos */
import { Link } from "wouter";
import { Star, ChevronRight, ArrowRight, Coffee, Sun, Sunset as SunsetIcon, Moon, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CircuitMap from "@/components/CircuitMap";
import { IMAGES, CIRCUITOS, PAQUETES, BASE_SECTIONS, TESTIMONIALS, STATS, WHATSAPP } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* ═══ HERO — DUAL SPLIT: Adventure + Comfort ═══ */}
      <section className="relative h-screen min-h-[750px]">
        {/* Split background */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Adventure */}
          <div className="relative overflow-hidden">
            <img src={IMAGES.cascadaFilipinas} alt="Cascadas de Chame" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          {/* Right: Comfort */}
          <div className="relative overflow-hidden hidden lg:block">
            <img src={IMAGES.radissonPool} alt="Piscina Radisson Riviera" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-black/30" />
          </div>
        </div>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Content centered over split */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-5 py-2 bg-sunset/90 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-8">
            Playa Caracol, Panamá
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            La Aventura y el Paraíso<br />
            <span className="text-sunset-light">en un Solo Lugar</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Cascadas en la selva por la mañana. Piscina infinity por la tarde. Cena frente al mar al atardecer. Paquetes desde 2 noches con todo incluido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes con Estadía
            </Link>
            <a href="#imagina-tu-dia" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20 text-lg">
              ¿Cómo Funciona?
            </a>
          </div>
          {/* Dual labels */}
          <div className="absolute bottom-8 left-0 right-0 hidden lg:flex justify-between px-16">
            <span className="text-white/40 text-sm uppercase tracking-widest">← Aventura</span>
            <span className="text-white/40 text-sm uppercase tracking-widest">Comodidad →</span>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-jungle text-white py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-sunset" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ "IMAGINA TU DÍA" — Visual Timeline ═══ */}
      <section id="imagina-tu-dia" className="py-24 bg-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">La Experiencia</span>
            <h2 className="text-3xl md:text-5xl font-bold text-jungle-dark mt-3 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Imagina Tu Día en Playa Caracol
            </h2>
            <p className="text-lg text-jungle-dark/70">
              Cada día es una historia diferente. Pero siempre empieza y termina en el paraíso.
            </p>
          </div>

          {/* Timeline — alternating photo + text */}
          <div className="max-w-5xl mx-auto space-y-0">
            {/* 6:30 AM — Despierta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={IMAGES.radissonLounge} alt="Tu habitación en el Radisson Riviera" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <span className="text-sunset text-sm font-bold uppercase tracking-widest">6:30 AM</span>
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Despierta Frente al Pacífico
                </h3>
                <p className="text-jungle-dark/60 leading-relaxed">
                  Abres los ojos en el Radisson Riviera. El sonido del mar entra por la ventana. Bajas a Vento Beach Club donde te espera café panameño recién hecho, frutas tropicales y un desayuno completo con la brisa del Pacífico.
                </p>
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-sunset/30" />
            </div>

            {/* 8:00 AM — La Aventura */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset">
                    <Sun className="w-5 h-5" />
                  </div>
                  <span className="text-sunset text-sm font-bold uppercase tracking-widest">8:00 AM</span>
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Sal a la Aventura del Día
                </h3>
                <p className="text-jungle-dark/60 leading-relaxed">
                  Hoy toca cascadas en la selva. Mañana puede ser hiking al Cerro Chame al amanecer, o navegar a islas vírgenes. Cada día una experiencia diferente — transporte, guías y equipo incluidos.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={IMAGES.cascadaCanyon} alt="Aventura en las cascadas" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-sunset/30" />
            </div>

            {/* 2:00 PM — Vuelve al Paraíso */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={IMAGES.radissonPool} alt="Piscina infinity Radisson Riviera" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset">
                    <Waves className="w-5 h-5" />
                  </div>
                  <span className="text-sunset text-sm font-bold uppercase tracking-widest">2:00 PM</span>
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Vuelve al Paraíso
                </h3>
                <p className="text-jungle-dark/60 leading-relaxed">
                  La aventura terminó pero el día apenas empieza. Piscina infinity con vista al Pacífico, cóctel en la mano, tumbonas premium. O si prefieres, una sesión de spa para recargar energías.
                </p>
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-sunset/30" />
            </div>

            {/* 6:30 PM — La Cena */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-12">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset">
                    <SunsetIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sunset text-sm font-bold uppercase tracking-widest">6:30 PM</span>
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Cena Frente al Mar
                </h3>
                <p className="text-jungle-dark/60 leading-relaxed">
                  El sol se pone sobre el Pacífico y tú estás en primera fila. Vento Beach Club te recibe con mariscos frescos, ceviches, carnes a la parrilla y los mejores cócteles de la costa. La brisa, la música suave, y la satisfacción de un día bien vivido.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={IMAGES.beachClubSunset} alt="Cena en Vento Beach Club" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-sunset/30" />
            </div>

            {/* 9:00 PM — Descansa */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={IMAGES.radissonLounge} alt="Tu habitación" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset">
                    <Moon className="w-5 h-5" />
                  </div>
                  <span className="text-sunset text-sm font-bold uppercase tracking-widest">9:00 PM</span>
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Descansa. Mañana Hay Más.
                </h3>
                <p className="text-jungle-dark/60 leading-relaxed">
                  Sábanas premium, aire acondicionado, y el sonido del mar como arrullo. Mañana hay otra aventura esperándote. Pero esta noche, descansas como mereces.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after timeline */}
          <div className="text-center mt-16">
            <Link href="/paquetes" className="inline-flex items-center gap-2 px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Elige Tu Paquete <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PAQUETES — THE PRODUCT (comes FIRST, before circuitos) ═══ */}
      <section className="py-24 bg-jungle-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Paquetes con Estadía</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Aventura + Estadía + Gastronomía
            </h2>
            <p className="text-lg text-white/70">
              Todo incluido, todo organizado. Tú solo eliges cuántos días y qué aventuras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAQUETES.map((p) => (
              <Link key={p.id} href={`/paquete/${p.id}`} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-sunset/50 transition-all block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-sunset text-white text-xs font-bold uppercase rounded-full">
                      {p.nights} noches
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.name}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.includes.slice(0, 4).map((inc, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/10 text-white/70 text-[10px] rounded-full">{inc}</span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-white/40 text-xs">Desde</span>
                      <div className="text-2xl font-bold text-sunset">${Math.min(...p.pricing.map(pr => pr.pricePerPerson))}<span className="text-sm text-white/40">/persona</span></div>
                    </div>
                    <span className="flex items-center gap-1 text-sunset text-sm font-semibold group-hover:gap-2 transition-all">
                      Ver Journey <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/paquetes" className="inline-flex items-center gap-2 px-8 py-3 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-colors text-lg">
              Comparar Paquetes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SPLIT: ADVENTURE | COMFORT — Side by Side ═══ */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Adventure */}
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px]">
            <img src={IMAGES.cerroChameHike} alt="Hiking Cerro Chame" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="text-sunset text-xs font-bold uppercase tracking-widest">Por la Mañana</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                La Aventura
              </h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                8 experiencias diferentes para descubrir Chame: cascadas, cerros, islas vírgenes, surf, kitesurf, pesca deportiva, avistamiento de ballenas y Valle de Antón.
              </p>
              <Link href="/circuitos" className="inline-flex items-center gap-2 mt-6 text-sunset font-semibold hover:gap-3 transition-all">
                Ver Experiencias <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Right: Comfort */}
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px]">
            <img src={IMAGES.radissonPool} alt="Piscina Radisson Riviera" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="text-sunset text-xs font-bold uppercase tracking-widest">Por la Tarde</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                La Comodidad
              </h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                Radisson Riviera, piscina infinity, Vento Beach Club, spa, yoga al atardecer. Todo a pasos de tu habitación. Cada noche vuelves al paraíso.
              </p>
              <Link href="/tu-base" className="inline-flex items-center gap-2 mt-6 text-sunset font-semibold hover:gap-3 transition-all">
                Conoce Tu Base <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CIRCUITOS — As INGREDIENTS, not products ═══ */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Lo Que Vivirás</span>
            <h2 className="text-3xl md:text-5xl font-bold text-jungle-dark mt-3 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              8 Experiencias Para Armar Tu Aventura
            </h2>
            <p className="text-lg text-jungle-dark/70">
              Cada paquete incluye experiencias del circuito. Estas son las aventuras que te esperan.
            </p>
          </div>
          {/* NO prices, NO "Desde $X" — these are ingredients, not standalone products */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CIRCUITOS.map((c) => (
              <Link key={c.id} href={`/circuitos/${c.id}`} className="group relative rounded-2xl overflow-hidden aspect-[3/4] block">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">{c.duration}</span>
                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">{c.difficulty}</span>
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{c.name}</h3>
                  <p className="text-white/60 text-xs mt-1 line-clamp-2">{c.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TU BASE — Comfort Showcase ═══ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Y Cuando Vuelvas...</span>
            <h2 className="text-3xl md:text-5xl font-bold text-jungle-dark mt-3 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Tu Base en Playa Caracol
            </h2>
            <p className="text-lg text-jungle-dark/70">
              Sales a la aventura. Vuelves al paraíso. Piscina infinity, gastronomía frente al mar, spa y todo lo que necesitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BASE_SECTIONS.map((section, i) => (
              <div key={section.id} className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 aspect-[2.5/1]" : "aspect-[16/10]"}`}>
                <img src={section.image} alt={section.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-sunset text-xs font-semibold uppercase tracking-wider">{section.tagline}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>{section.name}</h3>
                  <p className="text-white/70 max-w-lg leading-relaxed">{section.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {section.features.slice(0, 4).map((f) => (
                      <span key={f} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tu-base" className="inline-flex items-center gap-2 px-8 py-3 bg-jungle hover:bg-jungle-light text-white font-semibold rounded-full transition-colors">
              Conoce Tu Base <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-24 bg-sand-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunset text-sm font-semibold uppercase tracking-widest">Testimonios</span>
            <h2 className="text-3xl md:text-5xl font-bold text-jungle-dark mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              Lo Que Dicen Nuestros Exploradores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-sunset text-sunset" />
                  ))}
                </div>
                <p className="text-jungle-dark/70 leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-jungle-dark">{t.name}</div>
                    <div className="text-sm text-jungle-dark/50">{t.country}</div>
                  </div>
                  {t.circuito && (
                    <span className="px-3 py-1 bg-sand text-jungle-dark/60 text-xs rounded-full">{t.circuito}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAPA DEL CIRCUITO ═══ */}
      <CircuitMap />

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol aérea" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jungle-dark/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            ¿Listo Para Vivirlo?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            A solo 90 minutos de Ciudad de Panamá. Estadía, aventuras, gastronomía y relax — todo en un solo paquete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-sunset hover:bg-sunset-light text-white font-bold rounded-full transition-all text-lg">
              Ver Paquetes
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
