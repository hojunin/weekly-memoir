import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const kakao_id = searchParams.get('id');

    const { rows: users, rowCount } = await sql`
      SELECT * FROM public.User
      WHERE kakao_id = ${kakao_id};
    `;

    if (rowCount === 0) {
      return NextResponse.json(
        { result: { message: '사용자가 존재하지 않습니다.' } },
        { status: 404 },
      );
    }

    const targetUser = users[0];

    const { rows: categories } = await sql`
      SELECT *
      FROM public.category
      WHERE id in (
        SELECT category_id
        FROM public.user_category 
        WHERE user_id = ${targetUser.id}
      );
    `;

    return NextResponse.json(
      { result: { user: targetUser, categories } },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { user_name, thumbnail, kakao_id } = await request.json();

    const result = await sql`
      INSERT INTO public.User (user_name, thumbnail, kakao_id)
      VALUES (${user_name}, ${thumbnail}, ${kakao_id})
      RETURNING id, user_name;
    `;

    return NextResponse.json({ user: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
