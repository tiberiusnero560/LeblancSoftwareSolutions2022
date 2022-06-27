import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {

  try {
    await sendgrid.send({
        to: "kyle.leblanc88@gmail.com", // Your email where you'll receive emails
        from: "kyle_leblanc16@hotmail.com", // your website email address here
        subject: `[Lead from website] : ${req.body.subject}`,
        text: `
        Name: ${req.body.fullname}
        Email: ${req.body.email}
        Company: ${req.body.company}
        Message: ${req.body.message}
        `,
        html: `
        <p>Name: ${req.body.fullname}</p>
        <p>Email: ${req.body.email}</p>
        <p>Company: ${req.body.company}</p>
        <p>Message: ${req.body.message}</p>
        `
        
    
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;