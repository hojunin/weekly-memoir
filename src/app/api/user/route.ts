import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    const { rows, rowCount } = await sql`
      SELECT * FROM public.User
      WHERE id = ${userId};
    `;

    if (rowCount === 0) {
      throw new Error('유저 정보가 없습니다.');
    }

    const { rows: categories } = await sql`
      SELECT *
      FROM public.category
      WHERE id in (
        SELECT category_id
        FROM public.user_category 
        WHERE user_id = ${userId}
      );
    `;

    return NextResponse.json(
      { result: { user: rows[0], categories } },
      { status: 200 },
    );
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
