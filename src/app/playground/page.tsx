'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { Send, Sparkles, Terminal } from 'lucide-react';

export default function PlaygroundPage() {
  const [prompt, setPrompt] = useState('Generate python script for high-frequency neural weights');
  const [selectedModel, setSelectedModel] = useState('NovaText 4.0');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInference = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ai-inference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelName: selectedModel, prompt }),
      });
      const data = await res.json();
      if (data.success) setResponse(data.log.response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Neural API Playground
          </span>
          <h1 className="text-4xl font-extrabold text-white">NovaMind AI Playground</h1>
        </div>

        <form onSubmit={handleInference} className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 space-y-4 shadow-2xl">
          <div className="flex gap-2">
            {['NovaText 4.0', 'NovaVision 3D', 'NovaCode Pro'].map((m) => (
              <button
                type="button"
                key={m}
                onClick={() => setSelectedModel(m)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${selectedModel === m ? 'bg-cyan-500 text-black' : 'bg-slate-900 text-slate-400'}`}
              >
                {m}
              </button>
            ))}
          </div>

          <textarea rows={4} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-cyan-500 focus:outline-none font-mono" />

          <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> {loading ? 'Running AI Engine...' : 'Execute API Inference'}
          </button>

          {response && (
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-cyan-400 font-mono block mb-2">Saved DB API Response:</span>
              <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto">
                {response}
              </pre>
            </div>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
