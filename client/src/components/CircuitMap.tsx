/* Circuito Chame — Interactive Circuit Map (Leaflet + OpenStreetMap) */
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom sunset-orange marker
const sunsetIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Destination {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  category: string;
}

const CIRCUIT_DESTINATIONS: Destination[] = [
  {
    id: "playa-caracol",
    name: "Playa Caracol (Tu Base)",
    lat: 8.5775,
    lng: -79.7893,
    description: "Tu hogar durante el circuito. Radisson Riviera, Vento Beach Club y playa frente al mar.",
    category: "Base",
  },
  {
    id: "cascadas-filipinas",
    name: "Cascadas de Filipinas",
    lat: 8.6685,
    lng: -80.0387,
    description: "7 cascadas naturales en la selva. Rappel, caminata y pozas cristalinas.",
    category: "Aventura",
  },
  {
    id: "cerro-chame",
    name: "Cerro Chame",
    lat: 8.5963,
    lng: -79.8241,
    description: "Hiking a 560m. Amanecer épico con vista 360° del Pacífico y la selva.",
    category: "Aventura",
  },
  {
    id: "punta-chame",
    name: "Punta Chame",
    lat: 8.6300,
    lng: -79.7100,
    description: "Kitesurf, paddleboard y atardeceres espectaculares. Vientos Nov-Mar.",
    category: "Surf & Chill",
  },
  {
    id: "islas-otoque",
    name: "Islas Otoque y Boná",
    lat: 8.6047,
    lng: -79.6053,
    description: "Islas vírgenes a 30 min en bote. Snorkel, pesca y playas desiertas.",
    category: "Islas",
  },
  {
    id: "isla-taborcillo",
    name: "Isla Taborcillo",
    lat: 8.6722,
    lng: -79.7442,
    description: "Isla privada con infraestructura. Day pass y recorrido de manglares.",
    category: "Islas",
  },
  {
    id: "valle-anton",
    name: "El Valle de Antón",
    lat: 8.6008,
    lng: -80.1303,
    description: "Pueblo en un cráter volcánico. Aguas termales, cascadas y biodiversidad.",
    category: "Eco",
  },
  {
    id: "ans-surfside",
    name: "ANS SurfSide",
    lat: 8.5780,
    lng: -79.7890,
    description: "Clases de surf con instructores certificados ISA. Playa perfecta para aprender.",
    category: "Surf & Chill",
  },
];

const MAP_CENTER: [number, number] = [8.60, -79.80];
const MAP_ZOOM = 11;

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 14, { duration: 1 });
  }, [target, map]);
  return null;
}

export default function CircuitMap() {
  const [active, setActive] = useState<string | null>(null);
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);

  const handleClick = (dest: Destination) => {
    setActive(dest.id);
    setFlyTarget([dest.lat, dest.lng]);
  };

  const categories = [...new Set(CIRCUIT_DESTINATIONS.map((d) => d.category))];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sunset text-sm font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)" }}>
            El Circuito
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-jungle-dark mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mapa de Aventuras
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Todos los destinos del circuito a menos de 2 horas de tu base en Playa Caracol. Haz clic para explorar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Destination list by category */}
          <div className="space-y-4 order-2 lg:order-1 max-h-[500px] overflow-y-auto pr-2">
            {categories.map((cat) => (
              <div key={cat}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sunset mb-2">{cat}</h4>
                <div className="space-y-1.5">
                  {CIRCUIT_DESTINATIONS.filter((d) => d.category === cat).map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => handleClick(dest)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                        active === dest.id
                          ? "bg-jungle-dark text-white border-jungle-dark shadow-lg"
                          : "bg-sand border-sand hover:border-sunset hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-3.5 h-3.5 shrink-0 ${active === dest.id ? "text-sunset" : "text-jungle-dark"}`} />
                        <div className="min-w-0">
                          <p className={`font-semibold text-xs ${active === dest.id ? "text-sunset" : "text-jungle-dark"}`}>
                            {dest.name}
                          </p>
                          <p className={`text-[10px] mt-0.5 truncate ${active === dest.id ? "text-white/70" : "text-muted-foreground"}`}>
                            {dest.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 order-1 lg:order-2 rounded-xl overflow-hidden border border-sand shadow-sm h-[400px] lg:h-[500px]">
            <MapContainer
              center={MAP_CENTER}
              zoom={MAP_ZOOM}
              scrollWheelZoom={false}
              className="w-full h-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyTo target={flyTarget} />
              {CIRCUIT_DESTINATIONS.map((dest) => (
                <Marker
                  key={dest.id}
                  position={[dest.lat, dest.lng]}
                  icon={sunsetIcon}
                  eventHandlers={{ click: () => handleClick(dest) }}
                >
                  <Popup>
                    <div className="min-w-[180px]">
                      <h3 className="font-bold text-sm">{dest.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">{dest.description}</p>
                      <p className="text-[10px] text-orange-600 font-semibold mt-1">{dest.category}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
