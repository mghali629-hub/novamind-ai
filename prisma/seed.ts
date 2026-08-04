import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding NovaMind AI database...');

  await prisma.aIModel.deleteMany();
  await prisma.researchPaper.deleteMany();

  await prisma.aIModel.createMany({
    data: [
      {
        name: 'NovaMind Ultra 4.5',
        version: 'v4.5.1-multimodal',
        contextWindow: '1,048,576 Tokens',
        tokensPerSec: '185 tokens/sec',
        description: 'Frontier 1M context multimodal reasoning model with speculative RAG verification.',
      },
      {
        name: 'NovaCoder Pro v3',
        version: 'v3.2.0-code',
        contextWindow: '524,288 Tokens',
        tokensPerSec: '240 tokens/sec',
        description: 'Specialized code generation & automated refactoring model trained on multi-repo context.',
      },
    ],
  });

  await prisma.researchPaper.create({
    data: {
      title: 'Mitigating Hallucination in Multi-Hop RAG via Speculative Verification',
      slug: 'mitigating-hallucination-multi-hop-rag',
      authors: 'Dr. Evelyn Vance, Prof. Aris Thorne',
      abstract: 'We introduce Speculative Multi-Agent Verification (SMAV), reducing RAG hallucination rates to under 0.04%.',
      publishedAt: new Date('2026-07-15'),
    },
  });

  console.log('NovaMind AI database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
