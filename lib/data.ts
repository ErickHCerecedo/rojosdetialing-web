import type {
  Appointment,
  Customer,
  Extra,
  Faq,
  GalleryItem,
  Metric,
  ProcessStep,
  Review,
  ReviewQueueItem,
  Service,
  VehicleType,
  WhyItem,
} from "./types";

export const DEPOSIT_PCT = 50;

export const SERVICES: Service[] = [
  {
    id: "express",
    price: 79,
    durationMin: 45,
    popular: false,
    icon: "💧",
    name: { en: "Express Exterior", es: "Exterior Express" },
    desc: {
      en: "Hand wash, wheel & tire detail, streak-free glass and a quick spray sealant.",
      es: "Lavado a mano, detallado de rines y llantas, vidrios sin marcas y sellador rápido.",
    },
  },
  {
    id: "interior",
    price: 129,
    durationMin: 90,
    popular: false,
    icon: "🪑",
    name: { en: "Interior Refresh", es: "Renovación Interior" },
    desc: {
      en: "Full vacuum, steam clean, shampoo carpets & seats, UV protectant on all surfaces.",
      es: "Aspirado completo, limpieza a vapor, shampoo en alfombras y asientos, protector UV.",
    },
  },
  {
    id: "full",
    price: 229,
    durationMin: 180,
    popular: true,
    icon: "✨",
    name: { en: "Signature Full Detail", es: "Detallado Completo" },
    desc: {
      en: "Complete interior + exterior restoration. Our most-booked package.",
      es: "Restauración total interior + exterior. Nuestro paquete más reservado.",
    },
  },
  {
    id: "paint",
    price: 349,
    durationMin: 240,
    popular: false,
    icon: "🛡️",
    name: { en: "Paint Correction", es: "Corrección de Pintura" },
    desc: {
      en: "Multi-stage machine polish removes swirls and restores mirror-deep gloss.",
      es: "Pulido de varias etapas que elimina remolinos y restaura profundidad de espejo.",
    },
  },
  {
    id: "ceramic",
    price: 699,
    durationMin: 360,
    popular: false,
    icon: "💎",
    name: { en: "Ceramic Coating", es: "Recubrimiento Cerámico" },
    desc: {
      en: "Pro-grade ceramic protection — years of gloss and a hydrophobic shield.",
      es: "Protección cerámica profesional — años de brillo y escudo hidrofóbico.",
    },
  },
];

export const EXTRAS: Extra[] = [
  { id: "engine", price: 45, name: { en: "Engine Bay Wash", es: "Lavado de Motor" } },
  { id: "headlight", price: 60, name: { en: "Headlight Restoration", es: "Pulido de Focos" } },
  { id: "pet", price: 40, name: { en: "Pet Hair Removal", es: "Remoción de Pelo de Mascota" } },
  { id: "wax", price: 55, name: { en: "Wax & Sealant", es: "Cera y Sellador" } },
  { id: "odor", price: 50, name: { en: "Odor / Ozone Treatment", es: "Tratamiento de Olores / Ozono" } },
  { id: "clay", price: 65, name: { en: "Clay Bar Treatment", es: "Tratamiento con Barra de Arcilla" } },
];

export const VEHICLES: VehicleType[] = [
  { id: "sedan", add: 0, icon: "🚗", name: { en: "Sedan / Coupe", es: "Sedán / Coupé" } },
  { id: "suv", add: 40, icon: "🚙", name: { en: "SUV / Truck", es: "SUV / Camioneta" } },
  { id: "boat", add: 120, icon: "🛥️", name: { en: "Boat", es: "Bote" } },
  { id: "rv", add: 200, icon: "🚌", name: { en: "RV / Motorhome", es: "Casa Rodante" } },
];

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    vehicle: "BMW M3 Competition",
    stars: 5,
    text: {
      en: "Showroom finish right in my driveway. These guys are obsessive about every single panel.",
      es: "Acabado de showroom en mi propia entrada. Son obsesivos con cada detalle.",
    },
  },
  {
    name: "Sarah L.",
    vehicle: "Tesla Model Y",
    stars: 5,
    text: {
      en: "Booked online in two minutes, they showed up on time and my interior looks brand new.",
      es: "Reservé en línea en dos minutos, llegaron puntuales y mi interior quedó como nuevo.",
    },
  },
  {
    name: "David R.",
    vehicle: "Ford F-250",
    stars: 5,
    text: {
      en: "The paint correction took years off my truck. Worth every single penny.",
      es: "La corrección de pintura le quitó años a mi troca. Vale cada centavo.",
    },
  },
  {
    name: "Jenny K.",
    vehicle: "Porsche Cayenne",
    stars: 5,
    text: {
      en: "The ceramic coating is unreal — water just rolls right off. Highly recommend.",
      es: "El recubrimiento cerámico es increíble — el agua simplemente resbala. Muy recomendado.",
    },
  },
];

export const WHY: WhyItem[] = [
  {
    icon: "🚐",
    title: { en: "Fully Mobile Service", es: "Servicio 100% Móvil" },
    desc: {
      en: "We come to your home or office — anywhere in San Diego County.",
      es: "Vamos a tu casa u oficina — en todo el condado de San Diego.",
    },
  },
  {
    icon: "🧴",
    title: { en: "Premium Products", es: "Productos Premium" },
    desc: {
      en: "Only pro-grade, pH-balanced products that are safe for every finish.",
      es: "Solo productos profesionales con pH balanceado, seguros para todo acabado.",
    },
  },
  {
    icon: "⚙️",
    title: { en: "Professional Equipment", es: "Equipo Profesional" },
    desc: {
      en: "Self-contained water and power — a fully independent setup.",
      es: "Agua y energía propias — un equipo totalmente independiente.",
    },
  },
  {
    icon: "✅",
    title: { en: "Satisfaction Guaranteed", es: "Satisfacción Garantizada" },
    desc: {
      en: "Not happy? We make it right before we leave. Period.",
      es: "¿No estás feliz? Lo corregimos antes de irnos. Punto.",
    },
  },
  {
    icon: "📅",
    title: { en: "Online Booking", es: "Reservación en Línea" },
    desc: {
      en: "Reserve your slot in minutes, 24/7, from any device.",
      es: "Aparta tu cita en minutos, 24/7, desde cualquier dispositivo.",
    },
  },
  {
    icon: "🔒",
    title: { en: "Secure Payments", es: "Pagos Seguros" },
    desc: {
      en: "Encrypted checkout with card, Apple Pay and Google Pay.",
      es: "Pago encriptado con tarjeta, Apple Pay y Google Pay.",
    },
  },
];

export const PROCESS: ProcessStep[] = [
  {
    title: { en: "Select Service", es: "Elige Servicio" },
    desc: {
      en: "Pick the package that fits your vehicle and goals.",
      es: "Selecciona el paquete ideal para tu vehículo.",
    },
  },
  {
    title: { en: "Choose Date & Time", es: "Elige Fecha y Hora" },
    desc: {
      en: "Find a slot that works for your schedule.",
      es: "Encuentra el horario que mejor te acomode.",
    },
  },
  {
    title: { en: "Pay Deposit", es: "Paga el Depósito" },
    desc: {
      en: "Secure your booking with a simple 50% deposit.",
      es: "Asegura tu cita con un sencillo depósito del 50%.",
    },
  },
  {
    title: { en: "Get Confirmation", es: "Recibe Confirmación" },
    desc: {
      en: "Instant confirmation by text and email.",
      es: "Confirmación instantánea por mensaje y correo.",
    },
  },
  {
    title: { en: "Vehicle Detailed", es: "Vehículo Detallado" },
    desc: {
      en: "We arrive on time and transform your ride.",
      es: "Llegamos puntuales y transformamos tu auto.",
    },
  },
  {
    title: { en: "Satisfaction Survey", es: "Encuesta de Satisfacción" },
    desc: {
      en: "Tell us how we did — we read every response.",
      es: "Cuéntanos cómo lo hicimos — leemos cada respuesta.",
    },
  },
];

export const FAQS: Faq[] = [
  {
    q: { en: "Do you really come to me?", es: "¿De verdad van hasta donde estoy?" },
    a: {
      en: "Yes — we are 100% mobile across San Diego County. We bring our own water and power, so all we need is a parking spot.",
      es: "Sí — somos 100% móviles en todo el condado de San Diego. Llevamos nuestra propia agua y energía; solo necesitamos un lugar para estacionarnos.",
    },
  },
  {
    q: { en: "How long does a detail take?", es: "¿Cuánto tarda un detallado?" },
    a: {
      en: "Anywhere from 45 minutes for an express exterior to 6 hours for a full ceramic coating, depending on the package and vehicle size.",
      es: "Desde 45 minutos para un exterior express hasta 6 horas para un recubrimiento cerámico completo, según el paquete y el tamaño del vehículo.",
    },
  },
  {
    q: { en: "What areas do you serve?", es: "¿Qué áreas cubren?" },
    a: {
      en: "All of San Diego County. A small travel fee may apply beyond 25 miles from downtown.",
      es: "Todo el condado de San Diego. Puede aplicar una pequeña tarifa de viaje a más de 25 millas del centro.",
    },
  },
  {
    q: { en: "Do I need to provide anything?", es: "¿Necesito proporcionar algo?" },
    a: {
      en: "Nothing at all. Our vans are fully self-contained with water, power and every product we need.",
      es: "Nada. Nuestras vans son totalmente autónomas con agua, energía y todos los productos necesarios.",
    },
  },
  {
    q: { en: "What is your cancellation policy?", es: "¿Cuál es su política de cancelación?" },
    a: {
      en: "Free reschedule up to 24 hours before your appointment. Within 24 hours the deposit becomes non-refundable.",
      es: "Reprogramación gratis hasta 24 horas antes de tu cita. Dentro de las 24 horas el depósito no es reembolsable.",
    },
  },
  {
    q: { en: "Is the deposit refundable?", es: "¿El depósito es reembolsable?" },
    a: {
      en: "The 50% deposit secures your slot and is applied directly to your final total on the day of service.",
      es: "El depósito del 50% asegura tu cita y se aplica directamente a tu total final el día del servicio.",
    },
  },
];

export const GALLERY: GalleryItem[] = [
  { category: "exterior", label: { en: "Alpine White M4 — Exterior", es: "M4 Blanco Alpino — Exterior" } },
  { category: "interior", label: { en: "Black Leather Interior", es: "Interior de Piel Negra" } },
  { category: "full", label: { en: "Tesla Model S — Full Detail", es: "Tesla Model S — Completo" } },
  { category: "ceramic", label: { en: "Ceramic Gloss — Porsche 911", es: "Brillo Cerámico — Porsche 911" } },
  { category: "exterior", label: { en: "Wheel & Caliper Detail", es: "Detalle de Rin y Caliper" } },
  { category: "interior", label: { en: "Dashboard Restoration", es: "Restauración de Tablero" } },
  { category: "full", label: { en: "Ford Raptor — Full Detail", es: "Ford Raptor — Completo" } },
  { category: "ceramic", label: { en: "Hydrophobic Coating", es: "Recubrimiento Hidrofóbico" } },
];

// ---------------- Admin seed data ----------------

export const ADMIN_METRICS: Metric[] = [
  { label: "Revenue Today", value: "$1,284", delta: "+12%" },
  { label: "Revenue This Month", value: "$28,940", delta: "+18%" },
  { label: "Upcoming Appointments", value: "14", delta: "+3" },
  { label: "Completed Services", value: "486", delta: "+22" },
  { label: "Customer Satisfaction", value: "96%", delta: "+2%" },
  { label: "Average Rating", value: "4.9", delta: "★★★★★" },
];

export const REVENUE_BARS: { day: string; pct: number }[] = [
  { day: "Mon", pct: 62 },
  { day: "Tue", pct: 48 },
  { day: "Wed", pct: 75 },
  { day: "Thu", pct: 90 },
  { day: "Fri", pct: 82 },
  { day: "Sat", pct: 100 },
  { day: "Sun", pct: 55 },
];

export const APPOINTMENTS: Appointment[] = [
  { time: "8:00 AM", customer: "Marcus T.", vehicle: "BMW M3 Competition", service: "Signature Full Detail", status: "In Progress", amount: "$229", initial: "M" },
  { time: "10:30 AM", customer: "Sarah L.", vehicle: "Tesla Model Y", service: "Interior Refresh", status: "Confirmed", amount: "$129", initial: "S" },
  { time: "1:00 PM", customer: "David R.", vehicle: "Ford F-250", service: "Paint Correction", status: "Confirmed", amount: "$389", initial: "D" },
  { time: "3:30 PM", customer: "Jenny K.", vehicle: "Porsche Cayenne", service: "Ceramic Coating", status: "Pending", amount: "$739", initial: "J" },
  { time: "5:00 PM", customer: "Alex P.", vehicle: "Audi RS5", service: "Express Exterior", status: "Confirmed", amount: "$79", initial: "A" },
];

export const CUSTOMERS: Customer[] = [
  { name: "Marcus Thompson", email: "marcus.t@email.com", visits: "6 visits", spent: "$1,420", initial: "M" },
  { name: "Sarah Lopez", email: "sarah.l@email.com", visits: "4 visits", spent: "$840", initial: "S" },
  { name: "David Ramirez", email: "david.r@email.com", visits: "9 visits", spent: "$2,910", initial: "D" },
  { name: "Jenny Kim", email: "jenny.k@email.com", visits: "2 visits", spent: "$1,468", initial: "J" },
  { name: "Alex Powell", email: "alex.p@email.com", visits: "3 visits", spent: "$237", initial: "A" },
];

export const REVIEW_QUEUE: ReviewQueueItem[] = [
  { name: "Marcus T.", vehicle: "BMW M3", stars: "★★★★★", text: "Showroom finish right in my driveway. Obsessive about every panel.", status: "Approved", initial: "M" },
  { name: "Sarah L.", vehicle: "Tesla Model Y", stars: "★★★★★", text: "Booked online in two minutes, showed up on time, flawless work.", status: "Pending", initial: "S" },
  { name: "Tom B.", vehicle: "Jeep Wrangler", stars: "★★★★☆", text: "Great job overall, arrival was a few minutes late but worth it.", status: "Pending", initial: "T" },
];

export const SURVEY_BARS: { label: string; pct: number }[] = [
  { label: "Work Quality", pct: 98 },
  { label: "Punctuality", pct: 94 },
  { label: "Professionalism", pct: 97 },
  { label: "Recommend (NPS)", pct: 92 },
];

export const NPS_SCORE = 72;
