import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const memoirId = searchParams.get('id');

  try {
    const result = await sql`
    SELECT
    Memoir.id,
    Memoir.title,
    Memoir.description,
    (
      SELECT
          jsonb_build_object(
              'id', public.User.id,
              'user_name', public.User.user_name,
              'email', public.User.email
          )
      FROM
          public.User
      WHERE
          Memoir.owner = public.User.id
    ) AS owner,
    (
      SELECT
          jsonb_build_object(
              'id', public.Category.id,
              'title', public.Category.title,
              'placeholder', public.Category.placeholder
          )
      FROM
          public.Category
      WHERE
          Memoir.owner = public.Category.id
    ) AS type
    FROM
        Memoir
    WHERE
        Memoir.id = ${memoirId};
      `;

    return NextResponse.json({ result: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await sql`INSERT INTO Memoir (
      title, description, year_week, type, owner) 
      VALUES (${body.title}, ${body.description}, ${body.year_week}, ${body.type} , ${body.user_id});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const memoirs = await sql`SELECT * FROM Memoir;`;
  return NextResponse.json({ memoirs }, { status: 200 });
}

export async function PATCH(request: Request) {
  const body = await request.json();

  try {
    const response = await sql`
      UPDATE public.Memoir 
      SET 
        title = ${body.title}, 
        description = ${body.description}
      WHERE 
        id = ${body.id};
    `;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
