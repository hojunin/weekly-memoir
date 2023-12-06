import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE public.Category(
        id SERIAL PRIMARY KEY,
        title varchar(255),
        UNIQUE (title)
        );
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
