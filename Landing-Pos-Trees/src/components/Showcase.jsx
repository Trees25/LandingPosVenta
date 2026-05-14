import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  Package,
  BarChart3,
  ReceiptText,
} from "lucide-react";

import imgPos from "../assets/imagen.webp";
import imgStock from "../assets/imagen2.webp";
import imgMetrics from "../assets/imagen3.webp";
import imgBilling from "../assets/imagen4.webp";

const tabs = [
  {
    id: "pos",
    icon: MonitorSmartphone,
    label: "Punto de Venta",
    badge: "Cajero",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    desc: "Interfaz rápida e intuitiva para registrar ventas. Escaneo de código de barras, búsqueda rápida de productos y cobro con múltiples medios de pago.",
    img: imgPos,
  },
  {
    id: "stock",
    icon: Package,
    label: "Control de Stock",
    badge: "Admin",
    badgeColor: "bg-sky-500/20 text-sky-300",
    desc: "Visualizá el inventario en tiempo real. Actualizá precios de forma masiva, gestioná proveedores y recibí alertas de stock crítico.",
    img: imgStock,
  },
  {
    id: "metrics",
    icon: BarChart3,
    label: "Dashboard",
    badge: "Admin",
    badgeColor: "bg-sky-500/20 text-sky-300",
    desc: "Gráficos detallados con el rendimiento de tu negocio. Productos más vendidos, ingresos por sucursal y comparativas mensuales.",
    img: imgMetrics,
  },
  {
    id: "billing",
    icon: ReceiptText,
    label: "Facturación AFIP",
    badge: "Cajero / Admin",
    badgeColor: "bg-purple-500/20 text-purple-300",
    desc: "Generá Facturas A, B, C o Notas de Crédito con conexión directa a ARCA (AFIP). Obtené el CAE y el ticket PDF al instante sin usar otras páginas.",
    img: imgBilling,
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="showcase"
      className="py-24 relative"
      style={{ background: "rgba(255,255,255,0.012)" }}
    >
      <div className="absolute inset-0 radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
            El sistema por dentro
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Todo el control en{" "}
            <span className="text-gradient">una sola pantalla</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Desde la venta en el mostrador hasta el reporte impositivo a fin de
            mes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map(({ id, icon: Icon, label, badge, badgeColor }, i) => (
            <button
              key={id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-sky-500 text-slate-900 shadow-lg shadow-sky-500/30"
                  : "glass-card text-slate-400 hover:text-white hover:border-sky-500/25"
              }`}
            >
              <Icon size={15} />
              {label}
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  active === i ? "bg-slate-900/25 text-slate-900" : badgeColor
                }`}
              >
                {badge}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-center text-slate-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed"
          >
            {tabs[active].desc}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-sky-500/6 blur-3xl rounded-3xl pointer-events-none" />
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
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "300px" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={tabs[active].img}
                  alt={tabs[active].label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-full block"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
