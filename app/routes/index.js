var express = require('express');
var router = express.Router();

const categoriaRouter = require('./categoria.router');
const clienteRouter = require('./cliente.router'); 
const clienteSLRouter = require('./clienteSL.router'); 
const mesaRouter = require('./mesa.router');
const productoRouter = require('./producto.router');
const ventaRouter = require('./venta.router');

//aws
const awsRouter = require('./aws.router');
//sendEmail
const email = require('./enviarMensaje.router');
const envioToken = require('./enviarToken.router');
const envioComentario = require('./enviarComentario.router');
const codigoqr = require('./qr.router')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chaufan' });
});

router.use('/categorias', categoriaRouter);
router.use('/clientes', clienteRouter);
router.use('/clienteSLs', clienteSLRouter);
router.use('/mesas', mesaRouter);
router.use('/productos', productoRouter);
router.use('/ventas', ventaRouter);

//aws
router.use('/upload',awsRouter);
//mail
router.use('/email',email);
router.use('/token',envioToken);
router.use('/codigoqr',codigoqr);
router.use('/comentario',envioComentario);
module.exports = router;
