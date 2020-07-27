const express = require('express');
const router = express.Router();
const clienteSLCtrl = require('../controllers/clienteSL.controller');

 
router.get('/', clienteSLCtrl.list);
router.get('/:id', clienteSLCtrl.get);
router.post('/', clienteSLCtrl.create);
router.put('/:id', clienteSLCtrl.update);
router.delete('/:id', clienteSLCtrl.remove);

module.exports = router;