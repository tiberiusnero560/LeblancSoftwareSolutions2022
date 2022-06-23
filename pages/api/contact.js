const sgMail = require('@sendgrid/mail')

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  export default async (req, res) => {    
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  const msg = {
    to: 'kyle.leblanc88@gmail.com', // Change to your recipient
    from: 'kyle_leblanc16@hotmail.com', // Change to your verified sender
    subject: ${req.body.subject},
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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