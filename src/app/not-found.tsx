'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-mono">
      <div className="text-6xl font-black text-violet-500 mb-4 tracking-tighter">[404_MODEL_NOT_FOUND]</div>
      <h1 className="text-2xl font-bold text-white mb-2 font-sans">AI Model Endpoint Not Found</h1>
      <p className="text-slate-400 text-xs max-w-md mb-8 font-sans">
        The LLM inference route, RAG research paper, or API documentation endpoint could not be resolved by NovaMind neural router.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-xs font-sans transition-colors"
        >
          Return to Platform
        </Link>
        <Link
          href="/models"
          className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-violet-400 font-bold rounded-xl text-xs font-sans border border-slate-800 transition-colors"
        >
          Explore LLM Models
        </Link>
      </div>
    </div>
  );
}
