'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function ApiDocsVisionPage() {
  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">API REFERENCE</span>
          <h1 className="text-4xl font-extrabold text-white mt-1">Vision & Multimodal API</h1>
          <p className="text-slate-400 text-sm mt-2">Analyze images, extract high-density text (OCR), parse architectural blueprints, and convert UI mocks to code.</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Document & OCR', desc: 'Extract structured JSON from PDFs, receipts, handwritten notes, and technical schematics.' },
            { title: 'UI-to-Code Synthesis', desc: 'Pass Figma screenshots or UI wireframes and get semantic HTML/Tailwind React components.' },
            { title: 'Visual Question Answering', desc: 'Ask complex spatial or analytical questions about diagrams, charts, and medical images.' },
          ].map((c, i) => (
            <div key={i} className="bg-[#0d0d25] border border-purple-900/40 rounded-2xl p-5">
              <h3 className="font-bold text-purple-300 text-base mb-2">{c.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Payload Format */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-lg">POST</span>
            <code className="text-purple-300 font-mono text-sm">https://api.novamind.ai/v1/vision/analyze</code>
          </div>
          <pre className="bg-[#050511] border border-purple-900/40 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
            <code>{`curl https://api.novamind.ai/v1/vision/analyze \\
  -H "Authorization: Bearer nm_live_9482910482910" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nova-2-vision",
    "image_url": "https://example.com/architecture-diagram.jpg",
    "prompt": "Extract all microservices and database connections into a Mermaid JS diagram."
  }'`}</code>
          </pre>
        </div>
      </main>
      <Footer />
    </div>
  );
}
