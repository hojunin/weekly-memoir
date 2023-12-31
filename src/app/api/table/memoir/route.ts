import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS public.Memoir(
          id SERIAL PRIMARY KEY,
          title varchar(255),
          description varchar(255),
          owner INTEGER REFERENCES public.User(id)
        );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
