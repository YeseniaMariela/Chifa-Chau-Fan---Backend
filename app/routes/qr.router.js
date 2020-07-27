const QRcode = require('qrcode');
const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {

        const dato = req.body.codigo
        console.log(dato);
        // QRcode.toDataURL(dato.toString(), function(err, url){
        //     console.log(url);
            
        // });

        QRcode.toFile(`./res/qrs/${dato}.png`, dato.toString());

        res
          .status(200)
          .json({ok: 'ok'});

  });
module.exports = router;
