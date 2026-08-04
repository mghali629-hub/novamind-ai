'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'nova-3-multimodal-release', title: 'NovaMind Nova-3: Native Video Understanding and 200K Context Window', date: 'July 30, 2026', author: 'NovaMind Research Team', category: 'RELEASE', excerpt: 'Our flagship model now processes 3-hour video files, executes long-horizon code generation tasks, and achieves SOTA on MMLU Pro benchmark.' },
  { slug: 'rag-hallucination-mitigation', title: 'Reducing RAG Hallucination by 73% with Confidence-Calibrated Retrieval', date: 'July 8, 2026', author: 'Dr. Aisha Okonkwo', category: 'RESEARCH', excerpt: 'A novel retrieval scoring approach that suppresses low-confidence chunk injection and uses self-consistency sampling at inference time.' },
  { slug: 'function-calling-best-practices', title: '10 Production Patterns for Reliable LLM Function Calling', date: 'June 20, 2026', author: 'Marcus Thorne', category: 'ENGINEERING', excerpt: 'Lessons from 18 months of running billions of tool-use requests: retry logic, schema validation, and graceful degradation strategies.' },
];

export default function NovaMindBlogPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold text-violet-400 tracking-widest uppercase bg-violet-400/10 px-4 py-1.5 rounded-full">
            RESEARCH & ENGINEERING
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">
            NovaMind AI Journal
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Model architecture releases, safety evaluations, and engineering patterns for building production AI applications.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4 hover:border-violet-500/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800/40">{p.category}</span>
                <span className="text-xs text-slate-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white hover:text-violet-300 transition-colors">{p.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-violet-400 font-bold text-xs uppercase tracking-wider hover:underline">
                  Read Full Technical Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
          <h3 className="text-xl font-bold text-white">Subscribe to NovaMind Research Updates</h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto">Get monthly papers, model updates, and API feature announcements delivered to your inbox.</p>
          <div className="flex max-w-md mx-auto gap-2 pt-2">
            <input type="email" placeholder="developer@company.com" className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-violet-500" />
            <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-5 py-2 rounded-xl transition-colors">Subscribe</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
