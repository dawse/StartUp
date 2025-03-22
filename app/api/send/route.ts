import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from './EmailTemplate';

const resend =new Resend("re_A6aSvgey_PVj6fWxwxofhR5T2n8RSHsYm");
export async function POST(req: Request) {
  try {
    const { fullName, email, subject, phone, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Dawssen <onboarding@resend.dev>',
      to: ['dawssen16@gmail.com'],
      subject: subject || 'No Subject',
      react: EmailTemplate({ fullName, email, phone, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
