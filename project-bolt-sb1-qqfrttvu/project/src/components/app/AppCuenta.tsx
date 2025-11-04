import { CreditCard, History, LogOut, ChevronRight } from 'lucide-react';

function AppCuenta() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl font-bold text-white">AP</span>
        </div>
        <h2 className="text-2xl font-bold text-[#0A0F3C]">Ana Paula</h2>
        <p className="text-gray-600">ana.paula@email.com</p>
      </div>

      <div className="bg-gradient-to-br from-[#B8FF6C] to-[#7eff00] rounded-2xl p-6 text-[#0A0F3C]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold opacity-80">Plan Actual</span>
          <div className="px-3 py-1 bg-white/30 rounded-full text-xs font-bold">
            ACTIVO
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-1">Plan Avanzado</h3>
        <p className="text-sm opacity-80">S/600 / mes</p>
        <div className="mt-4 pt-4 border-t border-[#0A0F3C]/20">
          <p className="text-sm">Próxima renovación: 15 Feb 2025</p>
        </div>
      </div>

      <div className="space-y-2">
        <button className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#5936FF] transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#0A0F3C]">Detalles del Plan</p>
              <p className="text-xs text-gray-500">Ver características y límites</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#5936FF] transition-colors" />
        </button>

        <button className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#5936FF] transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#B8FF6C] to-[#7eff00] rounded-lg flex items-center justify-center">
              <History className="w-5 h-5 text-[#0A0F3C]" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#0A0F3C]">Historial de Pagos</p>
              <p className="text-xs text-gray-500">Ver transacciones anteriores</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#5936FF] transition-colors" />
        </button>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <button className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>

      <div className="text-center text-xs text-gray-500">
        <p>ÜNIO v2.0.0</p>
        <p>© 2025 Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default AppCuenta;
