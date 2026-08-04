'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const caseStudies = [
  { company: 'FinTech Global', logo: 'FG', metric: '4.2× Speedup', desc: 'Replaced legacy fraud detection pipeline with Nova-3 Ultra, processing 1.4B daily financial transactions.', quote: '"NovaMind reduced our inference latency from 450ms to 42ms while cutting GPU infrastructure bill by 60%."' },
  { company: 'BioHealth Labs', logo: 'BH', metric: '99.4% Accuracy', desc: 'Accelerated genomic sequence analysis and protein folding research using custom fine-tuned Nova-Vision weights.', quote: '"The multi-modal vision capabilities allowed our researchers to parse 200,000 medical papers overnight."' },
  { company: 'DevFlow Systems', logo: 'DF', metric: '10M+ Code Edits', desc: 'Integrated Nova-Coder-3 into IDE extensions for 80,000 developers worldwide.', quote: '"Our users report a 35% increase in daily merged pull requests since deploying Nova-Coder."' },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase bg-purple-900/30 border border-purple-700/50 px-4 py-1.5 rounded-full">CUSTOMER SUCCESS STORIES</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-4">Trusted by AI Pioneers</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">How global enterprises and disruptive startups build mission-critical products with NovaMind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/40 rounded-2xl flex items-center justify-center font-bold text-purple-300">{cs.logo}</div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{cs.company}</h3>
                    <span className="text-xs text-emerald-400 font-mono font-bold">{cs.metric}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{cs.desc}</p>
              </div>
              <p className="text-slate-300 text-xs italic border-t border-purple-900/40 pt-4">{cs.quote}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
