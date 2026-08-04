'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Cpu,
  Send,
  Sparkles,
  Zap,
  Terminal,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Header, Footer } from '@/components/Header';

interface AIModel {
  id: number;
  name: string;
  version: string;
  contextWindow: string;
  tokensPerSec: string;
  description: string;
}

export default function NovaMindHomePage() {
  const [models, setModels] = useState<AIModel[]>([]);
  const [prompt, setPrompt] = useState('Synthesize high-frequency neural weights for multi-agent coordination.');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/models')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setModels(data.models);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInference = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ai-inference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelName: 'NovaText 4.0 Ultra', prompt }),
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
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-indigo-400" /> AGI Multi-Modal Foundation Research
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
            Next-Gen Multimodal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">AI Foundation Engine</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            1,000,000 token context windows, sub-50ms latency, and open weights trained across 100,000 Tensor Core H100 GPUs.
          </p>

          <div className="pt-6 font-sans flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/playground"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-500/20 hover:brightness-110 transition-all text-center"
            >
              Launch Neural Console
            </Link>
            <Link
              href="/api-docs"
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center font-mono"
            >
              Explore API SDK Docs
            </Link>
          </div>
        </section>

        {/* Model Catalog Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-mono">
          <div className="text-center font-sans">
            <span className="text-xs text-indigo-400 font-bold font-mono uppercase tracking-widest block mb-1">State-of-the-Art Architecture</span>
            <h2 className="text-3xl font-extrabold text-white">Foundation Models Benchmark</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m) => (
              <div key={m.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white font-sans">{m.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400">{m.version}</span>
                  </div>
                  <p className="text-slate-400 text-xs font-sans line-clamp-2">{m.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Context Window</span>
                    <span className="text-white font-bold">{m.contextWindow}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Throughput</span>
                    <span className="text-indigo-400 font-bold">{m.tokensPerSec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Neural API Playground Form */}
        <section className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleInference} className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-indigo-500/30 space-y-4 shadow-2xl font-mono">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
              <Terminal className="w-4 h-4" /> Live Neural API Inference Execution
            </div>
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-sans"
            >
              <Send className="w-4 h-4" /> {loading ? 'Synthesizing Neural Weights...' : 'Execute Neural API Inference'}
            </button>

            {response && (
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs text-indigo-400 font-bold block">Saved DB API Response Output:</span>
                <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300 overflow-x-auto">
                  {response}
                </pre>
              </div>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
