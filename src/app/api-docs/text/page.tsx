'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function ApiDocsTextPage() {
  const [stream, setStream] = useState(true);

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">API REFERENCE</span>
          <h1 className="text-4xl font-extrabold text-white mt-1">Text Generation API</h1>
          <p className="text-slate-400 text-sm mt-2">Chat completions, structured outputs, JSON mode, and real-time Server-Sent Events (SSE) streaming.</p>
        </div>

        {/* Endpoint Detail */}
        <div className="bg-[#0d0d25] border border-purple-900/40 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-lg">POST</span>
            <code className="text-purple-300 font-mono text-sm">https://api.novamind.ai/v1/chat/completions</code>
          </div>

          <h3 className="font-bold text-white text-lg">Message Schema</h3>
          <div className="bg-[#050511] border border-purple-900/40 rounded-2xl p-4 font-mono text-xs text-slate-300 space-y-2">
            <div><span className="text-purple-400">role:</span> <span className="text-emerald-400">"system" | "user" | "assistant"</span></div>
            <div><span className="text-purple-400">content:</span> <span className="text-[#e8e8ff]">"Message text or array of multimodal parts"</span></div>
          </div>

          {/* SSE Toggle Example */}
          <div className="flex justify-between items-center bg-[#050511] px-4 py-3 rounded-t-xl border-t border-x border-purple-900/40">
            <span className="text-xs font-mono text-purple-400">Python Example (Streaming: {stream ? 'Enabled' : 'Disabled'})</span>
            <button onClick={() => setStream(!stream)} className="text-xs bg-purple-600 px-3 py-1 rounded font-mono text-white">
              Toggle Stream Mode
            </button>
          </div>
          <pre className="bg-[#050511] border border-purple-900/40 rounded-b-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
            <code>{`import novamind

client = novamind.Client()
response = client.chat.completions.create(
    model="nova-3-ultra",
    messages=[
        {"role": "system", "content": "You are an expert AI research assistant."},
        {"role": "user", "content": "Explain Mixture of Experts (MoE) architecture."}
    ],
    stream=${stream ? 'True' : 'False'}
)
${stream ? `for chunk in response:\n    print(chunk.choices[0].delta.content, end="")` : `print(response.choices[0].message.content)`}`}</code>
          </pre>
        </div>
      </main>
      <Footer />
    </div>
  );
}
