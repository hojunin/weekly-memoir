import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE public.User(
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        phone_number VARCHAR(11),
        email VARCHAR(255) NOT NULL,
        kakao_id VARCHAR(255),
        UNIQUE (user_name),
        UNIQUE (phone_number),
        UNIQUE (email)
        );
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
