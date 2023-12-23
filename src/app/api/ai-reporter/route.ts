import { numTokensFromMessages } from '@/utils/ai';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('id');
  const year_week = searchParams.get('year_week');

  if (!user_id || !year_week) {
    return NextResponse.json(
      { messages: '파라미터가 이상합니다.' },
      { status: 500 },
    );
  }

  try {
    const result = await sql`
        SELECT 
        Memoir.id,
        Memoir.title,
        Memoir.description,
        Memoir.year_week,
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
              Memoir.type = public.Category.id
        ) AS type
        FROM 
          Memoir
        WHERE 
          Memoir.owner = ${user_id}
        AND Memoir.year_week=${year_week};
      `;

    const raw_memoirData = result.rows
      .map((row) => {
        return `${row.type.title} 회고 - 제목:${row.title} || 내용 : ${row.description} `;
      })
      .join('|*|*|');
    const [year, week] = year_week.split('-');

    const payload = {
      messages: [
        {
          role: 'system',
          content: `
            You're a personal assistant who writes weekly reports based on retrospective notes from clients.
The notes are divided into sections, separated by "|*|*|", each containing a specific keyword.
Use the style of the report. answer me with Korean.

The format looks like this. must keep this format.

"
in this week, 

1. What I did: 

2. Feelings :

3. Key words : 
"
            `,
        },
        {
          role: 'user',
          content: `${year}년 ${week}주차 회고록 데이터 : ${raw_memoirData}`,
        },
      ],
      model: 'gpt-3.5-turbo-0613',
    };
    const completion = await openai.chat.completions.create(payload);
    const tokens = numTokensFromMessages(payload.messages, payload.model);

    return NextResponse.json(
      { result: completion.choices[0], tokens: tokens, raw: raw_memoirData },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
