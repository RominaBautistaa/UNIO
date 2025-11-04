import { useState } from 'react';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';

function AppTareas() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['progress']);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const tasks = {
    progress: [
      { id: 1, title: 'Diseño de posts para Instagram', status: 'En progreso' },
      { id: 2, title: 'Revisión de métricas semanales', status: 'En progreso' },
    ],
    pending: [
      { id: 3, title: 'Planificar contenido para TikTok', status: 'Pendiente' },
      { id: 4, title: 'Optimizar anuncios de Facebook', status: 'Pendiente' },
      { id: 5, title: 'Crear reporte mensual', status: 'Pendiente' },
    ],
    completed: [
      { id: 6, title: 'Publicación de stories', status: 'Completado' },
      { id: 7, title: 'Análisis de competencia', status: 'Completado' },
      { id: 8, title: 'Actualización de calendario editorial', status: 'Completado' },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#0A0F3C]">Gestión de Tareas</h2>
        <button className="p-2 bg-[#B8FF6C] rounded-lg hover:bg-[#a8ef5c] transition-all">
          <Sparkles className="w-5 h-5 text-[#0A0F3C]" />
        </button>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-[#5936FF] to-[#7c5aff] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
        <Sparkles className="w-5 h-5" />
        Sugerir tareas con IA
      </button>

      <div className="space-y-4">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('progress')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              {expandedSections.includes('progress') ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              )}
              <span className="font-semibold text-[#0A0F3C]">En Progreso</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold">
                {tasks.progress.length}
              </span>
            </div>
          </button>

          {expandedSections.includes('progress') && (
            <div className="px-4 pb-4 space-y-2">
              {tasks.progress.map((task) => (
                <div
                  key={task.id}
                  className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg"
                >
                  <p className="text-sm font-medium text-gray-800">{task.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('pending')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              {expandedSections.includes('pending') ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              )}
              <span className="font-semibold text-[#0A0F3C]">Pendiente</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                {tasks.pending.length}
              </span>
            </div>
          </button>

          {expandedSections.includes('pending') && (
            <div className="px-4 pb-4 space-y-2">
              {tasks.pending.map((task) => (
                <div
                  key={task.id}
                  className="p-3 bg-gray-50 border-l-4 border-gray-300 rounded-lg"
                >
                  <p className="text-sm font-medium text-gray-800">{task.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('completed')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              {expandedSections.includes('completed') ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              )}
              <span className="font-semibold text-[#0A0F3C]">Completado</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                {tasks.completed.length}
              </span>
            </div>
          </button>

          {expandedSections.includes('completed') && (
            <div className="px-4 pb-4 space-y-2">
              {tasks.completed.map((task) => (
                <div
                  key={task.id}
                  className="p-3 bg-green-50 border-l-4 border-green-400 rounded-lg"
                >
                  <p className="text-sm font-medium text-gray-800">{task.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppTareas;
