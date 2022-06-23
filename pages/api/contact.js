const sgMail = require('@sendgrid/mail')

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  export default async (req, res) => {    
    const { name, email, subject, company, message } = req.body

  const msg = {
    to: 'kyle.leblanc88@gmail.com', 
    from: 'kyle_leblanc16@hotmail.com', 
    subject: `${subject}`,
    text: `${message}`,
    html: `<strong>${message}</strong>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      window.print('Email sent')
      res.statusCode = 200
    })
    .catch((error) => {
      console.error(error)
    })
}