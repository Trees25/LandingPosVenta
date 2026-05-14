import { motion } from "framer-motion";
import { Building2, PackagePlus, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "Configurás tu negocio",
    desc: "Registrás tu empresa, creás tus sucursales e invitás a tu equipo asignando roles de Cajero o Administrador.",
  },
  {
    icon: PackagePlus,
    step: "02",
    title: "Cargás tu catálogo",
    desc: "Ingresá productos manualmente, usando un lector de códigos de barra o importando tu planilla de Excel en segundos.",
  },
  {
    icon: ShoppingCart,
    step: "03",
    title: "Empezás a vender",
    desc: "Abrís la caja y facturás. El sistema descuenta stock, envía los datos a AFIP y consolida el pago automáticamente.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 relative"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      <div className="absolute inset-0 radial-glow opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
            Cómo funciona
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Operativo en <span className="text-gradient">minutos</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            Configuración súper simple diseñada por expertos, para que te
            enfoques únicamente en vender.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.25rem)] right-[calc(16.666%+1.25rem)] h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0" />

          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center glass-card rounded-2xl p-8 relative"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center">
                  <Icon size={26} className="text-sky-400" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sky-500 text-slate-900 text-[10px] font-black flex items-center justify-center">
                  {step}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
