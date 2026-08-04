import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const keys = await prisma.aPIKey.findMany({ select: { id: true, userEmail: true, active: true, createdAt: true } });
    return NextResponse.json(keys);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newKey = await prisma.aPIKey.create({
      data: {
        key: `nm_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`,
        userEmail: body.email || 'developer@novamind.ai',
      },
    });
    return NextResponse.json(newKey, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
