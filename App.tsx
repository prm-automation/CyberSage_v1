
import React, { useState } from 'react';
import Header from './components/Header';
import VoiceInterface from './components/VoiceInterface';
import Disclaimer from './components/Disclaimer';

const App: React.FC = () => {
  const [sessionActive, setSessionActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8 bg-slate-900">
      <Header />
      
      <main className="w-full max-w-4xl flex-grow flex flex-col items-center justify-center space-y-8">
        {!sessionActive ? (
          <div className="text-center space-y-6 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-4">
              Explore the World of <br/> 
              <span className="text-white">Ethical Hacking</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-lg">
              Talk to CyberSage, your expert cybersecurity mentor. Ask about penetration testing, security audits, or defensive strategies in real-time.
            </p>
            <button 
              onClick={() => setSessionActive(true)}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              INITIALIZE CONNECTION
            </button>
          </div>
        ) : (
          <VoiceInterface onClose={() => setSessionActive(false)} />
        )}
      </main>

      <Disclaimer />
    </div>
  );
};

export default App;
