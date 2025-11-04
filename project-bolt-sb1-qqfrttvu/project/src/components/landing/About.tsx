import { Lightbulb, Palette, TrendingUp } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Soluciones creativas potenciadas por IA',
    },
    {
      icon: Palette,
      title: 'Creatividad',
      description: 'Diseño y estrategia que conecta',
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Crecimiento medible y sostenible',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C]">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos ÜNIO, una agencia de marketing digital impulsada por IA.
            Ayudamos a mypes de moda, belleza y calzado a construir marcas que conecten y vendan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#5936FF] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F3C] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
