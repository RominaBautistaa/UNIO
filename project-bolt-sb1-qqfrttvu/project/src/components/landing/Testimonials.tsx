import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'María Fernández',
      role: 'CEO, ModaClass',
      content: 'ÜNIO transformó completamente nuestra presencia digital. En solo 6 meses triplicamos nuestras ventas online.',
      rating: 5,
      avatar: 'MF',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Fundador, TechNova',
      content: 'La combinación de creatividad humana e IA de ÜNIO es increíble. Logramos el lanzamiento más exitoso que podíamos imaginar.',
      rating: 5,
      avatar: 'CM',
    },
    {
      name: 'Ana Gutiérrez',
      role: 'Directora de Marketing, EcoVivir',
      content: 'El equipo de ÜNIO entiende perfectamente las necesidades de las mypes. Su enfoque es profesional y orientado a resultados.',
      rating: 5,
      avatar: 'AG',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A0F3C] to-[#5936FF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B8FF6C] text-[#B8FF6C]" />
                ))}
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8FF6C] to-[#7eff00] flex items-center justify-center font-bold text-[#0A0F3C]">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
