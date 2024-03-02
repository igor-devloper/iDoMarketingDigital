import  EmailTemplate from '../../../emails';
import { Resend } from 'resend';
import * as React from 'react';
import { NextApiResponse,NextApiRequest } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)
  const {name, number,serviceAds, serviceCreate, serviceSite } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'iDoMkt <onboarding@resend.dev>',
      to: ['wagnerigor9@gmail.com'],
      subject: "Novo Briefing",
      react: EmailTemplate({number, serviceAds,serviceCreate,serviceSite,name}) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}