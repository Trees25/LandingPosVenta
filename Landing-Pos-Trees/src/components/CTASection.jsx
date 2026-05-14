import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";

const DEMO_URL = "https://pos-trees.netlify.app";
const WA_URL =
  "https://wa.me/5402646620954?text=%C2%A1Hola!%20Estuve%20viendo%20la%20web%20de%20TreesPOS%20y%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20para%20mi%20negocio.%20%C2%BFMe%20podr%C3%ADan%20pasar%20m%C3%A1s%20info%3F";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56,189,248,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
            <span className="text-xs font-semibold text-sky-400">
              Automatizá tus ventas hoy
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
            ¿Querés potenciar <span className="text-gradient">tu negocio?</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Creá tu cuenta, configurá tu local y empezá a probar el sistema
            completamente gratis durante 30 días.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold text-base transition-all duration-200 glow-btn hover:scale-105"
            >
              Comenzar Prueba Gratis <ExternalLink size={17} />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card hover:bg-white/5 text-white font-semibold text-base transition-all duration-200 hover:border-sky-500/30"
            >
              <MessageCircle size={17} className="text-green-400" />
              Contactar a un Asesor
            </a>
          </div>

          <p className="mt-8 text-slate-600 text-sm">
            Sin contratos obligatorios · Cancelás cuando querés · Soporte
            técnico incluido
          </p>
        </motion.div>
      </div>
    </section>
  );
}
