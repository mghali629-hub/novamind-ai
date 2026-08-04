'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function ApiDocsCodePage() {
  const [lang, setLang] = useState<'curl' | 'python' | 'node'>('python');

  const codeSnippets = {
    python: `import novamind

client = novamind.Client(api_key="nm_live_9482910482910")

response = client.code.generate(
    model="nova-coder-3",
    prompt="Write a TypeScript function to balance a binary search tree with O(N) time complexity.",
    language="typescript",
    temperature=0.1,
    max_tokens=1024
)

print(response.code)`,
    node: `import { NovaMind } from '@novamind/sdk';

const client = new NovaMind({ apiKey: process.env.NOVAMIND_API_KEY });

const response = await client.code.generate({
  model: 'nova-coder-3',
  prompt: 'Write a TypeScript function to balance a binary search tree.',
  language: 'typescript',
  temperature: 0.1,
});

console.log(response.code);`,
    curl: `curl https://api.novamind.ai/v1/code/generate \\
  -H "Authorization: Bearer nm_live_9482910482910" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nova-coder-3",
    "prompt": "Write a TypeScript function to balance a binary search tree.",
    "language": "typescript"
  }'`
  };

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">API REFERENCE</span>
          <h1 className="text-4xl font-extrabold text-white mt-1">Code Generation API</h1>
          <p className="text-slate-400 text-sm mt-2">Generate, explain, refactor, and write unit tests across 30+ programming languages.</p>
        </div>

        {/* Endpoint Detail */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-lg">POST</span>
            <code className="text-purple-300 font-mono text-sm">https://api.novamind.ai/v1/code/generate</code>
          </div>

          {/* Request Body Table */}
          <h3 className="font-bold text-white text-lg">Request Body Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-purple-900/40 text-purple-400 font-mono">
                  <th className="py-3 px-4">PARAMETER</th>
                  <th className="py-3 px-4">TYPE</th>
                  <th className="py-3 px-4">REQUIRED</th>
                  <th className="py-3 px-4">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900/20 text-slate-300">
                <tr><td className="py-3 px-4 font-mono text-purple-300">model</td><td className="py-3 px-4 font-mono">string</td><td className="py-3 px-4 text-emerald-400">Yes</td><td className="py-3 px-4">ID of the code model (e.g. <code>nova-coder-3</code>)</td></tr>
                <tr><td className="py-3 px-4 font-mono text-purple-300">prompt</td><td className="py-3 px-4 font-mono">string</td><td className="py-3 px-4 text-emerald-400">Yes</td><td className="py-3 px-4">Natural language instruction or docstring specification</td></tr>
                <tr><td className="py-3 px-4 font-mono text-purple-300">language</td><td className="py-3 px-4 font-mono">string</td><td className="py-3 px-4 text-slate-500">No</td><td className="py-3 px-4">Target language override (default: autodetect)</td></tr>
                <tr><td className="py-3 px-4 font-mono text-purple-300">temperature</td><td className="py-3 px-4 font-mono">float</td><td className="py-3 px-4 text-slate-500">No</td><td className="py-3 px-4">Sampling temperature between 0.0 and 1.0 (default 0.1)</td></tr>
              </tbody>
            </table>
          </div>

          {/* Code Example */}
          <div className="pt-4">
            <div className="flex justify-between items-center bg-[#050511] px-4 py-2 rounded-t-xl border-t border-x border-purple-900/40">
              <span className="text-xs font-mono text-purple-400">Code Example</span>
              <div className="flex gap-2">
                {(['python', 'node', 'curl'] as const).map(l => (
                  <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded text-xs font-mono uppercase ${lang === l ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-purple-900/30'}`}>{l}</button>
                ))}
              </div>
            </div>
            <pre className="bg-[#050511] border border-purple-900/40 rounded-b-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{codeSnippets[lang]}</code>
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
