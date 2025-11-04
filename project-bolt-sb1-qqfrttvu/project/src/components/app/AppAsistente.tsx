import { useState } from 'react';
import { Send, Bot } from 'lucide-react';

function AppAsistente() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hola, soy tu asistente IA. ¿En qué puedo ayudarte hoy sobre tu campaña?',
      sender: 'bot',
      time: '10:30',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages([...messages, newMessage]);
      setInputText('');

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: 'Entiendo tu consulta. Déjame revisar la información de tu campaña y te respondo en un momento.',
          sender: 'bot',
          time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 bg-gradient-to-r from-[#5936FF] to-[#7c5aff] flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Asistente ÜNIO</h2>
          <p className="text-xs text-white/80">Siempre disponible para ayudarte</p>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-[#5936FF] text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm border border-gray-200'
              }`}
            >
              {message.sender === 'bot' && (
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-[#5936FF]" />
                  <span className="text-xs font-semibold text-[#5936FF]">Asistente</span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#5936FF]/50 transition-all"
          />
          <button
            onClick={handleSend}
            className="w-12 h-12 bg-gradient-to-r from-[#5936FF] to-[#7c5aff] rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppAsistente;
