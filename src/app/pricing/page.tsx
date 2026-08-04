'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    { name: 'DEVELOPER', price: annual ? '$29' : '$39', period: '/month', desc: 'For solo hackers & side projects', features: ['1M Tokens included/mo', 'Access to Nova-1 Base', 'Rate limit: 60 RPM', 'Community Discord support'], color: 'border-slate-800' },
    { name: 'PRO ENGINE', price: annual ? '$149' : '$179', period: '/month', desc: 'For high-growth startups & scaleups', features: ['20M Tokens included/mo', 'Access to Nova-3 Ultra & Vision', 'Rate limit: 500 RPM', 'Fine-tuning API access', 'Dedicated Slack channel', '99.9% Uptime SLA'], color: 'border-purple-500', badge: 'MOST POPULAR' },
    { name: 'ENTERPRISE', price: 'Custom', period: '', desc: 'For Fortune 500 & custom deployments', features: ['Unlimited token volume', 'VPC & On-Premises deployment', 'Zero data retention guarantee', 'Custom fine-tuned weights', '24/7 Phone & SLA support'], color: 'border-slate-800' },
  ];

  return (
    <div className="min-h-screen bg-[#050511] text-[#e8e8ff] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase bg-purple-900/30 border border-purple-700/50 px-4 py-1.5 rounded-full">TRANSPARENT PRICING</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-4">Scalable Intelligence Pricing</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Pay for what you use or choose a predictable monthly tier. Zero hidden fees.</p>
          
          {/* Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm ${!annual ? 'text-white font-bold' : 'text-slate-400'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full transition-colors relative ${annual ? 'bg-purple-600' : 'bg-slate-800'}`}>
              <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white font-bold' : 'text-slate-400'}`}>Annual <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full">Save 20%</span></span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((p, i) => (
            <div key={i} className={`bg-[#0d0d25] border-2 ${p.color} rounded-3xl p-8 flex flex-col justify-between relative`}>
              {p.badge && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">{p.badge}</span>}
              <div>
                <h3 className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-slate-400 text-sm">{p.period}</span>
                </div>
                <p className="text-slate-400 text-xs mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-purple-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${i === 1 ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'border border-slate-700 hover:border-purple-500 text-slate-200'}`}>
                {i === 2 ? 'Contact Sales' : 'Get Started Now'}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
