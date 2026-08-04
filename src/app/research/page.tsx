'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { BookOpen, Sparkles, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Paper {
  id: number;
  slug: string;
  title: string;
  authors: string;
  abstract: string;
}

export default function ResearchPage() {
  const [papers, setPapers] = useState<Paper[]>([]);

  useEffect(() => {
    fetch('/api/research')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPapers(data.papers);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12 font-mono">
        <div className="text-center space-y-2 max-w-2xl mx-auto font-sans">
          <span className="text-xs text-indigo-400 font-mono font-bold uppercase tracking-widest block">AGI Research Publications</span>
          <h1 className="text-4xl font-extrabold text-white">Open Machine Learning Papers</h1>
          <p className="text-slate-400 text-sm">Sub-linear scaling laws, sparse MoE routing, and 1,000,000 token long-context architectures.</p>
        </div>

        <div className="space-y-6">
          {papers.map((paper) => (
            <div key={paper.id} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 font-sans">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-1">Peer-Reviewed Paper</span>
                  <h3 className="text-2xl font-bold text-white">{paper.title}</h3>
                  <span className="text-slate-400 text-xs font-mono mt-1 block">Authors: {paper.authors}</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">{paper.abstract}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
