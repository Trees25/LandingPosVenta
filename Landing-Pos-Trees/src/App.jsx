import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Receipt,
  Store,
  CreditCard,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function App() {
  // Variantes de animación para Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 selection:bg-emerald-500/30 font-sans">
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold tracking-tight text-white">
              Trees<span className="text-emerald-500">POS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a
              href="#caracteristicas"
              className="hover:text-emerald-400 transition-colors"
            >
              Características
            </a>
            <a
              href="#beneficios"
              className="hover:text-emerald-400 transition-colors"
            >
              Beneficios
            </a>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Ingresar al Sistema
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Elemento decorativo de fondo (Glow) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">
                Software ERP & POS de próxima generación
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              Gestiona tu negocio a la <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                velocidad de la luz.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Facturación ARCA (AFIP) automatizada, control de inventario
              multi-sucursal y pagos con Mercado Pago integrados en una sola
              plataforma en la nube.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                Comenzar 30 Días Gratis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold text-white border border-white/10 hover:bg-white/5 transition-colors">
                Agendar una Demo
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No requiere tarjeta de crédito para iniciar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARACTERÍSTICAS (FEATURES) GRID */}
      <section
        id="caracteristicas"
        className="py-24 bg-gray-950 relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo lo que necesitas, en un solo lugar
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deja de usar múltiples planillas de Excel. Centraliza tus ventas,
              stock y facturación de manera inteligente.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Facturación AFIP Nativa
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Emite facturas y notas de crédito validadas por ARCA en
                milisegundos. Sin salir del sistema y sin dolores de cabeza.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Pagos Integrados
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Soporte nativo para Mercado Pago. Genera links de cobro y valida
                acreditaciones automáticamente en tu caja.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Multi-Sucursal
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Expande tu negocio. Controla el inventario, los empleados y los
                reportes de todas tus sucursales desde una única cuenta matriz.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Métricas en Tiempo Real
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Dashboard inteligente con reportes de ventas, productos más
                vendidos, control de caja y rendimiento de empleados.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Seguridad y Roles
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Asigna roles específicos (Admin, Cajero, Vendedor). Mantén la
                información sensible oculta y audita los movimientos de tu
                equipo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-emerald-950/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para modernizar tu negocio?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Únete a los comercios que ya están escalando sus ventas con
            TreesPOS.
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Soporte
              técnico
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Cancelas
              cuando quieras
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
              Actualizaciones gratuitas
            </li>
          </ul>

          <button className="bg-white text-gray-950 hover:bg-gray-200 px-10 py-4 rounded-full text-lg font-bold transition-transform transform hover:scale-105 shadow-xl">
            Crear mi cuenta ahora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">
              Trees<span className="text-emerald-500">POS</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TreesTech. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
