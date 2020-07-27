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
  
    for (const pro of user.productos) {
        let subtotal = pro.cantidad * pro.precioUnidad
        vista = vista + 
        `   <tr>
                <td style="text-align: center"><img style="width:100px" src="${pro.imagen}"></td>
                <td style="text-align: center">${pro.cantidad}</td>
                <td style="text-align: center">${pro.nombre}</td>
                <td style="text-align: center">${pro.precioUnidad}</td>
                <td style="text-align: center">${subtotal}</td>
            </tr>
        `;         
    }

    let mailOptions = {
        
        from: 'ChifaChauFan<elorenzo1097@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Compra realizada",
        html: `
        <img style="width: 120px" src="https://scontent.flim4-2.fna.fbcdn.net/v/t1.0-9/83231583_180992963270810_5698832864854933504_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=2z0fjvkrylgAX_YYF8s&_nc_ht=scontent.flim4-2.fna&oh=8b41c662bf937e6219f596ccae4429b6&oe=5F3FB9D3">
        <h1 style="text-align: center">🍲🍽️ Su reserva a sido concretada 🍽️🍲</h1>
        <p>Hola ${user.name}</p>
        <p>
            ¡Gracias por tu pedido! <br>
            En estos momentos tu reserva sea completetado, gracias por elegir Chifa Chau Fan.<br>
            <strong>Fecha y Hora de Registro:</strong><br> ${user.fechaRegistro}
        </p>
        <table class="text-uppercase">
        <thead>
        <tr>
            <th colspan="2">DETALLE DE RESERVA</th>
        </tr>
        <tr>
            <td>
            <strong>Fecha de Reserva</strong:>&nbsp; ${user.fecha} <br>
            <strong>De:</strong>&nbsp;${user.horaInicio}&nbsp;a&nbsp;${user.horaFin}
            </td>
            <td>
            <strong>Mesa</strong>: ${user.mesa}
            </td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td style="text-align: center">Imagen</td>
            <td style="text-align: center">Cantidad</td>
            <td style="text-align: center">Producto</td>
            <td style="text-align: center">Precio Unitario</td>
            <td style="text-align: center">Sub Total</td>
        </tr>
        `+ vista +
        `
        </tbody>
        <tfoot>
        <tr>
            <th colspan="2"></th>
            <th colspan="2">Sub total</th>
            <td style="text-align: center" class="text-danger">${user.subtotal}</td>
        </tr>
        <tr>
            <th colspan="2"></th>
            <th colspan="2">Descuento</th>
            <td style="text-align: center">${user.descuento}</td>
        </tr>
        <tr class="text-danger text-bold">
            <th colspan="2"></th>
            <th colspan="2">Total</th>
            <td style="text-align: center">${user.total}</td>
        </tr>
        </tfoot>
        </table>
        <img src="http://206.189.173.158/static/qrs/${user.qrcode}.png" title="${user.qrcode}" >
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
