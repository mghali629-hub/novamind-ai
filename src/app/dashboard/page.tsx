'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function NovaMindDashboardPage() {
  const [keys, setKeys] = useState([
    { id: 1, name: 'Production App Key', key: 'nm_live_9482••••••••4291', created: '2026-06-12', lastUsed: '2 mins ago', status: 'Active' },
    { id: 2, name: 'Staging & Dev Key', key: 'nm_test_1048••••••••8821', created: '2026-07-04', lastUsed: '1 hour ago', status: 'Active' },
  ]);

  const [copied, setCopied] = useState<number | null>(null);

  const copyKey = (id: number) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">ACCOUNT CONSOLE</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Developer Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/usage" className="bg-[#0d0d25] border border-purple-900/40 hover:border-purple-500/50 text-xs font-bold text-purple-300 px-4 py-2.5 rounded-xl transition-colors">
              📊 Usage Analytics
            </Link>
            <Link href="/dashboard/billing" className="bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white px-4 py-2.5 rounded-xl transition-colors">
              💳 Billing & Plan
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Active API Keys', value: keys.length.toString(), sub: 'Limit: 10 keys' },
            { label: 'Tokens (This Month)', value: '9.8M', sub: '49% of monthly quota' },
            { label: 'Avg Latency (P95)', value: '142 ms', sub: '99.98% SLA' },
            { label: 'Monthly Spend', value: '$196.80', sub: 'Next billing: Aug 28' },
          ].map((s, i) => (
            <div key={i} className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-5">
              <div className="text-xs text-slate-400 font-medium mb-1">{s.label}</div>
              <div className="text-2xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-purple-400 font-mono">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* API Key Management */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white">API Secret Keys</h2>
              <p className="text-slate-400 text-xs mt-1">Your secret keys grant full access to your account API models. Do not commit them to public repos.</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
              + Generate New Key
            </button>
          </div>

          <div className="space-y-3">
            {keys.map((k) => (
              <div key={k.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#050511] border border-purple-900/30 rounded-2xl gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{k.name}</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">{k.status}</span>
                  </div>
                  <div className="text-xs font-mono text-purple-300 mt-1">{k.key}</div>
                  <div className="text-xs text-slate-500 mt-1">Created: {k.created} · Last used: {k.lastUsed}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => copyKey(k.id)} className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono px-3 py-1.5 rounded-lg hover:bg-purple-900/40 transition-colors">
                    {copied === k.id ? '✓ Copied!' : '📋 Copy'}
                  </button>
                  <button className="border border-red-900/40 text-red-400 text-xs font-mono px-3 py-1.5 rounded-lg hover:bg-red-950/40 transition-colors">
                    Revoke
                  </button>
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
