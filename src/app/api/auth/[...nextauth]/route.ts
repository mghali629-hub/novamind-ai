import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_nova_dev_4091',
      name: 'Dr. Evelyn Vance',
      email: 'e.vance@ai-labs.org',
      role: 'RESEARCHER',
      apiKey: 'nv_sk_prod_9918274610293847',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'nova_jwt_llm_991827',
      user: {
        id: 'usr_nova_dev_4091',
        email: body.email || 'developer@novamind.ai',
        tier: 'ENTERPRISE',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid API authorization request' }, { status: 400 });
  }
}
