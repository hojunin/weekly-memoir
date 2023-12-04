import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    const { rows, rowCount } = await sql`
      SELECT id, user_name, phone_number
      FROM public.User
      WHERE id = ${userId};
    `;

    if (rowCount === 0) {
      throw new Error('유저 정보가 없습니다.');
    }

    return NextResponse.json({ user: rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { user_name, phone_number, email } = await request.json();

    // User 테이블에 데이터 삽입
    const result = await sql`
      INSERT INTO public.User (user_name, phone_number, email)
      VALUES (${user_name}, ${phone_number}, ${email})
      RETURNING id, user_name, phone_number;
    `;

    return NextResponse.json({ user: 'TEST' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
