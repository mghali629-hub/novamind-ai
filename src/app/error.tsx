'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-mono">
      <div className="text-4xl text-rose-500 font-bold mb-3">INFERENCE_EXCEPTION</div>
      <h2 className="text-xl font-bold text-white mb-2 font-sans">Neural Inference Interrupted</h2>
      <p className="text-slate-400 text-xs max-w-md mb-6 font-sans">
        An unhandled exception occurred in the GPU cluster inference gateway.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs font-sans rounded-xl transition-colors"
      >
        Re-initialize Inference Loop
      </button>
    </div>
  );
}
