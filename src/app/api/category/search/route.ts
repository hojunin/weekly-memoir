import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// TODO 비슷한, 포함되는 것들을 모두 반환하도록 해야하나 지금은 일치하는 것만 찾도록 변경
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  try {
    const result = await sql`
        SELECT * FROM public.Category
        WHERE title = ${query}
      `;

    return NextResponse.json({ result: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
