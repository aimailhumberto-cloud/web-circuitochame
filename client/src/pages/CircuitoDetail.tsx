/* Circuito Chame — Individual Circuit Detail Page
   Journey-based storytelling: photos tell the story alongside text
   Wake up → Breakfast → Adventure → Return → Pool → Dinner → Sleep */
import { useParams, Link } from "wouter";
import { Clock, Mountain, Users, MapPin, Check, X, Star, ArrowRight, ChevronLeft, Phone, Coffee, Sun, Sunset as SunsetIcon, Moon } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IMAGES, CIRCUITOS, WHATSAPP, type CircuitoHero } from "@/lib/data";

// Photo journey for each moment of the day — mapped per circuit
const JOURNEY_PHOTOS: Record<string, { wake: string; breakfast: string; adventure1: string; adventure2: string; midday: string; returnBase: string; pool: string; dinner: string; night: string }> = {
  "surf-chill": {
    wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.surfAction,
    adventure2: IMAGES.surfLesson, midday: IMAGES.surfGroup, returnBase: IMAGES.chameWaves,
    pool: IMAGES.radissonPool, dinner: IMAGES.ventoClub, night: IMAGES.radissonLounge,
  },
  "cascadas-pozos": {
    wake: IMAGES.cerroSunrise, breakfast: IMAGES.ventoClub, adventure1: IMAGES.cascadaFilipinas,
    adventure2: IMAGES.cascadaCanyon, midday: IMAGES.cascadaJungle, returnBase: IMAGES.cascadaChame,
    pool: IMAGES.radissonPool, dinner: IMAGES.beachClubSunset, night: IMAGES.radissonLounge,
  },
  "pesca-deportiva": {
    wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.fishingBoat,
    adventure2: IMAGES.fishingCatch, midday: IMAGES.fishingSport, returnBase: IMAGES.fishingPanama,
    pool: IMAGES.radissonPool, dinner: IMAGES.ventoClub, night: IMAGES.radissonLounge,
  },
  "avistamiento-ballenas": {
    wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.whaleWatching,
    adventure2: IMAGES.whaleBreach, midday: IMAGES.islaOtoqueBoat, returnBase: IMAGES.coastal,
    pool: IMAGES.radissonPool, dinner: IMAGES.beachClubSunset, night: IMAGES.radissonLounge,
  },
  "islas-otoque-bona": {
    wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.islaOtoque,
    adventure2: IMAGES.islaOtoqueCoast, midday: IMAGES.islaBonaCoast, returnBase: IMAGES.islaOtoqueBoat,
    pool: IMAGES.radissonPool, dinner: IMAGES.ventoClub, night: IMAGES.radissonLounge,
  },
  "hiking-cerro-chame": {
    wake: IMAGES.cerroSunrise, breakfast: IMAGES.ventoClub, adventure1: IMAGES.cerroChameHike,
    adventure2: IMAGES.cerroChame, midday: IMAGES.cerroChameHiker, returnBase: IMAGES.cerroSunset,
    pool: IMAGES.radissonPool, dinner: IMAGES.beachClubSunset, night: IMAGES.radissonLounge,
  },
  "kitesurf-punta-chame": {
    wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.kitesurfAction,
    adventure2: IMAGES.kitesurfAerial, midday: IMAGES.kitesurfPuntaChame, returnBase: IMAGES.chameWaves,
    pool: IMAGES.radissonPool, dinner: IMAGES.ventoClub, night: IMAGES.radissonLounge,
  },
  "valle-anton-cultural": {
    wake: IMAGES.cerroSunrise, breakfast: IMAGES.ventoClub, adventure1: IMAGES.valleAntonWaterfall,
    adventure2: IMAGES.valleAntonPool, midday: IMAGES.cascadaJungle, returnBase: IMAGES.coastal,
    pool: IMAGES.radissonPool, dinner: IMAGES.beachClubSunset, night: IMAGES.radissonLounge,
  },
};

// Default journey photos for circuits not explicitly mapped
const DEFAULT_JOURNEY = {
  wake: IMAGES.beachAerial, breakfast: IMAGES.ventoClub, adventure1: IMAGES.cascadaFilipinas,
  adventure2: IMAGES.cerroChame, midday: IMAGES.surfAction, returnBase: IMAGES.coastal,
  pool: IMAGES.radissonPool, dinner: IMAGES.ventoClub, night: IMAGES.radissonLounge,
};

export default function CircuitoDetail() {
  const { id } = useParams<{ id: string }>();
  const circuito = CIRCUITOS.find((c) => c.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!circuito) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1D4C40] mb-4">Circuito no encontrado</h1>
          <Link href="/circuitos" className="text-[#FF7E47] hover:underline">Ver todos los circuitos</Link>
        </div>
      </div>
    );
  }

  const photos = JOURNEY_PHOTOS[circuito.id] || DEFAULT_JOURNEY;
  const otherCircuits = CIRCUITOS.filter((c) => c.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] min-h-[650px] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={circuito.image} alt={circuito.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Link href="/circuitos" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-4 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Volver a Circuitos
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-[#FF7E47] text-white text-xs font-bold uppercase rounded-full">{circuito.difficulty}</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">{circuito.duration}</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">{circuito.season}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {circuito.name}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">{circuito.tagline}</p>
          <div className="text-[#FFB088] text-lg font-semibold">
            Parte de nuestros Paquetes con Estadía
          </div>
        </div>
      </section>

      {/* ─── INSPIRATIONAL QUOTE ─── */}
      <section className="py-12 bg-[#1D4C40] text-center">
        <div className="container">
          <p className="text-xl md:text-2xl text-white/80 italic max-w-3xl mx-auto leading-relaxed">
            "{circuito.longDescription.split('.').slice(0, 2).join('.')}."
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE VISUAL JOURNEY — Photos tell the story of your day
          ═══════════════════════════════════════════════════════════ */}

      {/* ─── CHAPTER 1: DESPIERTA ─── */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={photos.wake} alt="Amanecer en Playa Caracol" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">6:30 AM — Despierta</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                El Día Comienza Frente al Pacífico
              </h2>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg">
                Abres los ojos en tu habitación del Radisson Riviera. El sonido del mar entra por la ventana. Bajas a Vento Beach Club donde te espera un desayuno completo: frutas tropicales, café panameño recién hecho, huevos como te gustan, y la brisa del Pacífico como compañía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BREAKFAST PHOTO ─── */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img src={photos.breakfast} alt="Desayuno en Vento Beach Club" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="container pb-8">
            <p className="text-white text-lg font-semibold">Desayuno en Vento Beach Club — incluido en tu paquete</p>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 2: LA AVENTURA ─── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">8:00 AM — La Aventura</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {circuito.name}
              </h2>
              <div className="space-y-4 text-[#3D3D3D]/70 leading-relaxed text-lg">
                <p>{circuito.longDescription}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={photos.adventure1} alt={circuito.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADVENTURE PHOTO GRID ─── */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="aspect-[4/3] overflow-hidden col-span-2 md:col-span-1 md:row-span-2">
          <img src={photos.adventure2} alt={`${circuito.name} momento 1`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={photos.midday} alt={`${circuito.name} momento 2`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={circuito.gallery[0] || photos.returnBase} alt={`${circuito.name} momento 3`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* ─── ITINERARIO PASO A PASO ─── */}
      {circuito.itinerary && circuito.itinerary.length > 0 && (
        <section className="py-20 bg-[#FDF8F3]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">Paso a Paso</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mt-2 mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Tu Día Completo
              </h2>
              <div className="space-y-0">
                {circuito.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF7E47] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                        {item.time.replace(' AM', '').replace(' PM', '')}
                      </div>
                      {i < circuito.itinerary.length - 1 && <div className="w-px flex-1 bg-[#FF7E47]/20 min-h-[40px]" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs text-[#FF7E47] font-semibold">{item.time}</span>
                      <h4 className="font-bold text-[#1D4C40] text-lg">{item.activity}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── MID CTA ─── */}
      <section className="py-12 bg-[#FF7E47] text-white text-center">
        <div className="container">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>¿Te Suena Bien?</h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">Incluye este circuito en tu paquete con estadía y vive la experiencia completa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-3 bg-white text-[#FF7E47] font-bold rounded-full hover:bg-white/90 transition-colors">
              Ver Paquetes con Estadía
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors">
              Hablar con un Asesor
            </a>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 3: Y CUANDO VUELVAS... ─── */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                <SunsetIcon className="w-5 h-5" />
              </div>
              <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">3:00 PM — De Vuelta al Paraíso</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Y Cuando Vuelvas...
            </h2>
          </div>

          {/* Pool photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={photos.pool} alt="Piscina Radisson Riviera" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1D4C40] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                La Piscina Te Espera
              </h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg mb-4">
                {circuito.backAtBase}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Piscina Infinity", "Bar en la Piscina", "Tumbonas Premium", "Vista al Pacífico"].map((f) => (
                  <span key={f} className="px-3 py-1.5 bg-[#E8DDD3]/50 text-[#1D4C40]/60 text-sm rounded-full">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dinner photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                  <SunsetIcon className="w-5 h-5" />
                </div>
                <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">6:30 PM — La Cena</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1D4C40] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Cena en Vento Beach Club
              </h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg">
                El sol se pone sobre el Pacífico y tú estás en primera fila. Vento Beach Club te recibe con mariscos frescos del día, ceviches, carnes a la parrilla y los mejores cócteles de la costa. La brisa, la música suave, y la satisfacción de un día bien vivido. Esto es Playa Caracol.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={photos.dinner} alt="Cena en Vento Beach Club" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Night photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src={photos.night} alt="Tu habitación en el Radisson Riviera" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                  <Moon className="w-5 h-5" />
                </div>
                <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">9:00 PM — Descansa</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1D4C40] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Tu Habitación Con Vista al Mar
              </h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg">
                Sábanas premium, aire acondicionado, y el sonido del mar como arrullo. Mañana hay otra aventura esperándote. Pero esta noche, descansas como mereces. Buenas noches, explorador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ¿PARA QUIÉN ES? ─── */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#FF7E47] text-sm font-semibold uppercase tracking-widest">¿Es Para Ti?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mt-2 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ¿Para Quién Es Este Circuito?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {circuito.idealFor.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <Check className="w-5 h-5 text-[#FF7E47] shrink-0 mt-0.5" />
                  <span className="text-[#3D3D3D]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INCLUIDO / NO INCLUIDO ─── */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1D4C40] mb-10 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ¿Qué Incluye Este Circuito?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F0FFF4] rounded-2xl p-8 border border-green-200">
                <h3 className="font-bold text-[#1D4C40] mb-4 flex items-center gap-2 text-lg">
                  <Check className="w-5 h-5 text-green-600" /> Incluido
                </h3>
                <ul className="space-y-3">
                  {circuito.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#3D3D3D]/70">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FFF5F5] rounded-2xl p-8 border border-red-200">
                <h3 className="font-bold text-[#1D4C40] mb-4 flex items-center gap-2 text-lg">
                  <X className="w-5 h-5 text-red-500" /> No Incluido
                </h3>
                <ul className="space-y-3">
                  {circuito.notIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#3D3D3D]/70">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-[#FF7E47]/5 border border-[#FF7E47]/20 rounded-xl p-4 text-center">
              <p className="text-[#3D3D3D]/70 text-sm">
                <strong className="text-[#FF7E47]">Nota:</strong> El alojamiento y las comidas se incluyen cuando reservas un <Link href="/paquetes" className="text-[#FF7E47] underline font-semibold">Paquete con Estadía</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OTROS CIRCUITOS ─── */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#1D4C40] mb-10 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Otras Experiencias Que Te Pueden Gustar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCircuits.map((c) => (
              <Link key={c.id} href={`/circuitos/${c.id}`} className="group relative rounded-2xl overflow-hidden aspect-[3/4] block shadow-lg">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="px-2 py-0.5 bg-[#FF7E47]/90 text-white text-[10px] font-bold uppercase rounded-full">{c.difficulty}</span>
                  <h3 className="text-lg font-bold text-white mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{c.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{c.tagline}</p>
                  <div className="mt-2 text-[#FFB088] font-semibold text-sm">Incluido en Paquetes →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1D4C40]/80" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Incluye {circuito.name} en Tu Paquete
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Estadía en el Radisson Riviera + {circuito.name} + gastronomía en Vento + piscina + spa. Todo en un solo paquete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paquetes" className="px-8 py-4 bg-[#FF7E47] hover:bg-[#E86D3A] text-white font-bold rounded-full transition-all text-lg">
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
