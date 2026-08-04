'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

interface AIModel {
  id: number;
  name: string;
  version: string;
  contextWindow: string;
  tokensPerSec: string;
  description: string;
}

export default function ModelsPage() {
  const [models, setModels] = useState<AIModel[]>([]);

  useEffect(() => {
    fetch('/api/models')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setModels(data.models);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8 font-mono">
        <div className="text-center font-sans space-y-2">
          <span className="text-xs text-indigo-400 font-mono font-bold uppercase tracking-widest block">Open Weights & Proprietary Endpoints</span>
          <h1 className="text-3xl font-extrabold text-white">Foundation Models Catalog</h1>
          <p className="text-slate-400 text-sm">State-of-the-art multi-modal LLMs benchmarked against HumanEval and MMLU.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((m) => (
            <div key={m.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white font-sans">{m.name}</h3>
                <span className="text-xs text-indigo-400 font-bold">{m.version} • {m.tokensPerSec}</span>
              </div>
              <p className="text-slate-400 text-xs font-sans leading-relaxed">{m.description}</p>
              <div className="text-xs text-slate-500">Context Window: <strong className="text-white">{m.contextWindow}</strong></div>
              <Link href="/playground" className="block w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase text-center font-sans">
                Launch Inference Playground
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
