
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Company: ${body.company}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'kyle.leblanc88@gmail.com',
    from: 'kyle_leblanc16@hotmail.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}