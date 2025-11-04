import { Calendar, ArrowRight } from 'lucide-react';

function Blog() {
  const articles = [
    {
      title: 'Tendencias de Redes Sociales 2025',
      excerpt: 'Descubre las estrategias que dominarán el marketing digital este año',
      date: '15 Ene 2025',
      category: 'Tendencias',
      gradient: 'from-[#5936FF] to-[#7c5aff]',
    },
    {
      title: 'Estrategias de Contenido que Convierten',
      excerpt: 'Aprende a crear contenido que realmente genera resultados',
      date: '10 Ene 2025',
      category: 'Estrategia',
      gradient: 'from-[#B8FF6C] to-[#7eff00]',
    },
    {
      title: 'Uso Ético de IA en Marketing',
      excerpt: 'Cómo implementar inteligencia artificial de manera responsable',
      date: '5 Ene 2025',
      category: 'Tecnología',
      gradient: 'from-[#0A0F3C] to-[#5936FF]',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C] mb-4">
            Blog y Recursos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conocimiento y tendencias del marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#5936FF]"
            >
              <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0A0F3C]">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0F3C] mb-3 group-hover:text-[#5936FF] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>

                <button className="flex items-center gap-2 text-[#5936FF] font-semibold group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
