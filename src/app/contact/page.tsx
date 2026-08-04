'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ContactKeyPage() {
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [requested, setRequested] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Request Production API Key</h1>
          <p className="text-slate-400 text-sm">Provision dedicated enterprise throughput tokens.</p>
        </div>

        {!requested ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Developer Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ai-dev@tech.com" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Organization Name</label>
              <input type="text" required value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Deep Labs Inc" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider">
              Request API Key Access
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500 text-center space-y-4 font-mono">
            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">API Token Provisioned</h3>
            <p className="text-slate-400 text-xs">Secret key sent to {email}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
