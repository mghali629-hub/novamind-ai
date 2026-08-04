const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding NovaMind AI DB...');

  await prisma.aIModel.deleteMany();
  await prisma.aPIKey.deleteMany();
  await prisma.researchPaper.deleteMany();

  const models = [
    { name: 'NovaText-4 Ultra', version: 'v4.2.0', contextWindow: '1,000,000 Tokens', tokensPerSec: '180 t/s', description: 'Flagship multi-step reasoning LLM for long-context code & document synthesis.' },
    { name: 'NovaVision-3D', version: 'v3.1.0', contextWindow: '512,000 Tokens', tokensPerSec: '120 t/s', description: 'Multi-modal visual spatial understanding and 3D mesh rendering model.' },
    { name: 'NovaCode-70B', version: 'v2.5.0', contextWindow: '128,000 Tokens', tokensPerSec: '240 t/s', description: 'Fill-In-The-Middle autonomous programming and refactoring model.' }
  ];

  for (const m of models) {
    await prisma.aIModel.create({ data: m });
  }

  await prisma.aPIKey.createMany({
    data: [
      { key: 'nv_live_9984_8829_xkvp_2026', userEmail: 'developer@enterprise.com', active: true }
    ]
  });

  await prisma.researchPaper.createMany({
    data: [
      { slug: 'scaling-laws-moe-2026', title: 'Sub-Linear Scaling Laws for Mixture-of-Experts Foundation Models', authors: 'Dr. Evelyn Vance & Dr. Kaiji Chen', abstract: 'We demonstrate that sparsely-gated Mixture-of-Experts architectures achieve 4.2x compute efficiency over dense transformer baselines while scaling context length past 1,000,000 tokens.' }
    ]
  });

  console.log('NovaMind AI DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
