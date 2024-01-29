import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const resend = new Resend("re_KSwzYVdd_7ujkdPZET4eqzMDYM3d5NzSc");

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "juan.bazurto@mail.escuelaing.edu.co",
        subject: subject,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
