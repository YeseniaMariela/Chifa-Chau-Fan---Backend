const express = require('express');
const router = express.Router();
const ventaCtrl = require('../controllers/venta.controller');

 
router.get('/', ventaCtrl.list);
router.get('/:id', ventaCtrl.get);
router.get('/app/:id', ventaCtrl.getApp);
router.post('/', ventaCtrl.create);
router.put('/updateStatus/:id', ventaCtrl.updateStatus);
router.put('/:id', ventaCtrl.update);
router.delete('/:id', ventaCtrl.remove);
router.get('/buscar/producto', ventaCtrl.buscarProducto);
module.exports = router;