import { Calendar } from 'lucide-react';

function AppInicio() {
  const activities = [
    { title: 'Reporte de Rendimiento Agosto', date: 'Hoy, 10:30 AM', icon: Calendar, color: 'text-green-500' },
    { title: 'Pack de Contenido Semana 4', date: 'Ayer, 3:45 PM', icon: Calendar, color: 'text-green-500' },
    { title: 'Reunión de Estrategia', date: 'Mañana, 9:00 AM', icon: Calendar, color: 'text-yellow-500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#0A0F3C]">Bienvenida, Ana Paula</h2>
        <p className="text-gray-600">Aquí está el resumen de tu campaña</p>
      </div>

      <div className="bg-gradient-to-br from-[#0A0F3C] to-[#5936FF] rounded-2xl p-8 text-white flex items-center justify-center" style={{ minHeight: '200px' }}>
        <img 
          src="/src/img/logoUNIO.png" 
          alt="Logo ÜNIO" 
          className="w-72 h-auto object-contain rounded-lg shadow-[0_0_20px_#B8FF6C] bg-transparent"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[#0A0F3C]">Actividad Reciente</h3>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#5936FF] transition-all"
            >
              <div className="flex items-start gap-3">
                <activity.icon className={`w-5 h-5 mt-0.5 ${activity.color}`} />
                <div className="flex-1">
                  <p className="font-semibold text-[#0A0F3C] text-sm">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-[#5936FF] to-[#7c5aff] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
        Ver detalles completos
      </button>
    </div>
  );
}

export default AppInicio;
