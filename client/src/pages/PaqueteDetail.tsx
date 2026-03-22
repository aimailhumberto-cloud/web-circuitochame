// ============================================================
// CIRCUITO CHAME — Paquete Detail Landing Page
// Design: "Jungle Explorer" — Journey-based storytelling
// Each package tells a visual story: wake up → breakfast → adventure → return → dinner → rest
// Photos are the narrative thread, not just decoration
// ============================================================

import { useParams, Link, useLocation } from "wouter";
import { PAQUETES, IMAGES, WHATSAPP, BASE_SECTIONS, type Paquete } from "@/lib/data";
import { ArrowLeft, Check, X, Clock, Users, MapPin, Star, Coffee, Sun, Sunset, Moon, ChevronRight, Phone } from "lucide-react";
import { useEffect } from "react";

// Journey moment photos mapped by time of day and activity
const JOURNEY_PHOTOS: Record<string, Record<string, string>> = {
  escapada: {
    arrival: IMAGES.radissonAerial,
    morning_coffee: IMAGES.ventoClub,
    adventure1: IMAGES.surfAction,
    adventure2: IMAGES.cascadaFilipinas,
    pool: IMAGES.radissonPool,
    dinner: IMAGES.beachClubSunset,
    room: IMAGES.radissonLounge,
    sunset: IMAGES.cerroSunset,
    beach: IMAGES.beachAerial,
    spa: IMAGES.spaMassage,
  },
  explorador: {
    arrival: IMAGES.radissonAerial,
    morning_coffee: IMAGES.ventoClub,
    adventure1: IMAGES.cascadaFilipinas,
    adventure2: IMAGES.cerroChameHike,
    adventure3: IMAGES.surfAction,
    pool: IMAGES.radissonPool,
    dinner: IMAGES.beachClubSunset,
    room: IMAGES.radissonLounge,
    sunset: IMAGES.cerroSunset,
    yoga: IMAGES.yogaBeachSunset,
    spa: IMAGES.spaMassage,
    beach: IMAGES.beachAerial,
  },
  inmersion: {
    arrival: IMAGES.radissonAerial,
    morning_coffee: IMAGES.ventoClub,
    adventure1: IMAGES.cerroChameHike,
    adventure2: IMAGES.cascadaFilipinas,
    adventure3: IMAGES.islaOtoque,
    adventure4: IMAGES.surfAction,
    adventure5: IMAGES.fishingBoat,
    pool: IMAGES.radissonPool,
    dinner: IMAGES.beachClubSunset,
    room: IMAGES.radissonLounge,
    sunset: IMAGES.cerroSunset,
    yoga: IMAGES.yogaBeachSunset,
    spa: IMAGES.spaMassage,
    islands: IMAGES.islaOtoqueCoast,
    beach: IMAGES.beachAerial,
  },
};

// Emotional journey narratives for each package
const JOURNEY_NARRATIVES: Record<string, { day: string; title: string; moments: { icon: React.ReactNode; time: string; text: string; photo: string; photoAlt: string }[] }[]> = {
  escapada: [
    {
      day: "Viernes",
      title: "Llegada al Paraíso",
      moments: [
        { icon: <Sunset className="w-5 h-5" />, time: "3:00 PM", text: "Llegas al Radisson Riviera. Check-in con vista al Pacífico. Tu habitación tiene balcón y el sonido de las olas ya te recibe.", photo: IMAGES.radissonAerial, photoAlt: "Radisson Riviera vista aérea" },
        { icon: <Sun className="w-5 h-5" />, time: "4:30 PM", text: "Primera zambullida en la piscina infinity. El agua se funde con el horizonte del océano. Un mojito en la mano, los pies en el agua.", photo: IMAGES.radissonPool, photoAlt: "Piscina infinity Radisson" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena en Vento Beach Club. El atardecer pinta el cielo de naranja mientras pruebas el mejor ceviche de la costa panameña.", photo: IMAGES.beachClubSunset, photoAlt: "Cena al atardecer en Vento" },
      ],
    },
    {
      day: "Sábado",
      title: "Tu Primera Aventura",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "7:00 AM", text: "Desayuno en Vento con vista al amanecer. Café panameño recién hecho, frutas tropicales, huevos como los quieras. El día empieza perfecto.", photo: IMAGES.ventoClub, photoAlt: "Desayuno en Vento Beach Club" },
        { icon: <Sun className="w-5 h-5" />, time: "8:30 AM", text: "Tu primera actividad Hero. ¿Surf en las olas más seguras de Panamá? ¿Cascadas escondidas en la selva? ¿Hiking al Cerro Chame? Tú eliges.", photo: IMAGES.surfAction, photoAlt: "Surf en Playa Caracol" },
        { icon: <Sunset className="w-5 h-5" />, time: "2:00 PM", text: "Vuelves con la adrenalina alta. La piscina te espera. Almuerzo en Vento. Siesta opcional (muy recomendada).", photo: IMAGES.radissonPool, photoAlt: "Relax en la piscina" },
        { icon: <Moon className="w-5 h-5" />, time: "6:30 PM", text: "Atardecer desde la playa. Fogata, música suave, y la satisfacción de un día que no olvidarás.", photo: IMAGES.cerroSunset, photoAlt: "Atardecer en Playa Caracol" },
      ],
    },
    {
      day: "Domingo",
      title: "Una Aventura Más",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "7:00 AM", text: "Último desayuno en Vento. Hoy no hay prisa. Café con calma, el mar de fondo.", photo: IMAGES.ventoClub, photoAlt: "Desayuno en Vento" },
        { icon: <Sun className="w-5 h-5" />, time: "9:00 AM", text: "Segunda actividad Hero. Si ayer surfeaste, hoy cascadas. Si ayer fue cerro, hoy islas. Cada día diferente.", photo: IMAGES.cascadaFilipinas, photoAlt: "Cascadas de las Filipinas" },
        { icon: <Sunset className="w-5 h-5" />, time: "2:00 PM", text: "Check-out con ganas de volver. Te llevas fotos, historias, y la promesa de que esto fue solo el comienzo.", photo: IMAGES.beachAerial, photoAlt: "Vista aérea de Playa Caracol" },
      ],
    },
  ],
  explorador: [
    {
      day: "Día 1",
      title: "Bienvenida al Circuito",
      moments: [
        { icon: <Sunset className="w-5 h-5" />, time: "2:00 PM", text: "Llegas al Radisson Riviera. Check-in, te entregan tu kit de explorador. La habitación tiene vista al Pacífico y ya huele a aventura.", photo: IMAGES.radissonAerial, photoAlt: "Llegada al Radisson Riviera" },
        { icon: <Sun className="w-5 h-5" />, time: "4:00 PM", text: "Primer contacto con el mar. Surf libre o simplemente caminar por la playa. La piscina infinity te espera si prefieres agua dulce.", photo: IMAGES.radissonPool, photoAlt: "Piscina infinity" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena de bienvenida en Vento Beach Club. Mariscos frescos, cócteles artesanales, y el atardecer más bonito que has visto.", photo: IMAGES.beachClubSunset, photoAlt: "Cena de bienvenida" },
      ],
    },
    {
      day: "Día 2",
      title: "Aventura en la Selva",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "6:30 AM", text: "Desayuno energético en Vento. Hoy necesitas fuerzas: te espera la selva.", photo: IMAGES.ventoClub, photoAlt: "Desayuno en Vento" },
        { icon: <Sun className="w-5 h-5" />, time: "7:30 AM", text: "Sales hacia las cascadas o el Cerro Chame. El guía te cuenta historias del camino. La selva te envuelve.", photo: IMAGES.cascadaFilipinas, photoAlt: "Cascadas de las Filipinas" },
        { icon: <Sunset className="w-5 h-5" />, time: "3:00 PM", text: "Vuelves empapado (o sudado) y feliz. La piscina del Radisson nunca se sintió tan bien. Relax total.", photo: IMAGES.radissonPool, photoAlt: "Relax post-aventura" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena libre. Prueba los tacos de pescado de Vento o explora las opciones locales. Mañana hay más.", photo: IMAGES.cerroSunset, photoAlt: "Atardecer" },
      ],
    },
    {
      day: "Día 3",
      title: "Mar, Yoga y Despedida",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "6:00 AM", text: "Yoga al amanecer en la playa. El sol sube mientras respiras. El mejor despertar posible.", photo: IMAGES.yogaBeachSunset, photoAlt: "Yoga en la playa" },
        { icon: <Sun className="w-5 h-5" />, time: "9:00 AM", text: "Segunda actividad Hero: surf con instructores ANS, tour a las islas, o pesca deportiva. El mar es tuyo.", photo: IMAGES.surfAction, photoAlt: "Surf en Playa Caracol" },
        { icon: <Sunset className="w-5 h-5" />, time: "3:00 PM", text: "Spa y masaje. Te lo ganaste. Después, playa libre hasta que el sol se esconda.", photo: IMAGES.spaMassage, photoAlt: "Spa Radisson" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Última noche. Fogata en la playa, estrellas, y la certeza de que volverás.", photo: IMAGES.beachClubSunset, photoAlt: "Última noche" },
      ],
    },
    {
      day: "Día 4",
      title: "Hasta Pronto",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "8:00 AM", text: "Último desayuno en Vento. Sin prisa. Late check-out si está disponible. Te llevas Chame en el corazón.", photo: IMAGES.ventoClub, photoAlt: "Último desayuno" },
        { icon: <Sun className="w-5 h-5" />, time: "12:00 PM", text: "Check-out. Regreso a la ciudad con otra energía. Ya estás planeando cuándo volver.", photo: IMAGES.beachAerial, photoAlt: "Despedida" },
      ],
    },
  ],
  inmersion: [
    {
      day: "Día 1",
      title: "Bienvenida al Circuito Completo",
      moments: [
        { icon: <Sunset className="w-5 h-5" />, time: "2:00 PM", text: "Llegas al Radisson Riviera. Check-in VIP, tu concierge dedicado te recibe. La suite tiene vista al Pacífico y un kit de bienvenida.", photo: IMAGES.radissonAerial, photoAlt: "Llegada VIP al Radisson" },
        { icon: <Sun className="w-5 h-5" />, time: "4:00 PM", text: "Tour de orientación por Playa Caracol. Conoces la playa, el beach club, el spa. Te presentan al equipo que te acompañará toda la semana.", photo: IMAGES.beachAerial, photoAlt: "Tour de bienvenida" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena de bienvenida en Vento. Menú degustación con lo mejor de la cocina panameña. Brindis por la semana que viene.", photo: IMAGES.beachClubSunset, photoAlt: "Cena de bienvenida" },
      ],
    },
    {
      day: "Día 2",
      title: "Amanecer en las Alturas",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "4:30 AM", text: "Café antes del amanecer. Hoy madrugas por una buena razón: el Cerro Chame te espera.", photo: IMAGES.ventoClub, photoAlt: "Café pre-amanecer" },
        { icon: <Sun className="w-5 h-5" />, time: "5:00 AM", text: "Hiking al Cerro Chame. 2 horas de ascenso entre la selva. Llegas a la cima justo cuando el sol sale sobre el Pacífico. 560 metros de pura magia.", photo: IMAGES.cerroChameHike, photoAlt: "Hiking Cerro Chame" },
        { icon: <Sunset className="w-5 h-5" />, time: "12:00 PM", text: "Bajas, almuerzas en Vento, y la piscina te recibe. Siesta merecida. El cuerpo descansa, la mente procesa lo que vio.", photo: IMAGES.radissonPool, photoAlt: "Piscina post-cerro" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena en Vento. Video del día en la pantalla. Risas, fotos épicas, y la anticipación de lo que viene mañana.", photo: IMAGES.cerroSunset, photoAlt: "Cena y video del día" },
      ],
    },
    {
      day: "Día 3",
      title: "Selva y Cascadas",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "7:00 AM", text: "Desayuno completo. Hoy necesitas energía: la selva te llama.", photo: IMAGES.ventoClub, photoAlt: "Desayuno energético" },
        { icon: <Sun className="w-5 h-5" />, time: "8:00 AM", text: "Circuito de cascadas. Trekking entre árboles centenarios, pozas cristalinas, rappel de 30 metros para los valientes. Vuelves empapado y con la mejor sonrisa.", photo: IMAGES.cascadaFilipinas, photoAlt: "Cascadas de las Filipinas" },
        { icon: <Sunset className="w-5 h-5" />, time: "3:00 PM", text: "Spa y masaje deportivo. Después de la selva, tus músculos te lo agradecen. Sauna, jacuzzi, y relax total.", photo: IMAGES.spaMassage, photoAlt: "Spa post-cascadas" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena temática panameña. Patacones, corvina, arroz con coco. Los sabores del istmo en tu mesa.", photo: IMAGES.beachClubSunset, photoAlt: "Cena temática" },
      ],
    },
    {
      day: "Día 4",
      title: "Islas Vírgenes",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "7:00 AM", text: "Desayuno y al muelle. Hoy navegas a las islas más vírgenes del Pacífico panameño.", photo: IMAGES.ventoClub, photoAlt: "Desayuno antes de zarpar" },
        { icon: <Sun className="w-5 h-5" />, time: "8:30 AM", text: "45 minutos en lancha y llegas a otro mundo. Islas Otoque y Boná: playas desiertas, agua turquesa, snorkel entre peces de colores. Almuerzo de pescadores en la isla.", photo: IMAGES.islaOtoque, photoAlt: "Islas Otoque y Boná" },
        { icon: <Sunset className="w-5 h-5" />, time: "4:00 PM", text: "Regreso navegando con el sol bajando. Llegas a Caracol dorado por el sol y salado por el mar.", photo: IMAGES.islaOtoqueCoast, photoAlt: "Regreso de las islas" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena de mariscos frescos. El ceviche de hoy tiene un sabor diferente: lo probaste en su origen.", photo: IMAGES.beachClubSunset, photoAlt: "Cena de mariscos" },
      ],
    },
    {
      day: "Día 5",
      title: "Surf y Pesca",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "6:00 AM", text: "Yoga al amanecer en la playa. Después, desayuno completo. Hoy el mar es protagonista.", photo: IMAGES.yogaBeachSunset, photoAlt: "Yoga al amanecer" },
        { icon: <Sun className="w-5 h-5" />, time: "8:00 AM", text: "Surf con instructores ANS. Las olas de Caracol son perfectas: fondo de arena, consistentes, y un pro te guía ola por ola.", photo: IMAGES.surfAction, photoAlt: "Surf con instructores ANS" },
        { icon: <Sunset className="w-5 h-5" />, time: "2:00 PM", text: "Pesca deportiva. Sales en lancha, el capitán conoce cada rincón. Atún, dorado, o si tienes suerte, un marlin.", photo: IMAGES.fishingBoat, photoAlt: "Pesca deportiva" },
        { icon: <Moon className="w-5 h-5" />, time: "7:00 PM", text: "Cena con tu captura. El chef de Vento prepara lo que pescaste. No hay nada más fresco que esto.", photo: IMAGES.beachClubSunset, photoAlt: "Cena con tu captura" },
      ],
    },
    {
      day: "Día 6",
      title: "Hasta la Próxima",
      moments: [
        { icon: <Coffee className="w-5 h-5" />, time: "7:00 AM", text: "Yoga final al amanecer. Desayuno de despedida en Vento. Abrazos con el equipo que se convirtió en familia.", photo: IMAGES.yogaBeachSunset, photoAlt: "Último yoga" },
        { icon: <Sun className="w-5 h-5" />, time: "10:00 AM", text: "Check-out. Te llevas fotos profesionales de toda la semana, un bronceado épico, y la certeza de que Chame es tu lugar.", photo: IMAGES.beachAerial, photoAlt: "Despedida de Caracol" },
      ],
    },
  ],
};

export default function PaqueteDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const paquete = PAQUETES.find((p) => p.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!paquete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1D4C40] mb-4">Paquete no encontrado</h1>
          <Link href="/paquetes" className="text-[#FF7E47] hover:underline">← Volver a Paquetes</Link>
        </div>
      </div>
    );
  }

  const photos = JOURNEY_PHOTOS[paquete.tier] || JOURNEY_PHOTOS.escapada;
  const journeyDays = JOURNEY_NARRATIVES[paquete.tier] || JOURNEY_NARRATIVES.escapada;
  const otherPaquetes = PAQUETES.filter((p) => p.id !== paquete.id);

  const tierColors: Record<string, { bg: string; accent: string; badge: string }> = {
    escapada: { bg: "from-[#1D4C40]", accent: "#FF7E47", badge: "bg-[#FF7E47]" },
    explorador: { bg: "from-[#0A2540]", accent: "#FF7E47", badge: "bg-[#0077B6]" },
    inmersion: { bg: "from-[#2D1B0E]", accent: "#FF7E47", badge: "bg-[#D4A574]" },
  };
  const colors = tierColors[paquete.tier] || tierColors.escapada;

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src={paquete.image} alt={paquete.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg}/80 via-black/40 to-transparent`} />
        <div className="absolute top-6 left-6 z-10">
          <Link href="/paquetes" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Todos los Paquetes
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <span className={`${colors.badge} text-white text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-4`}>
            {paquete.nights} NOCHES · {paquete.days} DÍAS
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {paquete.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-6">{paquete.tagline}</p>
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {paquete.nights} noches</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Playa Caracol, Panamá</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-[#FF7E47] text-[#FF7E47]" /> Todo incluido</span>
          </div>
        </div>
      </section>

      {/* ── INTRO QUOTE ── */}
      <section className="py-16 md:py-20 bg-[#1D4C40] text-white text-center">
        <div className="container max-w-3xl">
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {paquete.tier === "escapada" && "\"A veces solo necesitas 48 horas para resetear. Llegas, respiras, y el Pacífico hace el resto.\""}
            {paquete.tier === "explorador" && "\"Con un día más, todo cambia. Tiempo para explorar, relajar, y repetir. El ritmo perfecto.\""}
            {paquete.tier === "inmersion" && "\"Un destino no se conoce en un fin de semana. La Inmersión es para quienes entienden eso.\""}
          </p>
        </div>
      </section>

      {/* ── WHAT IS THIS PACKAGE ── */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Qué es {paquete.name === "Inmersión Completa" ? "la" : paquete.name === "Escapada Fin de Semana" ? "la" : "el"} {paquete.name}?
          </h2>
          <p className="text-lg text-[#3D3D3D] leading-relaxed mb-8">{paquete.longDescription}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#FF7E47]">{paquete.nights}</div>
              <div className="text-sm text-[#666] mt-1">Noches</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#FF7E47]">{paquete.activities.length}</div>
              <div className="text-sm text-[#666] mt-1">Actividades</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#FF7E47]">24/7</div>
              <div className="text-sm text-[#666] mt-1">Soporte</div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#FF7E47]">100%</div>
              <div className="text-sm text-[#666] mt-1">Organizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <section className="py-8 bg-[#FF7E47]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-semibold">¿Te imaginas viviendo esto? Reserva tu lugar.</p>
          <a href={`${WHATSAPP}?text=Hola! Me interesa el paquete ${paquete.name} del Circuito Chame`} target="_blank" rel="noopener noreferrer" className="bg-white text-[#FF7E47] px-8 py-3 rounded-full font-bold hover:bg-[#FDF8F3] transition-colors whitespace-nowrap">
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── THE JOURNEY — VISUAL STORYTELLING ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[#FF7E47] font-semibold text-sm tracking-widest uppercase">Tu Viaje</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1D4C40] mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Así Se Vive {paquete.name === "Inmersión Completa" ? "la" : paquete.name === "Escapada Fin de Semana" ? "la" : "el"} {paquete.name}
            </h2>
            <p className="text-lg text-[#666] mt-4 max-w-2xl mx-auto">
              Cada momento está pensado. Cada foto es real. Este es el viaje que vas a vivir.
            </p>
          </div>

          {journeyDays.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-20 last:mb-0">
              {/* Day header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-full bg-[#1D4C40] flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {day.day.replace("Día ", "D").replace("Viernes", "V").replace("Sábado", "S").replace("Domingo", "D")}
                </div>
                <div>
                  <div className="text-sm text-[#FF7E47] font-semibold tracking-wider uppercase">{day.day}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1D4C40]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{day.title}</h3>
                </div>
              </div>

              {/* Moments with alternating photo layout */}
              <div className="space-y-12">
                {day.moments.map((moment, mIndex) => {
                  const isEven = mIndex % 2 === 0;
                  return (
                    <div key={mIndex} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                      {/* Photo */}
                      <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                          <img src={moment.photo} alt={moment.photoAlt} className="w-full h-full object-cover" />
                          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            {moment.icon} {moment.time}
                          </div>
                        </div>
                      </div>
                      {/* Text */}
                      <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[#FF7E47]/10 flex items-center justify-center text-[#FF7E47]">
                            {moment.icon}
                          </div>
                          <span className="text-[#FF7E47] font-semibold">{moment.time}</span>
                        </div>
                        <p className="text-lg text-[#3D3D3D] leading-relaxed">{moment.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Day divider */}
              {dayIndex < journeyDays.length - 1 && (
                <div className="flex items-center justify-center mt-12">
                  <div className="h-px bg-[#E8DDD3] flex-1" />
                  <div className="px-4 text-[#999] text-sm italic">Descansas. Mañana hay más.</div>
                  <div className="h-px bg-[#E8DDD3] flex-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── PHOTO BREAK ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {paquete.gallery.slice(0, 4).map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img} alt={`Momento ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </section>

      {/* ── TU BASE — WHERE YOU STAY ── */}
      <section className="py-16 md:py-24 bg-[#1D4C40] text-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7E47] font-semibold text-sm tracking-widest uppercase">Y Cuando Vuelvas...</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Tu Base en Playa Caracol
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Sales a la aventura. Vuelves al paraíso. Cada noche, la comodidad que te mereces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BASE_SECTIONS.slice(0, 4).map((section) => (
              <div key={section.id} className="relative rounded-2xl overflow-hidden group">
                <img src={section.image} alt={section.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{section.name}</h3>
                  <p className="text-white/80 text-sm">{section.tagline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tu-base" className="inline-block bg-[#FF7E47] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E86D3A] transition-colors">
              Conoce Tu Base Completa
            </Link>
          </div>
        </div>
      </section>

      {/* ── INCLUDED / NOT INCLUDED ── */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] text-center mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Qué Incluye?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8DDD3]">
              <h3 className="text-xl font-bold text-[#1D4C40] mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-600" /> Incluido
              </h3>
              <ul className="space-y-3">
                {paquete.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[#3D3D3D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8DDD3]">
              <h3 className="text-xl font-bold text-[#1D4C40] mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" /> No Incluido
              </h3>
              <ul className="space-y-3">
                {paquete.notIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-[#3D3D3D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7E47] font-semibold text-sm tracking-widest uppercase">Precios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Elige Tu Alojamiento
            </h2>
          </div>
          <div className="space-y-4">
            {paquete.pricing.map((option, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border-2 transition-all ${i === 0 ? "border-[#FF7E47] bg-[#FF7E47]/5" : "border-[#E8DDD3] bg-white hover:border-[#FF7E47]/50"}`}>
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  {i === 0 && <span className="bg-[#FF7E47] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMENDADO</span>}
                  <span className="text-lg font-semibold text-[#1D4C40]">{option.accommodation}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#1D4C40]">${option.pricePerPerson}</div>
                    <div className="text-sm text-[#666]">por persona</div>
                  </div>
                  <a href={`${WHATSAPP}?text=Hola! Quiero reservar ${paquete.name} en ${option.accommodation} ($${option.pricePerPerson}/pp)`} target="_blank" rel="noopener noreferrer" className="bg-[#FF7E47] text-white px-6 py-3 rounded-full font-bold hover:bg-[#E86D3A] transition-colors whitespace-nowrap">
                    Reservar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section className="py-16 md:py-20 bg-[#FDF8F3]">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4C40] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Para Quién Es?
          </h2>
          <p className="text-lg text-[#3D3D3D] mb-8">
            {paquete.tier === "escapada" && "Para ti que necesitas desconectar de la ciudad pero no tienes una semana. 48 horas bastan para resetear cuando el destino es el correcto."}
            {paquete.tier === "explorador" && "Para ti que sabes que un fin de semana no es suficiente. Quieres tiempo para explorar, relajar, y repetir. Sin correr, sin aburrirte."}
            {paquete.tier === "inmersion" && "Para ti que entiendes que un destino se vive, no se visita. Quieres conocer cada rincón, cada sabor, cada aventura. Sales transformado."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {paquete.idealFor.map((who, i) => (
              <span key={i} className="bg-white text-[#1D4C40] px-5 py-2.5 rounded-full text-sm font-medium border border-[#E8DDD3]">
                {who}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PACKAGES ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-[#1D4C40] text-center mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Otros Paquetes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherPaquetes.map((p) => (
              <Link key={p.id} href={`/paquete/${p.id}`} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img src={p.image} alt={p.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="bg-[#FF7E47] text-white text-xs font-bold px-3 py-1 rounded-full">{p.nights} NOCHES</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{p.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{p.tagline}</p>
                    <div className="flex items-center gap-2 mt-3 text-[#FF7E47] font-semibold">
                      Desde ${Math.min(...p.pricing.map(pr => pr.pricePerPerson))}/persona <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={IMAGES.beachAerial} alt="Playa Caracol" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1D4C40]/80" />
        <div className="relative container max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Listo Para Vivir {paquete.name === "Inmersión Completa" ? "la" : paquete.name === "Escapada Fin de Semana" ? "la" : "el"} {paquete.name}?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            A solo 90 minutos de Ciudad de Panamá. Todo organizado, todo incluido. Tú solo llegas y vives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${WHATSAPP}?text=Hola! Quiero reservar el paquete ${paquete.name} del Circuito Chame`} target="_blank" rel="noopener noreferrer" className="bg-[#FF7E47] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#E86D3A] transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Reservar Ahora
            </a>
            <a href={`${WHATSAPP}?text=Hola! Tengo preguntas sobre el paquete ${paquete.name}`} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Tengo Preguntas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
