import { FileText, Download, Sparkles } from 'lucide-react';

function AppEntregas() {
  const deliverables = [
    {
      id: 1,
      title: 'Reporte de Rendimiento Agosto 2025',
      date: '15 Ene 2025',
      type: 'PDF',
      size: '2.4 MB',
    },
    {
      id: 2,
      title: 'Pack de Contenido Semana 4',
      date: '12 Ene 2025',
      type: 'ZIP',
      size: '18.7 MB',
    },
    {
      id: 3,
      title: 'Análisis de Competencia Q4',
      date: '8 Ene 2025',
      type: 'PDF',
      size: '3.1 MB',
    },
    {
      id: 4,
      title: 'Calendario Editorial Febrero',
      date: '5 Ene 2025',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      id: 5,
      title: 'Pack de Diseños Navidad',
      date: '20 Dic 2024',
      type: 'ZIP',
      size: '24.2 MB',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#0A0F3C]">Buzón de Entregas</h2>
        <p className="text-gray-600">Accede a todos tus archivos y reportes</p>
      </div>

      <div className="space-y-3">
        {deliverables.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#5936FF] transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#5936FF] to-[#7c5aff] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#0A0F3C] text-sm">{item.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{item.type}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{item.size}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 px-4 bg-[#5936FF] text-white rounded-lg text-sm font-semibold hover:bg-[#7c5aff] transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Descargar
              </button>
              <button className="py-2 px-4 bg-[#B8FF6C] text-[#0A0F3C] rounded-lg text-sm font-semibold hover:bg-[#a8ef5c] transition-all flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Resumir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppEntregas;
