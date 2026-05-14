import { motion } from "framer-motion";
import {
  Receipt,
  CreditCard,
  Store,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Conexión Directa AFIP",
    desc: "Generá comprobantes válidos, notas de crédito y obtené tu CAE sin salir del sistema. Listo en milisegundos.",
  },
  {
    icon: CreditCard,
    title: "Ecosistema Mercado Pago",
    desc: "Cobrá con QR, links de pago o integrá Point. Las transacciones impactan directo en el cierre de tu caja.",
  },
  {
    icon: Store,
    title: "Multi-Sucursal",
    desc: "Administrá inventarios paralelos, transferí productos entre locales y analizá las ventas por sucursal.",
  },
  {
    icon: BarChart3,
    title: "Reportes Inteligentes",
    desc: "Conocé tu ticket promedio, productos más rentables y los horarios pico de tu comercio con gráficos detallados.",
  },
  {
    icon: ShieldCheck,
    title: "Auditoría y Roles",
    desc: "Cajeros con accesos limitados y administradores con control total. Cada movimiento queda registrado.",
  },
  {
    icon: Zap,
    title: "Carga Masiva de Precios",
    desc: "Ajustá rentabilidad por categorías o actualizá todos tus costos subiendo un simple archivo Excel.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
            Características
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Diseñado para que tu negocio
            <br />
            <span className="text-gradient">no pare nunca</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Olvidate de las planillas sueltas. Una plataforma integral que
            resuelve la caja, el stock y los impuestos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 card-hover cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-sky-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
