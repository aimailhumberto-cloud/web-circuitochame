// ============================================================
// CIRCUITO CHAME — "Jungle Explorer" Design System
// Data layer: Destinos, Circuitos Héroe, Paquetes, Tu Base
// "Misiones diarias desde un mismo hogar"
// ============================================================

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah";

export const IMAGES = {
  // Adventure destinations
  cerroChame: `${CDN}/cerro-chame-panoramic_f6587b46.jpg`,
  cerroChameHike: `${CDN}/cerro-chame-hike_bc0a8e15.jpg`,
  cerroChameHiker: `${CDN}/cerro-chame-hiker_4a96a5dd.jpg`,
  cerroSunrise: `${CDN}/cerro-chame-sunrise_809fffa6.jpg`,
  cerroSunset: `${CDN}/cerro-chame-sunset_dbcdb200.jpg`,
  cascadaFilipinas: `${CDN}/cascada-filipinas_1974539a.jpg`,
  cascadaFilipinas2: `${CDN}/cascada-filipinas_354be25a.jpg`,
  cascadaJungle: `${CDN}/cascada-filipinas-jungle_3e5a6be1.jpg`,
  cascadaCanyon: `${CDN}/cascada-canyon_e70f0074.jpg`,
  cascadaChame: `${CDN}/cascada-chame_5f71956b.jpg`,
  islaOtoque: `${CDN}/isla-otoque_5b19650f.jpeg`,
  islaOtoqueBoat: `${CDN}/isla-otoque-boat_8781f1de.jpg`,
  islaOtoqueCoast: `${CDN}/isla-otoque-coast_a82614aa.jpg`,
  islaBonaCoast: `${CDN}/isla-bona-coast_55087533.jpeg`,
  valleAntonWaterfall: `${CDN}/valle-anton-waterfall_b8d17598.jpg`,
  valleAntonPool: `${CDN}/valle-anton-pool_a7a938f2.jpg`,
  // Water activities
  surfAction: `${CDN}/OytTdKi6ixtl_8bfa659a.jpg`,
  surfLesson: `${CDN}/surf-lesson-panama_5e68d9f5.jpg`,
  surfGroup: `${CDN}/Ev9KPt5dmJyf_1737f960.jpg`,
  kitesurfAction: `${CDN}/kitesurf-action_164ceffa.jpg`,
  kitesurfAerial: `${CDN}/kitesurf-aerial_004c3c94.webp`,
  kitesurfPuntaChame: `${CDN}/kitesurf-punta-chame_ef641b9c.jpg`,
  fishingBoat: `${CDN}/fishing-boat_52b27c19.jpg`,
  fishingCatch: `${CDN}/fishing-catch_50832945.jpg`,
  fishingSport: `${CDN}/fishing-sport_a5024405.jpg`,
  fishingPanama: `${CDN}/fishing-panama_fc555f41.jpg`,
  fishingMarlin: `${CDN}/fishing-marlin_9bb5b409.jpg`,
  whaleWatching: `${CDN}/whale-watching_4ebe6735.jpg`,
  whaleBreach: `${CDN}/whale-breach_03d179c9.jpg`,
  tubingRiver: `${CDN}/tubing-river_925588e0.jpg`,
  tubingGroup: `${CDN}/tubing-group_dfb0e9a3.jpg`,
  jetSki: `${CDN}/jet-ski_3f990f74.jpg`,
  sunsetCruise: `${CDN}/sunset-cruise_bcebe5ff.jpg`,
  // Base - Playa Caracol
  caracolAerial: `${CDN}/J9FoqOSnOtO3_84e8407f.jpg`,
  beachAerial: `${CDN}/Fs7qdxKz7O14_a98135d7.jpg`,
  radissonAerial: `${CDN}/4IAovm5v8O1R_444c9bae.jpg`,
  radissonPool: `${CDN}/wZ9xs69supgN_8cbad322.jpg`,
  radissonLounge: `${CDN}/WucPF3BBWfhK_6d0e84eb.jpg`,
  ventoClub: `${CDN}/XFFzvafDfFwf_ebbbf4b0.jpg`,
  chameWaves: `${CDN}/94wwXkgQm3iF_8c140b8b.jpg`,
  // Wellness & Comfort
  yogaResort: `${CDN}/yoga-resort_aa794eef.jpg`,
  spaMassage: `${CDN}/spa-massage_32ec88f2.jpg`,
  yogaBeachSunset: `${CDN}/yoga-beach-sunset_cd2dce92.jpg`,
  beachClubSunset: `${CDN}/beach-club-sunset_1af9ef2e.jpg`,
  yogaBeach: `${CDN}/yoga-beach_d75bd144.jpg`,
  // Misc
  collage: `${CDN}/spCWVVyierL9_57c9b7ca.jpg`,
  coastal: `${CDN}/tcGMa9DcPSqB_4b9c3b2a.jpg`,
};

export const WHATSAPP = "https://wa.me/5076988456";
export const WHATSAPP_TEXT = "+507 6988-4566";
export const EMAIL = "info@circuitochame.com";
export const INSTAGRAM = "https://instagram.com/circuitochame";
export const FACEBOOK = "https://facebook.com/circuitochame";

// ─── DESTINOS ────────────────────────────────────────────────

export interface Destino {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  belt: "A" | "B" | "C";
  timeFromBase: string;
  image: string;
  gallery: string[];
  highlights: string[];
  activities: string[];
}

export const DESTINOS: Destino[] = [
  {
    id: "cerro-chame",
    name: "Cerro Chame",
    tagline: "560 metros sobre el Pacífico",
    description: "El mirador más impresionante de Panamá Oeste. Amanecer épico sobre el océano, senderos entre la selva tropical y vistas de 360° que quitan el aliento.",
    longDescription: "Cerro Chame es el guardián del Pacífico panameño. Con 560 metros de altura, este cerro ofrece una de las experiencias de senderismo más gratificantes del país. El ascenso de aproximadamente 2 horas te lleva a través de bosque tropical seco, con paradas naturales donde la vegetación se abre para revelar vistas panorámicas del océano, las islas y la costa. En la cima, el mundo se detiene. El amanecer desde aquí es algo que no se puede describir — hay que vivirlo. Y lo mejor: después de la aventura, tu habitación con piscina te espera a solo 30 minutos.",
    belt: "C",
    timeFromBase: "30-45 min",
    image: IMAGES.cerroChame,
    gallery: [IMAGES.cerroChameHike, IMAGES.cerroSunrise, IMAGES.cerroSunset, IMAGES.cerroChameHiker],
    highlights: ["Amanecer sobre el Pacífico", "Sendero de 2 horas", "Vistas 360°", "Flora y fauna tropical"],
    activities: ["Hiking al amanecer", "Hiking al atardecer", "Fotografía de naturaleza", "Observación de aves"],
  },
  {
    id: "cascadas",
    name: "Cascadas El Harino & Filipinas",
    tagline: "Agua cristalina en la selva",
    description: "Cascadas escondidas entre la vegetación tropical. Pozas naturales de agua cristalina, rappel de 30 metros y trekking acuático que te reconecta con la naturaleza.",
    longDescription: "A menos de una hora de Playa Caracol, la selva guarda un secreto: cascadas de agua cristalina que caen entre rocas cubiertas de musgo, formando pozas naturales perfectas para nadar. Las Cascadas de Las Filipinas son las más accesibles — un sendero de 45 minutos entre árboles centenarios te lleva a una caída de agua de 15 metros. Para los más aventureros, El Harino ofrece rappel de 30 metros y un circuito de 7 cascadas que es pura adrenalina. Y cuando vuelvas empapado y feliz, Vento Beach Club te espera con una cena frente al mar.",
    belt: "C",
    timeFromBase: "30-60 min",
    image: IMAGES.cascadaFilipinas,
    gallery: [IMAGES.cascadaJungle, IMAGES.cascadaCanyon, IMAGES.cascadaChame, IMAGES.cascadaFilipinas2],
    highlights: ["Pozas naturales cristalinas", "Rappel de 30 metros", "7 cascadas en un circuito", "Senderos en selva tropical"],
    activities: ["Trekking a cascadas", "Rappel en cascada", "Canyoning", "Natación en pozas"],
  },
  {
    id: "playa-caracol",
    name: "Playa Caracol",
    tagline: "Tu base de operaciones",
    description: "La playa más segura de Panamá para surf. Fondo de arena, olas consistentes, Radisson Riviera, Vento Beach Club, spa y todo lo que necesitas sin moverte.",
    longDescription: "Playa Caracol no es solo una playa — es un ecosistema completo de bienestar y aventura. Con fondo de arena (sin piedras ni rocas), es la playa más segura de Panamá para aprender surf. Pero Caracol es mucho más: el Radisson Riviera con piscina infinity y vista al Pacífico, Vento Beach Club con gastronomía de primer nivel, spa con tratamientos de relajación, y el Surf Shack donde alquilas tablas, bicicletas y todo el equipo que necesitas. Es tu base de operaciones: sales a la aventura y vuelves al paraíso.",
    belt: "A",
    timeFromBase: "0 min",
    image: IMAGES.caracolAerial,
    gallery: [IMAGES.beachAerial, IMAGES.radissonPool, IMAGES.ventoClub, IMAGES.surfAction],
    highlights: ["Fondo de arena (sin piedras)", "Radisson Riviera", "Vento Beach Club", "Spa & Wellness"],
    activities: ["Surf", "Pasadía en piscina", "Gastronomía en Vento", "Spa & masajes", "Yoga en la playa"],
  },
  {
    id: "islas",
    name: "Islas Otoque & Boná",
    tagline: "Islas vírgenes del Pacífico",
    description: "Islas paradisíacas a 45 minutos en lancha. Playas desiertas, snorkel en aguas cristalinas, almuerzo de pescadores y la sensación de estar en otro mundo.",
    longDescription: "A 45 minutos en lancha desde Playa Caracol, las islas Otoque y Boná son un tesoro escondido del Pacífico panameño. Playas de arena blanca sin un alma, aguas turquesas perfectas para snorkel, y una comunidad de pescadores que te recibe con el mejor ceviche que has probado. El tour incluye navegación por la costa, parada en playas desiertas, snorkel, y almuerzo preparado por los locales. Es el tipo de experiencia que solo existe en lugares que aún no han sido descubiertos por el turismo masivo.",
    belt: "B",
    timeFromBase: "45 min en lancha",
    image: IMAGES.islaOtoque,
    gallery: [IMAGES.islaOtoqueBoat, IMAGES.islaOtoqueCoast, IMAGES.islaBonaCoast, IMAGES.sunsetCruise],
    highlights: ["Playas desiertas", "Snorkel en aguas cristalinas", "Almuerzo de pescadores", "Navegación escénica"],
    activities: ["Tour en lancha", "Snorkel", "Playa privada", "Almuerzo local", "Pesca artesanal"],
  },
  {
    id: "laguna-valle",
    name: "Laguna San Carlos & Valle de Antón",
    tagline: "Montaña, aguas termales y cultura",
    description: "El Valle de Antón: cráter volcánico habitado, aguas termales, mercado artesanal, rana dorada y una frescura que contrasta con la playa.",
    longDescription: "A una hora de Playa Caracol, el paisaje cambia completamente. El Valle de Antón es un pueblo dentro de un cráter volcánico — literalmente. Aquí encuentras aguas termales naturales, un mercado artesanal donde los Ngäbe-Buglé venden sus artesanías, el zoológico de la rana dorada (especie endémica de Panamá), y senderos entre bosque nuboso. La Laguna de San Carlos, a medio camino, es perfecta para kayak y un day pass relajante. Es el complemento perfecto para los días de playa: montaña, frescura y cultura local.",
    belt: "C",
    timeFromBase: "45-60 min",
    image: IMAGES.valleAntonWaterfall,
    gallery: [IMAGES.valleAntonPool, IMAGES.cascadaJungle, IMAGES.cerroChameHike],
    highlights: ["Cráter volcánico habitado", "Aguas termales naturales", "Mercado artesanal", "Rana dorada endémica"],
    activities: ["Visita al Valle", "Aguas termales", "Mercado artesanal", "Laguna San Carlos", "Kayak"],
  },
];

// ─── CIRCUITOS HÉROE ─────────────────────────────────────────

export interface CircuitoHero {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  season: string;
  seasonMonths?: string;
  priceFrom: number;
  duration: string;
  difficulty: "Bajo" | "Medio" | "Alto";
  groupSize: string;
  image: string;
  gallery: string[];
  includes: string[];
  notIncludes: string[];
  itinerary: { time: string; activity: string }[];
  idealFor: string[];
  backAtBase: string;
}

export const CIRCUITOS: CircuitoHero[] = [
  {
    id: "surf-chill",
    name: "Surf & Chill",
    tagline: "Olas, sol y buena vida",
    description: "El circuito más relajado. Clases de surf en la mañana, piscina al mediodía, Vento Beach Club en la tarde. La esencia de Playa Caracol en un día perfecto.",
    longDescription: "Este es el circuito que define a Playa Caracol. Empiezas el día con una clase de surf en las olas más seguras de Panamá (fondo de arena, sin piedras). Tu instructor ANS te guía ola por ola mientras el sol sube sobre el Pacífico. Después, te espera la piscina del Radisson Riviera con una cerveza fría. Y cuando el hambre llega, Vento Beach Club tiene el mejor ceviche de la costa. Es un día donde no necesitas ir a ningún lado — todo está aquí, a pasos de tu habitación.",
    season: "Todo el año",
    priceFrom: 55,
    duration: "Día completo",
    difficulty: "Bajo",
    groupSize: "2-12 personas",
    image: IMAGES.surfAction,
    gallery: [IMAGES.surfLesson, IMAGES.surfGroup, IMAGES.radissonPool, IMAGES.ventoClub],
    includes: ["Clase de surf 1.5 horas", "Tabla y equipo completo", "Instructor certificado ANS", "Acceso a piscina Radisson", "Fotos de la sesión"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Alimentos", "Traslados"],
    itinerary: [
      { time: "7:00 AM", activity: "Desayuno en Vento Beach Club" },
      { time: "8:00 AM", activity: "Clase de surf con instructor ANS" },
      { time: "10:00 AM", activity: "Snack post-surf y fotos" },
      { time: "11:00 AM", activity: "Piscina infinity Radisson Riviera" },
      { time: "1:00 PM", activity: "Almuerzo en Vento Beach Club" },
      { time: "3:00 PM", activity: "Surf libre o relax en la playa" },
      { time: "5:30 PM", activity: "Atardecer desde el beach club" },
    ],
    idealFor: ["Principiantes de surf", "Parejas", "Familias con niños 5+", "Quien quiere un día perfecto sin complicaciones"],
    backAtBase: "Después de surfear, la piscina infinity del Radisson te espera con vista al Pacífico. Pide un cóctel, cierra los ojos, y deja que el sonido de las olas haga el resto.",
  },
  {
    id: "cascadas-pozos",
    name: "Cascadas & Pozos",
    tagline: "Selva, agua y adrenalina",
    description: "Trekking entre la selva tropical hasta cascadas escondidas. Pozas naturales, rappel opcional y la recompensa de volver al hotel con la mejor historia del día.",
    longDescription: "Este circuito te lleva al corazón verde de Chame. Salimos temprano hacia las cascadas — el camino es parte de la aventura, entre árboles centenarios y el sonido del agua que se acerca. Llegas a la primera cascada y el mundo se detiene: 15 metros de agua cristalina cayendo sobre una poza natural perfecta para nadar. Los más aventureros pueden hacer rappel de 30 metros en El Harino. Y los que buscan el circuito completo recorren las 7 cascadas en un trekking acuático de 4 horas. Vuelves empapado, feliz y con hambre — justo a tiempo para la cena en Vento.",
    season: "Todo el año (mejor May-Nov)",
    priceFrom: 85,
    duration: "6-8 horas",
    difficulty: "Medio",
    groupSize: "4-10 personas",
    image: IMAGES.cascadaFilipinas,
    gallery: [IMAGES.cascadaJungle, IMAGES.cascadaCanyon, IMAGES.cascadaChame, IMAGES.cascadaFilipinas2],
    includes: ["Transporte ida y vuelta", "Guía naturalista certificado", "Equipo de rappel (si aplica)", "Snacks y agua", "Fotos del recorrido"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Almuerzo (opción de llevar)", "Seguro de aventura ($10)"],
    itinerary: [
      { time: "6:30 AM", activity: "Desayuno energético en el hotel" },
      { time: "7:30 AM", activity: "Salida hacia las cascadas" },
      { time: "8:30 AM", activity: "Inicio del sendero en la selva" },
      { time: "9:30 AM", activity: "Primera cascada — natación en poza" },
      { time: "10:30 AM", activity: "Rappel de 30m (opcional) o segunda cascada" },
      { time: "12:00 PM", activity: "Almuerzo tipo picnic en la selva" },
      { time: "1:30 PM", activity: "Regreso por sendero alternativo" },
      { time: "3:00 PM", activity: "De vuelta en Playa Caracol" },
    ],
    idealFor: ["Amantes de la naturaleza", "Aventureros", "Grupos de amigos", "Quien busca desconectarse de la ciudad"],
    backAtBase: "Llegas empapado y con la mejor sonrisa del viaje. El spa del Radisson Riviera tiene un masaje con tu nombre. Después, cena en Vento viendo el atardecer. Mañana hay otra misión.",
  },
  {
    id: "pesca-deportiva",
    name: "Pesca Deportiva",
    tagline: "El mar es tu arena",
    description: "Desde fun fishing para principiantes hasta pesca deportiva de altura. Marlin, atún, dorado y la emoción de la captura en aguas del Pacífico panameño.",
    longDescription: "El Pacífico panameño es uno de los mejores destinos de pesca deportiva del mundo, y desde Playa Caracol estás a minutos de las mejores zonas. Ofrecemos desde fun fishing (ideal para familias y principiantes) hasta charters de pesca de altura donde puedes pelear con un marlin de 200 libras. Nuestros capitanes conocen cada rincón de estas aguas. Salimos al amanecer, cuando el mar está en calma y los peces están activos. Vuelves con historias (y fotos) que no te van a creer.",
    season: "Todo el año",
    priceFrom: 120,
    duration: "4-8 horas",
    difficulty: "Bajo",
    groupSize: "2-6 personas",
    image: IMAGES.fishingBoat,
    gallery: [IMAGES.fishingCatch, IMAGES.fishingSport, IMAGES.fishingPanama, IMAGES.fishingMarlin],
    includes: ["Lancha con capitán experimentado", "Equipo de pesca completo", "Carnada y aparejos", "Hielo y cooler", "Snacks y bebidas a bordo"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Licencia de pesca ($20)", "Propina para el capitán"],
    itinerary: [
      { time: "5:30 AM", activity: "Café y briefing en el muelle" },
      { time: "6:00 AM", activity: "Salida al mar — navegación a zona de pesca" },
      { time: "7:00 AM", activity: "Inicio de pesca — trolling o jigging" },
      { time: "10:00 AM", activity: "Snack a bordo — cambio de zona" },
      { time: "12:00 PM", activity: "Regreso a puerto" },
      { time: "1:00 PM", activity: "Almuerzo con tu captura en Vento" },
    ],
    idealFor: ["Pescadores principiantes y expertos", "Padres e hijos", "Grupos corporativos", "Quien busca una experiencia única en el mar"],
    backAtBase: "Vuelves con la piel salada y la mejor historia del viaje. Si pescaste algo bueno, el chef de Vento te lo prepara para la cena. Piscina, cerveza, atardecer. Día perfecto.",
  },
  {
    id: "ballenas",
    name: "Avistamiento de Ballenas",
    tagline: "Gigantes del Pacífico",
    description: "De julio a octubre, las ballenas jorobadas llegan al Pacífico panameño. Verlas saltar a metros de tu lancha es una experiencia que cambia la perspectiva.",
    longDescription: "Cada año, entre julio y octubre, las ballenas jorobadas migran desde la Antártida hasta las aguas cálidas del Pacífico panameño para reproducirse y criar a sus ballenatos. Desde Playa Caracol, estás en primera fila para uno de los espectáculos más impresionantes de la naturaleza. Salimos en lancha con guías especializados que conocen los patrones de las ballenas. Ver a una ballena de 40 toneladas saltar fuera del agua a metros de ti es algo que no se puede describir — hay que vivirlo.",
    season: "Julio - Octubre",
    seasonMonths: "Jul-Oct",
    priceFrom: 150,
    duration: "4-5 horas",
    difficulty: "Bajo",
    groupSize: "6-12 personas",
    image: IMAGES.whaleWatching,
    gallery: [IMAGES.whaleBreach, IMAGES.sunsetCruise, IMAGES.islaOtoqueBoat],
    includes: ["Lancha con capitán y guía", "Equipo de observación", "Snacks y bebidas", "Seguro marítimo", "Fotos profesionales"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Almuerzo", "Propinas"],
    itinerary: [
      { time: "7:00 AM", activity: "Desayuno en el hotel" },
      { time: "8:00 AM", activity: "Briefing y salida en lancha" },
      { time: "8:45 AM", activity: "Navegación a zona de avistamiento" },
      { time: "9:30 AM", activity: "Avistamiento de ballenas jorobadas" },
      { time: "11:00 AM", activity: "Parada en isla para snorkel (opcional)" },
      { time: "12:30 PM", activity: "Regreso a Playa Caracol" },
    ],
    idealFor: ["Familias", "Amantes de la naturaleza", "Fotógrafos", "Cualquier persona — es una experiencia universal"],
    backAtBase: "Vuelves con los ojos brillando y el corazón lleno. Una siesta en la habitación, un masaje en el spa, y la cena en Vento mientras procesas lo que acabas de vivir.",
  },
  {
    id: "valle-anton",
    name: "Valle de Antón",
    tagline: "Del mar a la montaña en 1 hora",
    description: "El único pueblo del mundo dentro de un cráter volcánico. Aguas termales, mercado artesanal, rana dorada y la frescura de la montaña panameña.",
    longDescription: "El Valle de Antón es uno de esos lugares que no parece real. Un pueblo entero dentro del cráter de un volcán extinto, rodeado de montañas verdes, con aguas termales naturales y un clima fresco que contrasta con el calor de la playa. Aquí visitas el mercado artesanal donde los indígenas Ngäbe-Buglé venden sus coloridas artesanías, conoces la rana dorada (especie endémica de Panamá en peligro de extinción), y te sumerges en pozas termales naturales. Es el complemento perfecto para los días de playa.",
    season: "Todo el año",
    priceFrom: 50,
    duration: "6-8 horas",
    difficulty: "Bajo",
    groupSize: "4-15 personas",
    image: IMAGES.valleAntonWaterfall,
    gallery: [IMAGES.valleAntonPool, IMAGES.cerroChameHike, IMAGES.cascadaJungle],
    includes: ["Transporte ida y vuelta", "Guía bilingüe", "Entrada al zoológico", "Visita a aguas termales", "Tiempo libre en el mercado"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Almuerzo (restaurantes locales)", "Compras en el mercado"],
    itinerary: [
      { time: "7:30 AM", activity: "Desayuno y salida desde Caracol" },
      { time: "9:00 AM", activity: "Llegada al Valle de Antón" },
      { time: "9:30 AM", activity: "Visita al zoológico — rana dorada" },
      { time: "10:30 AM", activity: "Mercado artesanal" },
      { time: "11:30 AM", activity: "Aguas termales naturales" },
      { time: "1:00 PM", activity: "Almuerzo en restaurante local" },
      { time: "2:30 PM", activity: "Cascada El Macho o Canopy" },
      { time: "4:00 PM", activity: "Regreso a Playa Caracol" },
    ],
    idealFor: ["Familias con niños", "Amantes de la cultura", "Quien busca un día diferente", "Parejas"],
    backAtBase: "Llegas fresco de la montaña justo para el atardecer en la playa. La piscina del Radisson está a 37°C — perfecta después de un día de exploración. Cena en Vento y a dormir con el sonido de las olas.",
  },
  {
    id: "cerro-chame-circuito",
    name: "Hiking Cerro Chame",
    tagline: "Amanecer a 560 metros",
    description: "El hiking más épico de Panamá Oeste. Subir el Cerro Chame al amanecer y ver el Pacífico despertar desde la cima es una experiencia transformadora.",
    longDescription: "Salimos antes del amanecer. El sendero empieza en la oscuridad, con linternas y el sonido de la selva despertando. A medida que subes, la vegetación cambia — del bosque seco a la selva húmeda. Y entonces, cuando llegas a la cima, el sol empieza a salir sobre el Pacífico. El cielo se pinta de naranja, rosa y dorado. Ves las islas, la costa, los manglares. El mundo entero a tus pies. Es uno de esos momentos que justifican todo el esfuerzo. Y después, el descenso es una fiesta — risas, fotos y la satisfacción de haberlo logrado.",
    season: "Todo el año",
    priceFrom: 25,
    duration: "4-5 horas",
    difficulty: "Alto",
    groupSize: "4-12 personas",
    image: IMAGES.cerroSunrise,
    gallery: [IMAGES.cerroChame, IMAGES.cerroChameHike, IMAGES.cerroChameHiker, IMAGES.cerroSunset],
    includes: ["Guía certificado", "Linterna frontal", "Snacks energéticos", "Agua", "Fotos del grupo"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Desayuno post-hike", "Traslado al cerro ($10)"],
    itinerary: [
      { time: "4:30 AM", activity: "Salida desde Playa Caracol" },
      { time: "5:00 AM", activity: "Inicio del ascenso con linternas" },
      { time: "6:00 AM", activity: "Amanecer en la cima — fotos panorámicas" },
      { time: "6:30 AM", activity: "Descanso y snack en la cumbre" },
      { time: "7:00 AM", activity: "Descenso por ruta alternativa" },
      { time: "8:30 AM", activity: "De vuelta en Playa Caracol" },
      { time: "9:00 AM", activity: "Desayuno de campeones en Vento" },
    ],
    idealFor: ["Aventureros madrugadores", "Fotógrafos", "Grupos de amigos", "Quien quiere un reto físico con recompensa visual"],
    backAtBase: "Bajas del cerro como un héroe. El desayuno en Vento nunca supo tan bien. Después, la piscina, un masaje, y la siesta más merecida de tu vida. Mañana hay otra misión.",
  },
  {
    id: "isla-otoque",
    name: "Isla Otoque & Boná",
    tagline: "Islas vírgenes a 45 minutos",
    description: "Playas desiertas, snorkel en aguas cristalinas y almuerzo de pescadores. Las islas que el turismo masivo aún no ha descubierto.",
    longDescription: "Este es el circuito más exclusivo. Salimos en lancha desde Playa Caracol hacia las islas Otoque y Boná — dos joyas del Pacífico que parecen sacadas de una postal. Playas de arena blanca sin nadie más, aguas turquesas perfectas para snorkel, y una comunidad de pescadores que te recibe como familia. El almuerzo es ceviche fresco preparado por los locales mientras tus pies están en la arena. Es el tipo de día que recuerdas para siempre.",
    season: "Todo el año",
    priceFrom: 300,
    duration: "Día completo",
    difficulty: "Bajo",
    groupSize: "4-8 personas",
    image: IMAGES.islaOtoque,
    gallery: [IMAGES.islaOtoqueBoat, IMAGES.islaOtoqueCoast, IMAGES.islaBonaCoast, IMAGES.sunsetCruise],
    includes: ["Lancha privada ida y vuelta", "Capitán y guía", "Equipo de snorkel", "Almuerzo de pescadores", "Bebidas y snacks", "Seguro marítimo"],
    notIncludes: ["Alojamiento (se agrega en paquete)", "Propinas", "Compras en la isla"],
    itinerary: [
      { time: "7:00 AM", activity: "Desayuno en el hotel" },
      { time: "8:00 AM", activity: "Salida en lancha desde Caracol" },
      { time: "8:45 AM", activity: "Llegada a Isla Otoque — playa privada" },
      { time: "10:00 AM", activity: "Snorkel en arrecife" },
      { time: "11:30 AM", activity: "Navegación a Isla Boná" },
      { time: "12:30 PM", activity: "Almuerzo de pescadores en la playa" },
      { time: "2:00 PM", activity: "Tiempo libre — playa, snorkel, relax" },
      { time: "3:30 PM", activity: "Regreso a Playa Caracol" },
    ],
    idealFor: ["Parejas", "Grupos exclusivos", "Fotógrafos", "Quien busca una experiencia premium"],
    backAtBase: "Vuelves dorado del sol y salado del mar. La ducha nunca se sintió tan bien. Cena especial en Vento con mariscos frescos, y el sonido de las olas como banda sonora.",
  },
  {
    id: "custom",
    name: "Arma Tu Circuito",
    tagline: "Tu aventura, tus reglas",
    description: "¿Quieres combinar surf + cascadas + islas? ¿Un retiro corporativo? ¿Una luna de miel aventurera? Armamos el circuito perfecto para ti.",
    longDescription: "Cada persona es diferente, y cada viaje debería serlo también. Con nuestro circuito personalizado, tú eliges las actividades, los tiempos y el ritmo. ¿Quieres surf en la mañana y cascadas en la tarde? Hecho. ¿Un retiro corporativo de 3 días con team building en el cerro y cena de gala en Vento? Lo armamos. ¿Una luna de miel que combine aventura con spa y cenas románticas? Perfecto. Cuéntanos qué sueñas y nosotros lo hacemos realidad.",
    season: "Todo el año",
    priceFrom: 0,
    duration: "A medida",
    difficulty: "Bajo",
    groupSize: "2-30 personas",
    image: IMAGES.collage,
    gallery: [IMAGES.cerroChame, IMAGES.cascadaFilipinas, IMAGES.islaOtoque, IMAGES.radissonPool],
    includes: ["Diseño personalizado del itinerario", "Coordinación de todas las actividades", "Transporte incluido", "Guías especializados", "Soporte 24/7"],
    notIncludes: ["Varía según el circuito elegido"],
    itinerary: [
      { time: "Día 1", activity: "Llegada + actividad de bienvenida a elegir" },
      { time: "Día 2", activity: "Misión principal del circuito" },
      { time: "Día 3", activity: "Segunda misión + actividad de cierre" },
      { time: "Día 4+", activity: "Actividades adicionales según programa" },
    ],
    idealFor: ["Grupos corporativos", "Lunas de miel", "Familias grandes", "Eventos especiales", "Quien quiere algo único"],
    backAtBase: "Sea cual sea tu aventura, Playa Caracol siempre te recibe con los brazos abiertos. Piscina, spa, gastronomía y el mejor atardecer del Pacífico.",
  },
];

// ─── PAQUETES CON ESTADÍA ────────────────────────────────────

export interface Paquete {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  nights: number;
  days: number;
  tier: "escapada" | "explorador" | "inmersion";
  image: string;
  gallery: string[];
  pricing: { accommodation: string; pricePerPerson: number }[];
  includes: string[];
  notIncludes: string[];
  itinerary: { day: string; morning: string; afternoon: string; evening: string }[];
  activities: string[];
  idealFor: string[];
}

export const PAQUETES: Paquete[] = [
  {
    id: "escapada",
    name: "Escapada Fin de Semana",
    tagline: "2 noches, 1 aventura, recuerdos infinitos",
    description: "El paquete perfecto para desconectar de la ciudad. 2 noches en Playa Caracol con desayunos, 2 actividades Hero a elegir, y todo el relax que necesitas.",
    longDescription: "A veces solo necesitas 48 horas para resetear. La Escapada es nuestro paquete más popular porque es simple y poderoso: llegas el viernes, te instalas en tu habitación con vista al Pacífico, y el fin de semana se convierte en una aventura. Eliges 2 actividades Hero (surf, cascadas, cerro, islas, pesca) y nosotros nos encargamos del resto. Desayunos incluidos, acceso a piscina y beach club, y la tranquilidad de saber que todo está organizado.",
    nights: 2,
    days: 3,
    tier: "escapada",
    image: IMAGES.radissonPool,
    gallery: [IMAGES.radissonAerial, IMAGES.ventoClub, IMAGES.surfAction, IMAGES.cascadaFilipinas],
    pricing: [
      { accommodation: "Radisson Estándar", pricePerPerson: 350 },
      { accommodation: "Radisson Jr. Suite", pricePerPerson: 300 },
      { accommodation: "Apartamento Caracol", pricePerPerson: 230 },
    ],
    includes: ["2 noches de alojamiento", "2 desayunos en Vento Beach Club", "2 actividades Hero a elegir", "Acceso a piscina infinity", "Acceso a beach club", "Wi-Fi de alta velocidad", "Coordinación de actividades"],
    notIncludes: ["Traslados desde Ciudad de Panamá", "Almuerzos y cenas (disponibles en Vento)", "Actividades adicionales", "Spa y masajes (con descuento 15%)"],
    itinerary: [
      { day: "Viernes", morning: "—", afternoon: "Llegada e instalación", evening: "Cena en Vento Beach Club + atardecer" },
      { day: "Sábado", morning: "Desayuno + Actividad Hero #1", afternoon: "Piscina y relax", evening: "Cena libre + fogata en la playa" },
      { day: "Domingo", morning: "Desayuno + Actividad Hero #2", afternoon: "Check-out y regreso", evening: "—" },
    ],
    activities: ["Surf", "Cascadas", "Cerro Chame", "Pesca", "Jet Ski", "Kayak"],
    idealFor: ["Parejas", "Amigos", "Escapada express de la ciudad"],
  },
  {
    id: "explorador",
    name: "Explorador 3 Días",
    tagline: "3 noches para descubrir Chame de verdad",
    description: "Un día más hace toda la diferencia. 3 noches, 2-3 actividades, desayunos + 1 cena incluida. Tiempo para explorar, relajar y repetir.",
    longDescription: "Con un día más, todo cambia. El Explorador te da el tiempo para realmente conocer Chame: un día de aventura intensa (cascadas o cerro), un día de mar (surf o islas), y un día de relax total (piscina, spa, beach club). Con 3 noches tienes el ritmo perfecto: no corres, no te aburres, y cada día es diferente. Incluye una cena especial en Vento Beach Club para que pruebes lo mejor de la gastronomía local.",
    nights: 3,
    days: 4,
    tier: "explorador",
    image: IMAGES.cascadaFilipinas,
    gallery: [IMAGES.cerroChame, IMAGES.islaOtoque, IMAGES.radissonPool, IMAGES.spaMassage],
    pricing: [
      { accommodation: "Radisson Estándar", pricePerPerson: 550 },
      { accommodation: "Radisson Jr. Suite", pricePerPerson: 475 },
      { accommodation: "Apartamento Caracol", pricePerPerson: 350 },
    ],
    includes: ["3 noches de alojamiento", "3 desayunos en Vento Beach Club", "1 cena especial en Vento", "2-3 actividades Hero a elegir", "Acceso ilimitado a piscina", "Acceso a beach club", "1 sesión de yoga en la playa", "Wi-Fi de alta velocidad", "Late check-out (sujeto a disponibilidad)"],
    notIncludes: ["Traslados desde Ciudad de Panamá", "Almuerzos y cenas adicionales", "Actividades extra", "Spa (con descuento 20%)"],
    itinerary: [
      { day: "Día 1", morning: "—", afternoon: "Llegada + surf o relax en piscina", evening: "Cena de bienvenida en Vento" },
      { day: "Día 2", morning: "Actividad Hero #1 (cascadas o cerro)", afternoon: "Piscina y relax", evening: "Cena libre + atardecer" },
      { day: "Día 3", morning: "Yoga en la playa + Actividad Hero #2", afternoon: "Spa o playa libre", evening: "Última noche — fogata" },
      { day: "Día 4", morning: "Desayuno + check-out", afternoon: "Regreso", evening: "—" },
    ],
    activities: ["Surf", "Cascadas", "Cerro Chame", "Islas", "Pesca", "Valle de Antón", "Yoga"],
    idealFor: ["Parejas que quieren más", "Grupos de amigos", "Familias", "Primer viaje a Chame"],
  },
  {
    id: "inmersion",
    name: "Inmersión Completa",
    tagline: "4-7 noches para vivirlo todo",
    description: "El paquete definitivo. Vives el circuito completo: surf, cascadas, cerro, islas, pesca, spa, gastronomía. Sales transformado.",
    longDescription: "La Inmersión es para quienes entienden que un destino no se conoce en un fin de semana. Con 4 a 7 noches, recorres el circuito completo de Chame: subes el cerro al amanecer, bajas cascadas, navegas a islas vírgenes, surfeas olas perfectas, pescas tu cena, y entre aventura y aventura, el spa y la piscina del Radisson te recargan. Incluye pensión completa, todas las actividades, y la libertad de hacer cada día diferente. Es el viaje que recordarás siempre.",
    nights: 5,
    days: 6,
    tier: "inmersion",
    image: IMAGES.cerroSunrise,
    gallery: [IMAGES.cascadaFilipinas, IMAGES.islaOtoque, IMAGES.fishingBoat, IMAGES.yogaResort, IMAGES.radissonPool, IMAGES.ventoClub],
    pricing: [
      { accommodation: "Circuito Completo (5 noches)", pricePerPerson: 980 },
      { accommodation: "Kite Surf Mastery (5 noches)", pricePerPerson: 700 },
      { accommodation: "Surf Camp Pro (5 noches)", pricePerPerson: 660 },
      { accommodation: "Nómada Digital (7 noches)", pricePerPerson: 420 },
      { accommodation: "Familia Aventura (4 noches)", pricePerPerson: 550 },
      { accommodation: "Corporate Retreat (3 noches)", pricePerPerson: 550 },
    ],
    includes: ["4-7 noches de alojamiento", "Pensión completa (desayuno, almuerzo, cena)", "TODAS las actividades del circuito", "Transporte a todas las excursiones", "1 sesión de spa incluida", "Yoga diario en la playa", "Equipo completo para todas las actividades", "Guías especializados", "Fotos profesionales del viaje", "Concierge dedicado"],
    notIncludes: ["Vuelos internacionales", "Traslados aeropuerto (disponible por $80)", "Bebidas alcohólicas premium", "Actividades fuera del circuito"],
    itinerary: [
      { day: "Día 1", morning: "—", afternoon: "Llegada, instalación, tour de bienvenida", evening: "Cena de bienvenida en Vento" },
      { day: "Día 2", morning: "Hiking Cerro Chame al amanecer", afternoon: "Piscina y relax", evening: "Cena + video del día" },
      { day: "Día 3", morning: "Circuito de cascadas", afternoon: "Spa y masaje", evening: "Cena temática" },
      { day: "Día 4", morning: "Tour Islas Otoque & Boná", afternoon: "Snorkel y playa", evening: "Cena de mariscos frescos" },
      { day: "Día 5", morning: "Surf con instructores ANS", afternoon: "Pesca deportiva", evening: "Cena con tu captura" },
      { day: "Día 6", morning: "Yoga al amanecer + desayuno", afternoon: "Check-out", evening: "—" },
    ],
    activities: ["Surf", "Cascadas", "Cerro Chame", "Islas", "Pesca", "Kitesurf", "Yoga", "Spa", "Valle de Antón"],
    idealFor: ["Viajeros que quieren vivirlo todo", "Nómadas digitales", "Familias en vacaciones largas", "Retiros corporativos", "Lunas de miel aventureras"],
  },
];

// ─── TU BASE (COMFORT SECTIONS) ─────────────────────────────

export interface BaseSection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export const BASE_SECTIONS: BaseSection[] = [
  {
    id: "radisson",
    name: "Radisson Riviera",
    tagline: "Tu hogar frente al Pacífico",
    description: "Habitaciones con vista al mar, suites con balcón privado, piscina infinity que se funde con el horizonte. El Radisson Riviera es donde la aventura descansa.",
    image: IMAGES.radissonAerial,
    features: ["Habitaciones con vista al mar", "Suites con balcón privado", "Piscina infinity", "Gimnasio equipado", "Wi-Fi de alta velocidad", "Room service 24h"],
  },
  {
    id: "vento",
    name: "Vento Beach Club",
    tagline: "Gastronomía frente al mar",
    description: "Desayunos con vista al amanecer, almuerzos con los pies en la arena, cenas con el atardecer como telón de fondo. Cocina panameña e internacional de primer nivel.",
    image: IMAGES.ventoClub,
    features: ["Restaurante frente al mar", "Bar con cócteles artesanales", "Terraza con vista al Pacífico", "Menú panameño e internacional", "Noches temáticas", "Servicio en la piscina"],
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    tagline: "Recarga después de la aventura",
    description: "Masajes relajantes, tratamientos faciales, yoga al amanecer en la playa. El complemento perfecto para los días de aventura intensa.",
    image: IMAGES.spaMassage,
    features: ["Masajes relajantes y deportivos", "Tratamientos faciales", "Yoga diario en la playa", "Meditación guiada", "Sauna y jacuzzi", "Tratamientos con productos locales"],
  },
  {
    id: "beach-club",
    name: "Surf Shack & Beach Club",
    tagline: "Todo a pasos de tu habitación",
    description: "Alquiler de tablas, bicicletas, kayaks y todo el equipo que necesitas. El punto de encuentro de la comunidad surfer y aventurera de Caracol.",
    image: IMAGES.beachAerial,
    features: ["Alquiler de tablas de surf", "Bicicletas y mulitas", "Kayaks y paddleboards", "Clases de surf walk-in", "Tienda de souvenirs", "Punto de encuentro para tours"],
  },
];

// ─── ESTACIONALIDAD ──────────────────────────────────────────

export interface Season {
  name: string;
  months: string;
  highlights: string[];
  heroCircuits: string[];
  color: string;
}

export const SEASONS: Season[] = [
  {
    name: "Temporada Alta",
    months: "Diciembre - Abril",
    highlights: ["Surf & Kite óptimo", "Playa & Relax", "Pesca deportiva", "Clima seco perfecto"],
    heroCircuits: ["surf-chill", "pesca-deportiva", "isla-otoque"],
    color: "sunset",
  },
  {
    name: "Temporada Media",
    months: "Mayo - Junio, Noviembre",
    highlights: ["Cascadas espectaculares", "Hiking con vegetación", "Surf de olas grandes", "Menos turistas"],
    heroCircuits: ["cascadas-pozos", "cerro-chame-circuito", "valle-anton"],
    color: "jungle",
  },
  {
    name: "Temporada Baja",
    months: "Julio - Octubre",
    highlights: ["Ballenas jorobadas", "Rafting & Tubing", "Yoga & Spa indoor", "Precios especiales"],
    heroCircuits: ["ballenas", "cascadas-pozos", "custom"],
    color: "ocean",
  },
];

// ─── TESTIMONIOS ─────────────────────────────────────────────

export interface Testimonial {
  name: string;
  country: string;
  text: string;
  rating: number;
  circuito?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "María González", country: "Colombia", text: "Vinimos por un fin de semana y nos quedamos 5 días. Cada día era una aventura diferente y volver al hotel era como llegar a casa. El cerro Chame al amanecer fue lo mejor de todo.", rating: 5, circuito: "Inmersión" },
  { name: "James & Sarah", country: "USA", text: "The perfect combination of adventure and comfort. We hiked waterfalls in the morning and had cocktails by the infinity pool in the afternoon. Can't wait to come back.", rating: 5, circuito: "Explorador" },
  { name: "Carlos Müller", country: "Alemania", text: "Las islas Otoque y Boná son un secreto que el mundo aún no conoce. Playas desiertas, snorkel increíble, y el ceviche más fresco que he probado. Todo organizado perfectamente.", rating: 5, circuito: "Isla Otoque" },
  { name: "Ana Rodríguez", country: "Panamá", text: "Vivo en la ciudad y no sabía que a 90 minutos existía todo esto. Las cascadas, el cerro, las islas... y el Radisson es espectacular. Ya reservé para el próximo mes.", rating: 5, circuito: "Escapada" },
  { name: "Pierre & Camille", country: "Canadá", text: "Notre lune de miel parfaite. Surf, spa, îles vierges et la meilleure nourriture. Le circuit personnalisé était exactement ce dont nous avions besoin.", rating: 5, circuito: "Custom" },
];

// ─── STATS ───────────────────────────────────────────────────

export const STATS = [
  { value: "8", label: "Circuitos Temáticos" },
  { value: "90", label: "Minutos desde Panamá" },
  { value: "5", label: "Destinos Únicos" },
  { value: "365", label: "Días de Aventura" },
];
