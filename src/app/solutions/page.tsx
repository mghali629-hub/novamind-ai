'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const solutions = [
  { icon:'💬', name:'Conversational AI & Chatbots', desc:'Enterprise-grade chat systems with persistent memory, multi-turn dialogue state, and live tool execution via function calling.', link:'/models/1', tag:'MODEL: NOVA-3' },
  { icon:'📄', name:'Document Intelligence & Analysis', desc:'Extract structured data from PDFs, contracts, medical records, and invoices with 200K token context and schema-validated JSON output.', link:'/models/2', tag:'MODEL: NOVA-LITE' },
  { icon:'👁️', name:'Vision & Multimodal Understanding', desc:'Analyze images, charts, product photos, and screen captures — returning structured descriptions, anomaly flags, and OCR output.', link:'/models/3', tag:'MODEL: NOVA-VISION' },
  { icon:'</>', name:'Code Generation & Review', desc:'Code completion, automated test generation, pull request review, and full repository-aware refactoring across 60+ programming languages.', link:'/api-docs/code', tag:'MODEL: NOVA-CODE' },
  { icon:'🔍', name:'Retrieval-Augmented Generation (RAG)', desc:'Ground model outputs in real-time enterprise data by connecting vector databases, SQL stores, and live web search via our retrieval plugins.', link:'/api-docs/text', tag:'API: RAG SDK' },
  { icon:'⚙️', name:'AI Workflow Automation', desc:'Chain model calls, human approval steps, and external API calls into fully orchestrated AI workflows using our Agents SDK.', link:'/playground', tag:'API: AGENTS SDK' },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-violet-400 tracking-widest uppercase bg-violet-400/10 px-4 py-1.5 rounded-full">
            ENTERPRISE CAPABILITIES
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">
            AI Solutions Engineered for Scale
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            From automated document extraction to autonomous multi-agent orchestration — NovaMind APIs provide the complete infrastructure layer for modern AI software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s,i) => (
            <Link key={i} href={s.link} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500/50 transition-colors group block space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-4xl">{s.icon}</span>
                <span className="text-[10px] font-mono font-bold text-violet-400 bg-violet-950 px-2.5 py-1 rounded-full border border-violet-800/40">{s.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{s.name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              <div className="pt-2">
                <span className="text-violet-400 font-bold text-xs uppercase tracking-wider group-hover:underline">Explore Solution →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Need a Custom Enterprise AI Architecture?</h3>
            <p className="text-slate-400 text-xs mt-1">Our AI solutions architects assist with VPC deployment, fine-tuning, and dedicated GPU instance allocation.</p>
          </div>
          <Link href="/contact" className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors shrink-0 uppercase tracking-wider">
            Contact Enterprise Team
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
