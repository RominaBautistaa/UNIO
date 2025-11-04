import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenApp: () => void;
}

function Hero({ onOpenApp }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F3C] via-[#1a1555] to-[#5936FF]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#B8FF6C]/30">
              <Sparkles className="w-4 h-4 text-[#B8FF6C]" />
              <span className="text-sm text-gray-200">Powered by AI</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforma tu marca con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF6C] to-[#7eff00]">
                Inteligencia Artificial
              </span>{' '}
              y Creatividad Real
            </h1>

            <p className="text-xl text-gray-300">
              Descubre cómo ÜNIO impulsa el crecimiento digital de emprendedores y mypes con estrategias de marketing inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-white text-[#0A0F3C] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explorar servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenApp}
                className="px-8 py-4 bg-[#B8FF6C] text-[#0A0F3C] rounded-lg font-semibold hover:bg-[#a8ef5c] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#B8FF6C]/20"
              >
                Probar la App
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <h3 className="text-white font-semibold">Dashboard ÜNIO</h3>
                  <div className="w-2 h-2 bg-[#B8FF6C] rounded-full animate-pulse"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">Alcance</p>
                    <p className="text-2xl font-bold text-white">+245%</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-400 text-sm">Engagement</p>
                    <p className="text-2xl font-bold text-white">+189%</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Progreso de Campaña</span>
                    <span className="text-[#B8FF6C]">78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#B8FF6C] to-[#7eff00] h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[#5936FF] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-[#B8FF6C] rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
