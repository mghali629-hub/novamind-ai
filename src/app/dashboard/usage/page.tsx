'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function NovaMindDashboardUsagePage() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  const stats = {
    '7d': { tokens: '2.4M', requests: '14,820', cost: '$48.20', models: { 'Nova-3 Ultra': 45, 'Nova-2 Vision': 30, 'Nova-1 Base': 25 } },
    '30d': { tokens: '9.8M', requests: '62,450', cost: '$196.80', models: { 'Nova-3 Ultra': 52, 'Nova-2 Vision': 28, 'Nova-1 Base': 20 } },
    '90d': { tokens: '28.6M', requests: '181,300', cost: '$572.40', models: { 'Nova-3 Ultra': 48, 'Nova-2 Vision': 32, 'Nova-1 Base': 20 } },
  };

  const current = stats[period];

  const dailyData = [65, 72, 58, 90, 84, 71, 96, 88, 74, 102, 95, 80, 67, 110];

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">API ANALYTICS</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Usage Dashboard</h1>
          </div>
          <div className="flex gap-2">
            {(['7d', '30d', '90d'] as const).map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${period === p ? 'bg-purple-600 text-white' : 'border border-slate-700 text-slate-400 hover:border-purple-500/50'}`}>
                {p === '7d' ? '7 Days' : p === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: 'Total Tokens Used', value: current.tokens, icon: '⚡', color: 'text-purple-400' },
            { label: 'API Requests', value: current.requests, icon: '📡', color: 'text-sky-400' },
            { label: 'Estimated Cost', value: current.cost, icon: '💳', color: 'text-emerald-400' },
          ].map((s, i) => (
            <div key={i} className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs text-slate-500 font-medium">{period.toUpperCase()}</span>
              </div>
              <div className={`text-3xl font-black ${s.color} mb-1`}>{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Request Volume Chart (SVG) */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-6">
          <h2 className="font-bold text-white mb-4">Request Volume (Last 14 Days)</h2>
          <svg width="100%" height="140" viewBox="0 0 560 140" preserveAspectRatio="none">
            {dailyData.map((val, i) => {
              const x = (i / (dailyData.length - 1)) * 540 + 10;
              const y = 130 - (val / 120) * 110;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#a78bfa" />
                  {i < dailyData.length - 1 && (
                    <line x1={x} y1={y} x2={(((i + 1) / (dailyData.length - 1)) * 540 + 10)} y2={(130 - (dailyData[i + 1] / 120) * 110)} stroke="#7c3aed" strokeWidth="2" />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Model Breakdown */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-6">
          <h2 className="font-bold text-white mb-5">Usage by Model</h2>
          <div className="space-y-4">
            {Object.entries(current.models).map(([model, pct]) => (
              <div key={model}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-[#e8e8ff]">{model}</span>
                  <span className="text-purple-400 font-mono font-bold">{pct}%</span>
                </div>
                <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-violet-400 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
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
