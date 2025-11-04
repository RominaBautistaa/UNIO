import { Sparkles, Zap, BarChart3, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Estrategia Creativa',
      description: 'Desarrollamos estrategias de contenido personalizadas que resuenan con tu audiencia y fortalecen tu identidad de marca.',
      color: 'from-[#5936FF] to-[#7c5aff]',
    },
    {
      icon: Zap,
      title: 'Automatización de Campañas',
      description: 'Optimizamos tus campañas publicitarias con IA para maximizar el ROI y alcanzar tus objetivos de marketing.',
      color: 'from-[#B8FF6C] to-[#7eff00]',
    },
    {
      icon: BarChart3,
      title: 'Métricas Inteligentes',
      description: 'Análisis profundo de datos y reportes en tiempo real para tomar decisiones basadas en información precisa.',
      color: 'from-[#5936FF] to-[#B8FF6C]',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital potenciadas por inteligencia artificial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#5936FF]/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#0A0F3C] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-[#5936FF] font-semibold group-hover:gap-3 transition-all">
                Ver más
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
