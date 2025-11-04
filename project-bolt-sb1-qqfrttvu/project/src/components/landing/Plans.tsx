import { Check } from 'lucide-react';

function Plans() {
  const plans = [
    {
      name: 'Plan Básico',
      price: 400,
      features: [
        'Herramientas de IA básicas',
        'Gestión de 2 redes sociales',
        'Análisis de métricas mensual',
        'Soporte vía email',
        '4 publicaciones semanales',
      ],
      highlighted: false,
    },
    {
      name: 'Plan Avanzado',
      price: 600,
      features: [
        'Suite completa de herramientas IA',
        'Gestión de 4 redes sociales',
        'Análisis de métricas semanal',
        'Soporte prioritario',
        '7 publicaciones semanales',
        'Campañas publicitarias',
      ],
      highlighted: true,
    },
    {
      name: 'Plan Premium',
      price: 900,
      features: [
        'Todas las herramientas IA',
        'Gestión ilimitada de redes',
        'Análisis en tiempo real',
        'Soporte 24/7 dedicado',
        'Publicaciones ilimitadas',
        'Campañas avanzadas',
        'Consultoría estratégica',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C] mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#0A0F3C] to-[#5936FF] text-white shadow-2xl scale-105 border-2 border-[#B8FF6C]'
                  : 'bg-gray-50 border-2 border-gray-200 hover:border-[#5936FF]/50 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-4 py-1 bg-[#B8FF6C] text-[#0A0F3C] rounded-full text-sm font-semibold mb-4">
                  Más Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#0A0F3C]'}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-[#B8FF6C]' : 'text-[#5936FF]'}`}>
                  S/{plan.price}
                </span>
                <span className={`${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>/mes</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-[#B8FF6C]' : 'bg-[#5936FF]'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-[#0A0F3C]' : 'text-white'}`} />
                    </div>
                    <span className={plan.highlighted ? 'text-gray-100' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#B8FF6C] text-[#0A0F3C] hover:bg-[#a8ef5c]'
                    : 'bg-[#5936FF] text-white hover:bg-[#7c5aff]'
                }`}
              >
                Solicitar asesoría gratuita
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
