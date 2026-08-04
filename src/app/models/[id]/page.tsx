import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const models = await prisma.aIModel.findMany({ select: { id: true } });
  return models.map((m) => ({ id: String(m.id) }));
}

export default async function AIModelDetailPage({ params }: { params: { id: string } }) {
  const model = await prisma.aIModel.findUnique({ where: { id: Number(params.id) } });
  if (!model) notFound();

  const benchmarks = [
    { name: 'MMLU (5-shot)', score: '89.7%', rank: '#1' },
    { name: 'HumanEval', score: '91.2%', rank: '#2' },
    { name: 'MATH', score: '73.6%', rank: '#1' },
    { name: 'GSM8K', score: '96.3%', rank: '#1' },
    { name: 'HellaSwag', score: '95.3%', rank: '#2' },
    { name: 'TruthfulQA', score: '78.4%', rank: '#1' },
  ];

  const useCases = [
    { title: 'Code Generation', desc: 'Write, debug, and review code in 40+ languages', icon: '💻' },
    { title: 'Document Analysis', desc: 'Extract insights from complex documents instantly', icon: '📄' },
    { title: 'Multimodal Understanding', desc: 'Process images, charts, and visual data', icon: '🎨' },
    { title: 'Reasoning & Math', desc: 'Solve complex mathematical and logical problems', icon: '🧮' },
    { title: 'Language Translation', desc: 'Translate with cultural nuance across 95 languages', icon: '🌐' },
    { title: 'Content Creation', desc: 'Generate high-quality long-form creative content', icon: '✍️' },
  ];

  const pricingTiers = [
    { name: 'Input', price: '$0.003', unit: 'per 1K tokens' },
    { name: 'Output', price: '$0.012', unit: 'per 1K tokens' },
    { name: 'Context', price: '$0.001', unit: 'per 1K tokens (cached)' },
  ];

  return (
    <main style={{ background: '#050511', minHeight: '100vh', color: '#e8e8ff', fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <header style={{ background: 'linear-gradient(135deg, #0a0a2e 0%, #050511 100%)', padding: '120px 5% 80px', borderBottom: '1px solid rgba(139,92,246,0.2)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/models" style={{ color: 'rgba(139,92,246,0.8)', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>← ALL MODELS</Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>PRODUCTION</span>
                <span style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', padding: '4px 14px', borderRadius: '20px', fontSize: '12px' }}>v{model.version}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', margin: '0 0 8px', background: 'linear-gradient(135deg, #e8e8ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {model.name}
              </h1>
              <p style={{ color: '#8888aa', fontSize: '1.05rem', maxWidth: '600px', lineHeight: '1.7' }}>{model.description}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/playground" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', letterSpacing: '1px' }}>
                TRY IN PLAYGROUND
              </Link>
              <a href="/docs/api-reference" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#e8e8ff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
                API DOCS
              </a>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 5%' }}>
        {/* Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
          {[
            { label: 'Context Window', value: model.contextWindow, icon: '📖', color: '#7c3aed' },
            { label: 'Tokens / Second', value: model.tokensPerSec, icon: '⚡', color: '#22d3ee' },
            { label: 'Model Version', value: model.version, icon: '🔖', color: '#f59e0b' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.color}33`, borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: '700', color: s.color, marginBottom: '6px' }}>{s.value}</div>
              <div style={{ color: '#8888aa', fontSize: '13px', letterSpacing: '1px' }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '40px' }}>
          <div>
            {/* Benchmarks */}
            <section style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '24px', color: '#e8e8ff' }}>📊 Benchmark Performance</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {benchmarks.map((b) => (
                  <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: '#8888aa', fontSize: '13px', width: '140px', flexShrink: 0 }}>{b.name}</span>
                    <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: b.score, background: 'linear-gradient(90deg, #7c3aed, #22d3ee)', borderRadius: '4px' }} />
                    </div>
                    <span style={{ fontWeight: '700', color: '#a78bfa', fontSize: '14px', width: '50px', textAlign: 'right' }}>{b.score}</span>
                    <span style={{ background: 'rgba(74,222,128,0.15)', color: '#4ade80', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>{b.rank}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: '#e8e8ff' }}>🚀 Use Cases</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {useCases.map((u) => (
                  <div key={u.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{u.icon}</span>
                    <h3 style={{ color: '#e8e8ff', fontWeight: '600', margin: '10px 0 6px', fontSize: '0.95rem' }}>{u.title}</h3>
                    <p style={{ color: '#8888aa', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{u.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Example */}
            <section style={{ background: '#0f0f20', borderRadius: '16px', border: '1px solid rgba(139,92,246,0.2)', overflow: 'hidden', marginBottom: '30px' }}>
              <div style={{ background: 'rgba(139,92,246,0.1)', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#a78bfa', fontSize: '13px', fontWeight: '600' }}>Quick Start</span>
                <span style={{ color: '#666', fontSize: '12px' }}>Python</span>
              </div>
              <pre style={{ margin: 0, padding: '24px', fontSize: '13px', color: '#a78bfa', lineHeight: '1.7', overflow: 'auto', fontFamily: "'Fira Code', monospace" }}>{`from novamind import NovaMindClient

client = NovaMindClient(api_key="your-api-key")

response = client.chat.complete(
    model="${model.name.toLowerCase().replace(/\s+/g, '-')}",
    messages=[
        {"role": "user", "content": "Hello, world!"}
    ],
    max_tokens=1000
)

print(response.choices[0].message.content)`}</pre>
            </section>
          </div>

          {/* Right: Pricing */}
          <div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '16px', padding: '28px', position: 'sticky', top: '100px' }}>
              <h3 style={{ color: '#e8e8ff', fontWeight: '700', marginBottom: '20px', fontSize: '1.1rem' }}>Pricing</h3>
              {pricingTiers.map((t) => (
                <div key={t.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <div style={{ color: '#e8e8ff', fontWeight: '600', fontSize: '14px' }}>{t.name}</div>
                    <div style={{ color: '#8888aa', fontSize: '12px' }}>{t.unit}</div>
                  </div>
                  <div style={{ color: '#a78bfa', fontWeight: '700', fontSize: '1.1rem' }}>{t.price}</div>
                </div>
              ))}
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/playground" style={{ display: 'block', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', letterSpacing: '1px' }}>
                  TRY FOR FREE
                </Link>
                <Link href="/pricing" style={{ display: 'block', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', textAlign: 'center', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px' }}>
                  VIEW ALL PLANS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
