import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json(
      { message: '유저 아이디가 존재하지 않아요' },
      { status: 500 },
    );
  }

  try {
    const memoirData = await sql`
        SELECT m.*, u.username as user_username
        FROM Memoir m
        INNER JOIN User u ON m.user = u.id
        WHERE m.user = ${userId};
      `;

    return NextResponse.json({ memoirData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('🚀 ~ file: route.ts:6 ~ POST ~ body:', body);

  try {
    // await sql`INSERT INTO Memoir (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Memoir;`;
  return NextResponse.json({ pets }, { status: 200 });
}
