'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const invoices = [
  { id: 'INV-2026-0803', period: 'July 2026', amount: 196.80, status: 'Paid', tokens: '9.8M' },
  { id: 'INV-2026-0703', period: 'June 2026', amount: 184.20, status: 'Paid', tokens: '9.2M' },
  { id: 'INV-2026-0603', period: 'May 2026', amount: 221.00, status: 'Paid', tokens: '11.1M' },
  { id: 'INV-2026-0503', period: 'April 2026', amount: 164.40, status: 'Paid', tokens: '8.2M' },
];

export default function NovaMindBillingPage() {
  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">BILLING & PAYMENTS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Billing Dashboard</h1>
        </div>

        {/* Current Plan */}
        <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-700/50 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-purple-300 bg-purple-800/30 px-3 py-1 rounded-full">CURRENT PLAN</span>
              <h2 className="text-2xl font-black text-white mt-2">NovaMind Pro</h2>
              <p className="text-slate-400 text-sm mt-1">$149/month · Renews August 3, 2026</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-purple-400">$196.80</div>
              <div className="text-xs text-slate-400">Last billing cycle</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-4">
            {[{ label: 'Monthly Token Quota', val: '20M' }, { label: 'Used This Month', val: '9.8M' }, { label: 'Remaining', val: '10.2M' }].map((s, i) => (
              <div key={i} className="bg-purple-950/40 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-purple-300">{s.val}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-400">Token Usage</span><span className="text-purple-300">49%</span></div>
            <div className="h-2 bg-purple-950 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-600 to-violet-400 rounded-full" style={{ width: '49%' }} /></div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-colors">Upgrade Plan</button>
            <button className="border border-slate-700 text-slate-400 hover:border-purple-500/50 text-sm px-5 py-2 rounded-xl transition-colors">Manage Subscription</button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-6">
          <h2 className="font-bold text-white mb-4">Payment Method</h2>
          <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-r from-slate-600 to-slate-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">VISA</div>
              <div>
                <div className="text-sm font-semibold text-white">•••• •••• •••• 4291</div>
                <div className="text-xs text-slate-400">Expires 08/2029</div>
              </div>
            </div>
            <button className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors">Update</button>
          </div>
        </div>

        {/* Invoice History */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-6">
          <h2 className="font-bold text-white mb-4">Invoice History</h2>
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl">
                <div>
                  <div className="text-sm font-semibold text-white">{inv.period}</div>
                  <div className="text-xs text-slate-400">{inv.id} · {inv.tokens} tokens used</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-400 text-xs font-bold bg-green-900/20 px-2 py-0.5 rounded-full">{inv.status}</span>
                  <span className="font-bold text-white">${inv.amount.toFixed(2)}</span>
                  <button className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition-colors">PDF ↓</button>
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
