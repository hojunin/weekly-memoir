import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('id');
  const type = searchParams.get('type');
  const year_week = searchParams.get('year_week');

  try {
    let params = [userId];
    let query = `
        SELECT Memoir.id, Memoir.title, Memoir.description, Memoir.type, Memoir.year_week,
               jsonb_build_object(
                 'id', public.User.id,
                 'user_name', public.User.user_name,
                 'email', public.User.email
               ) AS owner
        FROM Memoir
        JOIN public.User ON Memoir.owner = public.User.id
        WHERE Memoir.owner = $1
      `;

    if (type) {
      query += ` AND Memoir.type=$2`;
      params.push(type);
    }

    if (year_week) {
      query += ` AND Memoir.year_week=$2`;
      params.push(year_week);
    }

    const result = await sql.query(query, params);

    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
