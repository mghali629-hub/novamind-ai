'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Architecture' },
    { href: '/about', label: 'AGI Mission' },
    { href: '/models', label: 'Models' },
    { href: '/playground', label: 'Console' },
    { href: '/solutions', label: 'Enterprise' },
    { href: '/pricing', label: 'Token Pricing' },
    { href: '/api-docs', label: 'Docs' },
    { href: '/api-docs/text', label: 'NovaText' },
    { href: '/api-docs/vision', label: 'NovaVision' },
    { href: '/api-docs/code', label: 'NovaCode' },
    { href: '/dashboard', label: 'API Keys' },
    { href: '/dashboard/usage', label: 'Usage' },
    { href: '/dashboard/billing', label: 'Billing' },
    { href: '/research', label: 'Research' },
    { href: '/customers', label: 'Case Studies' },
    { href: '/status', label: 'Cluster Uptime' },
    { href: '/blog', label: 'Engineering Blog' },
    { href: '/contact', label: 'API Key Request' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-xl border-b border-indigo-500/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-indigo-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">NovaMind AI</span>
            <span className="text-[9px] tracking-[0.2em] text-indigo-400 font-mono font-semibold uppercase block -mt-1">AGI Foundation Models</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-cyan-400 border-b-2 border-cyan-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/playground"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-lg shadow-indigo-500/20 transition-all shrink-0"
        >
          Launch Console
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-indigo-500/20 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 font-sans">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Bot className="w-5 h-5 text-indigo-400" /> NOVAMIND AI
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Multi-modal foundation LLMs with 1M+ token context windows and sub-50ms latency.
          </p>
        </div>
        <div className="font-sans">
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Foundation Models</h4>
          <ul className="space-y-2">
            <li><Link href="/models" className="hover:text-indigo-400">NovaText-4 Ultra</Link></li>
            <li><Link href="/models" className="hover:text-indigo-400">NovaVision-3D</Link></li>
            <li><Link href="/models" className="hover:text-indigo-400">NovaCode-70B</Link></li>
          </ul>
        </div>
        <div className="font-sans">
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Developer Docs</h4>
          <ul className="space-y-2">
            <li><Link href="/api-docs" className="hover:text-indigo-400">REST & Python SDK Specs</Link></li>
            <li><Link href="/dashboard" className="hover:text-indigo-400">API Key Management</Link></li>
            <li><Link href="/research" className="hover:text-indigo-400">Published Research Papers</Link></li>
          </ul>
        </div>
        <div className="font-sans">
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider">Enterprise API Desk</h4>
          <p className="text-slate-400">Dedicated H100 Cluster Reservations:</p>
          <p className="text-indigo-400 font-bold mt-1 text-sm">api@novamind.ai</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-cyan-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
