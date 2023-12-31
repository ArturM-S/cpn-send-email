const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Add this for parsing form data

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false })); // Parse form data


app.post('/send-email', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cpnprotecao@gmail.com',
      pass: 'euvf faez jltm uzah'
    }
  });

  const mailOptions = {
    from: "cpnprotecao@gmail.com",
    to: "cpnprotecao@gmail.com",
    subject: "Nova mensagem do site",
    text: "Nome: " + req.body.name + "\n" +
          "Email: " + req.body.email + "\n" +
          "Mensagem: " + req.body.message + "\n" +
          "Telefone: " + req.body.phone + "\n",
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
