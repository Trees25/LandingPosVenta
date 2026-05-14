import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import screenshotPos from "../assets/imagen.webp";

const DEMO_URL = "https://pos-trees.netlify.app";
const WA_URL =
  "https://wa.me/5402644590545?text=%C2%A1Hola!%20Estuve%20viendo%20la%20web%20de%20TreesPOS%20y%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20para%20mi%20negocio.%20%C2%BFMe%20podr%C3%ADan%20pasar%20m%C3%A1s%20info%3F";
const WORDS = [
  "kioscos",
  "restaurantes",
  "minimarkets",
  "ferreterías",
  "comercios",
  "farmacias",
];

function SystemMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-sky-500/8 blur-3xl rounded-3xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="bg-[#0d1526] border-b border-white/5 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-[#1e293b] rounded h-5 flex items-center px-3">
            <span className="text-[10px] text-slate-500">
              pos-trees.netlify.app
            </span>
          </div>
        </div>
        <img
          src={screenshotPos}
          alt="Vista del Punto de Venta TreesPOS"
          className="w-full block"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card"
        >
          <Sparkles size={13} className="text-sky-400" />
          <span className="text-xs font-medium text-sky-300">
            Incluye integración con ARCA (AFIP) y Mercado Pago
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Gestioná ventas en{" "}
          <span
            className="inline-flex flex-col overflow-hidden"
            style={{ height: "1.15em", verticalAlign: "bottom" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="text-gradient"
              >
                {WORDS[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />a la velocidad de la luz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          Centralizá tu facturación, controlá el stock de múltiples sucursales y
          aceptá pagos al instante. Un software 100% en la nube para modernizar
          tu comercio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold text-sm transition-all duration-200 glow-btn hover:scale-105"
          >
            Comenzar 30 Días Gratis <ExternalLink size={15} />
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card hover:bg-white/5 text-white font-semibold text-sm transition-all duration-200 hover:border-sky-500/30"
          >
            Agendar una demostración <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full mt-8"
        >
          <SystemMockup />
        </motion.div>
      </div>
    </section>
  );
}
