import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { user_id, category_id } = await request.json();

    const result = await sql`
      INSERT INTO public.User_Category (user_id, category_id)
      VALUES (${user_id}, ${category_id})
      RETURNING id, user_id, category_id;
    `;

    return NextResponse.json({ user: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
