import { motion } from "framer-motion";
import {
  Store,
  UtensilsCrossed,
  Wrench,
  ShoppingBag,
  Shirt,
  Coffee,
} from "lucide-react";

const industries = [
  {
    icon: Store,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    name: "Kioscos y Minimarkets",
    desc: "Ventas ágiles por código de barras, control de caja ciega y múltiples medios de pago.",
  },
  {
    icon: UtensilsCrossed,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    name: "Gastronomía",
    desc: "Gestión rápida de comandas en mostrador, adiciones y facturación al consumidor final.",
  },
  {
    icon: Wrench,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
    name: "Ferreterías",
    desc: "Manejo de miles de artículos, presupuestos, notas de crédito y actualización masiva.",
  },
  {
    icon: ShoppingBag,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    name: "Retail General",
    desc: "Sincronización de inventario entre depósitos y atención al cliente optimizada.",
  },
  {
    icon: Shirt,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    name: "Indumentaria",
    desc: "Gestión de variantes (talles y colores), devoluciones y fidelización de clientes.",
  },
  {
    icon: Coffee,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    name: "Cafeterías",
    desc: "Cobros express con MercadoPago y control estricto del cierre diario de caja.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
            Industrias
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Adaptado a <span className="text-gradient">tu comercio</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Herramientas robustas diseñadas específicamente para el ritmo rápido
            del comercio minorista y mayorista.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(({ icon: Icon, color, bg, name, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex gap-4 card-hover cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg}`}
              >
                <Icon size={20} className={color} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
