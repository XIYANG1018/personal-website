// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const body = await req.json();
  const { email, subject, message, name } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['pkuyangxi@163.com', email],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>New message submitted from {name} {email}:</p>
        <p>{message}</p>
      </>),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
