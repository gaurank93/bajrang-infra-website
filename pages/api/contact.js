export default function (req, res) {
    console.log(req.body)
    
    let nodemailer = require('nodemailer')
    const sgTransport = require('nodemailer-sendgrid-transport')
    const transporter = nodemailer.createTransport(sgTransport({
        auth: {
          api_key: "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"
        }
      }))
    const mailData = {
      from: 'no-reply@alvrio.io',
      to: "choudhary.niranjan2010@gmail.com",
      subject: `New Request From Bajrang Infra Website `,
      html:
        "name: " +
        req.body.name + "<br />"+
        "email: " +
        req.body.email + "<br />"+
        "Message: " +
        req.body.message,
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }