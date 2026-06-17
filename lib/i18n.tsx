"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "./types";

const dict = {
  en: {
    nav: { home: "Home", services: "Services", gallery: "Gallery", why: "Why Us", reviews: "Reviews", faq: "FAQ", contact: "Contact", book: "Book Now" },
    hero: {
      badge: "4.9 · Rated by 500+ clients",
      title1: "Premium Mobile Detailing",
      title2: "in San Diego",
      sub: "Professional detailing delivered directly to your home or workplace. Showroom results, zero hassle — we bring everything.",
      primary: "Book Your Detail",
      secondary: "View Services",
      s1: "Average rating",
      s2: "Vehicles detailed",
      s3: "Mobile service",
    },
    services: {
      kicker: "Our Services",
      title: "Detailing packages built for every finish",
      sub: "Transparent pricing. Premium products. Results that speak for themselves.",
      from: "From",
      book: "Book",
      popular: "Most Popular",
      addTitle: "Add-on services",
      addSub: "Customize any package with these extras during booking.",
    },
    gallery: {
      kicker: "Before & After",
      title: "The Rojos difference, panel by panel",
      sub: "Drag the slider to reveal the transformation.",
      all: "All",
      interior: "Interior",
      exterior: "Exterior",
      full: "Full Detail",
      ceramic: "Ceramic",
      drag: "Drag to compare",
      before: "Before",
      after: "After",
    },
    why: {
      kicker: "Why Choose Us",
      title: "Detailing that respects your time and your car",
      sub: "Six reasons San Diego trusts Rojos with their vehicles.",
    },
    process: {
      kicker: "How It Works",
      title: "From booking to brilliance in six steps",
      sub: "A seamless experience, every single time.",
    },
    reviews: {
      kicker: "Reviews",
      title: "Loved by drivers across San Diego",
      sub: "Real results, real clients, real reviews.",
      avg: "Average Rating",
      total: "Total Customers",
      repeat: "Repeat Customers",
    },
    faq: { kicker: "FAQ", title: "Questions, answered", sub: "Everything you need to know before you book." },
    contact: {
      kicker: "Contact",
      title: "Ready to book or have a question?",
      sub: "Reach out and we will get right back to you.",
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      vehicle: "Vehicle (year / make / model)",
      message: "How can we help?",
      send: "Send Message",
      call: "Call Now",
      text: "Text Us",
      emailb: "Email",
      located: "Serving",
      hours: "Hours",
      hoursVal: "Mon–Sun · 7am – 7pm",
    },
    footer: {
      tagline: "Premium mobile detailing delivered across San Diego County.",
      quick: "Quick links",
      contact: "Get in touch",
      rights: "All rights reserved.",
    },
    book: {
      title: "Book Your Detail",
      sub: "Six quick steps to a spotless ride.",
      s1: "Service",
      s2: "Vehicle",
      s3: "Date",
      s4: "Time",
      s5: "Extras",
      s6: "Review",
      selService: "Select your service",
      selServiceSub: "Choose the package that fits your needs.",
      selVehicle: "What are we detailing?",
      selVehicleSub: "Vehicle size affects final pricing.",
      selDate: "Pick a date",
      selDateSub: "Available daily, 7am – 7pm.",
      selTime: "Choose a time slot",
      selTimeSub: "All times are approximate arrival windows.",
      selExtras: "Add some extras",
      selExtrasSub: "Optional — enhance your detail. Skip if not needed.",
      review: "Review your booking",
      reviewSub: "Confirm the details before payment.",
      next: "Continue",
      back: "Back",
      toPayment: "Continue to Payment",
      included: "Included",
      summary: "Order summary",
      subtotal: "Subtotal",
      total: "Total",
      deposit: "Deposit due today",
      balance: "Balance on service day",
      addons: "Add-ons",
      when: "When",
    },
    pay: {
      title: "Secure Checkout",
      sub: "A 50% deposit confirms your appointment.",
      order: "Order summary",
      deposit: "Deposit due today",
      depositNote: "50% deposit secures your booking",
      balance: "Balance on service day",
      method: "Payment method",
      card: "Credit Card",
      name: "Name on card",
      number: "Card number",
      exp: "MM / YY",
      cvc: "CVC",
      pay: "Pay",
      securedBy: "Secured by Stripe · 256-bit encryption",
      success: "Payment confirmed!",
      successSub: "Your appointment is booked. A receipt is on its way.",
      receipt: "Receipt",
      emailed: "A confirmation has been emailed and texted to you.",
      backHome: "Back to Home",
      paidToday: "Paid today",
      remaining: "Remaining balance",
    },
    mobile: { title: "Responsive Mobile Views", sub: "The full experience, optimized for the phone." },
    sys: { title: "Design System", sub: "Tokens, type, and components powering the Rojos platform." },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", gallery: "Galería", why: "Por Qué", reviews: "Reseñas", faq: "Preguntas", contact: "Contacto", book: "Reservar" },
    hero: {
      badge: "4.9 · Calificado por 500+ clientes",
      title1: "Detallado Móvil Premium",
      title2: "en San Diego",
      sub: "Detallado profesional entregado directamente en tu casa o trabajo. Resultados de showroom, sin complicaciones — llevamos todo.",
      primary: "Reserva tu Detallado",
      secondary: "Ver Servicios",
      s1: "Calificación promedio",
      s2: "Vehículos detallados",
      s3: "Servicio móvil",
    },
    services: {
      kicker: "Nuestros Servicios",
      title: "Paquetes de detallado para cada acabado",
      sub: "Precios transparentes. Productos premium. Resultados que hablan por sí solos.",
      from: "Desde",
      book: "Reservar",
      popular: "Más Popular",
      addTitle: "Servicios adicionales",
      addSub: "Personaliza cualquier paquete con estos extras al reservar.",
    },
    gallery: {
      kicker: "Antes y Después",
      title: "La diferencia Rojos, panel por panel",
      sub: "Desliza para revelar la transformación.",
      all: "Todo",
      interior: "Interior",
      exterior: "Exterior",
      full: "Completo",
      ceramic: "Cerámico",
      drag: "Desliza para comparar",
      before: "Antes",
      after: "Después",
    },
    why: {
      kicker: "Por Qué Elegirnos",
      title: "Detallado que respeta tu tiempo y tu auto",
      sub: "Seis razones por las que San Diego confía en Rojos.",
    },
    process: {
      kicker: "Cómo Funciona",
      title: "De la reserva al brillo en seis pasos",
      sub: "Una experiencia impecable, siempre.",
    },
    reviews: {
      kicker: "Reseñas",
      title: "Amado por conductores en todo San Diego",
      sub: "Resultados reales, clientes reales, reseñas reales.",
      avg: "Calificación Promedio",
      total: "Clientes Totales",
      repeat: "Clientes Recurrentes",
    },
    faq: { kicker: "Preguntas", title: "Preguntas, respondidas", sub: "Todo lo que necesitas saber antes de reservar." },
    contact: {
      kicker: "Contacto",
      title: "¿Listo para reservar o tienes una pregunta?",
      sub: "Escríbenos y te responderemos de inmediato.",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Número de teléfono",
      vehicle: "Vehículo (año / marca / modelo)",
      message: "¿Cómo podemos ayudar?",
      send: "Enviar Mensaje",
      call: "Llamar",
      text: "Mensaje",
      emailb: "Correo",
      located: "Servimos",
      hours: "Horario",
      hoursVal: "Lun–Dom · 7am – 7pm",
    },
    footer: {
      tagline: "Detallado móvil premium en todo el condado de San Diego.",
      quick: "Enlaces",
      contact: "Contáctanos",
      rights: "Todos los derechos reservados.",
    },
    book: {
      title: "Reserva tu Detallado",
      sub: "Seis pasos rápidos hacia un auto impecable.",
      s1: "Servicio",
      s2: "Vehículo",
      s3: "Fecha",
      s4: "Hora",
      s5: "Extras",
      s6: "Resumen",
      selService: "Selecciona tu servicio",
      selServiceSub: "Elige el paquete que se ajusta a tus necesidades.",
      selVehicle: "¿Qué vamos a detallar?",
      selVehicleSub: "El tamaño del vehículo afecta el precio final.",
      selDate: "Elige una fecha",
      selDateSub: "Disponible diario, 7am – 7pm.",
      selTime: "Elige un horario",
      selTimeSub: "Los horarios son ventanas aproximadas de llegada.",
      selExtras: "Agrega extras",
      selExtrasSub: "Opcional — mejora tu detallado. Omite si no los necesitas.",
      review: "Revisa tu reserva",
      reviewSub: "Confirma los detalles antes de pagar.",
      next: "Continuar",
      back: "Atrás",
      toPayment: "Continuar al Pago",
      included: "Incluido",
      summary: "Resumen del pedido",
      subtotal: "Subtotal",
      total: "Total",
      deposit: "Depósito hoy",
      balance: "Saldo el día del servicio",
      addons: "Adicionales",
      when: "Cuándo",
    },
    pay: {
      title: "Pago Seguro",
      sub: "Un depósito del 50% confirma tu cita.",
      order: "Resumen del pedido",
      deposit: "Depósito hoy",
      depositNote: "El depósito del 50% asegura tu reserva",
      balance: "Saldo el día del servicio",
      method: "Método de pago",
      card: "Tarjeta de Crédito",
      name: "Nombre en la tarjeta",
      number: "Número de tarjeta",
      exp: "MM / AA",
      cvc: "CVC",
      pay: "Pagar",
      securedBy: "Protegido por Stripe · cifrado de 256 bits",
      success: "¡Pago confirmado!",
      successSub: "Tu cita está reservada. El recibo va en camino.",
      receipt: "Recibo",
      emailed: "Se ha enviado una confirmación por correo y mensaje.",
      backHome: "Volver al Inicio",
      paidToday: "Pagado hoy",
      remaining: "Saldo restante",
    },
    mobile: { title: "Vistas Móviles Responsivas", sub: "La experiencia completa, optimizada para el teléfono." },
    sys: { title: "Sistema de Diseño", sub: "Tokens, tipografía y componentes de la plataforma Rojos." },
  },
};

export type Dict = typeof dict.en;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "rojos-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // One-time hydration of a persisted preference that isn't available
    // during SSR — intentionally not a "sync external state" subscription.
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
