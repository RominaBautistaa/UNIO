import { useState } from 'react';
import { Home, CheckSquare, Inbox, MessageSquare, User, X } from 'lucide-react';
import AppInicio from './app/AppInicio';
import AppTareas from './app/AppTareas';
import AppEntregas from './app/AppEntregas';
import AppAsistente from './app/AppAsistente';
import AppCuenta from './app/AppCuenta';

interface MobileAppProps {
  onBack: () => void;
}

type TabType = 'inicio' | 'tareas' | 'entregas' | 'asistente' | 'cuenta';

function MobileApp({ onBack }: MobileAppProps) {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');

  const tabs = [
    { id: 'inicio' as TabType, icon: Home, label: 'Inicio' },
    { id: 'tareas' as TabType, icon: CheckSquare, label: 'Tareas' },
    { id: 'entregas' as TabType, icon: Inbox, label: 'Entregas' },
    { id: 'asistente' as TabType, icon: MessageSquare, label: 'Asistente' },
    { id: 'cuenta' as TabType, icon: User, label: 'Cuenta' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <AppInicio />;
      case 'tareas':
        return <AppTareas />;
      case 'entregas':
        return <AppEntregas />;
      case 'asistente':
        return <AppAsistente />;
      case 'cuenta':
        return <AppCuenta />;
      default:
        return <AppInicio />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0A0F3C] to-[#5936FF] px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">ÜNIO App</h1>
          <button
            onClick={onBack}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="h-[600px] overflow-y-auto">
          {renderContent()}
        </div>

        <div className="border-t border-gray-200 bg-white">
          <div className="grid grid-cols-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 flex flex-col items-center gap-1 transition-all ${
                  activeTab === tab.id
                    ? 'text-[#5936FF]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
