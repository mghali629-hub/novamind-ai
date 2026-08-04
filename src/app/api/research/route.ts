import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const papers = await prisma.researchPaper.findMany({ orderBy: { publishedAt: 'desc' } });
    return NextResponse.json({ success: true, papers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
