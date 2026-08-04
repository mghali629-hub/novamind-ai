'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ApiDocsHubPage() {
  const [search, setSearch] = useState('');

  const sections = [
    { title: 'Text Generation & LLMs', path: '/api-docs/text', desc: 'Completions, chat formats, streaming responses, function calling, and temperature parameters.', icon: '💬', count: '12 Endpoints' },
    { title: 'Code Generation & Refactoring', path: '/api-docs/code', desc: 'Synthesize TypeScript, Python, Rust, SQL, multi-file edits, and automated test generation.', icon: '💻', count: '8 Endpoints' },
    { title: 'Vision & Multimodal Intelligence', path: '/api-docs/vision', desc: 'Image comprehension, OCR, diagram parsing, chart extraction, and video frame analysis.', icon: '👁️', count: '6 Endpoints' },
  ];

  const quickLinks = [
    { title: 'Authentication', desc: 'Bearer Token header format & API Key rotation rules' },
    { title: 'Rate Limits', desc: 'Tier 1 (500 RPM) to Enterprise (unlimited burst tokens)' },
    { title: 'Error Codes', desc: 'Standard HTTP statuses (400, 401, 429, 500, 503)' },
    { title: 'SDK Libraries', desc: 'Official packages for Python, Node.js, Go, and Rust' },
  ];

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase bg-purple-900/30 border border-purple-700/50 px-4 py-1.5 rounded-full">DEVELOPER DOCUMENTATION</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">NovaMind API Reference</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Comprehensive guides, code snippets, and SDK specifications to integrate NovaMind models into your stack.</p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search API docs (e.g. streaming, completions, rate-limits)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d0d25] border border-purple-900/40 rounded-2xl px-6 py-4 text-sm text-[#e8e8ff] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        {/* API Categories */}
        <h2 className="text-2xl font-bold text-white mb-6">API Endpoints by Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sections.map((s, i) => (
            <div key={i} className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/50 transition-all group">
              <div>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
              </div>
              <div>
                <span className="text-xs text-purple-400 font-mono font-bold block mb-3">{s.count}</span>
                <Link href={s.path} className="inline-block w-full text-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                  Explore API Reference →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Core Developer Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((q, i) => (
              <div key={i} className="bg-[#050511] border border-slate-800 rounded-2xl p-5">
                <h4 className="font-bold text-purple-300 text-base mb-1">{q.title}</h4>
                <p className="text-slate-400 text-sm">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
