const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
datosProducto = [];
vista = "";

router.post("/", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  });
  
  async function sendMail(user, callback) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port:25,
      auth: {
        user: 'elorenzo1097@gmail.com',
        pass: '123,Rodolfo,123'
      },
      tls:{
          rejectUnauthorized:false
      }
    });

    let mailOptions = {
        
        from: `${user.email}<elorenzo1097@gmail.com>`, // sender address
        to: 'elorenzo1097@gmail.com', // list of receivers
        subject: "Comentario Cliente",
        html: `
        <img style="width: 120px" src="https://scontent.flim4-2.fna.fbcdn.net/v/t1.0-9/83231583_180992963270810_5698832864854933504_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=2z0fjvkrylgAX_YYF8s&_nc_ht=scontent.flim4-2.fna&oh=8b41c662bf937e6219f596ccae4429b6&oe=5F3FB9D3">
        <h1 style="text-align: center">📧✔️ Comentario Cliente ${user.email} ✔️📧</h1>
        <p>El cliente ${user.nombre} envió la siguiente informacion</p>
        <p>
            Numero de celular o telefono: ${user.celular}  <br>
            Comentario: <br>
            ${user.mensaje} 
        </p>
        <p>
        Contactenos <br>
        Celular: 964050503 <br>
        Ubicación: Paseo la breña N° 527 - Huancayo <br>
        correo: <span class="text-primary">chifachaufan@gmail.com</span>
        </p>
        <p>Los esperamos en Chifa Chaufan.</p>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
    datosProducto = [];
    info = [];
    vista = "";
  }

  module.exports = router;
