'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const services = [
  { name: 'Nova-3 Ultra Inference Fleet', status: 'Operational', uptime: '99.99%', lat: '142ms' },
  { name: 'Nova-Coder-3 Code Synthesis API', status: 'Operational', uptime: '99.98%', lat: '110ms' },
  { name: 'Nova-Vision Multimodal Pipeline', status: 'Operational', uptime: '100%', lat: '185ms' },
  { name: 'Fine-Tuning Cluster & Weight Storage', status: 'Operational', uptime: '99.95%', lat: '210ms' },
  { name: 'Developer Console & Key Management', status: 'Operational', uptime: '100%', lat: '18ms' },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div className="flex justify-between items-center bg-emerald-950/40 border border-emerald-500/40 rounded-3xl p-6">
          <div className="flex items-center gap-4">
            <span className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold text-white">All Systems Operational</h1>
              <p className="text-xs text-emerald-400 font-mono">Global API Clusters: 100% Normal Functionality</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Refreshed: Live</span>
        </div>

        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 space-y-4">
          <h2 className="text-xl font-bold text-white mb-4">Core API Cluster Status</h2>
          <div className="space-y-3">
            {services.map((s, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-[#050511] border border-purple-900/30 rounded-2xl">
                <div>
                  <div className="font-bold text-white text-sm">{s.name}</div>
                  <div className="text-xs text-slate-500">P95 Latency: {s.lat}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full">{s.status}</span>
                  <div className="text-xs text-slate-400 mt-1">Uptime: {s.uptime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
