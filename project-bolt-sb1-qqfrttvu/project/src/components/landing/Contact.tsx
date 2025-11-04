import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F3C] mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para impulsar tu marca al siguiente nivel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0A0F3C] mb-6">
                Envíanos un mensaje
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5936FF] focus:ring-2 focus:ring-[#5936FF]/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5936FF] focus:ring-2 focus:ring-[#5936FF]/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5936FF] focus:ring-2 focus:ring-[#5936FF]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#5936FF] to-[#7c5aff] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#5936FF]/30 transition-all duration-300"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex items-start gap-4 hover:border-[#5936FF] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0F3C] mb-1">Email</h4>
                <p className="text-gray-600">unio.club@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex items-start gap-4 hover:border-[#5936FF] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF6C] to-[#7eff00] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#0A0F3C]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0F3C] mb-1">WhatsApp Business</h4>
                <p className="text-gray-600">Disponible para consultas</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex items-start gap-4 hover:border-[#5936FF] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0F3C] mb-1">Ubicación</h4>
                <p className="text-gray-600">Doña Rosa 349-297, Surco - Lima, Perú 15049</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex items-start gap-4 hover:border-[#5936FF] transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF6C] to-[#7eff00] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#0A0F3C]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0F3C] mb-1">Horario de atención</h4>
                <p className="text-gray-600">Lun-Vie 9am-4pm, Sab 10am-3pm</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A0F3C] to-[#5936FF] rounded-2xl p-6 shadow-lg">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps?q=Doña+Rosa+349-297,+Surco,+Lima,+Peru&output=embed"
                  width="100%" 
                  height="400" 
                  style={{border:0, borderRadius: '16px'}}
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
