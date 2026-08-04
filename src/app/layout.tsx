import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://novamind.ai'),
  title: {
    default: 'NovaMind AI | Next-Gen Multimodal LLMs & API Platform',
    template: '%s | NovaMind AI',
  },
  description: 'Enterprise AI inference API, 1M context multimodal LLMs, high-throughput code generation, and Speculative RAG research.',
  keywords: ['Artificial Intelligence', 'LLM API', 'Multimodal AI', 'RAG Research', 'Code Generation', 'AI Playground'],
  openGraph: {
    title: 'NovaMind AI | Enterprise LLMs & Neural API',
    description: 'High-throughput LLM APIs with 1M context windows and sub-50ms latency.',
    url: 'https://novamind.ai',
    siteName: 'NovaMind AI Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaMind Multimodal AI',
    description: 'Enterprise AI inference platform and frontier research.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070913] text-slate-100 antialiased selection:bg-violet-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
