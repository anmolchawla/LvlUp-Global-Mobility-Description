
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const MobilityAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I'm your LvlUp Mobility Advisor. I specialize in helping Indian high-net-worth individuals with global residency, offshore tax structures, and international investment strategies. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userText }].map(m => ({
          parts: [{ text: m.text }],
          role: m.role
        })),
        config: {
          systemInstruction: `You are a world-class global mobility expert for "LvlUp", a boutique firm serving high-net-worth Indians.
          Your expertise includes:
          - Golden Visas (Portugal, Greece, Spain).
          - Residency by investment (Dubai, Singapore).
          - Offshore corporate structures (BVI, Cayman, UAE).
          - Indian-specific regulations (FEMA, LRS, TCS, domestic tax optimization).
          - Strategic passports for Indians to overcome travel limitations.
          
          Guidelines:
          - Be professional, elite, and ultra-competent.
          - Address specific pain points for Indians (e.g., weak passport, LRS $250k limit).
          - Do not give legal or financial advice explicitly; add a disclaimer if needed.
          - Use a helpful, confident tone.
          - Encourage the user to "Schedule a consultation with our senior partners" if the query is complex.`,
        }
      });

      const aiText = response.text || "I apologize, I'm having trouble processing that right now. Please try again or contact our team directly.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error: Could not connect to the advisory engine. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold font-serif">LvlUp Mobility Advisor</h3>
          <p className="text-xs text-slate-400">Powered by Gemini | Specialist for Indian HNWIs</p>
        </div>
        <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          LIVE AI
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-slate-900 text-white rounded-br-none' 
                : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-200">
        <div className="flex gap-2 relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Golden Visas, LRS, or offshore tax..."
            className="flex-grow bg-slate-50 border border-slate-200 px-5 py-3 rounded-full text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all pr-12"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-1.5 top-1.5 bg-slate-900 text-white p-2 rounded-full hover:bg-emerald-600 disabled:opacity-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
        <p className="mt-3 text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
          Strategic Advisory Engine v1.2
        </p>
      </div>
    </div>
  );
};

export default MobilityAdvisor;
