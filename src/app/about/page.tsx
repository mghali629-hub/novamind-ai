'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function NovaMindAboutPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-violet-400 tracking-widest uppercase bg-violet-400/10 px-4 py-1.5 rounded-full">
            OUR MISSION & VISION
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">
            Democratizing Frontier AI for Every Developer
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            NovaMind AI was founded in San Francisco in 2023 to give every software team access to state-of-the-art multimodal language models through a single, unified API — with transparent, token-based pricing and no GPU infrastructure management overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stat: '8B+', label: 'Daily API Requests', desc: 'Processed with sub-100ms latency across 14 edge regions.' },
            { stat: '180+', label: 'Countries Served', desc: 'Global inference network with automated failover routing.' },
            { stat: '12,000+', label: 'Active Enterprises', desc: 'Trusted by Fortune 500 engineering teams.' },
            { stat: '99.99%', label: 'API Uptime SLA', desc: 'Guaranteed by redundant multi-cloud clusters.' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center hover:border-violet-500/30 transition-colors">
              <div className="text-3xl font-black text-violet-400">{s.stat}</div>
              <div className="text-xs font-bold text-white mt-1">{s.label}</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Responsible AI Research', desc: 'Our AI Safety team publishes quarterly red-teaming reports, adversarial robustness benchmarks, and bias evaluation frameworks openly on arXiv for the developer community.' },
            { title: 'Sub-100ms Median Latency', desc: 'Globally distributed inference clusters across 14 edge regions deliver streaming token generation faster than human reading speed, supporting real-time voice and chat.' },
            { title: 'Configurable Guardrails', desc: 'Granular content filtering, PII redaction pipelines, and custom safety classifiers give enterprise compliance teams full model behavior control.' },
          ].map((m, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3 hover:border-violet-500/40 transition-colors">
              <h3 className="text-xl font-bold text-white">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-900/30 to-indigo-900/30 border border-violet-500/30 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Ready to Build with NovaMind AI?</h2>
          <p className="text-slate-400 text-xs max-w-lg mx-auto">Get 5,000,000 free tokens upon signup. No credit card required to start prototyping.</p>
          <Link href="/playground" className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Launch Interactive Playground
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
