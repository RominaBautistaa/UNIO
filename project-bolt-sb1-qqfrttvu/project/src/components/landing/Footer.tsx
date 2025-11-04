import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0A0F3C] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF6C] to-[#7eff00]">
              ÜNIO
            </h3>
            <p className="text-gray-400 mb-4">
              Transformando el marketing digital con inteligencia artificial y creatividad real.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#5936FF] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#5936FF] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#5936FF] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Estrategia Creativa</a></li>
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Automatización</a></li>
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Métricas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#B8FF6C] transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ÜNIO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
