import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category_id = searchParams.get('id');

  try {
    const result = await sql`
      SELECT * FROM public.Category
      WHERE id = ${category_id}
    `;

    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();

    const result = await sql`
      INSERT INTO public.Category (title)
      VALUES (${title})
      RETURNING id, title;
    `;

    return NextResponse.json({ category: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
