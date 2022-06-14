import sgMail from '@sendgrid/mail'


sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req, res) => {
  const { name, subject, company, content } = req.body
  const msg = {
    to: 'kyle.leblanc88@gmail.com',
    from: company,
    subject,
    name,
    text: content,
  };

  try {
    await sgMail.send(msg);
    res.json({"Email has been sent" })
    console.log("Email has been sent")
  } catch (error) {
    res.status(500).json({'Error sending email'})
  }
}