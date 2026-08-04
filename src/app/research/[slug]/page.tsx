'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ResearchPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/research" className="text-xs text-violet-400 font-bold hover:underline mb-4 block">← Back to Research Hub</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-violet-400 bg-violet-950 px-3 py-1 rounded-full uppercase">TECHNICAL PAPER</span>
            <span className="text-xs text-slate-500">arXiv:2607.08841 · Peer Reviewed</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white mt-3 mb-2">Confidence-Calibrated Retrieval for Low-Hallucination RAG Pipelines</h1>
          <p className="text-slate-400 text-sm">Published: July 8, 2026 · By NovaMind Research · 14 min read</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block">EXECUTIVE ABSTRACT</span>
            <p className="text-slate-300 text-xs leading-relaxed">
              We present a confidence-calibrated retrieval scoring framework for RAG pipelines that reduces LLM hallucination rates by 73% on the HaluEval benchmark while maintaining retrieval recall above 91%. Our approach introduces chunk-level uncertainty quantification using Monte Carlo dropout at the retriever encoder and suppresses low-confidence evidence injection at the prompt construction stage.
            </p>
          </div>

          <h2 className="text-xl font-bold text-white">1. Introduction & Problem Statement</h2>
          <p>
            Standard RAG pipelines inject all top-k retrieved chunks unconditionally into the context window. When the retriever is uncertain — typically when query-document semantic similarity falls below cosine θ = 0.72 — grounding quality degrades sharply, causing the LLM to confabulate plausible-sounding but factually incorrect responses.
          </p>

          <h2 className="text-xl font-bold text-white">2. Implementation Protocol</h2>
          <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-violet-300 overflow-x-auto">{`# Confidence-gated chunk selection in NovaMind RAG SDK
from novamind.rag import ConfidenceFilter

filter = ConfidenceFilter(min_confidence=0.82, max_chunks=5)
valid_chunks = filter.process(retrieved_documents)

if not valid_chunks:
    return fallback_response("Insufficient grounded context found.")`}</pre>

          <div className="bg-violet-950/40 border border-violet-800/50 rounded-2xl p-5 text-xs text-violet-300 space-y-2">
            <span className="font-bold text-white block">📊 Key Empirical Findings:</span>
            <ul className="space-y-1 list-disc list-inside text-slate-300">
              <li>Hallucination rate dropped from 18.4% → 4.9% on MedQA benchmarks.</li>
              <li>P95 latency overhead was constrained to +11ms per request.</li>
              <li>Out-of-domain retrieval precision improved by 41.2%.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
