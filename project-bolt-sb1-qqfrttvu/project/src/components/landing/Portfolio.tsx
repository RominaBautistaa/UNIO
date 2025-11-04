import { TrendingUp, Users, Eye } from 'lucide-react';

function Portfolio() {
  const projects = [
    {
      title: 'Rebranding de ModaClass',
      description: 'Renovación completa de identidad visual y estrategia de contenido para marca de moda premium.',
      metric: '+340% en ventas online',
      icon: TrendingUp,
      color: 'from-[#5936FF] to-[#7c5aff]',
    },
    {
      title: 'Lanzamiento de TechNova',
      description: 'Estrategia integral de lanzamiento para startup de tecnología con enfoque en redes sociales.',
      metric: '50K seguidores en 3 meses',
      icon: Users,
      color: 'from-[#B8FF6C] to-[#7eff00]',
    },
    {
      title: 'Campaña EcoVivir',
      description: 'Campaña de awareness para marca de productos sostenibles con alcance nacional.',
      metric: '2M+ impresiones',
      icon: Eye,
      color: 'from-[#0A0F3C] to-[#5936FF]',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C] mb-4">
            Portafolio de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Casos reales de transformación digital y crecimiento
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <project.icon className="w-24 h-24 text-white/90 relative z-10 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A0F3C] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#B8FF6C]" />
                  <span className="font-semibold text-[#5936FF]">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
